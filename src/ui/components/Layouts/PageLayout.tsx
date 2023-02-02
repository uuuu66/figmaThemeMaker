import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { PageType } from "../../../shared/enums";
import { PageProps } from "../../../shared/interfaces";

export interface PageLayoutProps extends PageProps {}

const PageLayout: React.FC<PageLayoutProps> = ({ children, setPage }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <StyledPageLayout>
      <StyledHeader
        onClick={() => {
          setPage(PageType.Intro);
        }}
        isHover={isHover}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <span>{`<-- `} 홈으로</span>
      </StyledHeader>
      {children}
    </StyledPageLayout>
  );
};
export default PageLayout;
const StyledPageLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  position: relative;
  overflow: hidden;
  height: 100vh;
  z-index: 100;
`;
const StyledHeader = styled.div<{ isHover: boolean }>`
  position: absolute;
  top: 0;
  width: 100px;
  height: 24px;
  display: flex;
  padding: 4px;
  font-size: 12px;
  z-index: 3;
  left: 0;
  background-color: white;
  justify-content: flex-start;
  /* border-bottom: 1px solid black; */

  cursor: pointer;
  @keyframes opacityToZero {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes opacityToOne {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  animation-name: ${({ isHover }) =>
    isHover ? "opacityToOne" : "opacityToZero"};
  animation-duration: 1s;
  animation-duration: 2s;

  animation-fill-mode: forwards;
`;
export { StyledPageLayout };
