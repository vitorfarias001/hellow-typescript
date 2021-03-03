//strings
let names: string = 'Vitor'
console.log(names)

//numbers
let age : number = 22
//age  = 'Vitor'
age = 22.1
console.log(age)

//boolean
let possesHobbies : boolean  = false
//possesHobbies = 1
console.log(possesHobbies)


//Explicit Types
let myAge : number
myAge = 22
console.log(typeof myAge)
console.log(typeof myAge)

//array
let hobbies: any []= ['Cook , Games']
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100,200,300]
console.log(hobbies)

// tuples
let address :[string,number]= ["Maria Julia da luz",502]
console.log(address)

// Enums
enum color{
    red, //0
    green = 100, //1 
    gray = 10, //2 
    blue,
    yellow,
    black = 100
}
let myColor: color = color.green
console.log(myColor)
console.log(color.gray)
console.log(color.blue, color.yellow)
console.log(color.green , color.black)

// any

let car : any = 'Jaguar'
console.log(car)
car = {brand:'Jaguar', age: 2021}
 console.log(car)

 //functions
 function returnMyNames(): string{
     return names

 }

 console.log(returnMyNames)

 function sayHi(): void{
     console.log('Hi')
 }
 sayHi()

 //Functions as Types
function multiply(numA : number, numB: number): number {
    return numA * numB
}
console.log(multiply(4,7))

//function types 
let calculate 
calculate = sayHi
calculate()

calculate = multiply
console.log(calculate(5,6))

//objects
let user:{names: string,age :number}={
    names:'Vitor',
    age:22
}
console.log(user)

user = {
    age:22,
    names: 'Vitor'
}
console.log(user)