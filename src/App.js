import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import SP_Preview from './SP-Preview/SP-Preview';
import RecurringDepositProducts from './RecurringDepositProducts/RecurringDepositProducts';
import RDP_PersonalDetails from './RDP-PersonalDetails/RDP-PersonalDetails';
import RDP_CurrencyDetails from './RDP-CurrencyDetails/RDP-CurrencyDetails';
import RDP_Terms from './RDP-Terms/RDP-Terms';
import RDP_Settings from './RDP-Settings/RDP-Settings';
import InterestRateChart from './RDP-InterestRateChart/RDP-InterestRateChart';
import RDP_Charges from './RDP-Charges/RDP-Charges';
import RDP_AccountingTab from './RDP-AccountingTab/RDP-AccountingTab';
import RDP_Preview from './RDP-Preview/RDP-Preview';
import Charges_list from './Charges_list/Charges_list';
import Charge_details from './Charge_details/Charge_details';
import Edit_charge from './Edit_charge/Edit_charge';
import FloatingRates from './FloatingRates/FloatingRates';
import FloatingRateDetails from './FloatingRateDetails/FloatingRateDetails';
import ManageTaxComponents from './ManageTaxComponents/ManageTaxComponents';
import CreateTaxComponents from './CreateTaxComponents/CreateTaxComponents';
import CreateCharge from './CreateCharge/CreateCharge';
import SP_AccountingTab from './SP-AccountingTab/SP-AccountingTab';
import SP_Charges from './SP-Charges/SP-Charges';
import SP_MarketPrice from './SP-MarketPrice/SP-MarketPrice';
import SP_Settings from './SP-Settings/SP-Settings';
import SP_Terms from './SP-Terms/SP-Terms';
import SP_CurrencyDetails from './SP-CurrencyDetails/SP-CurrencyDetails';
import SP_ProductDetails from './SP-ProductDetails/SP-ProductDetails';
import ShareProducts from './ShareProducts/ShareProducts';
import FDP_Preview from './FDP-Preview/FDP-Preview';
import FDP_AccountingTab from './FDP-AccountingTab/FDP-Accounting';
import FDP_Charges from './FDP-Charges/FDP-Charges';
import FDP_InterestRateChart from './FDP-InterestRateChart/FDP-InterestRateChart';
import FDP_Settings from './FDP-Settings/FDP-Settings';
import FDP_Terms from './FDP-Terms/FDP-Terms';
import FDP_CurrencyDetails from './FDP-CurrencyDetails/FDP-CurrencyDetails';
import FDP_PersonalDetails from './FDP-PersonalDetails/FDP-PersonalDetails';
import FixedDepositProducts from './FixedDepositProducts/FixedDepositProducts';
import SaP_Preview from './SaP-Preview/SaP-Preview';
import SaP_AccountingTab from './SaP-AccountingTab/SaP-AccountingTab';
import SaP_Charges from './SaP-Charges/SaP-Charges';
import SaP_Settings from './SaP-Settings/SaP-Settings';
import SaP_Terms from './SaP-Terms/SaP-Terms';
import SaP_CurrencyDetails from './SaP-CurrencyDetails/SaP-CurrencyDetails';
import SaP_PersonalDetails from './SaP-PersonalDetails/SaP-PersonalDetails';
import SavingProducts from './SavingProducts/SavingProducts';
import LP_Preview from './LP-Preview/LP-Preview';
import LP_AccountingTab from './LP-AccountingTab/LP-AccountingTab';
import LP_Charges from './LP-Charges/LP-Charges';
import LP_Settings from './LP-Settings/LP-Settings';
import LP_Terms from './LP-Terms/LP-Terms';
import LP_CurrencyDetails from './LP-CurrencyDetails/LP-CurrencyDetails';
import LP_PersonalDetails from './LP-PersonalDetails/LP-PersonalDetails';
import LoanProducts from './LoanProducts/LoanProducts';
import Products from './Products/Products';
import ManageTaxConfigurations from './ManageTaxConfigurations/ManageTaxConfigurations';

