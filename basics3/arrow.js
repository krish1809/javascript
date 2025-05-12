const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}// current context m this. lgate h 


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // context change kr diya isleyea output m sam ho jyega

// console.log(this); // broswer m {} nhi ayega because gloabal object windows h but normally node m chate time {} aayega

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // kisi function ke andr kaafi kuch milta h while just using this  
// }// but jb this.username kiya to undefined aayega, because it just used in object not in function

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // same isme bhi yahi hoga
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // arrow function , function keyword hta kr arrow lga do 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return just one line 

// const addTwo = (num1, num2) => ( num1 + num2 ) no need to use return

const addTwo = (num1, num2) => ({username: "hitesh"}) // when returning object parenthesis would be required


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()