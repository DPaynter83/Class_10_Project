/*
while loop
do..while
for loop
for....of loop ---> with arrays
for...in loop ==> objects
Object.keys()
Object.values()
Object.entries()







//for..in
/*
syntax:
for(let key of object){
object [key]
}

*/

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinHart@email.com"
};


// console.log(user.name);
 
for(let key in user){
    console.log(`${key} -> ${user[key]}`);//can not use .notation
    //user[key] = user[name] -> user[surname] -> user[age] -> user[email]
};
 









for(let i = 0; i < 10; i++){
    if(i === 4){
        break;
    };
    console.log(i);
};
 
 
//continue ---> skips
for(let i = 0; i < 10; i++){
    if(i === 4){
        continue;
    };
    console.log(i);
};
 