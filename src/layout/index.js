import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Details from '@pg/details'
import Home from '@pg/home'

export default function index() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
