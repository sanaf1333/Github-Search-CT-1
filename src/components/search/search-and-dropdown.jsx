import React, { Suspense } from "react";
import { Input, Select, Space } from "antd";
import ResultCards from "@components/cards/result-cards.jsx";
import { useSelector } from "react-redux";
const SearchAndDropdown = (props) => {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: props.results.length>0 ? "0px" : "100px",
      }}
    >
      <div>
        <Space direction="horizontal">
          <Input
            placeholder="Enter keywords"
            onChange={(e) => props.handleChangeSearchInput(e.target.value)}
            value={props.searchInput}
          />

          <Select
            defaultValue="users"
            style={{
              width: 120,
            }}
            onChange={(value) => props.handleChangeDropdown(value)}
            value={props.dropdownValue}
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
