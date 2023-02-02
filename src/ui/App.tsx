import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PageType } from "../shared/enums";

import Box from "./components/Box";
import PageLayout from "./components/Layouts/PageLayout";
import Intro from "./pages/Intro";
import Make from "./pages/Make/Make";

const App: React.FC = () => {
  const [page, setPage] = useState<PageType>(PageType.Intro);

  const renderPage = useCallback(() => {
    const defaultPageProps = { page, setPage };
    switch (page) {
      case PageType.Make:
        return <Make {...defaultPageProps} />;

      case PageType.Intro:
      default:
        return <Intro {...defaultPageProps} />;
    }
  }, [page]);
  return (
    <PageLayout setPage={setPage} page={page}>
      <WaveWrapper>
        <Wave />
      </WaveWrapper>
      {renderPage()}
    </PageLayout>
  );
};

export default App;
const rotate = keyframes`
 100%{
  transform: rotate(360deg);
 }
`;
const Wave = styled.div`
  background: rgb(63, 248, 251);
  background: radial-gradient(circle, #30d0bd 0%, #0090c4ef 34%, #00091f6c 70%);
  width: 2000;
  height: 2000;
  border-radius: 42% 54% 76% 65%;
  transform-origin: 54% 46%;
  animation: ${rotate} infinite 6s;
`;

const WaveWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 500;
  left: -500;
  width: 100%;
  z-index: -100;
`;
