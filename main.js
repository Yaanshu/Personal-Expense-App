//get the heading element 
const headingElement = document.querySelector("#headingtotal")

// get the reference to desc element
const inputDescElement = document.querySelector("#inputDesc")

//ref to input amount
const inputElement = document.querySelector("#inputAmount");

// init value of expense at 0
let totalExpense = 0;

//set the heading element to TotalExpense
headingElement.textContent = totalExpense; 

//allExpenses at one place
const allExpenses = [];

//onButtonClick add InputAmount to TotalExpense
function addExpenseToTotal() {
    const expenseItem = {};

    //read value from InputAmount
    const textAmount = inputElement.value;

    //read the desc from inputDesc
    const textDesc = inputDescElement.value;
    // console.log({textDesc, textAmount})

    //convert it to number
    const expense = parseInt(textAmount, 10);

    //put it in object
    expenseItem.desc = textDesc;
    expenseItem.textAmount = expense;

    allExpenses.push(expenseItem);

    //add that value to totalExpense
    totalExpense = totalExpense + expense;

    // set the heading element to totalExpense
    headingElement.textContent = totalExpense; 
}
    
// get the btn element
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