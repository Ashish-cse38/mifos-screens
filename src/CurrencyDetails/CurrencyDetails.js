import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './CurrencyDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faCross, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

function CurrencyDetails() {

  let history = useHistory();
  const [dplaces, setDplaces] = useState('');

  function goto_pd() {
    history.push('/personal-details');
  }

  function goto_terms() {
    if(dplaces == '') {
      localStorage.setItem('currency-error', 'true');
      history.push('/terms');
    }
    else {
      localStorage.removeItem('currency-error');
      history.push('/terms');
    }
    
  }

  function d_placeshandler(e) {
    setDplaces(e.target.value);
  }
  
  return (
      <div 
        id="CurrencyDetails"
        className="pl-5"
      >

        
        <div 
          className="create_CD"
        >
          <h5 
            className="py-3"
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
            <div className="cd-checkbox-container">
              <Checkboxes />
            </div>

            <div 
                className="line mt-2 mb-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div className="ml-5 my-2 px-3">
              <h5>Currency Details</h5>
            </div>

            <form>
            <div className="row mx-5 py-4"
            >
              <div className="col-md-4 my-3">
                <label>
                  Currency
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <select 
                  className="custom-select custom-select-lg h-75"
                  style={{
                    //padding: '3% 0 3% 0',
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

              <div className="col-md-4 my-3">
                <label>
                  Decimal places
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                  id="decimal-places"
                  className="form-control px-3 h-75" 
                  type="search"
                  onChange={d_placeshandler}
                />

              </div>

              <div
                className="col-md-4 my-3">
              <label>
                Currrency in multiples of
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
                <input
                  className="form-control px-3 h-75" type="search"
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
                <Button
                  onClick={goto_terms}
                  className="CD-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button
                  onClick={goto_pd}
                  className="CD-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                  Previous
                </Button>
              </div>

            </div>
            </form>
          </motion.div>
        </div>
      </div>
    
  );
}

export default CurrencyDetails;
