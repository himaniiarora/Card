const expenseDescription = document.getElementById('expenseDescription');
const expenseAmount = document.getElementById('expenseAmount');
const expenseCategory = document.getElementById('expenseCategory');
const addExpenseButton = document.getElementById('addExpenseButton');
const expenseList = document.getElementById('expenseList');
const totalExpense = document.getElementById('totalExpense');

let total = 0;

addExpenseButton.addEventListener('click', () => {
    const description = expenseDescription.value;
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (description && amount) {
        const li = document.createElement('li');
        li.textContent = ${description} - $${amount.toFixed(2)} [${category}];
        expenseList.appendChild(li);

        total += amount;
        totalExpense.textContent = total.toFixed(2);

        expenseDescription.value = '';
        expenseAmount.value = '';
    }
});