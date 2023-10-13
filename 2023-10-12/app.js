const persons2 = [
  {
    name: "Person 1",
    age: 47,
    occupation: "Occupation 1",
    hobbies: ["Hobby 1", "Hobby 2", "Hobby 3"],
  },
  {
    name: "Person 3",
    age: 18,
    occupation: "Occupation 3",
    hobbies: ["Hobby 1", "Hobby 6", "Hobby 6"],
  },
  {
    name: "Person 4",
    age: 51,
    occupation: "Occupation 4",
    hobbies: ["Hobby 2", "Hobby 2", "Hobby 3"],
  },
  {
    name: "Person 5",
    age: 66,
    occupation: "Occupation 5",
    hobbies: ["Nörgeln", "Maulen", "Kamera aus"],
  },
];

// Create a new array with all Hobbies of persons older than 40!
const hobbiesAlterSäcke = persons2
  .filter((person) => person.age > 60)
  .map((person) => person.hobbies)
  .flat();

console.log(hobbiesAlterSäcke);
