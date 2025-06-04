const UserAvatar = () => {
  const avatar =
    'https://cdn.mos.cms.futurecdn.net/nyU6UyNw4B4QVLj69n5hbe-1200-80.jpg';

  return (
    <article>
      <h1>Grogu</h1>
      <img
        src={avatar}
        alt="Baby Joda"
        width="300px"
        style={{ borderRadius: '50%' }}
      />
    </article>
  );
};

// lests 50/50 chance for user to be online

export const ConditionalRendering = () => {
  const isLoggedIn = Math.random() > 0.5;
  // const isLoggedIn = false;

  // we can also add our condtion to const and just use const in 37 line
  //   const avatar = isLoggedIn ? <UserAvatar /> : "No avatar";

  // other way is to use early return
  if (isLoggedIn) return <UserAvatar />;
  return null;
  //   return (
  //     <main>
  //       {/* {isLoggedIn && <UserAvatar />} */}

  //       {/* {isLoggedIn ? <UserAvatar/> : null}  */}

  //       {/* {isLoggedIn ? <UserAvatar/> : "User not logged in!"}  */}

  //       {/* {isLoggedIn ? <UserAvatar/> : <p>"User non loged in!'</p>}  */}

  //       {/* {avatar}  */}
  //     </main>
  //   );
};

// to render many posible icons we can use swith for example to render elements

// const renderIcon = (iconName) => {
//   switch (iconName) {
//     case 'star':
//       return <Star />;
//     case 'heart':
//       return <Heart />;
//     default:
//       return null;
//   }
// };
