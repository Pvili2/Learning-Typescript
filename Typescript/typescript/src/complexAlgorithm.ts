const numbers: number[] = [1,2,3,4,5,7,11]; // ordered array
const length = numbers.length;

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

console.log(BinarySearch(numbers, length, 11));