const numbers1: number[] = [1,2,3,4,5,7,11]; // ordered array / set
const numbers2: number[] = [3,4,5,9];
const length1 = numbers1.length;
const length2 = numbers2.length;
function BinarySearch(numbers : number[], length: number, searchedValue: number):number{
    let left = 0;
    let right = length - 1;
    let center = Math.round((left + right)/2);

    while(left <= right && numbers[center] !== searchedValue){
        if(numbers[center] > searchedValue){
            right = center -1;
        }else{
            left = center + 1;
        }

        center = Math.round((left + right)/2);
    }
    let idx = center;
    if(left <= right){
        return idx;
    }else{
        return -1;
    }
}

console.log(BinarySearch(numbers1, length, 11));

function Union(numbers1: number[], length1:number, numbers2: number[], length2: number):number[]{
    let union:number[] = new Array(length1 + length2);
    let i = 0;
    let j = 0;
    let db = -1;

    while(i< length1 && j < length2){
        db++;
        if(numbers1[i] < numbers2[j]){
            union[db] = numbers1[i];
            i++;
        }else{
            if(numbers1[i] > numbers2[j]){
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

function deleteNullValues(numbers : number[]): number[] {
    let newNumber: number[] = [];

    numbers.forEach((item)=>{

        if(item) newNumber.push(item);
    })

    return newNumber;
}

console.log(deleteNullValues(Union(numbers1, length1, numbers2, length2)));

function arrayIsSubset(numbers1 : number[], length1: number, numbers2: number[], length2: number):boolean{
    let i = 0;
    let j = 0;

    while(i < length1 && j < length2 && numbers1[i] >= numbers2[j]){
        if(numbers1[i] == numbers2[j]){
            i++;
        }
        j++;
    }

    return i >= length1;
}

//numbers2 is a subset of numbers1? --- true/false
console.log(arrayIsSubset(numbers2, length2, numbers1, length1));

function arraysSection(numbers1: number[], length1: number, numbers2: number[], length2:number): number[]{
    let i = 0;
    let j = 0;
    let section : number[] = new Array(length1 + length2);
    let db = 0;
    while(i < length1 && j < length2){
        if(numbers1[i] < numbers2[j]){
            i++;
        }else{
            if(numbers1[i] >numbers2[j]){
                j++;
            }else{
                section[db] = numbers1[i];
                db++;
                i++;
                j++;
            }
        }
    }
    return section;
}

console.log(deleteNullValues(arraysSection(numbers1, length1, numbers2, length2)));