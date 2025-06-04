const ChildlessComp = () => <p>Static text</p>;
// such components cant recive childs whatever we put between tags will not be used to

// to make it posible we need to pass children as props
const CompWithChildren = ({ children }) => <p>{children}</p>;

// we can put children any where in components
const ChildrenBefore = ({ children }) => (
  <>
    {children}
    <h1>I have children on my back</h1>
  </>
);
export const Children = () => (
  <>
    <h1>Child prop</h1>

    <ChildlessComp> I am childless components</ChildlessComp>

    <CompWithChildren>I am a component with child</CompWithChildren>

    <ChildrenBefore>
      <p>First</p>
      <p>Second</p>
    </ChildrenBefore>
  </>
);

// but we need to be aware that if we make component that can recive
//  children and make it empty element will still be present in DOM
