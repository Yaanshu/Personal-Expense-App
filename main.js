//get the heading element 
const headingElement = document.querySelector("#headingtotal")

// get the reference to desc element
const inputDescElement = document.querySelector("#inputDesc")

// init value of expense at 0
let totalExpense = 0;

//set the heading element to TotalExpense
headingElement.textContent = totalExpense; 

//onButtonClick add InputAmount to TotalExpense
function addExpenseToTotal() {

    //read value from InputAmount
    const inputElement = document.querySelector("#inputAmount");
    const textAmount = inputElement.value;
    console.log({textAmount});

    //convert it to number
    const expense = parseInt(textAmount, 10);
    console.log({expense});
    
    //add that value to totalExpense
    totalExpense = totalExpense + expense;
    console.log({totalExpense});

    // set the heading element to totalExpense
    headingElement.textContent = totalExpense; 
}
    
// read value from InputAmount



const element = document.querySelector("#btnAddExpense");

// Listen to click event
element.addEventListener("click", addExpenseToTotal, false);

//Take a number which starts from zero
let counter = 0;


//Function to increment the number

function counterIncrement() {
    //Every click increment a number
    counter = counter + 1;
    console.log(counter);
}