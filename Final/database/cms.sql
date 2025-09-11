
CREATE TABLE IF NOT EXISTS USER ( first_n TEXT PRIMARY KEY NOT NULL, last_n TEXT NOT NULL, gender SELECT NOT NULL, age INTEGER NOT NULL, fpl SELECT NOT NULL, ides SELECT NOT NULL, muf SELECT NOT NULL, vc SELECT NOT NULL)

DELETE FROM USER;

INSERT INTO USER VALUES ('rogerman', 'rogers', 'Male', '22', 'Python', 'Visual Studio Code', 'React', 'Git');


-- first_n: req.body.first,
-- last_n: req.body.last,
-- gender: req.body.gender,
-- age: req.body.age,
-- fpl: req.body.fpl,
-- ides: req.body.ides,
-- muf: req.body.muf,
-- vc: req.body.vc,

-- 1. First name
-- 2. Last name
-- 3. Gender
-- 4. Age
-- 5. Programming Languages:
-- a. Select the language you prefer the most:
-- b. Choices: Python, JavaScript, Java, C++, and others.
-- 6. IDEs:
-- a. Select the IDE (Integrated Development Environment) you prefer the most:
-- b. Choices: Visual Studio Code, IntelliJ IDEA, Sublime Text, and others.
-- 7. Most frequently used Frameworks/Libraries
-- a. Select a framework or a library you use most frequently
-- b. Choices: React, Angular, Django, Express, and others.
-- 8. Version Control:
-- a. Select the version control system you use right now:
-- b. Choices: Git, SVN (Subversion), Mercurial, or Another.
-- Required Validations (both front-end and back-end)
-- 1. The age should not be less than 18.
-- 2. The first and last names should be between 5 and 15 characters in length.
-- Required Fields in Table
-- 1. First name
-- 2. Last name
-- 3. Age
-- 4. Programming Languages (or) IDEs (or) Frameworks/Libraries (or) Version Control (you
-- can choose)
-- Note: If you prefer, you can display more (or all) fields.
