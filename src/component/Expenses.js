import "./Expenses.css";
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredyear] = useState("2020");

  const handleFilterChange = (userSelectedYear) => {
    setFilteredyear(userSelectedYear);
  };
  console.log(filteredYear);

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filterResult={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
