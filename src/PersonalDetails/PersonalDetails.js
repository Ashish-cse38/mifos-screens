import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './PersonalDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function PersonalDetails() {
  let history = useHistory();

  function goto_currency_details() {
    history.push('/currency-details');
  }

  function goto_rdr() {
    history.push('/recurring-deposit-products');
  }
  

  return (
      <div 
        id="CreateRecurringDepositProducts"
        className="create_PD px-3 py-5 overflow-auto"
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
          className="h-auto w-100 bg-white mx-auto py-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="PD-checkbox-container">
          <div 
            className="PD-checkbox-div h-auto mx-auto d-flex my-4"
          >
            <div style={{width: '14%'}}>
              <div className="d-flex">
                <span className="my-auto" style={{height: '1px',width: '42%'}}>

                </span>
                <span className="circle mx-auto" style={{borderRadius: '100px', background: '#518EF8', fontSize: '20px', color: 'white'}}>
                  <p className="text-center py-1">1</p>
                </span>
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>

                </span>

              </div>
              
              <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Personal Details</h6>
            </div>

            <div style={{width: '14%'}}>
              <div className="d-flex">
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
                </span>

                <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
                  <p className="text-center py-1">2</p>
                </span>
                <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>

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
              className="PD-line mt-2 mb-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
          </div>
  


          <div className="ml-5 my-4">
            <h5>Product Details</h5>
          </div>

          <div className="PD-input-section mx-5 my-4">
            <div className="PD-input-field mr-4">
              <label>
                Product Name
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
              <input
                id="product-name"
                className="form-control" type="search"
              />

            </div>
            <div className="PD-input-field">
              <label>
                Short Name
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <input
                id="short-name"
                className="form-control" type="search"
              />

            </div>
          </div>

          <div className="mx-5 my-4">
            <label>
              Description
              <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
            </label>
              <textarea
                id="description"
                rows="2"
                className="form-control" type="search"
                style={{
                  padding: '2% 2% 2% 2%'
                }}
              />

            </div>

            <div 
              className="PD-line my-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div>
              <div 
                className="PD-btn-section my-5"
              >
                <motion.button 
                  onClick={goto_currency_details}
                  className="PD-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold overflow-auto"
                  whileHover={{ scale: 1.1, paddingLeft: '5%'  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{delay: 0}}
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </motion.button>
              
                <motion.button 
                  onClick={goto_rdr}
                  className="PD-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium overflow-auto" 
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

export default PersonalDetails;
