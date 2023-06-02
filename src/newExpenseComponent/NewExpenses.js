import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseDatas = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(expenseDatas);
    props.onAddExpense(expenseDatas);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpensesData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpenses;
