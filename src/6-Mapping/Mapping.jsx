const Card = ({ name, image, price }) => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300px" />
      <p>Price $ {price}</p>
    </article>
  );
};

// we could also create array

const productArray = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: 'Lego',
  image:
    'https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1',
  price: 999,
}));
export const Mapping = () => {
  // const products = [
  //     {
  //         name: "Lego",
  //         image: "https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  //         price: 999,
  //     }
  //     {
  //         name: "Lego",
  //         image: "https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  //         price: 999,
  //     }
  //     {
  //         name: "Lego",
  //         image: "https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1",
  //         price: 999,
  //     }
  // ];

  return (
    <main>
      {productArray.map((product) => (
        <Card
          //   key={i} // key dont have to be i
          //   key={product.name}// but if added multiple products with the same name this will cause error
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </main>
  );
};
