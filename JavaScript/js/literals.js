let firstName = "buRak";
let lastName = 'yaSiN';
let training = `Template Literals JS`;
let age = 29;

let info = `${firstName} ${lastName}`;


info = `Merhaba ${firstName[0].toUpperCase()}${firstName.toLowerCase().slice(1)} ${lastName[0].toUpperCase()}${lastName.toLowerCase().slice(1)}, gelecek sene yasin ${age + 1}
Blok Yazi Bile Yazabiliriz..
`

console.log(`${firstName} ${lastName}`)
console.log(info)