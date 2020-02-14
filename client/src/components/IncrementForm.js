import React from "react";
import { useInput } from "../helpers/useInput";

export const IncrementForm = () => {
  const { value, bind, reset } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting value: ${value}`);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Increment by: <input type="text" {...bind} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
