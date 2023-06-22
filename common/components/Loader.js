// Mui
import React from "react";
import styled from "@emotion/styled";

// Mui Icons
import CircularProgress from "@mui/material/CircularProgress";

// Utils
import { Colors } from "../utils/constants";

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1003;
  width: auto;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};

  ${(props) =>
    props.fullscreen &&
    `
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${Colors.greyLight};     
    `}

  .loader {
    ${(props) =>
      props.light
        ? `
            color: ${Colors.white};
        `
        : `
            color: ${Colors.primary};
        `}
  }
`;

const Loader = ({
  fullscreen,
  width = "auto",
  height,
  light,
  size = 24,
  ...rest
}) => {
  return (
    <LoaderContainer
      fullscreen={fullscreen}
      width={width}
      height={height}
      light={light}
    >
      <CircularProgress size={size} className="loader" {...rest} />
    </LoaderContainer>
  );
};

export default Loader;
