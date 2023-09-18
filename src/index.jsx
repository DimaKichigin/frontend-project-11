import Post from "@m_odels/P_ost";
// import json from './a_ssets/json.json'
// import xml from './a_ssets/data.xml'
// import * as yup from 'yup'
import csv from "./a_ssets/data.csv";
import WebpackLogo from "@/a_ssets/webpack-logo";
import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./babel";
import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
// import { container } from "webpack";

const post = new Post("Webpack Post", WebpackLogo);
// const post = new Post("Webpack Post Title", WebpackLogo);
// $("pre").addClass("code").html(post.toString());

const App = () => (
  <div class="container">
    <h1>Webpack</h1>
    <hr />
    <div class="logo" />
    <hr />
    <pre></pre>
    <hr />
    <div class="box">
      <h2>Less</h2>
    </div>
    <hr />
    <div class="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />, document.getElementById("app"));

// console.log('Post to String: ', post)
// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV:', csv)

// const schema = yup.object({
//    inputValue: string()
// })
