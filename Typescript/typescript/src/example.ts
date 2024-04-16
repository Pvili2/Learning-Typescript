//Object in TS
let bike : {brand: string, price:number} = {brand: 'kawasaki', price: 10}

let product1 = {title: "shirt", price: 20};
let product2 = {title: "pants"}

let products:{title: string, price?:number}[] = [product1, product2]; 

//console.log(products);  

//Functions in TS

function sayHI(name:string):void{
    console.log(`Hi ${name}`);
}

function calcAddition(a:number, b:number):number{

    return a+b;
}

const alma = calcAddition(5,4)

sayHI("Lajos");

//Functions challenge

const names:string[] = ["Lajos", "Bela", "John", "Kutya"];

function findName(name:string):boolean {

    return names.includes(name);
}

console.log(findName("Bela"));
console.log(findName("dbhs"));


//Optional and default parameters in functions

//optional
function CalculatePrice(price: number, discount?: number){

    return price - (discount || 0);
}
let priceAfterDiscount = CalculatePrice(4000);

console.log(priceAfterDiscount);

//default

function calculateScore(initialScore: number, penalty:number = 5):number{

    return initialScore - penalty;
}

calculateScore(10);


//rest parameter
function Sum(message:string,...numbers:number[]):string{

    return message + numbers.reduce((a,b)=>a+b, 0);
}

let result = Sum('The total is: ',1,2,3,4,5);

console.log(result);

//void return function

function LogMessage(message: string):void{
    console.log(message);
}

LogMessage("Valami");

//Function challenge

function ProcessInput(data : number | string):void{

    //type guard
    if(typeof data === "string"){
        console.log(data.toUpperCase());
    }else{
        console.log(data*2);
    }
}

ProcessInput(2);

//Object as a paratmeters in a function

function CreateEmployee({id}:{id:number}):{id:number;isActive: boolean}{

    return {id, isActive: id%2==0};
}

const first = CreateEmployee({id: 5});
const second = CreateEmployee({id: 6});

console.log(first, second);

//alternative

function CreateStudent(student : {id:number, name: string}):void{
    console.log(`Welcome to the course ${student.name}(${student.id})`);

}

const newStudent = {id: 5, name: "Janos"};

CreateStudent(newStudent)

CreateStudent({id: 6, name: "Bela"});

//function challenge 2

function ProcessData(input : string | number, config : {reverse: boolean} = {reverse: false}):string | number{

    if(typeof input === "number"){
        return input * input;
    }else{
        if(config.reverse){
            return input.split('').reverse().join('').toUpperCase();
        }else{
            return input.toUpperCase();
        }
    }
}

console.log(ProcessData("John", {reverse: true}));

// TS alias

type User = {
    id: number,
    name:string,
    isActive: boolean
}

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

  createUser(susan);

  //theme létrehozása vele (leggyakoribb használata)

  type Theme = "dark" | "light";

  let theme: Theme = "dark"

  //alias challenge

  type Employee = {
    id: number,
    name: string,
    department: string
  }

  type Manager = {
    id: number,
    name: string,
    employees : Employee[]
  }

  type Staff = Employee | Manager;

  function printStaffDetails (staff : Staff):void{

    if("employees" in staff){
        console.log(`The person is a manager of ${staff.employees.length} employees`);
    }else{
        console.log(`The person is an employee. Department: ${staff.department}`);
    }
  }

  const alice: Employee = {
    id:1,
    name: 'Alice',
    department: "otp"
   };
   
   const steve: Employee = {
    id: 2,
    name: 'Steve',
    department: "otp"
   };
   
   const bob: Manager = {
    id: 3,
    name: 'Bob',
    employees: [alice, steve],
   };  

   printStaffDetails(steve);

   //intersection type of union

type Book = { id: number; name: string; price: number };
const book1: Book = {
  id: 1,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

//adding a plus property to the Book type
const discountedBook: Book&{discount:number} = {
    id: 3,
    name: 'Valami konyv cim',
    price: 25,
    discount: 0.15
  };

  //interface in TS

  interface Books {
    readonly isbn: number, //readonly property
    title: string,
    author: string,
    genre?: string, //optional property
    //method
    printAuthor():void;
    printTitle(message: string):string;
    printSomething: (someValue: number) => number;
  }

  const deepWork: Books = {
    isbn: 123,
    title: "Deep work",
    author: 'John Doe',
    genre: "Self-help",
    printAuthor():void{
        console.log('Hi' + this.author)
    },
    printTitle(message: string):string {
        return `${this.title}, ${message}`
    },
        //first option
        /* printSomething: function(someValue) {
           return someValue * 2;
        } */
        //second option (arrow function)
       /*  printSomething: (someValue) =>{
            //in arrow function the this keyword is not working
            return someValue * 2;
        } */
        //third option
        printSomething(someValue){
            return someValue;
        }
  }


  deepWork.printTitle("Kurva jo konyv");

  //interface challenge

  interface Computer{
    readonly id: number,
    brand: string,
    ram: number,
    storage?: number,

    upgradeRam(improveNumber:number):number,
  }

  let myPc:Computer = {
    id: 1,
    brand: "Asus",
    ram:16,
    storage: 256,

    upgradeRam: function(improveNumber){
        this.ram += improveNumber;

        return this.ram;
    }
  } 

console.log(myPc.upgradeRam(10));

//interface merging / extend interfaces

interface Person{
    name:string,
    getDetails():string;
}

interface DogOwner{
    dogName: string,
    getDogDetails():string;
}

interface Person{
    age: number
}
//merge interfaces

const person:Person = {
    name: "John",
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    } 
}

