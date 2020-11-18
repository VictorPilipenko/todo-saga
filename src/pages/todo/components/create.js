import React from "react";
import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import { Input } from "../../../common/input";
import { CircleButton } from "../../../common/button";

const slideup = keyframes`
    from {
      padding-bottom: 40px;
    }
    to {
      padding-bottom: 72px;
    }
  `;
const slidedown = keyframes`
  from {
    padding-bottom: 72px;
    opacity: 1;
  }
  to {
    padding-bottom: 0px;
    opacity: 0;
  }  
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  animation-duration: 0.125s;
  animation-timing-function: ease-out;
  animation-name: ${slideup};
  ${({ disappear }) =>
    disappear &&
    css`
      animation-name: ${slidedown};
      padding-bottom: 0px;
    `}
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const TodoCreate = ({
  localOpen,
  open,
  onToggle,
  disappear,
  animate,
  onSubmit,
  setInputRef
}) => <>
    {(localOpen || animate) && (
      <InsertFormPositioner>
        <InsertForm disappear={disappear} onSubmit={onSubmit}>
          <Input
            autoFocus
            placeholder="После ввода нажмите Enter"
            ref={setInputRef}
          />
        </InsertForm>
      </InsertFormPositioner>
    )}
    <CircleButton onClick={onToggle} open={open}>
      <MdAdd />
    </CircleButton>
  </>

export default TodoCreate;
