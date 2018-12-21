"use strict";

// import React from 'react';
// import ReactDOM from 'react-dom';
function Welcome(props) {
  return React.createElement("h1", null, "Hello, ", props.name);
}

function App() {
  return React.createElement("div", null, React.createElement(Welcome, {
    name: "Sara"
  }), React.createElement(Welcome, {
    name: "Cahal"
  }), React.createElement(Welcome, {
    name: "Edite"
  }));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));