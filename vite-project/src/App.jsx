
// import React from "react";
// import "./App.css";

// const Wine = ({ name, rating, like }) => {
//   return (
//     <div className="wine-card">
//       <h3 className="wine-name">{name}</h3>
//       <p className="wine-rating">Rating: {rating}/5</p>
//       {like && <span className="wine-like">♥️</span>}
//     </div>
//   );
// };

// const App = () => {
//   const wines = [
//     { name: "Cabernet Sauvignon", rating: 4.5, like: true },
//     { name: "Merlot", rating: 3.8, like: false },
//     { name: "Pinot Noir", rating: 4.2, like: true },
//   ];

//   return (
//     <div className="app">
//       <h1>Wine Collection</h1>
//       <div className="wine-list">
//         {wines.map((wine, index) => (
//           <Wine
//             key={index}
//             name={wine.name}
//             rating={wine.rating}
//             like={wine.like}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { Component } from "react";

// class SubscribeButton extends Component {
  
//   clickHandler = (event) => {
//     console.log(event.target); 
//   };

//   render() {
//     return (
//       <button type="button" onClick={this.clickHandler}>
//         Button click!
//       </button>
//     );
//   }
// }

// export default SubscribeButton;




// import React, { Component } from "react";

// class SubscribeButton extends Component {
//   state = {
//     text: "Click here",
//     subscribed: false,
//   };

//   render() {
//     const { text } = this.state;
//     return (
//       <button type="button" className="subscribe-button">
//         {text}
//       </button>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Düymədə Mətn Göstərilməsi</h1>
//       <SubscribeButton />
//     </div>
//   );
// };

// export default App;


import React, { Component } from "react";
import "./App.css";

class SubscribeButton extends Component {
  state = {
    text: "Click here",
    subscribed: false,
  };

  handleClick = () => {
    this.setState({
      text: "Clicked",
      subscribed: true,
    });
  };

  render() {
    const { text, subscribed } = this.state;
    return (
      <button
        type="button"
        className={`subscribe-button ${subscribed ? "clicked" : ""}`}
        onClick={this.handleClick}
      >
        {text}
      </button>
    );
  }
}

const App = () => {
  return (
    <div className="app">
      <h1>Düymə Mətn və Stil Dəyişdirmə</h1>
      <SubscribeButton />
    </div>
  );
};

export default App;

