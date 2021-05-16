import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

import './index.scss';

export type BgColor = "bg-primary" | "bg-secondary" | "bg-confirm" | "bg-danger" | "bg-warning";

ReactDOM.render(React.createElement(App), document.getElementById('root'));
