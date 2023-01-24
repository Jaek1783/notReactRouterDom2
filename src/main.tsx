import ReactDOM from "react-dom/client";
import Router from "./router-component/Router";
import Route from "./router-component/Route";
import Root from "./component/Root";
import About from "./component/About";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
