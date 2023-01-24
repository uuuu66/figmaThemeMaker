import React, { useState } from "react";
import styled from "styled-components";
import { DataListType } from "../../../shared/interfaces";
import { ReactComponent as Smile } from "../../../assets/smile.svg";
import { ReactComponent as Heart } from "../../../assets/heart.svg";
import { ReactComponent as Wink } from "../../../assets/wink.svg";
import { useEffect } from "react";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export interface SelectProps {
  datas?: DataListType[];
  value?: any;
  onChange?: (e: DataListType<any>) => void;
  disabled?: boolean;
  defaultOpen?: boolean;
}

const Select: React.FC<SelectProps> = ({
  datas = [],
  value = "",
  onChange,
  defaultOpen = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const [isHover, setHover] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const handleHoverEvent = (isHover: boolean) => {
    setHover(isHover);
  };
  const handleClickListItem = (
    e: React.MouseEvent,
    value?: DataListType<any>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);

    onChange(value);
  };
  useDidMountEffect(() => {
    setIsClose(!isOpen);
  }, [isOpen]);
  return (
    <Container>
      <InputWrapper
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>
          {value
            ? datas.find((val) => val.value === value)?.label || value
            : "선택"}
        </span>
        <StyledButton
          onMouseLeave={(e) => {
            e.preventDefault();
            handleHoverEvent(false);
          }}
          onMouseEnter={(e) => {
            e.preventDefault();
            handleHoverEvent(true);
          }}
        >
          {/* {isHover ? <Wink /> : isOpen ? <Heart /> : <Smile />} */}
        </StyledButton>
      </InputWrapper>

      {!isClose ? (
        isOpen && (
          <List isOpen={isOpen}>
            {datas.map((val) => (
              <ListItem
                isSelect={val.value === value}
                onClick={(e) => {
                  handleClickListItem(e, val);
                }}
                key={val.value}
              >
                {val.label}
              </ListItem>
            ))}
          </List>
        )
      ) : (
        <FadeList>
          {" "}
          {datas.map((val) => (
            <ListItem
              isSelect={val.value === value}
              onClick={(e) => {
                handleClickListItem(e, val);
              }}
              key={val.value}
            >
              {val.label}
            </ListItem>
          ))}
        </FadeList>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 140px;
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  z-index: 2;
  outline: 0 none;

  background: white;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid black;
  width: 100%;
  border-radius: 4px;
  z-index: 2;
  span {
    min-width: 100px;
    line-height: 32px;
    background-color: white;
    height: 32px;
    padding: 4px;
    cursor: pointer;
  }
`;
const List = styled.ul<{ isOpen: boolean }>`
  margin: 0;
  padding: 0;
  border: 1px solid gray;
  font-size: 100%;
  list-style: none;
  font: inherit;
  width: 100%;
  border-radius: 4px;
  position: absolute;
  top: 44px;
  z-index: 1;
  opacity: 0;
  transform: translateY(-100px) scaleY(0);
  vertical-align: baseline;
  @keyframes fadeIn {
    0% {
      transform: translateY(-100px) scaleY(0);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      transform: translateY(0px) scaleY(1);
      opacity: 1;
      display: none;
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: translateY(-100px) scaleY(0);
      opacity: 0;
    }
  }
  background-color: white;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;
const FadeList = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid gray;
  font-size: 100%;
  list-style: none;
  font: inherit;
  width: 100%;
  border-radius: 4px;
  position: absolute;
  top: 44px;
  z-index: 1;
  vertical-align: baseline;
  opacity: 1;
  @keyframes fadeOut {
    0% {
      transform: translateY(0px) scaleY(1);
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) scaleY(0);
      opacity: 0;
    }
  }
  animation-name: fadeOut;
  animation-duration: 0.4s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;
const ListItem = styled.li<{ isSelect?: boolean }>`
  margin: 0;
  padding: 4px;
  border: 0;
  font-size: 100%;
  cursor: pointer;
  color: ${({ isSelect }) => (isSelect ? "red" : "black")};
  font-weight: ${({ isSelect }) => (isSelect ? 800 : 400)};
  font: inherit;
  vertical-align: baseline;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export default Select;