function App() {
  return <div className ="routes">
      <Router>    
        <Route path="/sp-preview" component={SP_Preview} />

        <Route path="/recurring-deposit-products" component={RecurringDepositProducts} />
         
        <Route path="/rdp-personal-details" component={RDP_PersonalDetails} />

        <Route path="/rdp-currency-details" component={RDP_CurrencyDetails} />

        <Route path="/rdp-terms" component={RDP_Terms} />

        <Route path="/rdp-settings" component={RDP_Settings} />

        <Route path="/rdp-interest-rate-chart" component={InterestRateChart} />

        <Route path="/rdp-charges" component={RDP_Charges} />

        <Route path="/rdp-accountingTab" component={RDP_AccountingTab} />

        <Route path="/rdp-preview" component={RDP_Preview} />
        
        <Route path="/charges" component={Charges_list} />

        <Route path="/charge-details" component={Charge_details} />

        <Route path="/edit-charge" component={Edit_charge} />

        <Route path="/floating-rates" component={FloatingRates} />

        <Route path="/floating-rate-details" component={FloatingRateDetails} />

        <Route path="/manage-tax-components" component={ManageTaxComponents} />

        <Route path="/create-tax-components" component={CreateTaxComponents} />

        <Route path="/create-charge" component={CreateCharge} />

        <Route path="/sp-accountingTab" component={SP_AccountingTab} />

        <Route path="/sp-charges" component={SP_Charges} />

        <Route path="/sp-market-price" component={SP_MarketPrice} />

        <Route path="/sp-settings" component={SP_Settings} />

        <Route path="/sp-terms" component={SP_Terms} />

        <Route path="/sp-currency-details" component={SP_CurrencyDetails} />

        <Route path="/sp-product-details" component={SP_ProductDetails} />

        <Route path="/share-products" component={ShareProducts} />

        <Route path="/fdp-preview" component={FDP_Preview} />

        <Route path="/fdp-accountingTab" component={FDP_AccountingTab} />

        <Route path="/fdp-charges" component={FDP_Charges} />

        <Route path="/fdp-interest-rate-chart" component={FDP_InterestRateChart} />

        <Route path="/fdp-settings" component={FDP_Settings} />

        <Route path="/fdp-terms" component={FDP_Terms} />

        <Route path="/fdp-currency-details" component={FDP_CurrencyDetails} />

        <Route path="/fdp-personal-details" component={FDP_PersonalDetails} />

        <Route path="/fixed-deposit-products" component={FixedDepositProducts} />

        <Route path="/sap-preview" component={SaP_Preview} />

        <Route path="/sap-accountingTab" component={SaP_AccountingTab} />

        <Route path="/sap-charges" component={SaP_Charges} />

        <Route path="/sap-settings" component={SaP_Settings} />

        <Route path="/sap-terms" component={SaP_Terms} />

        <Route path="/sap-currency-details" component={SaP_CurrencyDetails} />

        <Route path="/sap-personal-details" component={SaP_PersonalDetails} />

        <Route path="/saving-products" component={SavingProducts} />

        <Route path="/lp-preview" component={LP_Preview} />

        <Route path="/lp-accountingTab" component={LP_AccountingTab} />

        <Route path="/lp-charges" component={LP_Charges} />

        <Route path="/lp-settings" component={LP_Settings} />

        <Route path="/lp-terms" component={LP_Terms} />

        <Route path="/lp-currency-details" component={LP_CurrencyDetails} />

        <Route path="/lp-personal-details" component={LP_PersonalDetails} />

        <Route path="/loan-products" component={LoanProducts} />

        <Route path="/products" component={Products} />

        <Route path="/manage-tax-configurations" component={ManageTaxConfigurations} />
      </Router>
    </div>
}

export default App;
