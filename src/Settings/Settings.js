import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Settings.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Settings() {

  let history = useHistory();
  const [apply_pi, set_apply_pi] = React.useState('none');
  const [val, set_val] = React.useState(true);

  const [apply_wt, set_apply_wt] = React.useState('none');
  const [val1, set_val1] = React.useState(true);

  function goto_terms() {
    history.push('/terms');
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
        id="CreateRecurringDepositProducts"
        className="create_terms px-3 py-5 overflow-auto"
        style={{background: '#F3F5F8', backgroundSize: 'cover'}}
      >

        
        <div 
          className="RDP"
        >
          <h4 
            className="py-4"
          >
            Create Recurring Deposit Products
          </h4>

        </div>
        
        <motion.div
          className="h-auto bg-white mx-auto overflow-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="terms-checkbox-container">
            <div 
              className="checkbox-div h-auto mx-auto d-flex my-4"
            >
              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%'}}>

                  </span>
                  <span className="circle mx-auto" style={{borderRadius: '100px', background: '#1AC29A', fontSize: '20px', color: 'white'}}>
                    <p className="text-center py-1 py-1">
                      <FontAwesomeIcon className="icon" icon={faCheck} style={{color: 'white'}} />
                    </p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#1AC29A'}}>Personal Details</h6>
              </div>

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#1AC29A', fontSize: '20px', color: '#EEF4FF'}}>
                    <p className="text-center py-1">
                      <FontAwesomeIcon className="icon" icon={faCheck} style={{color: 'white'}} />
                    </p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#1AC29A'}}>Currency</h6>
              </div>

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#1AC29A', fontSize: '20px', color: '#EEF4FF'}}>
                    <p className="text-center py-1">
                      <FontAwesomeIcon className="icon" icon={faCheck} style={{color: 'white'}} />
                    </p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#1AC29A'}}>Terms</h6>
              </div>

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#518EF8', fontSize: '20px', color: '#EEF4FF'}}>
                    <p className="text-center py-1">4</p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Settings</h6>
              </div>

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                    <p className="text-center py-1">5</p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>

                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Interest Rate Chart</h6>
              </div>

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                    <p className="text-center py-1">6</p>
                  </span>

                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Charges</h6>
              </div>
              

              <div style={{width: '14%'}}>
                <div className="d-flex">
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                  </span>

                  <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                    <p className="text-center py-1">7</p>
                  </span>

                  <span className="my-auto" style={{height: '1px',width: '42%'}}>
                  </span>

                </div>
                
                <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Accounting</h6>
              </div>
    
            
            </div>
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

          <div className="mx-5">

            <div className="py-4" style={{
              width: '100%', 
              height: 'auto',
              }}
            >
              <div className="two-col-div w-75">
                <div className="two-col-div-item mr-4">
                  <input
                    id="product-name"
                    className="form-control" type="search"
                  />

                </div>

                <div className="two-col-div-item">
                  <select 
                    className="select custom-select custom-select-lg"
                    style={{
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

          <div className="mx-5">

            <div className="py-4" style={{
              display: `flex`,
              width: '100%', 
              height: 'auto',
              }}
            >
              <div className="two-col-div w-75">
                <div className="two-col-div-item mr-4">
                  <input
                    id="product-name"
                    className="form-control" type="search"
                  />

                </div>

                <div className="two-col-div-item">
                  <select 
                    className="select custom-select custom-select-lg"
                    style={{
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

          <div className="mx-5">

            <div className="py-4" style={{
              display: `flex`,
              width: '100%', 
              height: 'auto',
              }}
            >
              <div className="two-col-div w-75">
                <div className="two-col-div-item mr-4">
                  <input
                    id="product-name"
                    className="form-control" type="search"
                  />

                </div>

                <div className="two-col-div-item">
                  <select 
                    className="select custom-select custom-select-lg"
                    style={{
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

          <div className="mx-5">

            <div className="py-4" style={{
              display: `flex`,
              width: '100%', 
              height: 'auto',
              }}
            >
              <div className="two-col-div w-75">
                <div className="two-col-div-item mr-4">
                  <input
                    id="product-name"
                    className="form-control" type="search"
                  />

                </div>

                <div className="two-col-div-item">
                  <select 
                    className="select custom-select custom-select-lg"
                    style={{
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
                className="click-appear-div w-100 py-4"  
                style={{ display: `${apply_pi}` }}
              >
                <div className="two-col-div w-100 px-5">
                  <div className="two-col-div-item mr-4">
                    <input
                      id="product-name"
                      className="form-control" type="search"
                      style={{
                        background: '#FCFCFC',
                        border: '0.5px solid rgba(10, 33, 62, 0.15)',
                        fontSize: '18px',
                        padding: '3% 4% 3% 4%',
                        borderRadius: '5px',
                      }}
                    />

                  </div>

                  <div className="two-col-div-item">
                    <select 
                      className="select custom-select custom-select-lg"
                      style={{
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

          <div 
              className="line-2 mt-4 mb-4 mx-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
          >
          </div>

          <div className="ml-5  ">
            <h5>Balance Required For Interest Calculation</h5>
          </div>

          <div className="mx-5">

            <div className="py-4" style={{
              display: `flex`,
              width: '100%', 
              height: 'auto',
              }}
            >
              <div className="two-col-div w-75">
                <div className="two-col-div-item mr-4">
                  <input
                    id="product-name"
                    className="form-control" type="search"
                  />

                </div>
              </div>
              
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
                <div className="d-flex w-100 px-5 justify-content-between">

                  <div className="w-50">
                  <label>
                    Tax Group
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                    <select 
                      className="select custom-select custom-select-lg"
                      style={{
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


          <div 
              className="line my-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
          </div>

          <div>
            <div 
              className="terms-btn-section my-5"
            >
              <motion.button 
                className="terms-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold overflow-auto"
                whileHover={{ scale: 1.1, paddingLeft: '5%'  }}
                whileTap={{ scale: 0.9 }}
                transition={{delay: 0}}
              >
                Next
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </motion.button>
            
              <motion.button 
                onClick={goto_terms}
                className="terms-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium overflow-auto" 
                whileHover={{ scale: 1.1, paddingRight: '5%'  }}
                whileTap={{ scale: 0.9 }}
                transition={{delay: 0}}
              >
                <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                Previous
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    
  );
}

export default Settings;
