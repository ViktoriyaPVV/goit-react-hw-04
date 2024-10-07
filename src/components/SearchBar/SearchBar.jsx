import React from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topik = form.elements.topik.value;
    if (form.elements.topik.value === "") {
      toast.error("Please write input value!");
      return;
    }
    handleSearch(topik);
    form.reset();
  };
  return (
    <header className={s.searchBar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          name="topik"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.formBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

