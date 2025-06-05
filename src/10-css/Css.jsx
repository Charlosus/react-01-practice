// 1) Passing css style sheets by link to component but in doesent work well
// 2) adding import from stylesheet work better

import { randomElement } from '../utility';
import './styles.css'; // but its problematic also
// styles from this import can affect whole document not only our component

// lets add other paragraf and randomize its class

const classVariants = ['danger', 'info'];

export const Css = () => {
  // here we will pick random class
  const cls = randomElement(classVariants);
  return (
    <main>
      {/* <link rel="stylesheet" href="./src/10-css/styles.css" /> */}

      <h1 className="danger">
        CSS <span className={cls}>{cls}</span>
      </h1>

      <p className="danger">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        tenetur, voluptate itaque commodi fugit molestias voluptatem minima
        perspiciatis ipsam tempora vitae a magni iusto odit quas doloribus,
        culpa harum id! Provident odio enim aliquam recusandae quas assumenda
        similique fugiat exercitationem laudantium quo facere aliquid ab, ad
        esse, ducimus illum deserunt, temporibus blanditiis eaque? Et, ab quod!
        Nemo nobis doloremque eos.
      </p>
      <p className={cls}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        tenetur, voluptate itaque commodi fugit molestias voluptatem minima
        perspiciatis ipsam tempora vitae a magni iusto odit quas doloribus,
        culpa harum id! Provident odio enim aliquam recusandae quas assumenda
        similique fugiat exercitationem laudantium quo facere aliquid ab, ad
        esse, ducimus illum deserunt, temporibus blanditiis eaque? Et, ab quod!
        Nemo nobis doloremque eos.
      </p>
    </main>
  );
};
