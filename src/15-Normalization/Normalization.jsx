import 'modern-normalize';

// its important to do normalization when working on difirent brosers but some

const links = ['First', 'Second', 'Third'];

export const Normalization = () => {
  return (
    <main>
      <h1>Normalization</h1>
      <button>Click me</button>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};
