const numbers1: number[] = [1,2,3,4,5,7,11]; // ordered array / set
const numbers2: number[] = [3,4,5];
const length1 = numbers1.length;
const length2 = numbers2.length;

function BinarySearch<T>(numbers : T[], length: number, searchedValue: T, compare: Comparator<T>):number{
    let left = 0;
    let right = length - 1;
    let center = Math.round((left + right)/2);

    let comparator = compare(numbers[center], searchedValue);

    while(left <= right && comparator !== 0){
        if(comparator > 0){
            right = center -1;
        }else{
            left = center + 1;
        }

        center = Math.round((left + right)/2);
        //we need to update the comparator variable after we calculate the center
        comparator = compare(numbers[center], searchedValue);
    }
    let idx = center;
    if(left <= right){
        return idx;
    }else{
        return -1;
    }
}

console.log(BinarySearch(numbers1, length1, 11, (a:number, b:number) => a-b));

function Union<T>(numbers1: T[], length1:number, numbers2: T[], length2: number, compare: Comparator<T>):T[]{
    let union:T[] = new Array(length1 + length2);
    let i = 0;
    let j = 0;
    let db = -1;

    while(i< length1 && j < length2){
        const comparator = compare(numbers1[i], numbers2[j]);
        db++;
        if(comparator < 0){
            union[db] = numbers1[i];
            i++;
        }else{
            if(comparator > 0){
                union[db] = numbers2[j];
                j++;
            }else{
                union[db] = numbers1[i];
                i++;
                j++;
            }
        }
    }
    while(i < length1){
        db++;
        union[db] = numbers1[i];
        i++;
    }   
    while(j < length2){
        db++;
        union[db] = numbers2[j];
        j++;
    }

    return union;
}

function deleteNullValues<T>(numbers : T[]): T[] {
    let newNumber: T[] = [];

    numbers.forEach((item)=>{

        if(item) newNumber.push(item);
    })

    return newNumber;
}

console.log(deleteNullValues(Union(numbers1, length1, numbers2, length2, (a:number, b:number)=> a-b)));

function arrayIsSubset<T>(numbers1 : T[], length1: number, numbers2: T[], length2: number, compare: Comparator<T>):boolean{
    let i = 0;
    let j = 0;
    
    let comparator = compare(numbers1[i], numbers2[j]);
    while(i < length1 && j < length2 && comparator >= 0){
        if(comparator === 0){
            i++;
        }
        j++;
        comparator = compare(numbers1[i], numbers2[j]);
    }

    return i >= length1;
}

//numbers2 is a subset of numbers1? --- true/false
console.log(arrayIsSubset(numbers2, length2, numbers1, length1, (a: number, b: number)=>a-b));

interface Comparator<T>{
    (a: T, b: T):number;
}

function arraysSection<T>(numbers1: T[], length1: number, numbers2: T[], length2:number, compare: Comparator<T>): T[]{
    let i = 0;
    let j = 0;
    let section : T[] = new Array(length1 + length2);
    let db = 0;
    while(i < length1 && j < length2){
        const comparison = compare(numbers1[i], numbers2[j])
        if(comparison < 0){
            i++;
        }else{
            if(comparison > 0){
                j++;
            }else{
                section[db] = numbers1[i];
                db++;
                i++;
                j++;
            }
        }
    }

    //alternative way to return only the not null values
    return section.filter((item) => item); 
}

console.log(arraysSection<number>(numbers1, length1, numbers2, length2, (a:number,b:number)=> a-b));