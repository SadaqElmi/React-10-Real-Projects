import React from "react";
//event

//
//const Button = (e) => {
//  const handleClick = (a, b) => {
//    console.log(a + b);
//  };
//  return <button onClick={() => handleClick(2, 2)}>Click</button>;
//};

//const Copy = () => {
//  const copyHandler = () => {
//    alert("don't copy");
//  };
//  return (
//    <>
//      <p onCopy={copyHandler}>
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem
//        harum commodi reprehenderit cupiditate labore placeat? Non veniam enim,
//        placeat soluta, itaque consequuntur vero ipsam quo dicta voluptatibus ad
//        nostrum! Ipsa iusto pariatur cupiditate soluta ratione numquam quos!
//        Possimus nam molestias impedit ut mollitia modi ab, commodi, magni
//        adipisci explicabo qui ratione facere, provident fuga consectetur enim
//      </p>
//    </>
//  );
//};

//const Movie = () => {
//  const moveHandler = () => {
//    console.log("Don't Move ");
//  };
//  return (
//    <>
//      <p onMouseMove={moveHandler}>
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//        voluptatum asperiores impedit harum veritatis enim accusamus animi
//        pariatur fugiat, dignissimos dolore. Ab nemo optio quam odit sunt vero
//        aliquid iusto. Perferendis accusamus maxime mollitia iure, veniam, illo
//        a sint consequatur libero voluptatem, perspiciatis fuga sed! Repudiandae
//        maxime vitae aspernatur illo voluptatem. Veniam, quos! Repudiandae,
//        eaque accusantium! Consectetur, exercitationem? Ipsa, eligendi! Sed
//        itaque aut quibusdam commodi numquam{" "}
//      </p>
//    </>
//  );
//};

export const Text = () => {
  //const name = "Sadaq";

  //const multiply = (a, b) => a * b;
  //const specialClass = "simple-class";
  //const numbers = [1, 2, 3, 4, 5];

  //const userInfo = [
  //  {
  //    username: "sadaq",
  //    email: "sadaq@gmail.com",
  //    location: "UK",
  //  },
  //  {
  //    username: "sadaa",
  //    email: "sadaa@gmail.com",
  //    location: "CND",
  //  },
  //  {
  //    username: "sadak",
  //    email: "sadak@gmail.com",
  //    location: "Us",
  //  },
  //];

  //!conditionla rendering
  //  const ValidPassword = () => <h1>Valid Password </h1>;
  //  const InvalidPassword = () => <h1>invalid Password </h1>;
  //const Passoword = ({ isValid }) => {
  //  if (!isValid) {
  //    return <InvalidPassword />;
  //  }
  //  return <ValidPassword />;
  //return isvlalid ?  <ValidPassword/> : <InvalidPassword/>
  //};

  //const Cart = () => {
  //  const items = ["wireless Earbuds", "Power Bank ", "New SSD", "Hoodies"];
  //  return (
  //    <>
  //      <h1> Cart </h1>
  //      {items.length > 0 && (
  //        <h2>You Have {items.length} items in your cart </h2>
  //      )}
  //      <ul>
  //        <h4>Products</h4>
  //        {items.map((item) => (
  //          <li key={Math.random()}>{item}</li>
  //        ))}
  //      </ul>
  //    </>
  //  );
  //};

  //!Using Objects css

  //const s = {
  //  color: "white",
  //  //backgroundColor: "crimson",
  //  backgroundColor: "tail",
  //  padding: "20px",
  //};

  return (
    <>
      {/*<Add />
      <Greating />*/}
      {/*<h1>{name}</h1>
      <p>2+2 = {2 + 2}</p>
      <p>Myfriends List :{["sadaa ", " elmi ", " jacar "]}</p>
      <p>4*4 = {multiply(4, 4)}</p>
      <p className={specialClass}> this is my special calss </p>
      
      
      {numbers.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))}*/}

      {/*{userInfo.map((user) => (
        <ul key={Math.random * 20}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}*/}
      {/*<User
        img="https://avatars.githubusercontent.com/u/113880668?v=4"
        name="sadaq"
        age={20}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab
          consequatur sapiente mollitia recusandae pariatur aut debitis
          reprehenderit distinctio velit voluptates hic accusantium quibusdam,
          doloremque eveniet voluptatem non dicta eum! Alias, culpa dolorem? Id
          corrupti ipsa cum vitae incidunt repudiandae unde culpa officiis magni
          distinctio exercitationem autem nesciunt sit quas aspernatur
          dignissimos nostrum nulla, sunt enim repellat minima eaque!
          Temporibus!{" "}
        </p>
      </User>*/}

      {/*conditionla rendering*/}

      {/*<Passoword isValid={false} />*/}

      {/*<Cart />*/}

      {/*<h1
        style={{
          color: s.color,
          backgroundColor: s.backgroundColor,
          padding: s.padding,
        }}
      >
        Style React
      </h1>*/}

      {/*<h1>Sadaq</h1>*/}

      {/*<h2>
        <CiShoppingCart />
      </h2>*/}

      {/*<Button />*/}
      {/*<Copy />*/}
      {/*<Movie />*/}
    </>
  );
};
