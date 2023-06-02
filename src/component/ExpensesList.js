import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  return (
    <div>
      {props.filterResult.length === 0 && (
        <h2 className="expenses-list__fallback ">No expenses found</h2>
      )}
      <ul className="expenses-list">
        {props.filterResult.length > 0 &&
          props.filterResult.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </ul>
    </div>
  );
};
export default ExpensesList;
