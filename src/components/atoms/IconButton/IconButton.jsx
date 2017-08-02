"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./IconButton.css");
var Button = function (props) { return (<a className={props.active ? 'iconButtonActive' : 'iconButtonNormal'} onClick={props.onClick}>{props.children}</a>); };
exports.default = Button;
