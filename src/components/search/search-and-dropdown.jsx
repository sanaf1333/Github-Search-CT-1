import React, { useState, useCallback, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select, Space } from "antd";
import useDebouncedCallback from "./debounce.jsx";
import {
  fetchProducts,
  clearResults,
} from "../../redux-store/reducers/result-slice.jsx";
import {
  setDropdown,
  setSearch,
} from "../../redux-store/reducers/search-slice.jsx";
import ResultCards from "../cards/result-cards.jsx";

const SearchAndDropdown = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");

  const handleSearchInput = useDebouncedCallback(
    useCallback(
      (value) => {
        dispatch(setSearch(value));
        dispatch(setDropdown(dropdownValue));
        if (value.length >= 3) {
          const url = `${dropdownValue}?q=${value}`;
          dispatch(fetchProducts(url));
        } else {
          dispatch(clearResults());
        }
      },
      [dispatch, dropdownValue]
    ),
    500
  );

  const handleSearchDropdown = useDebouncedCallback(
    useCallback(
      (value) => {
        dispatch(setSearch(searchInput));
        dispatch(setDropdown(value));
        if (searchInput.length >= 3) {
          const url = `${value}?q=${searchInput}`;
          dispatch(fetchProducts(url));
        } else {
          dispatch(clearResults());
        }
      },
      [dispatch, searchInput]
    ),
    500
  );

  function handleChangeDropdown(value) {
    setDropdownValue(value);
    dispatch(setSearch(searchInput));
    dispatch(setDropdown(value));
    const url = `${value}?q=${searchInput}`;
    handleSearchDropdown(value);
  }

  function handleChangeSearchInput(e) {
    setSearchInput(e.target.value);
    dispatch(setSearch(e.target.value));
    dispatch(setDropdown(dropdownValue));
    const url = `${dropdownValue}?q=${e.target.value}`;
    handleSearchInput(e.target.value);
  }

  const { data: results, status } = useSelector((state) => state.result);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: results.length ? "0px" : "100px",
      }}
    >
      <div>
        <Space direction="horizontal">
          <Input
            placeholder="Enter keywords"
            onChange={handleChangeSearchInput}
            value={searchInput}
          />

          <Select
            defaultValue="users"
            style={{
              width: 120,
            }}
            onChange={handleChangeDropdown}
            value={dropdownValue}
            options={[
              {
                value: "users",
                label: "users",
              },
              {
                value: "repositories",
                label: "repositories",
              },
              {
                value: "issues",
                label: "issues",
              },
            ]}
          />
        </Space>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}
      />
      <Suspense fallback={<div>Loading...........</div>}>
        <ResultCards />
      </Suspense>
    </div>
  );
};

export default SearchAndDropdown;
