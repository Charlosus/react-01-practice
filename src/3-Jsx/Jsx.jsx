import React from 'react';
const text = 'Redtext';

// adding className added class declared in index.css to our comopnent
// const Redtext = () => <p className="red"> {text}</p>;

// we can also declera object describing styles

const textStyles = {
  textDecoration: 'underline', // styles are written in camelCase with out -
};
// and add it in our component declaration

const Redtext = () => (
  <p className="red" style={textStyles}>
    {text}
  </p>
);

// such added style will be added to <p> as inline style so there might be problem with specifity
// we need to be aware of that

export const Jsx = () => {
  // in object we can add const and pass its value to created component
  const title = 'hello from Jsx ';
  return (
    <React.Fragment>
      <h1>{title}</h1>
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
