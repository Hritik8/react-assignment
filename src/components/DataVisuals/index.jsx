import React from "react";
import GaugeChart from "react-gauge-chart";
import DataOverview from "../DataOverview";
import DataQuality from "../DataQuality";

const DataVisuals = () => {
  const color1 = ["green", "#ffcd54", "blue"];
  const color2 = ["blue", "#FD623B", "green"];
  const color3 = ["blue", "#464646"];
  const label1 = ["Success", "Failed", "Skipped"];
  const label2 = ["Broken", "Aborted", "Unknown"];
  const label3 = ["Monitered", "Unmonitered"];
  const data1 = [50, 30, 20];
  const data2 = [20, 30, 40];
  const data3 = [70, 30];
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-container">
          <h1 className="title">Data Visuals</h1>
        </div>
      </header>

      <h2 style={{ alignSelf: "flex-start", padding: 20, paddingBottom: 0 }}>
        Data Overview
      </h2>
      <DataOverview />

      <h2 style={{ alignSelf: "flex-start", padding: 20, paddingBottom: 15 }}>
        Data Quality
      </h2>
      <div
        style={{
          display: "flex",
          marginBottom: 30,
          backgroundColor: "#f4f4f4",
        }}
      >
        <div style={{ marginRight: 50, padding: 15 }}>
          <h4>Data Quality Score</h4>
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={3}
            colors={["#FF5F6D", "#FFC371", "#00C49F"]}
            arcWidth={0.3}
            percent={0.65}
            textColor="#000000"
            needleColor="#345243"
            needleBaseColor="#345243"
          />
        </div>
        <div
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#333",
            }}
          >
            Rules against target
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "14px", color: "#555" }}>Validity</span>
            <span
              style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}
            >
              {6}
            </span>
          </div>
          <div
            style={{
              height: "10px",
              borderRadius: "5px",
              backgroundColor: "#e0e0e0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(6 / 8) * 100}%`,
                backgroundColor: "#4caf50",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              fontSize: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#4caf50",
                  borderRadius: "50%",
                  marginRight: "2px",
                }}
              ></span>
              Good
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#f3b633",
                  borderRadius: "50%",
                  marginLeft: "4px",
                  marginRight: "2px",
                }}
              ></span>
              Acceptable
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#f44336",
                  borderRadius: "50%",
                  marginLeft: "4px",
                  marginRight: "2px",
                }}
              ></span>
              Not Acceptable
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <DataQuality
          color={color1}
          label={label1}
          data={data1}
          heading={"Table Health"}
        />
        <DataQuality
          color={color2}
          label={label2}
          data={data2}
          heading={"Results Breakdown"}
        />
        <DataQuality
          color={color3}
          label={label3}
          data={data3}
          heading={"Mointered Tables"}
        />
      </div>
    </div>
  );
};

export default DataVisuals;
