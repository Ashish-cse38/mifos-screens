import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './CurrencyDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function CurrencyDetails() {

  let history = useHistory();

  function goto_pd() {
    history.push('/personal-details');
  }

  function goto_terms() {
    history.push('/terms');
  }

  
  return (
      <div 
        id="CreateRecurringDepositProducts"
        className="create_cd px-3 py-5 overflow-auto"
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
          <div className="cd-checkbox-container">
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

                <span className="circle" style={{borderRadius: '100px', background: '#518EF8', fontSize: '20px', color: '#EEF4FF'}}>
                  <p className="text-center py-1">2</p>
                </span>
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

                </span>

              </div>
              
              <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Currency</h6>
            </div>

            <div style={{width: '14%'}}>
              <div className="d-flex">
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                </span>

                <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                  <p className="text-center py-1">3</p>
                </span>
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>

                </span>

              </div>
              
              <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Terms</h6>
            </div>

            <div style={{width: '14%'}}>
              <div className="d-flex">
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                </span>

                <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                  <p className="text-center py-1">4</p>
                </span>
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>

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
              className="line mt-2 mb-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
          </div>

          <div className="ml-5 my-4">
            <h5>Currency Details</h5>
          </div>

          <div className="cd-input-section mx-5 my-4 justify-content-between"
          >
            <div className="cd-input-field">
              <label>
                Currency
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <select 
                className="select custom-select custom-select-lg"
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  borderRadius: '5px',
                }}>
                <option selected>Select Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

            <div className="cd-input-field">
              <label>
                Decimal places
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <input
                id="short-name"
                className="form-control" type="search"
              />

            </div>

            <div
              className="cd-input-field">
            <label>
              Currrency in multiples of
              <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
            </label>
              <input
                id="description"
                className="form-control" type="search"
              />

            </div>
          </div>

          <div 
              className="line my-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
          </div>

          <div>
            <div 
              className="CD-btn-section my-5"
            >
              <motion.button 
                onClick={goto_terms}
                className="CD-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold overflow-auto"
                whileHover={{ scale: 1.1, paddingLeft: '5%'  }}
                whileTap={{ scale: 0.9 }}
                transition={{delay: 0}}
              >
                Next
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </motion.button>
            
              <motion.button 
                onClick={goto_pd}
                className="CD-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium overflow-auto" 
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

export default CurrencyDetails;
