
//create the function that create any type

function createAny<T>(arg: T): T{
    return arg;
}
let value = createAny<number>(10);
console.log(createAny({name: 'john'}));
console.log(value);

interface GenericInterface<T>{
    value: T,
    getValue: ()=> T;
}

const genericString: GenericInterface<number> = {
    value: 10,
    getValue: function(){
        return this.value;
    }
} 

async function someFunction():Promise<string>{
    return "hello woorld";
}

const result = someFunction();

//Generics challenge 1

function createArray<T>(length: number, value: T): Array<T>{
    return  new Array<T>(length).fill(value);
}

console.log(createArray<string>(10, "hello"));

//multiple variable types

function pair<T, U>(param1: T, param2: U):[T,U]{
    return [param1, param2];
}

console.log(pair(12, "hello"));

//the T type must be string or number
function processString<T extends string | number>(value: T):T{
    console.log(value);
    return value;
}

processString(10);


type Car = {
    brand: string;
    model: string;
  };
  
  const car: Car = {
    brand: 'ford',
    model: 'mustang',
  };
  
  type Product = {
    name: string;
    price: number;
  };
  
  const product: Product = {
    name: 'shoes',
    price: 1.99,
  };
  
  type Student = {
    name: string;
    age: number;
  };
  
  const student: Student = {
    name: 'peter',
    age: 20,
  };

  //we can use property name to define the Generic type limitation

  function printName<T extends {name:string}>(input: T){
    console.log(input.name)
  }

  printName(student);

  //Interface with generic type
  interface StoreData<T>{
    data: T[];
  }

  const storeNumbers: StoreData<number> = {
    data: [1,2,3,5,6]
  }
  console.log(storeNumbers);
  