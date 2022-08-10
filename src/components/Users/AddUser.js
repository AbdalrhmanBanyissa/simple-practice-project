import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const { onAddUser, onCancelAddUser } = props;

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setMessage("Please enter a valid name and age (non-empty-values).");
      setShowModal(true);
      return;
    }
    if (parseInt(age) < 1) {
      setMessage("Please enter a valid age (> 0).");
      setShowModal(true);
      return;
    }
    const userData = {
      id: uuid(),
      userName,
      age: parseInt(age),
    };

    onAddUser(userData);

    setUserName("");
    setAge("");
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <ErrorModal
          onCloseModal={closeModalHandler}
          title="Invalid input"
          message={message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            id="username"
            type="text"
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input value={age} id="age" type="number" onChange={ageHandler} />
          <Button type="submit">Add User</Button>
          <Button onClick={onCancelAddUser}>Cancel</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
