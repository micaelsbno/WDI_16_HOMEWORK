CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  director VARCHAR(100),
  genre VARCHAR(100),
  plot VARCHAR(1200),
  poster VARCHAR(800),
  awards VARCHAR(100),
  imdbid VARCHAR(40),
  metascore INTEGER,
  year INTEGER
);