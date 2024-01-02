class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(arr) {
    let pgArray = arr.filter((Movie) => Movie.rating == "PG");
    return pgArray;
  }
}
let a = new Movie("LEO", "SSS");
let b = new Movie("POKKIRI", "GREEN");
let c = new Movie("GHILI", "GREEN", "PG1");
let d = new Movie("PICHAIKARAN", "FIGHT CLUB", "PG3");
let e = new Movie("THAVASI", "THENANDAL");
console.log(Movie.getPG([a, b, c, d, e]));
