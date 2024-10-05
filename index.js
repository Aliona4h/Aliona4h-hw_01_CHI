// =============================================================================================================================

console.log(
  "Завдання 1. Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while."
);

console.log("цикл for");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("цикл while");
let k = 1;
while (k < 10) {
  console.log(k);
  k++;
}

// ===============================================================================================================================
console.log(
  "Завдання 2. Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) довжиною 10 елементів.Вивести їх тип за допомогою typeof у консоль. Виведення здійсніть за допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while."
);

const newArray = ["Bob", 3, !Number, null, 4, true, "React", 6, "Node", 88n];

console.log("Завдання 2: метод forEach");
newArray.forEach((element) => console.log(typeof element));

console.log("Завдання 2: цикл for");
for (element of newArray) {
  console.log(typeof element);
}

console.log("Завдання 2: цикл while");
let index = 0;
while (index < newArray.length) {
  console.log(typeof newArray[index]);
  index++;
}

console.log("Завдання 2: цикл do while");
let elArr = 0;
do {
  console.log(typeof newArray[elArr]);
  elArr++;
} while (elArr < newArray.length);

// ======================================================================================================================================
console.log(
  "Завдання 3. Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]}) і використати метод filter, щоб вивести всіх, кому більше 20 років."
);

const students = [
  { name: "Jack", age: 40, pets: ["cat", "dog"] },
  { name: "Kate", age: 19, pets: ["cat", "dog"] },
  { name: "David", age: 20, pets: ["cat", "dog"] },
  { name: "Mark", age: 21, pets: ["cat", "dog"] },
  { name: "Alice", age: 22, pets: ["cat", "dog"] },
  { name: "Bob", age: 17, pets: ["cat", "dog"] },
  { name: "Lucy", age: 34, pets: ["cat", "dog"] },
];

const filteredStudents = students.filter((student) => student.age > 20);
console.log(filteredStudents);

// ========================================================================================================================================
console.log(
  "Завдання 4. За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину. Результат вивести у консоль."
);

const addedPet = students.map((student) => student.pets.push("hamster"));
console.log(students);

// ========================================================================================================================================
console.log(
  "Завдання 5. Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу (завдання знайти його в документації, посилання в описі до лекції). За допомогою splice вставити на 5-ту позицію слово 'answer'. За допомогою find знайти це слово і вивести його у консоль."
);

let newListArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// fill
newListArray.fill(42, 0, 10);
console.log(newListArray);

// splice
newListArray.splice(4, 0, "answer");

// found
const found = newListArray.find((element) => element === "answer");
console.log("Found word is:", found);

// ========================================================================================================================================
console.log(
  "Завдання 6. Створіть об'єкт із кількома ключами на ваш розсуд. І наведіть приклади використання keys, hasOwn, values."
);

const student = {
  name: "Tom ",
  surname: "Hamilton",
  age: 21,
  hobby: "racing",
  isAdult: true,
  email: "tom.hamilton@gmail.com",
};

// keys
const studentKey = Object.keys(student);
console.log(studentKey);

// hasOwn
const hasAge = Object.hasOwn(student, "age");
console.log(hasAge);

const hasLocation = Object.hasOwn(student, "location");
console.log(hasLocation);

// values

const studentValues = Object.values(student);
console.log(studentValues);

// ===============================================================================================================================
