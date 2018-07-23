class Movie
  
  def self.select_ext(movie_title)
    HTTParty.get(
      "http://www.omdbapi.com/?t=#{movie_title}&apikey=2f6435d9"
      )
  end

  def self.select_id(movie_title)
    conn = PG.connect(dbname: 'movie_db')
    conn.prepare('find_movie', "SELECT imdbid FROM movies WHERE LOWER(title) = LOWER($1);")
    result = conn.exec_prepared("find_movie", [movie_title])
    conn.close
    return result
  end

  def self.select_info(movie_id)
    conn = PG.connect(dbname: 'movie_db')
    conn.prepare('select_info', "SELECT * FROM movies where imdbid = $1;")
    result = conn.exec_prepared("select_info", [movie_id])
    conn.close
    return result
  end

  def self.save(selected_movie)
    conn = PG.connect(dbname: 'movie_db')
    conn.prepare(
      "create_movie", 
      "INSERT INTO movies
      (title, director, genre, plot, poster, awards, imdbid, metascore, year)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);")
    result = conn.exec_prepared("create_movie", 
      [selected_movie['Title'], selected_movie['Director'], selected_movie['Genre'], selected_movie['Plot'], selected_movie['Poster'], selected_movie['Awards'], selected_movie['imdbID'] , selected_movie['Metascore'].to_i, selected_movie['Year'].to_i])
    conn.close
    return result
  end

  def self.search_ext(movie_title)
    HTTParty.get(
      "http://www.omdbapi.com/?s=#{movie_title}&apikey=2f6435d9"
      )
  end


end
