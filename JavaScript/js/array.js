const users = [999, 2999, 3999, false, true, null, [4, 5, 6], "Deniz", "Derya"];

console.log(users);
console.log("users.length", users.length);

const otherUsers = [];
console.log("otherUsers.length", otherUsers.length);

const tech = new Array(100);
console.log("tech.length", tech.length);
console.log("tech Arr:", tech);

const todo = new Array("item 1", "item 2");
console.log("todo", todo);

console.log("Type Bilgisi Nedir?", typeof(users));
console.log("{} Obj -> Type Bilgisi Nedir?", typeof( {} ));

console.log("Array misin :) ", Array.isArray(users));

// Bilgiye Erismek:
console.log( users[0], users[3], users[7] );

console.log( users[users.length -1] ) ;
console.log( users[users.length -2] );
console.log( users[6][1] );

users.push("Lorem");
console.log( users );
// Basa Eklemek:
users.unshift("Ilk Siraya Eklenen Oge");
console.log( users );

// Bilgiyi Degistirmek:
users[3] = "w4w354" ;
console.log( users );

// Bir Ogeyi Silmek:
// sondaki
const popItem = users.pop() ;// son ogeyi cikarir..
console.log( users );
console.log( popItem );

const firstItem = users.shift();
console.log( users );
console.log( firstItem );