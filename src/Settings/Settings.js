import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Settings.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

function Settings() {

  let history = useHistory();
  const[lck_in, setLck_in] = useState('');
  const [apply_pi, set_apply_pi] = useState('none');
  const [val, set_val] = useState(true);
  const [v, setV] = React.useState('hello');


  const [apply_wt, set_apply_wt] = useState('none');
  const [val1, set_val1] = useState(true);

  function goto_terms() {
    history.push('/terms');
  } 

  function goto_IRC() {
    if (lck_in == ''){
      localStorage.setItem('settings-error', 'true');
      history.push('/interest-rate-chart');
    }
    else{
      localStorage.removeItem('settings-error', 'true');
      history.push('/interest-rate-chart');
    }  
  }
  
  function lck_inHandler(e) {
    setLck_in(e.target.value);
  }

  function API_div() {
    
    if (val) {
      set_apply_pi('flex');
      set_val(!val);
    }
    else{
      set_apply_pi('none');
      set_val(!val);
    }
  }

  function WT_div() {
    
    if (val1) {
      set_apply_wt('flex');
      set_val1(!val1);
    }
    else{
      set_apply_wt('none');
      set_val1(!val1);
    }
  }

  
  return (
      <div 
        id="Setttings"
        className="pl-5"
      >

        
        <div 
          className="create_settings"
        >
          <h5 
            className="py-4"
          >
            Create Recurring Deposit Products
          </h5>
        
          <motion.div
            className="h-auto bg-white mx-auto pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="settings-checkbox-container">
            <Checkboxes />
            </div>

            <div 
                className="line mt-2 mb-4" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5 my-3">
              <h5>Settings</h5>
            </div>

            <div className="ml-5 my-4" style={{fontSize: '20px'}}>

              <div class="custom-control custom-switch my-2">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label settings-text-small" for="customSwitch1">
                  Is Mandatory Deposit
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
              </div>
              <div class="custom-control custom-switch my-2">
                <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                <label class="custom-control-label settings-text-small pr-4" for="customSwitch2">
                  Adjust advanced payments toward future installments
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
              </div>
              <div class="custom-control custom-switch my-2">
                <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                <label class="custom-control-label settings-text-small" for="customSwitch3">
                  Allow Withdrawls
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
              </div>

            </div>

            <div 
                className="line-2 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Lock-in Period</h5>
            </div>

              <div className="row mx-5 py-4">
                <div className="col-md-4 my-2">
                  <input
                    id="product-name"
                    className="form-control h-100 px-3" type="search"
                    onChange={lck_inHandler}
                  />

                </div>

                <div className="col-md-4 my-2">
                  <select 
                    className="custom-select custom-select-lg h-100 px-3"
                    style={{
                      //padding: '3% 0 3% 0',
                      backgroundColor: '#FCFCFC',
                      border: '0.5px solid rgba(10, 33, 62, 0.15)',
                      borderRadius: '5px',
                    }}>
                    <option selected>Days</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                </div>
              </div>

            <div 
                className="line-2 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Minimum Deposit Term</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-2">
                <input
                  id="product-name"
                  className="form-control h-100 px-3" type="search"
                />

              </div>

              <div className="col-md-4 my-2">
                <select 
                  className="custom-select custom-select-lg px-3"
                  style={{
                    //padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected>Days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>

            <div 
                className="line-2 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>And thereafter, In Multiples of</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-2">
                <input
                  id="product-name"
                  className="form-control h-100 px-3" type="search"
                />

              </div>

              <div className="col-md-4 my-2">
                <select 
                  className="custom-select custom-select-lg px-3"
                  style={{
                    //padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected>Days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>

            <div 
                className="line-2 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Maximum Deposit Term</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-2">
                <input
                  id="product-name"
                  className="form-control h-100 px-3" type="search"
                />

              </div>

              <div className="col-md-4 my-2">
                <select
                  className="custom-select custom-select-lg px-3"
                  style={{
                    //padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected>Days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5 mb-4">
              <h5>For Pre-mature Closure</h5>
            </div>

            <div className="mx-5" style={{fontSize: '20px'}}>

              <div class="custom-control custom-switch mb-4">
                <input onClick={API_div} type="checkbox" class="custom-control-input" id="customSwitch4" />
                <label class="custom-control-label settings-text-small" for="customSwitch4">Apply penal interest (less)</label>
              </div>

              <div className="apply_pi">
                <div 
                  className="click-appear-div py-4"  
                  style={{ display: `${apply_pi}` }}
                >
                  <div className="container">
                    <div className="row py-4">
                      <div className="col-md-6 my-2">
                        <input
                          id="product-name"
                          className="form-control px-3 h-100" type="search"
                          style={{
                            background: '#FCFCFC',
                            border: '0.5px solid rgba(10, 33, 62, 0.15)',
                            fontSize: '18px',
                            //padding: '5% 4% 5% 4%',
                            borderRadius: '5px',
                          }}
                        />

                      </div>

                      <div className="col-md-6 my-2">
                        <select 
                          className="custom-select custom-select-lg h-100 px-3"
                          //value={lck_in}
                          style={{
                            //padding: '3% 0 3% 0',
                            //height: '65%',
                            backgroundColor: '#FCFCFC',
                            border: '0.5px solid rgba(10, 33, 62, 0.15)',
                            borderRadius: '5px',
                          }}>
                          <option selected>On Whole Team</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                      </div>
                      
                    </div>

                  </div>
                 
                </div>

              </div>

            </div>

            <div 
                className="line-2 mt-4 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5  ">
              <h5>Balance Required For Interest Calculation</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-6 my-2">
                <input
                  id="product-name"
                  className="form-control h-100 px-3" type="search"
                />

              </div>
            </div>

            <div 
                className="line-2 mb-4 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="mx-5" style={{fontSize: '20px'}}>

              <div class="custom-control custom-switch mb-4">
                <input onClick={WT_div} type="checkbox" class="custom-control-input" id="customSwitch5" />
                <label class="custom-control-label settings-text-small" for="customSwitch5">Is Withold tax applicable</label>
              </div>
              <div className="apply_wt">
                <div className="click-appear-div w-100 py-4" 
                  style={{ display: `${apply_wt}`}}
                >
                  <div className="container">
                    <div className="row py-4">
                      
                      <div className="col-md-6 my-2">
                        <label>
                          Tax Group
                          <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                        </label>
                        <select 
                          className="custom-select custom-select-lg h-75 px-3"
                          //value={lck_in}
                          style={{
                            //padding: '3% 0 3% 0',
                            //height: '65%',
                            backgroundColor: '#FCFCFC',
                            border: '0.5px solid rgba(10, 33, 62, 0.15)',
                            borderRadius: '5px',
                          }}>
                          <option selected>Select an option</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>


            <div 
                className="line my-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div>
              <div 
                className="settings-btn-section my-5"
              >
                <Button 
                  onClick={goto_IRC}
                  className="settings-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_terms}
                  className="settings-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                  Previous
                </Button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    
  );
}

export default Settings;
