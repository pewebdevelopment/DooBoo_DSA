// displaying array

const userInput = document.getElementById("userInput");

const arr = [5,6,10,11,20];

// console.log("arr =>",arr);

// // Print a new array such that every element is double of arr
// const arrDoubled = [];
// for (let i=0; i < arr.length; i++){
//     arrDoubled[i] = 2 * arr[i] ;
// }

// //document.write(`arrDoubled => ${arrDoubled}`)

// Insert a new element inputted by the user inside the array


function addInput(){
    if (userInput.value){       //edge case 
        let newInput = userInput.value ;
        arr[arr.length] = newInput;
        userInput.value="";
        console.log("arr =>",arr);
    }
    else {
        alert("User Input cannot be empty");
    }
}

// Print the given array in reverse