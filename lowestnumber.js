function lowest(arr) {
    let i;

   
    let min = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }

    return min;
}
let arr = [4,6,2,99];
console.log("Lowest in given array is " + lowest(arr));