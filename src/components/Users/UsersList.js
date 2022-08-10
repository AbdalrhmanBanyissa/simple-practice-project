import React from "react";

import User from "./User";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const { usersData } = props;
  return (
    <Card className={styles.users}>
      <ul>
        {usersData.map((data) => (
          <li key={data.id}>
            <User data={data} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
