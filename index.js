/*
Description
Let's practice extracting data with map, filter. And sprinkle some timer magic, too.

Instructions
- Use this starting template, you'll find the data there => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
- As always, do not code your solution in CodeSandbox
Using the usual Users and Todo lists:
  - Prompt the user for a letter
  - Find all the users who's name contains the letter 
  - Say hi to those users in the console - but only 1 greeting every 2 seconds.
  - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

Tips
- Don't forget to clear interval once it's done running
- It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
- Keep your code separated into functions for easier readability later
*/

console.log("users: ", users);
console.log("todos: ", todos);

let letter = prompt("Give me a letter please!");

let letterUsers = users.filter((user) => user.name.includes(letter));

console.log(letterUsers);

let userNames = letterUsers.map((letterUser) => letterUser.name);

let index = 0;
let intervalId = setInterval(function () {
  console.log(`Hi ${userNames[index]}!`);
  index++;
  if (index === userNames.length) clearInterval(intervalId);
}, 2000);

let userId = Number(prompt("What is your id?"));

todos
  .filter((todo) => todo.userId === userId)
  .filter(function (todo) {
    if (!todo.completed) console.log(todo.title);
  });
