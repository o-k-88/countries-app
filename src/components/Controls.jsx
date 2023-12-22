import { useState, useEffect } from "react";
import "./Search";
import { CustomSelect } from "./CustomSelect";
import Search from "./Search";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "USA", label: "USA" },
  { value: "Austria", label: "Austria" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "Spain", label: "Spain" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
