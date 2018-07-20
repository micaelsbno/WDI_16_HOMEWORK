CREATE TABLE pokemons (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  image_url VARCHAR(400)
);

CREATE TABLE traits (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  description VARCHAR(400),
  pokemon_id INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemons (id) ON DELETE CASCADE
)

INSERT INTO pokemons (name, image_url) VALUES ('Squirtle', 'https://pm1.narvii.com/6060/df3c625dc629e8e76a18f8395ce36c7bb7bd2126_hq.jpg');

INSERT INTO traits (name, description, pokemon_id) VALUES ('Type', 'Water', 1);