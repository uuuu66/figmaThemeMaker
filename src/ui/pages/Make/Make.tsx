import React, { useState } from "react";
import styled from "styled-components";
import { themeTypes } from "../../../shared/constants";
import { ThemeType } from "../../../shared/enums";
import { DataListType, PageProps } from "../../../shared/interfaces";
import { translateThemeType } from "../../../shared/utils";
import Box from "../../components/Box";
import Select from "../../components/Select";
import Color from "./Color";

const Make: React.FC<PageProps> = () => {
  const [themeType, setThemeType] = useState<ThemeType>(undefined);
  const handleChangeThemeType = (e: DataListType<ThemeType>) => {
    setThemeType(e.value);
  };
  const renderMakingArea = () => {
    switch (themeType) {
      case ThemeType.Color:
        return <Color />;
    }
  };
  return (
    <StyledContainer>
      <OneRow>
        유형
        <Select
          datas={themeTypes}
          value={themeType}
          onChange={handleChangeThemeType}
        />{" "}
        <Box style={{ top: "0", left: 0, position: "relative" }} />
      </OneRow>
      <StyledMakingAreaWrapper>
        <h1>{translateThemeType(themeType)}</h1>
        {renderMakingArea()}
      </StyledMakingAreaWrapper>
    </StyledContainer>
  );
};
export default Make;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 24px 0px;
`;
const OneRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const StyledMakingAreaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  h1 {
    width: 100%;
    text-align: center;
    font-size: 24px;
  }
`;
