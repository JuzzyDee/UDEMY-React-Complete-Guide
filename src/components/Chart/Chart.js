import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
  const totalMax = Math.max(...props.dataPoints.map((d) => d.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
