import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginateProps {
  itemsPerPage: number;
  items: Array<any>;
  setCurrentData: (data: Array<any>) => void;
}

const Paginate: React.FC<PaginateProps> = (props) => {
  const { itemsPerPage, items, setCurrentData } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setCurrentData(currentItems);
    // eslint-disable-next-line
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setCurrentData(
      items.slice(newOffset, newOffset + itemsPerPage) as Array<any>
    );

    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-row justify-center p-3 mt-3">
      <ReactPaginate
        className="flex flex-row gap-3"
        breakLabel="..."
        nextLabel={<FaAngleRight />}
        nextClassName={"previous-next-link"}
        previousClassName={"previous-next-link"}
        pageClassName={"page-number"}
        activeClassName={"page-number-active"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<FaAngleLeft />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Paginate;
