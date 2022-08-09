import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const { onAddUser } = props;
  const [userName, setUserName] = useState("");

  const [age, setAge] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.length === 0 || age.length === 0) return;
    const userData = {
      id: uuid(),
      userName,
      age,
    };

    onAddUser(userData);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
