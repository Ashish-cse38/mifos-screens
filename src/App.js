import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import PreviewShareProduct from './PreviewShareProduct/PreviewShareProduct';
import RecurringDepositProducts from './RecurringDepositProducts/RecurringDepositProducts';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import Terms from './Terms/Terms';
import Settings from './Settings/Settings';


function App() {
  return <div className ="routes">
    <Router>     
        <Route exact path="/" component={PreviewShareProduct} /> 

        <Route path="/recurring-deposit-products" component={RecurringDepositProducts} />
         
        <Route path="/personal-details" component={PersonalDetails} />

        <Route path="/currency-details" component={CurrencyDetails} />

        <Route path="/terms" component={Terms} />

        <Route path="/settings" component={Settings} />

    </Router>
    </div>;
}

export default App;
