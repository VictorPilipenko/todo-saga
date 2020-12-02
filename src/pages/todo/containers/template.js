import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { usePageVisibility } from "../../../hooks/usePageVisibility";
import { axiosCache } from "../../../config/axios";
import { useIsFirstMount } from "../../../hooks/useIsFirstMount";

const TemplateBlock = styled.div`
  max-width: 512px;
  position: relative;
  margin: 0 auto;
`;

const Template = ({ children, callOnPageVisibility }) => {
  const dispatch = useDispatch()
  const isFirstMount = useIsFirstMount()
  const isVisible = usePageVisibility()

  useEffect(() => {
    if (
      typeof callOnPageVisibility === "function" &&
      isVisible &&
      !isFirstMount
    ) {
      console.log(`${callOnPageVisibility?.name} from Template on usePageVisibility hook by isVisible === true`)
      axiosCache.reset()
      dispatch(callOnPageVisibility())
    }
  }, [isVisible]) // eslint-disable-line

  return <TemplateBlock>{children}</TemplateBlock>
}

export default Template;
