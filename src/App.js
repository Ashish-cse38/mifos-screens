import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import PreviewShareProduct from './PreviewShareProduct/PreviewShareProduct';
import RecurringDepositProducts from './RecurringDepositProducts/RecurringDepositProducts';
import CreateRecurringDepositProducts from './CreateRecurringDepositProducts/CreateRecurringDepositProducts';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import Terms from './Terms/Terms';
import Settings from './Settings/Settings';


function App() {
  return <div className ="routes">
    <Router>     
        <Route exact path="/" component={PreviewShareProduct} /> 

        <Route path="/recurring-deposit-products" component={RecurringDepositProducts} />
         
        <Route path="/create-recurring-deposit-products" component={CreateRecurringDepositProducts} />

        <Route path="/currency-details" component={CurrencyDetails} />

        <Route path="/terms" component={Terms} />

        <Route path="/settings" component={Settings} />

    </Router>
    </div>;
}

export default App;
