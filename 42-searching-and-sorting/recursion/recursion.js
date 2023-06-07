function compare(leftElement, rightElement, arr) {
    return leftElement - rightElement
}

// + greater
// - less
// 0 they are equal

//       s         m        e    
let x = [12,15,18,20,45,56,89]


function binarySearch(arr, value, cb, start = 0, end = arr.length - 1) {
    //base case 
    if (start > end) return -1;// are we still in a valid search location

    //recursive case
    const midpoint = Math.floor( (start + end) / 2);
    const compare = cb(arr[midpoint], value, arr);
    if (compare === 0 ) return midpoint;
    else if (compare < 0) return binarySearch(arr, value, cb, midpoint + 1, end);
    else return binarySearch(arr, value, cb, start, midpoint - 1);

    // while (start <= end) {
    //     //guess the middle point
    //     const midpoint = Math.floor( (start + end) / 2);
    //     const compare = cb(arr[midpoint], value, arr); // 0
    //     //when our guess is right
    //     if (compare === 0 ) return midpoint;
    //     //[o,o,o,o,mid,x,x,x,x]
    //     //             ^----- want to be the new start
    //     else if (compare < 0) start = midpoint + 1;
    //     //[o,o,o,o,mid,x,x,x,x]
    //     //       ^----- want to be the new end
    //     else end = midpoint - 1
    // }
}

console.log(binarySearch(x, 89, compare))