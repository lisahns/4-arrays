
//functions
//Use the filter method on an array to fill a new array with the numbers which are divisible by two.
// first write callback function that takes one argument and returns even numbers

const arr = [1, 2, 3, 4, 5, 6];

const even = arr.filter(n => n % 2 ==0);

console.log(even);



//Use the reduce method, to return the total of the elements of the array it is called on.
//write callback function that takes two arguments
//make new variable that uses .reduce(function) to return total of array2


const total = arr.reduce((arr, num) => arr + num);

console.log(total);



//Add JavaScript so that when the user clicks the button, one of the functions is run and the 
//result is shown on the page.



  var calculate = document.getElementsByName("radioB");

function button () {
  if (calculate[0].checked == true) {
        let element = document.getElementById("input").value;  
        console.log(element);
        let array = element.split(',');
        console.log(array);
        let one = array.filter(n => n % 2 ==0)
        console.log(one);
        return result.textContent = one;
      } else if (calculate[1].checked == true){
            let element = document.getElementById("input").value;  
            console.log(element);
            let array = element.split(',');
            console.log(array);
            let numArr = array.map(Number);
            console.log(numArr);
            let total = numArr.reduce((array, num) => array + num);
            console.log(total);
            return result.textContent = total;
          }
      }
    





//next step: put onclick event on button, and excetue function depending on which radiobutton is selected
//put onclick event on button
//if condition, to which radiobutton is selected



//The input should be given in the first input box as a string. 
//The user should be able to enter numbers, separated by commas. 
//In JavaScript, you’ll convert this string to an array of numbers.

//Based on which radio button is selected, choose which function to run. 
//Pass an array as an argument to the particular function.

//Finally, return the result from the function and display it on the page.




//Add CSS to give the user an intuitive experience

//Think about and constrain what inputs can be given. 
//The user may be inconsistent in the string they give, for example using spaces or not. 
//How can we account for this, in JavaScript or HTML?