const employee:Employees = {
    employeeId: 2,
    name: 'jane',
    age: 28,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.employeeId}`;
    }
}

//Az Employees interfész megvalósítja a Person minden property-ét és pluszban hozzáírja a sajátját
interface Employees extends Person{
    employeeId: number;
}

console.log(employee.getDetails());

interface Managers extends Person, DogOwner{
    managePeople():void;
}

const manager:Managers = {
    dogName: "Rex",
    name: 'jane',
    managePeople(){
        console.log("He manage people");
    },
    age: 28,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails(){
        return "Rex"
    }
}

//interface challenge
interface Person1{
    name: string
}

interface DogOwners extends Person1{
    dogName: string;
}

interface Manager1 extends Person1{
    managePeople():void,
    delegateTasks():void
}

function getEmployee():Person1 | DogOwners | Manager1{
    let random = Math.random();

    if(random < 0.333){
        return {
            name: "John"
        }
    }else {
        if(random < 0.6666){
            return {
                name:"Doe",
                dogName: "Rex"
            }
        }else{
            return {
                name: "John Doe",
                managePeople(){
                     console.log("I am manage people");
                },
                delegateTasks(){
                    console.log("I delegate tasks");
                }
            }
        }
    }
}
const employee1 : Person1 | Manager1 | DogOwners = getEmployee();
console.log(employee1);

//implement type guard
function IsManager(obj:Person1 | Manager1 | DogOwners):boolean{
    return 'managePeople' in obj; //we looking if we have a specific property in the obj that is only appear in the Manager1 interfaces
}

console.log(IsManager(employee1));
/* but its not working sadly 

if(IsManager(employee1)){
    console.log(employee1.managePeople()); //error
} */

function CorrectIsManager(obj:Person1 | Manager1 | DogOwners):obj is Manager1{
    return 'managePeople' in obj; //we looking if we have a specific property in the obj that is only appear in the Manager1 interfaces
}

//now its working
if(CorrectIsManager(employee1)){
    employee1.managePeople(); //error
}

//Tuples in TypeScript
//this is an array
let data:(string | number)[] = ['John',25 ]

//this array must be contain first a string and then a number. This is a Tuple
let anotherData: [string, number] = ['Something', 122]

//data with fix numbers

let date:[number, number, number] = [1,1,1]; 

//but we can add more data to the array
date.push(100);
console.log(date);

//to prevent it, we must setup readonly

let readonlyDate: readonly[number, number, number] = [1,1,1]; 

//function that returns fix length array

function getPerson():[string, number]{
    return ['doe', 10];
}

//Tuple with optional data

let optionalData: [string, number?] = ['John']; //['John',24] also works

//Enum in TypeScript

//basic enum declaration
enum ServerResponseStatus{
    Success = 200, // Success = 100
    Failed = 404,
    Error = "Error" // this will be any type
}

Object.values(ServerResponseStatus).forEach((value) =>{
    console.log(value);
})

interface ServerResponse{
    result : ServerResponseStatus,
    data: string[]
}

function getServerResponse():ServerResponse{
    return {
        result: ServerResponseStatus.Error, //enum value
        data: ['Johnny', 'Walker']
    }
}

const response:ServerResponse  = getServerResponse();
console.log(response);

//Enum challenge

enum UserRole{
    Admin, 
    Manager,
    Employee
}

type Users = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string]
}

function createUsers(obj: Users): Users{
    return obj;
}

const person1: Users = {
    id: 1,
    name: 'John',
    role: UserRole.Employee,
    contact: ['pvil@gmail.com', '06704674848']
}

let newUser = createUsers(person1);

console.log(newUser);

//how to tell the browser what type is the variable

let someValue:any= 'This is a string'

let strLength:number = (someValue as string).length;

console.log(strLength);

//with json

type Bird = {
    name: string,
}

let birdString = '{"name": "Eagle"}';
let birdString2 = '{"name": "Hawk"}';

//if we parse to JSON the type is any, which is not good for us
let birdObj = JSON.parse(birdString);

//but if we use the "as" keyword: the type is JSON, which is good for us (we can use JSON functions)

let birdObjCorrect = JSON.parse(birdString) as JSON;

enum Status {
    Pending = 'Pending',
    Declined = 'Declined'
}

type User2 = {
    name: string,
    status: Status
}

//define the type to Enum
const statusValue = "Pending" as Status;

const userInstance = {name: "Valmai", status: statusValue}

//the unknown type

let unknownValue:unknown = "hello world";

//we have no functions in this type just as any, we must check what is the type of the variable

if(typeof unknownValue === "string"){
    unknownValue = unknownValue.toUpperCase();
}

//in try-catch block, the error type is unknow

function throwError(){
    let random = Math.random();

    if(random < 0.5){
        throw Error('Error!');
    }else{
        throw 'something';
    }
}

try {
    throwError();
} catch (error) {
    if(error instanceof Error){ //we check that the error is an instance of the Error class
        console.log(error.message);
    }
}

//type never

//we cannot assign it to a variable
//let value:never = 0; -> error

type ColorTheme = "light" | "dark"

function CheckTheme(theme: ColorTheme):void{
    if (theme === "light") {
        console.log('light theme')
        return;
    }

    if (theme === "dark") {
        console.log('dark theme')
        return;
    }
    // we check all options that is possible, so if we try to assign the theme in here, the type is never, because the code never reach here
    theme; //type never
}

//When we use never?

enum Color{
    Red,
    Blue
}

function getColorName(color: Color){
    switch (color) {
        case Color.Blue:
            return 'blue'
        case Color.Red:
            return 'red'
        default:
        //build time handle (correct way)
        let unexpectedColor: never = color;
        //runtime handle
        throw new Error('Unexpected color value: '+color);
    }
}

//Module in TS

//TS automatically use global scope, so we cant use the same variable names
//const random = 5 -> error because we have a variable called random in actions.ts

//to fixed, export the variable from actions.ts and import for here

//now we access the variable
//console.log(something)

//or we add the moduleDetection = "force" property to the tsconfig.json

//after, we dont have name collision
const something = 'valmai';

//Type guard in TS

//type guard challenge 1
type TypeValue = string | number |boolean;

const random1 = Math.random();

let value = random1 < 0.33 ? "Hello" : random1 < 0.66 ? 123.456 : true; 

function checkValue(val : TypeValue){
    if (typeof val === "string") {
        return val.toLowerCase();
    }

    if (typeof val === "number") {
       return val.toFixed(2)
    }else{
        return "Boolean: " + val;
    }
}

console.log(checkValue(value));

//type guard challenge 2

type Dog = {type: 'dog', name: string, bark: ()=> void}
type Cat = {type: 'cat', name: string, meow: ()=> void}
type Animal = Dog | Cat;

function makeSound(animal : Animal){
   /*  if (animal.type === "dog") {
        animal.bark();
    }else{
        animal.meow();
    } */

    //another way
    if("bark" in animal){
        animal.bark();
    }else{
        animal.meow();
    }
}

makeSound({type: "dog", name: "john", bark(){
    console.log('vau')
}});

//Truthy / falsy type guard challenge 3

function printLength(str : string | null | undefined){
    if(str){
        //in this block, typescript knows that 'str' is a string (because null and undefined are not truthy)
        console.log(str.length);
    }else{
        console.log('No string provided');
    }
}

printLength(undefined);

//type guard challenge 4

try {
    throw new Error('Some error');
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

function checkInput(input: Date | string):string{
    if(input instanceof Date){
        return input.toISOString();
    }

    return input;
}

console.log(checkInput("2023-03-02"));

//Type predicate

type Student = {
    name: string;
    study: () => void;
  };
  
  type User3 = {
    name: string;
    login: () => void;
  };
  
  type Person2 = Student | User3;
  
  const randomPerson = (): Person2 => {
    return Math.random() > 0.5
      ? { name: 'john', study: () => console.log('Studying') }
      : { name: 'mary', login: () => console.log('Logging in') };
  };
  
  const person2 = randomPerson();

function isStudent(person: Person2):person is Student{ //not boolean
    return "study" in person;
}

if(isStudent(person2)){
    person2.study();
}

//Discriminated Unions

type IncrementAction = {
    type: 'increment',
    amount: number;
    timestamp: number;
    user: string;
  };
  
  type DecrementAction = {
    type: 'decrement'
    amount: number;
    timestamp: number;
    user: string;
  };
  
  type Action = IncrementAction | DecrementAction;

  function reducer(state:number, action: Action){
    //we cant use any type guards because the property names are the same, we have to add a new property to create unique alias

    switch (action.type) {
        case 'increment':
            return state + action.amount;
        case 'decrement':
            return state - action.amount;
        default:
            const unexpectedAction:never = action;
    }
  }

  const newState = reducer(15, {
    type:'increment',
    amount: 10,
    timestamp: 10,
    user: "dd"
  });