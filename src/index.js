import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    RouterProvider >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>

    <
    /RouterProvider> < /
    React.StrictMode >
);