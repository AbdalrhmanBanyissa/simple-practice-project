import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Button from "./components/UI/Button";
import Card from "./components/UI/Card";
import styles from "./App.module.css";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  const addNewUserHandler = (user) => {
    setUsersData((currentUsers) => [user, ...currentUsers]);
    setShowInputForm(false);
  };

  const cancelAddUserHandler = () => {
    setShowInputForm(false);
  };

  const showInputFormHandler = () => {
    setShowInputForm(true);
  };

  const addUserView = showInputForm ? (
    <AddUser
      onAddUser={addNewUserHandler}
      onCancelAddUser={cancelAddUserHandler}
    />
  ) : (
    <Card className={styles.input}>
      <Button className={styles.button} onClick={showInputFormHandler}>
        Add New User
      </Button>
    </Card>
  );

  return (
    <div>
      {addUserView}
      {usersData.length > 0 && <UsersList usersData={usersData} />}
    </div>
  );
};

export default App;
