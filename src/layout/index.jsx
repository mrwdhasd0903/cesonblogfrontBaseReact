import Header from "./Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Details from "@pg/details";
import Home from "@pg/home";
import Type from "@pg/type";
import Tag from "@pg/tag";
import Archive from "@pg/archive";
import About from "@pg/about";
import Traffic from "@pg/traffic";
import Link from "@pg/link";

export default function Index() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Route path="*" component={Header} />
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/home" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/type" component={Type} />
        <Route path="/tag" component={Tag} />
        <Route path="/archive" component={Archive} />
        <Route path="/about" component={About} />
        <Route path="/traffic" component={Traffic} />
        <Route path="/link" component={Link} />
      </Switch>
    </BrowserRouter>
  );
}
