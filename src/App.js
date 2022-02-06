import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      // Getting the previous state before adding the new state snapshot in order for react to remember.
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <section>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </section>
  );
}

export default App;
