import React from "react";
import "./bookTable.scss";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface TableData {
  title: string;
  name: string;
  author: string;
  pages: number;
  id: number;
  isbn: number;
  published: number;
}

const BookTable: React.FC = () => {
  return (
    <TableContainer className="table">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Published</TableCell>
            <TableCell align="center">Pages</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array(16)
            .fill(null)
            .map((val, i) => {
              return (
                <TableRow>
                  <TableCell align="center">{i}</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Author</TableCell>
                  <TableCell align="center">Published</TableCell>
                  <TableCell align="center">pages</TableCell>
                  <TableCell align="center" className="table_actions">
                    <button className="editbtn tbtn">Edit</button>
                    <button className="deletebtn tbtn">Delete</button>
                    <button className="viewbtn tbtn">view</button>

                    <div className="table_dropdown_menu_actions">
                      <button className="actions_menu_icon">
                        <MoreHorizIcon />
                      </button>
                      <div className="menu_list_miu">
                        <button className="edititem menu_list">
                          Edit
                          {/* <span>
                            <EditIcon />
                          </span> */}
                        </button>
                        <button className="deleteitem menu_list">
                          Delete
                          {/* <span>
                            <DeleteIcon />
                          </span> */}
                        </button>
                        <button className="viewitem menu_list">
                          view
                          {/* <span>
                            <VisibilityIcon />
                          </span> */}
                        </button>
                      </div>
                    </div>
                    {/* <div className="iconbtn_miu editbtn">
                      <EditIcon />
                    </div>
                    <div className="iconbtn_miu deletebtn">
                      <DeleteIcon />
                    </div>
                    <div className="iconbtn_miu viewbtn_miu">
                      <VisibilityIcon />
                    </div> */}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>

    // <div className="book_card">
    //   <div className="card_top"></div>
    //   <div className="card_bottom">
    //     <span className="card_b_actions" title="edit book">
    //       <EditIcon className="editicon" />
    //     </span>
    //     <span className="card_b_actions" title="delete book">
    //       <DeleteIcon className="deleteicon" />
    //     </span>
    //     <span className="card_b_actions" title="save book">
    //       <BookmarkIcon className="saveicon" />
    //     </span>
    //   </div>
    // </div>
  );
};
export default BookTable;
