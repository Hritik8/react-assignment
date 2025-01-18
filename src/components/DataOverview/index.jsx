import React from "react";
import ICONS from "../../utils/icon";
import "./styles.css";

const DataOverview = () => {
  return (
    <div className="data-overview">
      <div className="row-col-data">
        <div className="row-data">
          <img
            src={ICONS.HORIZONTAL_HAMBURGER}
            alt="Rows Icon"
            className="data-icon"
          />
          <div className="data-text">
            <p className="data-title">Total Number of rows</p>
            <p className="data-value">34.1M</p>
          </div>
        </div>
        <div className="col-data">
          <img
            src={ICONS.VERTICAL_HAMBURGER}
            alt="Columns Icon"
            className="data-icon"
          />
          <div className="data-text">
            <p className="data-title">Total No of Columns</p>
            <p className="data-value">2</p>
          </div>
        </div>
      </div>

      <div className="meta-data">
        <p className="meta-title">Metadata</p>
        <div className="meta-table">
          <div className="meta-row">
            <div className="meta-label">Name</div>
            <div className="meta-value">Samples </div>
          </div>
          <div className="meta-row">
            <div className="meta-label">Created at</div>
            <div className="meta-value">20 Jul 2022</div>
          </div>
          <div className="meta-row">
            <div className="meta-label">Relates to</div>
            <div className="meta-value">dim_books</div>
          </div>
          <div className="meta-row">
            <div className="meta-label">Connection</div>
            <div className="meta-value">Postgresql</div>
          </div>
        </div>
      </div>

      <div className="sla-reports">
        <p className="sla-title">SLA</p>
        <div className="sla-bar-container">
          <div className="sla-bar">
            <div className="sla-progress" style={{ width: "100%" }}></div>
          </div>
          <p className="sla-score">5/5</p>
        </div>
        <p className="test-report">
          <span>Test report</span> <a href="#">See all</a>
        </p>
        <p className="score-container">
          <span className="score">100% Score</span>{" "}
          <span className="test-count">5 Test</span>
        </p>
        <div className="test-bar">
          <div className="test-progress" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;
