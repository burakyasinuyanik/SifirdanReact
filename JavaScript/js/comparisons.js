const sysPassword = 123456; 

const userPasswordPrompt = "123456"; 

console.log("Sifre Dogru mu? ", sysPassword == userPasswordPrompt);
console.log("typeof", typeof(sysPassword) == typeof(userPasswordPrompt));
console.log("Sifre ve Veri Tipi Dogru mu? ", sysPassword === userPasswordPrompt);

const superUser = "admin"
console.log("normal kullanici mi?", superUser != "Ahmet");

const milenyum = 2000;

console.log("2000 yilindan buyuk mu? ", 2010 > milenyum);
console.log("1980 yilindan kucuk mu? milenyum dan", 1980 < milenyum);

const ageLimit = 18;
const userAge = 15;
console.log("kullanici sisteme girebilir mi 18+", userAge >= ageLimit);
console.log("kullanici sisteme girebilir mi? 18 Yasindan Kucuk Olanlar", userAge <= ageLimit);

const userName = "Burak";
const userPassword = 121231243;

console.log("User bilgisi 3 karakterden buyuk mu ve password var mi?", userName.length > 3 && userPassword);
console.log("User bilgisi 3 karakterden buyuk mu veya password var mi?", userName.length > 3 || userPassword);