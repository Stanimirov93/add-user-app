import React, { useState, useRef } from "react"; // No point in using useState just to read values on every key stroke.
// Ref hooker is better for this.
// Ref = less code than State, but State is cleaner and components are controlled instead of uncontrolled,
// because we are feeding values with every stroke to the value attribute in the input.

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef(); // Holding the default name input stored as value when clicking the form button.
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } // Check if something is entered inside the inputs before continuing.

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age.",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    console.log(enteredUserName, enteredUserAge);
    props.onAddUser(enteredUserName, enteredUserAge); // Calling the "addUserHandler" function from App.js
    // And passing these stored values from the "addUserHandler" function here to there.

    nameInputRef.current.value = ""; // Resetting the form input name value.
    ageInputRef.current.value = ""; // Not a good idea to do this, but it's ok.
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {
        //If there is error display this:
        error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
