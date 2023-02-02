import React from "react";
import styled from "styled-components";
import { PageType } from "../../shared/enums";
import { MessageType, PageProps } from "../../shared/interfaces";
import { Types } from "../../shared/msgTypes";
import { postWindowMessage } from "../../shared/utils";
import Button from "../components/Button";

const Intro: React.FC<PageProps> = ({ setPage, page }) => {
  const handleClickFlattenButton = () => {
    const exMsg: MessageType<{}> = {
      type: Types.FLATTEN,
    };
    postWindowMessage(exMsg);
  };
  const handleClickCreateButton = () => {
    setPage(PageType.Make);
  };
  const handleClickCustomSettingButton = () => {
    const exMsg: MessageType<{}> = {
      type: Types.FLATTEN,
    };
    postWindowMessage(exMsg);
  };
  return (
    <Layout>
      <Title>mango's 테마 생성기</Title>
      <ButtonWrapper>
        <Button onClick={handleClickCreateButton}>새로 생성하기</Button>
        <Button disabled onClick={handleClickFlattenButton}>
          자동으로 색 넣기
        </Button>
        <Button disabled onClick={handleClickCustomSettingButton}>
          설정해서 색 넣기
        </Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default Intro;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  width: 100%;
`;
