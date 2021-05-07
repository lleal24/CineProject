CREATE TABLE IF NOT EXISTS roles(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    actor BOOLEAN,
    director BOOLEAN

);

CREATE TABLE IF NOT EXISTS personas(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre text NOT NULL CHECK (nombre <> ''),
    idrol integer REFERENCES roles(id) ON DELETE CASCADE

);
--ROLES -ROL ACTOR
INSERT INTO roles(actor, director)
    VALUES (true,false)
-- DIRECTOR
INSERT INTO roles(actor, director)
    VALUES (false,true)
--MIXTO
INSERT INTO roles(actor, director)
    VALUES (true,true)

INSERT INTO personas(nombre, idrol)
    VALUES ('Clint Eastwood', 3)

    