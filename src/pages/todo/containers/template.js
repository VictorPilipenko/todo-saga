import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { usePageVisibility } from "../../../hooks/usePageVisibility";
import { axiosCache } from "../../../config/axios";
import { useIsFirstMount } from "../../../hooks/useIsFirstMount";

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
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
