import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.datapoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
