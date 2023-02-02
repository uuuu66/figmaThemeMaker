import React from "react";
import styled from "styled-components";

export default function index() {
  return (
    <CanWrapper>
      <LidTopWrapper>
        <LidTop></LidTop>
        <LidTop></LidTop>
        <LidTop></LidTop>
        <LidTop></LidTop>
      </LidTopWrapper>
      <WallWrap>
        <Wall />
        <Wall />
        <Wall />
        <Wall />
        <Wall />
        <Wall />
        <Wall />
        <Wall />
      </WallWrap>
      <LidBottomWrapper>
        <LidBottom />
        <LidBottom />
        <LidBottom /> <LidBottom />
      </LidBottomWrapper>
    </CanWrapper>
  );
}
const CanWrapper = styled.div`
  transform-style: preserve-3d;
  transform-origin: 50px 200px;
  margin-left: 200px;
  transform: rotateX(20deg);
  margin-top: 100px;
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      -webkit-transform: rotateY(0deg);
      -o-transform: rotateY(0deg);
      -moz-transform: rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      -webkit-transform: rotateX(360deg);
      -o-transform: rotateX(360deg);
      -moz-transform: rotateX(360deg);
    }
  }
  animation: rotate 1.5s linear 0s infinite alternate;
`;
const LidTopWrapper = styled.div`
  transform-style: preserve-3d;

  position: relative;
  opacity: 1;

  transform: translate3d(0px, 400px, -130px) rotateX(90deg);
  && :nth-child(1) {
    background-color: gray;
  }
  && :nth-child(2) {
    background-color: gray;
    transform: rotateZ(90deg);
  }
  && :nth-child(3) {
    background-color: gray;
    transform: rotateZ(45deg);
  }
  && :nth-child(4) {
    background-color: gray;
    transform: rotateZ(-45deg);
  }
`;
const LidTop = styled.div`
  width: 100px;
  height: 250px;
  background-color: blue;
  top: 0;
  position: absolute;
  perspective: 400px;
  opacity: 1;
`;
const LidBottom = styled.div`
  width: 100px;
  height: 250px;
  top: 0;
  background-color: gray;
  position: absolute;
  perspective: 400px;
  opacity: 1;
`;
const LidBottomWrapper = styled.div`
  transform-style: preserve-3d;
  transform: translate3d(0px, 0px, -130px) rotateX(90deg);
  position: relative;
  perspective: 400px;
  && :nth-child(1) {
    background-color: black;
    transform: rotateZ();
  }
  && :nth-child(2) {
    background-color: black;
    transform: rotateZ(90deg);
  }
  && :nth-child(3) {
    background-color: black;
    transform: rotateZ(45deg);
  }
  && :nth-child(4) {
    background-color: black;
    transform: rotateZ(-45deg);
  }
`;
const Z = `120px`;

const WallWrap = styled.div`
  position: relative;
  transform-style: preserve-3d;
  && :nth-child(1) {
    background-color: red;
    transform: rotateY(135deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(2) {
    background-color: red;
    transform: rotateY(270deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(3) {
    background-color: red;
    transform: rotateY(405deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(4) {
    background-color: red;
    transform: rotateY(540deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(5) {
    background-color: red;
    transform: rotateY(675deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(6) {
    background-color: red;
    transform: rotateY(810deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(7) {
    background-color: red;
    transform: rotateY(945deg) translate3d(0px, 0px, ${Z});
  }
  && :nth-child(8) {
    background-color: red;
    transform: rotateY(1080deg) translate3d(0px, 0px, ${Z});
  }
`;
const Wall = styled.div`
  transform-style: preserve-3d;
  width: 100px;
  opacity: 1;
  height: 400px;
  position: absolute;
  top: 0;
  background-color: red;
  perspective: 400px;
`;
