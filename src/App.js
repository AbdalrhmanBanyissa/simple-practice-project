import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  const addNewUserHandler = (user) => {
    setUsersData((currentUsers) => [user, ...currentUsers]);
    console.log(usersData);
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
    </div>
  );
};

export default App;
