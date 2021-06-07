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
import InterestRateChart from './InterestRateChart/InterestRateChart';
import Charges from './Charges/Charges';
import Accounting from './Accounting/Accounting';


function App() {
  return <div className ="routes">
    <Router>     
        <Route exact path="/" component={PreviewShareProduct} /> 

        <Route path="/recurring-deposit-products" component={RecurringDepositProducts} />
         
        <Route path="/personal-details" component={PersonalDetails} />

        <Route path="/currency-details" component={CurrencyDetails} />

        <Route path="/terms" component={Terms} />

        <Route path="/settings" component={Settings} />

        <Route path="/interest-rate-chart" component={InterestRateChart} />

        <Route path="/charges" component={Charges} />

        <Route path="/accounting" component={Accounting} />
    </Router>
    </div>;
}

export default App;
