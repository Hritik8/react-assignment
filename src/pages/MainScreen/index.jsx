import Dashboard from "../../components/Dashboard";
import DataVisuals from "../../components/DataVisuals";
import LeftMenu from "../../components/LeftMenu";

const MainScreen = () => {
  return (
    <div className="app-container">
      <LeftMenu />
      <div className="main-content">
        <div className="content-left">
          <Dashboard />
        </div>
        <div className="content-right">
          <DataVisuals />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
