import React, { useState, useCallback, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select, Space } from "antd";
import useSearchHandlers from "./search-handlers-container.jsx";
import ResultCards from "../cards/result-cards.jsx";
const SearchAndDropdown = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");
  const { handleSearchInput, handleSearchDropdown } = useSearchHandlers();

  function handleChangeDropdown(value) {
    setDropdownValue(value);
    handleSearchDropdown(value, searchInput);
  }

  function handleChangeSearchInput(e) {
    setSearchInput(e.target.value);
    handleSearchInput(e.target.value, dropdownValue);
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
