import React from "react";

const User = (props) => {
  const { data } = props;
  return (
    <>
      {data.userName} ({data.age} years old)
    </>
  );
};

export default User;
