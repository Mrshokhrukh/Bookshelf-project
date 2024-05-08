import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <form className="header_search_form">
        <input type="text" placeholder="Search book..." />
        <button>
          <SearchIcon />
        </button>
      </form>
      
      <div className="login_right">Sign in</div>
      {/* <Avatar src="" /> */}
    </div>
  );
};
export default Header;
