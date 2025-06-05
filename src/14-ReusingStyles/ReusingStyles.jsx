// exporting, variant components -> specific components

// import { Children } from 'react';

const css = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  danger: {
    backgroundColor: 'red',
    color: 'white',
  },
  info: {
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
};
// const Button = (props) => <button className="btn">{props.children}</button>;
// 2) but what we can do difriently is by creating one uniqe button that can be modifiable

// const Button = ({ children, variant }) => (
//   <button className="btn" style={css[variant]}>
//     {children}
//   </button>
// );

// 3) Lets create button that will recive children and boolean value named danger or if danger not detectet to be info

// const Button = ({ children, danger }) => {
//   const variant = danger ? 'danger' : 'info';
//   return (
//     <button className="btn" style={css[variant]}>
//       {children}
//     </button>
//   );
// };

// // 4) we can also utilize clsx lib
// import clsx from 'clsx';
// import './Styles.css';

// const Button = ({ children, info, danger }) => {
//   const className = clsx({
//     btn: true,
//     info,
//     danger,
//   });
//   return <button className={className}>{children}</button>;
// };

const Button = ({ children, variant }) => (
  <button className="btn" style={css[variant]}>
    {children}
  </button>
);

// const DangerButton = ({ children }) => (
//   <Button variant="danger">{children}</Button>
// );

-0

const InfoButton = ({ children }) => <Button variant="info">{children}</Button>;
export const ReusingStyles = () => {
  return (
    <main>
      <h1>ReusingStyles</h1>
      <div style={css.column}>
        {/* <Button info>Hello There</Button>
        <Button danger>Hello There</Button>
        <Button danger={false}>Hello There</Button> */}

        {/* <DangerButton>Danger</DangerButton> */}
        <InfoButton>Info</InfoButton>
      </div>
    </main>
  );
};
