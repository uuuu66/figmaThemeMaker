import React from "react";
import styled from "styled-components";

export default function index(props) {
  return (
    <BoxWrapper {...props}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </BoxWrapper>
  );
}
const BoxWrapper = styled.div`
  position: absolute;

  border: 1px dot black;

  transform-style: preserve-3d;
  transform-origin: 50px 50px 50px;

  transform: rotateY(45deg) rotate(45deg);

  && :nth-child(1) {
    transform: translate3d(-50px, 0, 50px) rotateY(90deg);
    background-color: red;
  }
  && :nth-child(2) {
    transform: translate3d(0px, 0px, 0px) rotateY(180deg);
    background-color: blue;
  }
  && :nth-child(3) {
    transform: translate3d(0, 50px, 50px) rotateX(90deg);
    background-color: green;
  }
  && :nth-child(4) {
    transform: translate3d(50px, 0, 50px) rotateY(90deg);
    background-color: yellow;
  }
  && :nth-child(5) {
    transform: translate3d(0px, 0px, 100px) rotateY(180deg);
    background-color: pink;
  }
  && :nth-child(6) {
    transform: translate3d(0, -50px, 50px) rotateX(90deg);
    background-color: white;
  }
  @keyframes rotate {
    0% {
      transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
      -ms-transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
      -webkit-transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
      -o-transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
      -moz-transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
      -ms-transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
      -webkit-transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
      -o-transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
      -moz-transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
    }
  }
  animation: rotate 1.5s linear 0s infinite alternate;
`;
const Box = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  opacity: 0.5;
  left: 0;
  perspective: 300px;
  border: 1px solid black;
  background-color: blue;
`;
