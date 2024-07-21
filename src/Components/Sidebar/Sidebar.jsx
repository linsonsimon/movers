import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  FaTruck,
  FaUserAlt,
  FaFileInvoiceDollar,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-hero">
        <div className="sidebar-link">
          <NavLink activeclassname="active" to="/my-moves">
            <span>
              <FaTruck />
            </span>
            <p>My Moves</p>
          </NavLink>
        </div>
        <div className="sidebar-link">
          <NavLink activeclassname="active" to="/my-profile">
            <span>
              <FaUserAlt />
            </span>
            <p>My Profile</p>
          </NavLink>
        </div>
        <div className="sidebar-link">
          <NavLink activeclassname="active" to="/get-quote">
            <span>
              <FaFileInvoiceDollar />
            </span>
            <p>Get Quote</p>
          </NavLink>
        </div>
        <div className="sidebar-link">
          <NavLink activeclassname="active" to="/logout">
            <span>
              <FaSignOutAlt />
            </span>
            <p>Logout</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
