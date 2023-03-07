// // displaying array

// const userInput = document.getElementById("userInput");

// const arr = [5,6,10,11,20];

// // console.log("arr =>",arr);

// // // Print a new array such that every element is double of arr
// // const arrDoubled = [];
// // for (let i=0; i < arr.length; i++){
// //     arrDoubled[i] = 2 * arr[i] ;
// // }

// // //document.write(`arrDoubled => ${arrDoubled}`)

// // Insert a new element inputted by the user inside the array


// function addInput(){
//     if (userInput.value){       //edge case 
//         let newInput = userInput.value ;
//         arr[arr.length] = newInput;
//         userInput.value="";
//         console.log("arr =>",arr);
//         // console.warn("arr =>",arr);
//         // console.error("arr =>",arr);
//         // console.log("arr =>",JSON.stringify(arr));
//     }
//     else {
//         alert("User Input cannot be empty");
//     }
// }

// Print the given array in reverse

const arr = [5,6,10,11,20];

const arrReversed = [];
for (let i=0; i < arr.length; i++){
    // arrReversed[0] = arr[arr.length-1]
    // arrReversed[1] = arr[arr.length-2]
   // arrReversed[2] = arr[arr.length-3]
   arrReversed[i] = arr[arr.length-i-1];
}

console.warn("arrReversed =>", arrReversed);

// insert at a particular position
// delete at a particular position
// merge two arrays into one - using for and while
// take user input and search an element in the array and display it's position in the index
// sort an array of numbers in ascending and decending order