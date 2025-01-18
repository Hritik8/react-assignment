import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DataQuality = ({ color, label, data, heading }) => {
  const chartData = {
    labels: label,
    datasets: [
      {
        label: "Colors",
        data: data,
        hoverOffset: 5,
        borderRadius: 10,
        spacing: 3,
        backgroundColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.save();

      const firstLineText = "Total Table";
      ctx.font = "10px sans-serif";
      ctx.textBaseline = "middle";
      const firstLineX = Math.round(
        (width - ctx.measureText(firstLineText).width) / 2
      );
      const firstLineY = height / 2 - 20;
      ctx.fillStyle = "#000";
      ctx.fillText(firstLineText, firstLineX, firstLineY);

      const secondLineText = "88";
      ctx.font = "bold 30px sans-serif";
      const secondLineX = Math.round(
        (width - ctx.measureText(secondLineText).width) / 2
      );
      const secondLineY = height / 2 + 10;
      ctx.fillText(secondLineText, secondLineX, secondLineY);

      ctx.restore();
    },
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        height: "280px",
        width: "280px",
        marginLeft: "15px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
          {heading}
        </h3>

        <Doughnut
          data={chartData}
          options={options}
          height={150}
          width={150}
          plugins={[centerTextPlugin]}
        />
      </div>

      <div style={{ textAlign: "left" }}>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {label.map((labelText, index) => (
            <li
              key={index}
              style={{
                marginTop: "5px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: color[index],
                  borderRadius: "50%",
                  margin: "20px",
                }}
              ></span>
              {labelText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataQuality;
