SpendWise 💰

SpendWise is an interactive budgeting application that helps users set a budget, record expenses, monitor their spending, and see whether they are staying within their budget.

Week 6 Improvements

This week, SpendWise was improved by adding JavaScript functionality to make the application interactive.

The main improvements include:

Users can set their own budget.

Users can add multiple expenses.

Expenses are stored in an array.

Expense records are processed using loops.

The dashboard updates automatically when data changes.

Users can delete individual expenses.

Users can clear all expenses.

Conditional statements provide feedback based on the user's spending.

Event listeners allow users to interact with forms and buttons.

The application displays information directly on the webpage instead of only in the browser console.

Technologies Used

HTML

CSS

JavaScript

DOM Manipulation

Git and GitHub

How Conditionals Are Used

Conditional statements are used to evaluate the user's budget and spending.

For example, SpendWise checks whether:

No budget has been entered.

The user has exceeded their budget.

The user has reached their budget limit.

The user has used 80% or more of their budget.

The user is still within their budget.

The JavaScript uses if, else if, and else statements to display an appropriate message.

Example:

if (totalSpent > budget) {
    feedbackMessage.textContent =
        `Warning! You are over budget.`;
} else if (totalSpent === budget) {
    feedbackMessage.textContent =
        "You have reached your budget limit.";
} else {
    feedbackMessage.textContent =
        "Great job! You are currently within your budget.";
}


This allows the application to make decisions based on the user's data.

How Arrays Are Used

An array called expenses is used to store multiple expense records.

let expenses = [];


Each expense is stored as an object containing the expense name, amount, and category.

For example:

const expense = {
    name: "Lunch",
    amount: 500,
    category: "Food"
};

expenses.push(expense);


Using an array makes it possible to store and manage many expenses instead of creating separate variables for every expense.

How Loops Are Used

A for loop is used to process the stored expense records.

For example, the application loops through the expenses array to calculate the total amount spent:

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}


Loops are also used to display all the stored expenses on the webpage.

How the DOM Is Updated

DOM manipulation is used to update the webpage dynamically.

The application selects HTML elements using methods such as:

document.getElementById()


It then updates their content using:

textContent


New expense elements are created using:

document.createElement()


and added to the page using:

appendChild()


This means that when the user adds, deletes, or clears expenses, the dashboard and expense list change immediately without requiring the page to be refreshed.

How User Interactions Are Handled

SpendWise uses event listeners to respond to user actions.

For example, the budget form listens for a submit event:

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    budget = Number(budgetInput.value);

    updateDashboard();
});


The expense form also uses an event listener to detect when a user adds an expense.

Delete buttons have their own click events, allowing users to remove individual expenses.

The "Clear All Expenses" button also uses an event listener to remove all stored expenses.

These events connect the user's actions to the JavaScript logic.

Application Flow

The main flow of the application is:

User Action
     ↓
Event Listener
     ↓
JavaScript Logic
     ↓
Update Data
     ↓
Calculate Results
     ↓
Conditional Decision
     ↓
Update DOM
     ↓
User Sees Updated Dashboard


For example, when a user adds an expense:

Add Expense
     ↓
Expense Form Submit Event
     ↓
Create Expense Object
     ↓
Add Object to expenses[]
     ↓
Calculate Total
     ↓
Check Budget
     ↓
Update Dashboard
     ↓
Display Expense

Challenges Encountered

One challenge was keeping the dashboard values synchronized with the expense records. When an expense was added or deleted, the total spent and remaining budget also needed to change.

This was resolved by creating an updateDashboard() function. Whenever the expense data changes, this function recalculates the totals and updates the webpage.

Another challenge was displaying multiple expenses dynamically. This was solved by using a loop to go through the expenses array and create HTML elements for each expense.

A further challenge was providing useful feedback based on spending. Conditional statements were used to determine the user's budget status and display different messages.

Testing

The following functionality was tested:

Setting a budget.

Adding an expense.

Adding multiple expenses.

Calculating total spending.

Calculating remaining budget.

Displaying expense records.

Deleting an individual expense.

Clearing all expenses.

Displaying an over-budget warning.

Displaying an 80% budget warning.

Confirming that the dashboard updates after user actions.

Project Files

The repository contains:

SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md

Author

SpendWise Week 6 JavaScript Project