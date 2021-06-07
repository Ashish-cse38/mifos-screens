import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Accounting.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faCircle, faDotCircle, faInfoCircle, faPlusCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';


const Principal = (props) => {
  return (
    <>

      <div 
        id={props.id}
        className="row mx-5 mb-3 d-flex justify-content-between">
        <div className="col-md-5 my-3">
          <label>
            <h6>Payment Type</h6>
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
            <option selected>On Whole Team</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-md-5 my-3">
          <label className="">
            <h6>Fund Sources</h6>
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
              <option selected>On Whole Team</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

        </div>

        <div className="col-md-1 w-auto mt-5 mx-auto" style={{color:'#FD5E1A'}}>
          {props.array.length >= 1 ?
          <div className="mt-4"
            onClick={() => {document.getElementById(props.id).remove();}}>
            <FontAwesomeIcon icon={faTimesCircle}/>
          </div> : ''
          }
        </div>
    
      </div>
      
    </>
  );
}

function Accounting() {

  let history = useHistory();
  const[lck_in, setLck_in] = useState('');
  const [apply_pi, set_apply_pi] = useState('none');
  const [val, set_val] = useState(true);

  const [principals, setPrincipals] = useState([]);

  function goto_charges() {
    history.push('/charges');
  } 

  function goto_IRC() {
    history.push('/interest-rate-chart');
  }
  
  function lck_inHandler(e) {
    setLck_in(e.target.value);
  }

  function API_div() {
    
    if (val) {
      set_apply_pi('block');
      set_val(!val);
    }
    else{
      set_apply_pi('none');
      set_val(!val);
    }
  }

  function add_principal() {
    setPrincipals([...principals, <Principal id={uuidv4().toString()} array={principals}/>]);
  }

  const [icon1, setIcon1] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [icon2, setIcon2] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faDotCircle} style={{color:'#518EF8', borderRadius: '15px', fontSize: '22px'}} />) ;

  function select_accounting() {
    var t;
    t = icon1;
    setIcon1(icon2);
    setIcon2(t);
  }

  useEffect(() => {
    setPrincipals([...principals, <Principal id={uuidv4().toString()}  array={principals}/>]);
  }, [])

  
  return (
      <div 
        id="Accounting"
        className="pl-5"
      >

        
        <div 
          className="create_accounting"
        >
          <h5 
            className="py-4"
          >
            Create Recurring Deposit Products
          </h5>
        
          <motion.div
            className="h-auto bg-white mx-auto overflow-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="accounting-checkbox-container">
              <Checkboxes />
            </div>
          
            <div 
                className="line mt-2 mb-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5 my-3">
              <h5>Accounting</h5>
            </div>

            <div className="d-flex ml-5 py-4">
              <div className="px-3 py-2 mr-3"
                onClick={select_accounting}
                style={{
                  background: 'rgba(81, 142, 248, 0.1)',
                  border: '1px solid #518EF8',
                  borderRadius: '100px'
                }}>
                  {icon1}
                  None
              </div>
              <div class="px-3 py-2"
                onClick={select_accounting}
              style={{
                background: 'rgba(81, 142, 248, 0.1)',
                border: '1px solid #518EF8',
                borderRadius: '100px',
                color: '#518EF8'
              }}>
                {icon2}
                Cash
              </div>
            </div>

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Assets</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-3">
                <label>
                  Saving reference
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Liabilities</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-3">
                <label>
                  Saving control
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

              <div className="col-md-4 my-3">
              <label>
                  Saving transfers in suspense
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Expenses</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-3">
                <label>
                  Interest on savings
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="ml-5">
              <h5>Income</h5>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-md-4 my-3">
                <label>
                  Income from fees
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

              <div className="col-md-4 my-3">
              <label>
                  Income from penalties
                  <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                </label>
                <select 
                  className="custom-select custom-select custom-select-lg h-75 px-3"
                  style={{
                    //padding: '3% 0 3% 0',
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

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="mx-5" style={{fontSize: '20px'}}>

              <div className="my-2" style={{fontSize: '20px'}}>

                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                  <label class="custom-control-label accounting-text-small" for="customSwitch1">
                    Advanced Accounting Rule
                  </label>
                </div>

              </div>

              <div class="custom-control custom-switch mb-5">
                <input onClick={API_div} type="checkbox" class="custom-control-input" id="customSwitch4" />
                <label class="custom-control-label accounting-text-small" for="customSwitch4">
                  Configure Fund Source for Payment Channels
                </label>
              </div>

              <div className="apply_pi"
              >

                <div 
                  className="click-appear-div w-100 py-4"  
                  style={{display: `${apply_pi}`}}
                >
                
                  {principals}

                  <div className="row mx-5 my-5">
                    <Button 
                      className="py-3 mx-3" 
                      onClick={add_principal}
                      style={{
                      color: '#518EF8',
                      background: 'rgba(81, 142, 248, 0.1)',
                      borderRadius: '100px',
                      fontSize: '18px'
                    }}>
                      <FontAwesomeIcon className="icon mr-3" icon={faPlusCircle}
                        style={{
                          color: '#518EF8',
                          fontSize: '22px'
                        }} />
                      Add Another Principal
                    </Button>
                  </div>

                </div>

              </div>

            </div>

            <div 
                className="line-2 mb-5 mx-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div className="mx-5" style={{fontSize: '20px'}}>
              <div class="custom-control custom-switch my-2">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label accounting-text-small" for="customSwitch1">
                  Map Fees to Income Accounts
                </label>
              </div>
              <div class="custom-control custom-switch my-2">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label accounting-text-small" for="customSwitch1">
                  Map Penalties to Specific Income Accounts
                </label>
              </div>
              
            </div>


            <div 
                className="line my-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div>
              <div 
                className="accounting-btn-section my-5"
              >
                <Button 
                  onClick={goto_IRC}
                  className="accounting-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_charges}
                  className="accounting-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium" 
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

export default Accounting;
