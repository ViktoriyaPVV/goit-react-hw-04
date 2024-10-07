import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={handleChangePage}
        className={s.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
