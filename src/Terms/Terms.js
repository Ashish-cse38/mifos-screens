import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Terms.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

function Terms() {

  let history = useHistory();
  const [def_amt, setDef_amt] = useState('');

  function goto_cd() {
    history.push('/currency-details');
  }

  function goto_settings() {
    if (def_amt == ''){
      localStorage.setItem('terms-error', 'true');
      history.push('/settings');
    }
    else{
      localStorage.removeItem('terms-error');
      history.push('/settings');
    }
  }

  

  function def_amtHandler(e) {
    setDef_amt(e.target.value);
  }

  
  return (
      <div 
        id="Terms"
        className="pl-5"
      >

        <div 
          className="create_terms"
        >
          <h5 
            className="py-3"
          >
            Create Recurring Deposit Products
          </h5>
        
          <motion.div
            className="h-auto bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="terms-checkbox-container">
              <Checkboxes />
            </div>

            <div 
                className="line mt-2 mb-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <form>
              <div className="container">
            <div className="my-4">
              <h5>Term Details</h5>
            </div>

            <div className="row"
            >
            <div className="col-md-4">
              <div className="form-group">
                <label>
                  Default Deposit Amount
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                  id="short-name"
                  className="form-control px-3" 
                  type="number"
                  onChange={def_amtHandler}
                />

              </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                <label>
                  Minimum Deposit Amount
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                  id="short-name"
                  className="form-control px-3" type="number"
                />
                </div>
              </div>

              <div
                className="col-md-4">
                <div className="form-group">
              <label>
                Maximum Deposit Amount
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
                <input
                  id="description"
                  className="form-control px-3" type="number"
                />
                </div>
              </div>
            </div>

            <div className="row"
            >
              <div className="col-md-4">
              <div className="form-group">
                <label>
                  Interest compounding period
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <select 
                  className="custom-select px-3"
                  style={{
                    padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected value="1">Daily</option>
                  <option value="2">Monthly</option>
                  <option value="3">Annually</option>
                </select>
                </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                <label>
                  Interest posting period
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <select 
                  className="custom-select px-3"
                  style={{
                    padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option value="1">Daily</option>
                  <option selected value="2">Monthly</option>
                  <option value="3">Annually</option>
                </select>
                </div>
              </div>
              
            </div>

            <div className="row"
            >
              <div className="col-md-4">
              <div className="form-group">
                <label>
                  Interest calculated using
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <select 
                  className="custom-select px-3"
                  style={{
                    padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected value="1">Daily Balance</option>
                  <option value="2">Monthly Balance</option>
                  <option value="3">Annual Balance</option>
                </select>
                </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                <label>
                  Days in year
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <select 
                  className="custom-select px-3"
                  style={{
                    padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected value="1">365</option>
                  <option value="2">366</option>
                  <option value="3">Can't say</option>
                </select>
                </div>
              </div>
            </div>
            </div>

            <div 
                className="line my-2" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div className="container">
            <div>
              <div 
                className="terms-btn-section my-5"
              >
                <Button 
                  onClick={goto_settings}
                  className="terms-button py-2 ml-4 btn-next border-0 rounded font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_cd}
                  className="terms-button py-2 ml-auto btn-prev border-0 rounded font-weight-medium" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                  Previous
                </Button>
              </div>

            </div>
            </div>
            </form>
          </motion.div>
        </div>
      </div>
    
  );
}

export default Terms;
