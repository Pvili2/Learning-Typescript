import {z} from 'zod';
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

//TS fetch data
const url =  'https://www.course-api.com/react-tours-project'

// implement a schema with zod libray, zod is check the type and other property limitations in RUNTIME
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string() 
})

type Tour = z.infer<typeof tourSchema>;

//every async function return type is a Promise generic
async function fetchData (url : string): Promise<Tour[]>{
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('There was an error with fetching data!');
    }

    const rawData: Tour[] = await response.json();
    
    //check the parse
    const result = tourSchema.array().safeParse(rawData);

    if(!result.success){
      throw new Error(`Invalid data: ${result.error} `)
    }
    return result.data;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "An error occurred";
    console.log(errorMsg);
    return [];
  }
}

//the variable type is any because we dont know what data we fetch
const tours = await fetchData(url);



tours.map((item)=>{
  console.log(item.price);
})