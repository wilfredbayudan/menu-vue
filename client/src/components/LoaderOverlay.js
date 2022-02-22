import React from 'react';
import styled from 'styled-components'
import { primaryColor } from "../styles/colorList";

const LoaderContainer = styled.div`
  position: fixed;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 4px;
  z-index: 9999999999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid ${primaryColor};
  width: 80px;
  height: 80px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const StatusSpan = styled.span`
  margin-top: 10px;
  color: #ffffff;
`;

const LoaderOverlay = ({ loaderStatus }) => {
  if (loaderStatus) {
    return (
      <LoaderContainer>
        <Spinner />
        <StatusSpan>{loaderStatus}</StatusSpan>
      </LoaderContainer>
    )
  } else {
    return null;
  }
}

export default LoaderOverlay;