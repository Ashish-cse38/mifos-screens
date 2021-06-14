import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import PreviewShareProduct from './PreviewShareProduct/PreviewShareProduct';
import RecurringDepositProducts from './RecurringDepositProducts/RecurringDepositProducts';
import RDP_PersonalDetails from './RDP-PersonalDetails/RDP-PersonalDetails';
import RDP_CurrencyDetails from './RDP-CurrencyDetails/RDP-CurrencyDetails';
import RDP_Terms from './RDP-Terms/RDP-Terms';
import RDP_Settings from './RDP-Settings/RDP-Settings';
import InterestRateChart from './RDP-InterestRateChart/RDP-InterestRateChart';
import RDP_Charges from './RDP-Charges/RDP-Charges';
import RDP_AccountingTab from './RDP-AccountingTab/RDP-AccountingTab';
import CRDP_Preview from './CRDP_Preview/CRDP_Preview';
import Charge_details from './Charge_details/Charge_details';
import Edit_charge from './Edit_charge/Edit_charge';

function App() {
  return <div className ="routes">
    <Router>     
        <Route exact path="/" component={PreviewShareProduct} /> 

        <Route path="/recurring-deposit-products" component={RecurringDepositProducts} />
         
        <Route path="/rdp-personal-details" component={RDP_PersonalDetails} />

        <Route path="/rdp-currency-details" component={RDP_CurrencyDetails} />

        <Route path="/rdp-terms" component={RDP_Terms} />

        <Route path="/rdp-settings" component={RDP_Settings} />

        <Route path="/rdp-interest-rate-chart" component={InterestRateChart} />

        <Route path="/rdp-charges" component={RDP_Charges} />

        <Route path="/rdp-accountingTab" component={RDP_AccountingTab} />

        <Route path="/crdp-preview" component={CRDP_Preview} />

        <Route path="/charge-details" component={Charge_details} />

        <Route path="/edit-charge" component={Edit_charge} />
    </Router>
    </div>;
}

export default App;
