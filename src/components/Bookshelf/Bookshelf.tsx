import React from "react";
import "./bookshelf.scss";
import BookTable from "../bookcard/BookTable";
type BookshelfProps = {};

const Bookshelf: React.FC<BookshelfProps> = () => {
  return (
    <div className="bookshelf_container">
      <div className="bookshelf_left">
        <h1 className="bookshelf_title left_title">Books</h1>
        <div className="bookshelf_table">
          <BookTable />
        </div>
      </div>
      <div className="bookshelf_right ">
        <h1 className="bookshelf_title right_title">Book details</h1>
        <div className="details"></div>
      </div>
    </div>
  );
};
export default Bookshelf;
