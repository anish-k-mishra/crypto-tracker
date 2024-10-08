import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

 
import App from './App'
import store from "./app/store";
// import 'antd/dist/antd.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
</React.StrictMode>);
// ReactDOM.render(
//     <React.StrictMode>
//       <Router>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </Router>
//   </React.StrictMode>
//     , document.getElementById('root'));