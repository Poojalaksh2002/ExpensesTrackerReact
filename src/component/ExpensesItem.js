import "./ExpensesItem.css";
import Card from "./Card";
import Date from "./Date";

function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpensesItem;
