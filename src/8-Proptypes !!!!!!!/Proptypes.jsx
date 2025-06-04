// if we would like to defined what props we needed to create components we can use
// packeg proptype

// to instal it use this on cmd

//npm install prop-types

// this will add packege of node liblary Proptype

//then we need to add

// import from this package in component we want to use it

import PropTypes from 'prop-types'; // when importing from node module we dont need to add path to it

// now lets declare our component
const Card = ({ name, image, price }) => {
  console.warn('Props:', { name, image, price });
  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300px" />
      <p>Price $ {price}</p>
    </article>
  );
  
};

// and lets define what type of props is expeted by this component to render

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export const CompWithPropTypes = () => (
  <>
    <Card />
  </>
);

// now if we would try to render component with out data we will recive
