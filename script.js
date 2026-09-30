// ==========================================
// SpendWise Budget Tracker
// ==========================================

// Budget variable
let budget = 0;

// Array containing multiple expense records
let expenses = [];


// ==========================================
// DOM ELEMENTS
// ==========================================

const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budgetDisplay");
const spentDisplay = document.getElementById("spentDisplay");
const remainingDisplay = document.getElementById("remainingDisplay");

const feedbackMessage = document.getElementById("feedbackMessage");
const expenseList = document.getElementById("expenseList");

const clearButton = document.getElementById("clearButton");


// ==========================================
// SET BUDGET
// ==========================================

budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    budget = Number(budgetInput.value);

    updateDashboard();

    budgetInput.value = "";
});


// ==========================================
// ADD EXPENSE
// ==========================================

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Create an expense record
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    // Add the record to the array
    expenses.push(expense);

    // Update the webpage
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});


// ==========================================
// CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses() {
    let total = 0;

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {

    // Calculate total spent
    const totalSpent = calculateTotalExpenses();

    // Calculate remaining money
    const remaining = budget - totalSpent;

    // Update dashboard values
    budgetDisplay.textContent = `KES ${budget.toFixed(2)}`;
    spentDisplay.textContent = `KES ${totalSpent.toFixed(2)}`;
    remainingDisplay.textContent = `KES ${remaining.toFixed(2)}`;

    // ======================================
    // DECISION MAKING
    // ======================================

    if (budget === 0) {
        feedbackMessage.textContent =
            "Please set a budget to start tracking your spending.";

        feedbackMessage.style.color = "#777";

    } else if (totalSpent > budget) {
        feedbackMessage.textContent =
            `Warning! You are over budget by KES ${(totalSpent - budget).toFixed(2)}.`;

        feedbackMessage.style.color = "#c0392b";

    } else if (totalSpent === budget) {
        feedbackMessage.textContent =
            "You have reached your budget limit.";

        feedbackMessage.style.color = "#e67e22";

    } else if (totalSpent >= budget * 0.8) {
        feedbackMessage.textContent =
            `Careful! You have used ${((totalSpent / budget) * 100).toFixed(0)}% of your budget.`;

        feedbackMessage.style.color = "#e67e22";

    } else {
        feedbackMessage.textContent =
            "Great job! You are currently within your budget.";

        feedbackMessage.style.color = "#19764a";
    }

    // Display all expenses
    displayExpenses();
}


// ==========================================
// DISPLAY EXPENSES
// ==========================================

function displayExpenses() {

    // Clear the existing list
    expenseList.innerHTML = "";

    // Check whether there are expenses
    if (expenses.length === 0) {
        const emptyMessage = document.createElement("li");

        emptyMessage.textContent = "No expenses added yet.";

        expenseList.appendChild(emptyMessage);

        return;
    }

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        // Create list item
        const listItem = document.createElement("li");
        listItem.className = "expense-item";

        // Create information section
        const info = document.createElement("div");
        info.className = "expense-info";

        const name = document.createElement("span");
        name.className = "expense-name";
        name.textContent = expense.name;

        const category = document.createElement("span");
        category.className = "expense-category";
        category.textContent = expense.category;

        const amount = document.createElement("span");
        amount.className = "expense-amount";
        amount.textContent = `KES ${expense.amount.toFixed(2)}`;

        info.appendChild(name);
        info.appendChild(category);
        info.appendChild(amount);

        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        // Event listener for deleting an expense
        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);

            updateDashboard();
        });

        listItem.appendChild(info);
        listItem.appendChild(deleteButton);

        expenseList.appendChild(listItem);
    }
}


// ==========================================
// CLEAR ALL EXPENSES
// ==========================================

clearButton.addEventListener("click", function() {

    if (expenses.length === 0) {
        feedbackMessage.textContent = "There are no expenses to clear.";
        return;
    }

    // Decision making
    const confirmation = confirm(
        "Are you sure you want to delete all expenses?"
    );

    if (confirmation) {
        expenses = [];

        updateDashboard();
    }
});


// ==========================================
// INITIAL DASHBOARD DISPLAY
// ==========================================

updateDashboard();
