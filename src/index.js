import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// root.render(
//   React.createElement("div", {
//     className: "divClass",
//     children: restaurant.menu.map((item) =>
//       React.createElement("div", { children: item.name })
//     ),
//   })
// );
