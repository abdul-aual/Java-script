var student = {name:"Md Abdul Aual", id:"CSE2301028137", phone:121323};
var student2 = {name:"Md Abdul Karim", id:23010281, phone:1323};

console.log(student.name); //call particular data member
console.log(student2.phone); //call particular data member

student2.phone=989732; //update particular data member from outside of the object
console.log(student2.phone);

console.log(student);
console.log(student2);