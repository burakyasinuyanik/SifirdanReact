const femaleUsers = ["Melda", "Kayra", "Ceren"];
const maleUsers = ["Metin", "Kemal", "Can"];
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixItems = [1, 2, 200, 100, 1000, 99, 3, 4, 5, 6, 7, 8, 9];


const users = "Melda,Kayra,Kemal,Can";
const usersStrToArray = users.split(",");
console.log(usersStrToArray);

const textInfo = "lorem ipsum dolor";
const textInfoToArray = textInfo.split(" ");
console.log(textInfoToArray);

// slice
console.log(items.slice(1));
console.log(items);
console.log(items.slice(1, 5) );

// includes
console.log("Kayra Var mi?", femaleUsers.includes("Kayra"));

// indexOf
console.log("Kayra nerde? :) ", femaleUsers.indexOf("Kayra"));
console.log("Ayla nerde? :) ", femaleUsers.indexOf("Ayla"));


console.log("mixItems Sorted:", mixItems.sort());
console.log("mixItems", mixItems); 

function compareNumbers(a, b) {
  return a - b;
}

mixItems.sort(compareNumbers);

console.log("mixItems Sorted with Function:", mixItems );

// toString
console.log(maleUsers.toString()); // metin/string 


console.log(
  items.join(' -> ')
);

// merge
// const allUsers = [maleUsers, femaleUsers]
// const allUsers = femaleUsers.concat(maleUsers)
// ES6
// femaleUsers.push(...maleUsers)
// console.log(femaleUsers)
const allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// const ile array olusturulduysa icine yeni bilgi eklenebilir mi?
allUsers.push("Lorem");
console.log(allUsers);

// copy?
let newUsers = allUsers;
newUsers.push("Ipsum");
console.log("newUsers", newUsers);
console.log("allUsers", allUsers);
// not yeni liste olusmadi..

newUsers = [...allUsers]
newUsers.push("Dolor")
console.log("newUsers", newUsers);
console.log("allUsers", allUsers);

newUsers = allUsers.slice();
newUsers.push("macOs");
console.log("newUsers", newUsers);
console.log("allUsers", allUsers);