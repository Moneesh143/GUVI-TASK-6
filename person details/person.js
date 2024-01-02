class Candidate {
  constructor(
    personName,
    age,
    place,
    schooling,
    native,
    ugQualification,
    father,
    mother,
    nationality,
    gender,
    maritialStatus
  ) {
    this.name = personName;
    this.age = age;
    this.place = place;
    this.schooling = schooling;
    this.native = native;
    this.ugQualification = ugQualification;
    this.father = father;
    this.mother = mother;
    this.nationality = nationality;
    this.gender = gender;
    this.maritialStatus = maritialStatus;
  }
  teach() {
    console.log(this.name, "he is a good boy");
  }
}
const Candidate1 = new Candidate(
  "Moneesh",
  22,
  "Chennai",
  "SKV Hr School",
  "Ambur",
  "BE CSE",
  "Premkumar",
  "Sornadevi",
  "India",
  "Male",
  "Single"
);
console.log(Candidate1);
Candidate1.teach()
