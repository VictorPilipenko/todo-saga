import { useEffect } from "react";
import { usePageVisibility } from "../../../../hooks/usePageVisibility";
import { axiosCache } from "../../../../config/axios";
import { useIsFirstMount } from "../../../../hooks/useIsFirstMount";
import { TemplateBlock } from "./index.styled";

const Template = ({ children, callOnPageVisibility }) => {
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
      callOnPageVisibility()
    }
  }, [ // eslint-disable-line
    isVisible, 
    // isFirstMount,
    // callOnPageVisibility, 
  ]) 

  return <TemplateBlock>{children}</TemplateBlock>
}

export default Template
