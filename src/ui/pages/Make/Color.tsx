import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { MessageType } from "../../../shared/interfaces";
import { Types } from "../../../shared/msgTypes";
import { postWindowMessage } from "../../../shared/utils";
import Button from "../../components/Button";
export interface CreateColorMsgValue {
  values?: string[];
  number?: number;
  group?: string;
  primaryIndex?: number;
}
const Color: React.FC = () => {
  const [numberInputValue, setNumberInputValue] = useState<number>(7);
  const [colorsInputValue, setColorsInputValue] = useState<string>(
    "#800012,#a50202,#62021c,#2f0502"
  );
  const [groupInputValue, setGroupInputValue] = useState<string>("colors");
  const [number, setNumber] = useState<number>(7);
  const [values, setValues] = useState<string[]>([
    "#800012",
    "#a50202",
    "#62021c",
    "#2f0502",
  ]);
  const [group, setGroup] = useState<string>("colors");
  const [primaryIndex, setPrimaryIndex] = useState<number>(3);
  const [openIndex, setOpenIndex] = useState<number>();
  const renderInputs = () => {
    const renders = [];
    for (let i = 0; i < number; i += 1) {
      renders.push(
        <ColorCard
          onClick={() => {
            if (i === primaryIndex) setPrimaryIndex(undefined);
            else setPrimaryIndex(i);
          }}
          isPrimary={i === primaryIndex}
          key={i + "인풋"}
        >
          <ColorRectangle
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (i === openIndex) setOpenIndex(undefined);
              else setOpenIndex(i);
            }}
            color={values[i]}
          >
            {i === primaryIndex ? (
              <PrimaryText>
                <span> primary</span>
              </PrimaryText>
            ) : null}
            {openIndex === i && (
              <PopOverWrappser>
                <HexColorPicker
                  color={values[i]}
                  onChange={(color) => {
                    const newValues = [...values];
                    newValues[i] = color;
                    setValues(newValues);
                  }}
                ></HexColorPicker>
              </PopOverWrappser>
            )}
          </ColorRectangle>
          <ColorGroupWrapper>{group + (i + 1)}</ColorGroupWrapper>
          <input
            value={values[i] || ""}
            onChange={(e) => {
              e.stopPropagation();
              const newValues = [...values];
              newValues[i] = e.currentTarget.value;
              setValues(newValues);
            }}
            data-coloris
          />
        </ColorCard>
      );
    }
    return renders;
  };
  const handleClickCreateButton = (e: React.MouseEvent) => {
    e.preventDefault();
    const exMsg: MessageType<CreateColorMsgValue> = {
      type: Types.CREATE_COLOR,
      value: {
        group,
        values,
        primaryIndex,
        number,
      },
    };
    postWindowMessage(exMsg);
  };
  return (
    <>
      <Container>
        <OneRow>
          {" "}
          <label htmlFor="number">개수</label>
          <Explain>생성할 색상(사각형)의 개수를 정하세요</Explain>
          <input
            id="number"
            onChange={(e) => {
              if (!isNaN(Number(e.currentTarget.value))) {
                if (Number(e.currentTarget.value) <= 16)
                  setNumberInputValue(Number(e.currentTarget.value));
              }
            }}
            value={numberInputValue}
          />
          <Button
            size="small"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setNumber(numberInputValue);
            }}
          >
            적용
          </Button>
        </OneRow>
        <OneRow>
          <label htmlFor="color">색상</label>{" "}
          <Explain>
            생성할 색상(!코드!)을 ','나 띄어쓰기로 분리해서 적으세요{" "}
          </Explain>
          <input
            id="color"
            onChange={(e) => {
              setColorsInputValue(e.currentTarget.value);
            }}
            value={colorsInputValue}
          />
          <Button
            size="small"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              let colors = colorsInputValue.split(",");
              if (colors.length === 1) colors = colorsInputValue.split(" ");
              for (let i = 0; i < number; i += 1) {
                if (!colors[i]) colors.push("");
              }
              setValues(colors);
            }}
          >
            적용
          </Button>
        </OneRow>
        <OneRow>
          <label htmlFor="color">그룹명</label>{" "}
          <Explain>생성할 색상들의 그룹명을 적으세요 </Explain>
          <input
            id="color"
            onChange={(e) => {
              setGroupInputValue(e.currentTarget.value);
            }}
            value={groupInputValue}
          />
          <Button
            size="small"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setGroup(groupInputValue);
            }}
          >
            적용
          </Button>
        </OneRow>
        <Row>
          <label>{group}</label>
          {renderInputs()}
        </Row>
      </Container>
      <ButtonWrap>
        <Button onClick={handleClickCreateButton} size="large">
          생성하기
        </Button>
      </ButtonWrap>
    </>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px dotted gray;
  border-radius: 4px;
  padding: 8px;
  flex-direction: column;
  gap: 8px;
`;
const OneRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  align-items: center;

  & > input {
    flex: 1 0 300px;
  }
  & > label {
    flex: 0 0 104px;
  }
`;
const Row = styled.div`
  display: flex;

  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  & > label {
    flex: 0 0 104px;
  }
`;
const ButtonWrap = styled(Row)`
  justify-content: center;
  max-width: 1000px;
  padding: 24px;
`;
const ColorCard = styled.div<{ isPrimary?: boolean }>`
  display: flex;
  justify-content: space-between;
  max-width: 60px;
  align-items: center;

  flex-direction: column;
  border: 1px solid black;
  padding: 2px;
  width: 60px;
  height: 90px;
  cursor: pointer;
  background-color: ${({ isPrimary }) => (isPrimary ? "#e4e48b" : "white")};
  & > input {
    width: 40px;
  }
`;

const ColorRectangle = styled.div<{ color: string }>`
  background-color: ${({ color }) => color || "gray"};
  width: 54px;
  height: 54px;
  border-radius: 8px;
  position: relative;
`;
const PrimaryText = styled.span`
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  font-size: 12px;
  span {
    background-color: black;
    color: white;
  }
`;
const Explain = styled.div`
  color: #c0c0c0;
  font-size: 12px;
  flex: 1 0 0;
`;
const ColorGroupWrapper = styled.div`
  width: 40px;
  color: black;
  font-size: 12px;
  height: 20px;
  text-align: center;
  overflow-x: auto;
  word-break: keep-all;
  white-space: nowrap;
`;
const PopOverWrappser = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;
export default Color;
