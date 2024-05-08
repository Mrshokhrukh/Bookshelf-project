import React from "react";
import "./sidebar.scss";
type SidebarProps = {};

import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useModal } from "../../context/ModalContext";

const Sidebar: React.FC<SidebarProps> = () => {
  const { openModal } = useModal();

  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <h3>Bookshelf</h3>
      </div>
      <div className="sidebar_content">
        <div className="sidebar_el">
          <MenuBookIcon className="icon" />
          <span>All Books</span>
        </div>
        <div className="sidebar_el">
          <MenuBookIcon className="icon" />
          <span>All Books</span>
        </div>
        <div className="sidebar_el" onClick={openModal}>
          <div className="addbookicon">
            <AddIcon className="icon addicon" />
          </div>
          <span>Add Book</span>
        </div>
        <div className="sidebar_el">
          <BookmarkIcon className="icon" />
          <span>Saved</span>
        </div>
        <div className="sidebar_el">
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
