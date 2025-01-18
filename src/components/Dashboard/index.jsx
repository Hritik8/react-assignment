import React from "react";
import "./styles.css";
import ICONS from "../../utils/icon";

const Dashboard = () => {
  const actionItems = [
    "Give me the summary of the data Source.",
    "User duration engagement change vs last week?",
    "Provide an overview of this week’s IAP Revenue performance.",
    "What are the factors of drop in our Sales Revenue this week?",
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-container">
          <h1 className="title">Databot</h1>
          <img src={ICONS.DASHBOARD_ICON} alt="Databot Logo" className="logo" />
        </div>
        <div className="dropdown-container">
          <select className="dropdown">
            <option value="Clothing Sales">Clothing Sales</option>
            <option value="SUPPLIER_references">SUPPLIER_references</option>
            <option value="NATION_references_REGION">
              NATION_references_REGION
            </option>
            <option value="ORDERS_references_CUSTOMER">
              ORDERS_references_CUSTOMER
            </option>
            <option value="data_lake">data_lake</option>
          </select>
        </div>
      </header>

      <div className="header">
        <h1 className="header-title">
          <span className="header-title-blue">AI Conversational</span>{" "}
          <span className="header-title-black">Data Analyst</span>
        </h1>
        <p className="header-description">
          Your personal AI data assistant. Seamlessly integrate your database
          for rapid, informed decision-making. Get instant analysis and answers,
          optimizing growth metrics daily. Ask anything, get analyst-grade
          responses.
        </p>
      </div>

      {/* Buttons */}
      <div className="button-container">
        {actionItems.map((item, index) => (
          <div className="action-card" key={index}>
            <p classNamFe="action-text">{item}</p>
            <img src={ICONS.ARROW_ICON} className="action-icon" />
          </div>
        ))}
      </div>

      <section className="summary-container">
        <div className="box-container">
          <h2 className="summary-title">Summary</h2>
          <p className="summary-text">
            Supplier references refer to information provided by a supplier that
            can be used to verify their capabilities and experience. This
            information is typically used during the procurement process to
            evaluate potential vendors.
          </p>
          <div className="summary-details">
            <h3 className="subtitle">Basic Reference:</h3>
            <ul>
              <li>Supplier Name: Acme Corporation</li>
              <li>Contact Name: John Smith, Sales Manager</li>
              <li>Phone Number: (555) 555-5555</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.
              </li>
            </ul>
          </div>
          <div className="summary-details">
            <h3 className="subtitle">Detailed Reference:</h3>
            <ul>
              <li>Supplier Name: Global Tech Solutions</li>
              <li>Contact Name: Jane Doe, Account Manager</li>
              <li>Phone Number: (555) 555-5554</li>
              <li>Email Address: [email address removed]</li>
            </ul>
          </div>
        </div>

        <footer className="footer">
          <input
            type="text"
            placeholder="Ask your AI for data summary..."
            className="search-input"
          />
          <button className="search-button">✨ Search</button>
        </footer>
      </section>
    </div>
  );
};

export default Dashboard;
