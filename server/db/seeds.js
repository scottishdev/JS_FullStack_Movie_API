use moviesDb;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Star Wars Episode IV - A New Hope",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "25th May 1977",
    runtime: 121,
    crew: {
      director: "George Lucas",
      producer: "Gary Kutz"
    }
  },
  {
    title: "Star Wars: Episode V – The Empire Strikes Back",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "21th May 1980",
    runtime: 124,
    crew: {
      director: "Irvin Kershner",
      producer: "Gary Kutz"
    }
  },
  {
    title: "Star Wars: Episode VI – Return of the Jedi",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "25th May 1983",
    runtime: 132,
    crew: {
      director: "Richard Marquand",
      producer: "Howard Kazanjian"
    }
  },
  {
    title: "Star Wars: Episode I – The Phantom Menace",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "19th May 1999",
    runtime: 133,
    crew: {
      director: "George Lucas",
      producer: "Rick McCallum"
    }
  },
  {
    title: "Star Wars: Episode II – Attack of the Clones",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "12th May 2002",
    runtime: 142,
    crew: {
      director: "George Lucas",
      producer: "Rick McCallum"
    }
  },
  {
    title: "Star Wars: Episode III – Revenge of the Sith",
    Genre: "Science Fiction",
    rating: "U",
    release_date: "15th May 2005",
    runtime: 140,
    crew: {
      director: "George Lucas",
      producer: "Rick McCallum"
    }
  }
]);
