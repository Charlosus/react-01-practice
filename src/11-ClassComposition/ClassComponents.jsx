// interpolation
import './style.css';
import { rndBool } from '../utility';

// const cs = (shouldApply, className) => (shouldApply ? ' ' + className : '');

const classNames = (classes) => classes.filter(Boolean).join(" ")

export const ClassComposition = () => {
  const isDanger = rndBool();
  //   const titleClass = `title${isDanger ? " danger": ""}`
//   const titleClass = `title${cs(isDanger, 'danger')}`;
const titleClass = classNames(["title", isDanger && "danger"]) 

  return (
    <main className="card">
      <h1 className={titleClass}>Class Composition {isDanger && '(Danger)'}</h1>
    </main>
  );
};
