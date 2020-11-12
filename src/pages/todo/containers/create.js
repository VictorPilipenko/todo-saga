import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/actions/todo";
import TodoCreate from "../components/create";

const TodoCreateContainer = () => {
  const [open, setOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(open);
  const [animate, setAnimate] = useState(false);
  const [inputRef, setInputRef] = useState(null);

  const dispatch = useDispatch();

  const onToggle = () => setOpen(!open);

  const handleCreatePost = e => {
    e.preventDefault();

    const data = {
      text: inputRef.value,
      done: false
    };
    dispatch(createTodo(data));
    inputRef.current = "";
    setOpen(false);
  };

  useEffect(() => {
    if (localOpen && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 110);
    }
    setLocalOpen(open);
  }, [open, localOpen]);

  return (
    <TodoCreate
      disappear={!open}
      onToggle={onToggle}
      open={open}
      localOpen={localOpen}
      animate={animate}
      setInputRef={setInputRef}
      onSubmit={handleCreatePost}
    />
  );
};

export default TodoCreateContainer;
