import React from "react";
import { Input, Select, Space, Layout } from "antd";
import ResultCardsContainer from "@containers/cards/result-cards-container.jsx";
const SearchAndDropdown = (props) => {
  const {
    searchInput,
    dropdownValue,
    handleChangeSearchInput,
    handleChangeDropdown,
    results,
  } = props;
  return (
    <Layout
      style={{
        //display: "flex",
        //flexDirection: "column",
        alignItems: "center",
        paddingTop: results && results.length > 0 ? "0px" : "100px",
      }}
    >
      <Layout style={{ marginBottom: "20px" }}>
        <Space direction="horizontal">
          <Input
            placeholder="Enter keywords"
            onChange={(e) => handleChangeSearchInput(e.target.value)}
            value={searchInput}
          />

          <Select
            defaultValue="users"
            style={{
              width: 120,
            }}
            onChange={(value) => handleChangeDropdown(value)}
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
      </Layout>
      <ResultCardsContainer />
    </Layout>
  );
};

export default SearchAndDropdown;
