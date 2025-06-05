// to use react icons we need to download npm package

// npm install react-icons --save

// now we can import icons from site
// https://react-icons.github.io/react-icons/icons/vsc/

// to import icon use its name from site

import { HiMenu } from 'react-icons/hi';
import { VscAzure } from 'react-icons/vsc';
import { VscCommentUnresolved } from 'react-icons/vsc';

// icons can be change as we wish in size colors or anything
// now lets create component that stores icons and display chosen icon depending on input

const Icon = ({ type }) => {
  const size = 256;
  switch (type) {
    case 'hamburger':
      return <HiMenu size={size} color="red" />;
    case 'azure':
      return <VscAzure size={size} color="orange" />;
    case 'comment':
      return <VscCommentUnresolved size={size} color="goldenrod" />;
    default:
      return <HiMenu size={100} color="goldenrod" />;
  }
};
export const ReactIcons = () => {
  return (
    <main>
      <h1>ReactIcons</h1>
      <Icon type="hamburger" />
      <Icon type="azure" />
      <Icon type="comment" />
      <Icon />
    </main>
  );
};
