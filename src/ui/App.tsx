import React, { useCallback, useState } from "react";
import { PageType } from "../shared/enums";
import { MessageType } from "../shared/interfaces";
import { Types } from "../shared/msgTypes";
import { postWindowMessage } from "../shared/utils";
import Button from "./components/Button";
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
      {renderPage()}
    </PageLayout>
  );
};

export default App;
