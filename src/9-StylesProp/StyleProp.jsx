// style prop & object, conditional rendering, switch varian, object variant

const styles = {
  title: {
    color: 'red',
  },
};
// Lets say that we want to text to change color depending from some random value
// 1) is by adding style = {} and using ternary operator directly in tag
// 2) getting ternary operator outside of tag and set it out side of function

// const pColor = (success) => (success ? "limegreen" : "crimson")

// we set parameters outside and can assigne it ot tag style

// 3) by using if statment
// const pColor = (success) => {
//   if (success) return 'limegreen';
//   return 'crimson';
// };

// 4) way not random but we can use switch

// const variantStyle = (variant) => {
//   switch (variant) {
//     case 'primary':
//       return { color: 'limegreen' };
//     case 'secondary':
//       return { color: 'orange' };
//     case 'info':
//       return { color: 'dodgerblue' };
//     case 'warn':
//       return { color: 'red' };
//     default:
//       throw new Error(`Invalid variant of ${variant}`);
//   }
// };
// lets make a function that will pick a random variant from array

// const availableVariants = ['primary', 'secondary', 'info', 'warn', 'none'];
import { randomElement } from '../utility';

// 5 or we can create a objects that hold propety of style


const variants = {
  primary: { color: 'limegreen' },
  secondary: { color: 'orange' },
  info: { color: 'dodgerblue' },
  warn: { color: 'red' },
};
const availableVariants = Object.keys(variants);

export const StyleProp = () => {
  const { title } = styles;

  const isSuccess = Math.random() > 0.5;

  const variant = randomElement(availableVariants);

// cool thing we can do is to if variant is warn we can cut off whole rest of whe site and render something else 
if (variant === "warn")
    return <h1 style={{color:"crimson"}}>WARN</h1>
  return (
    <main>
      <h1 style={styles.title}>Style Prop in React</h1>
      <h1 style={title}>Style Prop in </h1>
      <p
        style={{
          fontSize: '24px',
          // color: isSuccess ? "limegreen" : "crimson",// the 1) possibility
          // color: pColor(isSuccess) //  2) and 3)
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae
        dolores beatae vero harum? Temporibus, facere vel inventore optio
        molestias animi numquam maxime sequi corrupti obcaecati voluptatibus, ea
        accusamus vero? Tempora quo harum esse iusto ad tempore cupiditate
        veniam qui. Quae quibusdam, sapiente ab sed labore similique ut
        inventore eos nulla! Reprehenderit molestias ut corporis iusto, veniam
        distinctio officia totam! Consequuntur esse iusto totam fugiat voluptate
        praesentium fuga dolore harum fugit aliquam? Repellat pariatur vitae
        nostrum officia vero, quibusdam mollitia dicta quas quia ipsam,
        reiciendis voluptatem. Neque quibusdam qui tenetur. Ut, illo officiis
        deleniti ipsa necessitatibus voluptatibus debitis consequatur quis.
        Consectetur facere reprehenderit expedita, commodi dignissimos rerum est
        provident quis? Veritatis similique vel dolores sed a minima odio, at
        numquam. Omnis, adipisci aut deleniti voluptatibus eius voluptates
        necessitatibus modi quasi rerum. Nesciunt natus placeat blanditiis
        dolore illum doloremque quam hic, voluptates porro aliquid, voluptatibus
        unde molestiae sit nostrum officia praesentium?
      </p>
      <p>{isSuccess.toString()}</p>

      <div>
        {isSuccess ? (
          <p style={{ color: 'limegreen' }}>Success</p>
        ) : (
          <p style={{ color: 'Crimsone' }}>Failure</p>
        )}
      </div>
      <div>
        <h1>Variant {variant}</h1>
        {/* <p style={variantStyle(variant)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          ipsam quisquam molestias provident velit numquam in aspernatur!
          Quaerat omnis tempora natus possimus, atque distinctio deserunt
          reiciendis quasi hic dicta! Possimus esse minima unde mollitia,
          consectetur, odit amet, explicabo similique nulla beatae neque ullam
          laboriosam rem voluptas nihil iusto culpa! Accusamus odit quisquam
          aliquid ipsam cumque labore deleniti repudiandae minima. Corporis
          doloribus aut doloremque. Veritatis iste ipsam ducimus reiciendis,
          ipsa, optio odit dignissimos nisi quod, officia quam ipsum! Ex
          pariatur suscipit quas a minima. Impedit architecto aliquam eveniet
          veniam iste!
        </p> */}
        <p style={variants[variant]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          ipsam quisquam molestias provident velit numquam in aspernatur!
          Quaerat omnis tempora natus possimus, atque distinctio deserunt
          reiciendis quasi hic dicta! Possimus esse minima unde mollitia,
          consectetur, odit amet, explicabo similique nulla beatae neque ullam
          laboriosam rem voluptas nihil iusto culpa! Accusamus odit quisquam
          aliquid ipsam cumque labore deleniti repudiandae minima. Corporis
          doloribus aut doloremque. Veritatis iste ipsam ducimus reiciendis,
          ipsa, optio odit dignissimos nisi quod, officia quam ipsum! Ex
          pariatur suscipit quas a minima. Impedit architecto aliquam eveniet
          veniam iste!
        </p>
      </div>
    </main>
  );
};
