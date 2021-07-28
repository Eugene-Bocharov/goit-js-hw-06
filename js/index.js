import users from "./users.js";

console.log("--------------task-1--------------");

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log("--------------task-2--------------");
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log("--------------task-3--------------");

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log("--------------task-4--------------");

const getInactiveUsers = (users) =>
  users.filter((user) => user.isActive === false);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log("--------------task-5--------------");

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.log("--------------task-6--------------");

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log("--------------task-7--------------");

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

console.log("--------------task-8--------------");

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.log("--------------task-9--------------");

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((user, user2) => user.friends.length - user2.friends.length)
    .map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log("--------------task-10--------------");

const getSortedUniqueSkills = (users) =>
  users
    .reduce(
      (allSkills, user) => [
        ...allSkills,
        ...user.skills.filter((skill) => !allSkills.includes(skill)),
      ],
      []
    )
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
