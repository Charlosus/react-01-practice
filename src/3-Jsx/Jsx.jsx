import React from 'react';
const text = 'Redtext';
const Redtext = () => <p className="red"> {text}</p>;

export const Jsx = () => {
  return (
    <React.Fragment>
      <Redtext />
      <Redtext />
      <Redtext />
      <>
        <Redtext />
        <Redtext />
        <Redtext />
      </>
    </React.Fragment>
  );
};
