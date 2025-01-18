import React from "react";
import "./styles.css";
import ICONS from "../../utils/icon";

const LeftMenu = () => {
  const menuItems = [
    { id: 1, icon: ICONS.MAIN_ICON, label: "Main" },
    { id: 2, icon: ICONS.LOGO_ICON, label: "Settings" },
    { id: 3, icon: ICONS.PLUS_ICON, label: "Add" },
    { id: 4, icon: ICONS.STAR_ICON, label: "Support" },
  ];

  return (
    <div className="left-menu">
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img className="icon" src={item.icon} alt={item.label} />
          </div>
        ))}
      </div>
      <div className="bottom-section">
        <img className="bottom-icon" src={ICONS.BOTTOM_ICON} alt="Bottom Icon" />
        <span className="character">H</span>
      </div>
    </div>
  );
};

export default LeftMenu;
