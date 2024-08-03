// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// // // import React from 'react';
// // // import ReactDOM from 'react-dom/client';
// // // import './index.css';
// // // import App from './components/App';
// // // import { BrowserRouter } from 'react-router-dom';
// // // import reportWebVitals from './reportWebVitals';

// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // ////import App from './components/App';
// // //import Routes from './components/Routes';
// // import AppRoutes from './pages/routes';
// // import { BrowserRouter } from 'react-router-dom'; 
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter> {/* Wrap App with BrowserRouter */}
// //       <AppRoutes />
// //       {/* <App/> */}
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );

// // // Optional: Report web vitals (for performance monitoring)
// // reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRoutes from './components/AppRoutes';
// //import AppRoutes from './components/AppRoutes';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <AppRoutes />
//         </BrowserRouter>
//     </React.StrictMode>
// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './components/AppRoutes'; 
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
