import './style.css';
import { rndBool } from '../utility';
import clsx from 'clsx';
// using clsx we can manage class composition setting it under conditions

// we can pass classes like this
// const className = clsx(
//   'first',
//   10,
//   undefined && 'second',
//   true && 'third',
//   rndBool() ? 'active' : 'inactive'
// );

// or as a objct

const isActive = rndBool();

const activeCls = isActive ? {active: true} : {inactive: true}

// const activeCls = { [isActive ? 'active' : 'inactive']: true };

const className = clsx({
  title: true,
  unused: false,
  danger: true,
  // active: rndBool(),
  // inactive: rndBool()
  ...activeCls,
});

export const Clsx = () => {
  return (
    <main>
      <h1 className={className}>Clsx</h1>
      <p>{className}</p>
    </main>
  );
};
