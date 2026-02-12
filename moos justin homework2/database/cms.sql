
CREATE TABLE IF NOT EXISTS USER ( email TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, semester TEXT NOT NULL, city TEXT, state TEXT NOT NULL );

DELETE FROM USER;

INSERT INTO USER VALUES ('billy@gmail.com', 'billy', 'denver', 'Colorado');