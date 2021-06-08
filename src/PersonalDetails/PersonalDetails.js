import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './PersonalDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

function PersonalDetails() {
  let history = useHistory();
  const [name, setName] = useState('');

  function goto_currency_details() {
    if (name == ''){
      localStorage.setItem('personal-details-error', 'true');
      history.push('/currency-details');
    }
    else{
      localStorage.removeItem('personal-details-error');
      history.push('/currency-details');
    }
  }

  function goto_rdr() {
    history.push('/recurring-deposit-products');
  }

  function name_changeHandler(e) {
    setName(e.target.value);
  }

  return (
      <div 
        id="PersonalDetails"
        className="pl-5"
      >

        <div className="create_PD">

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

           
            <div className="PD-checkbox-container">
              <Checkboxes />
            </div>

            <div 
                className="PD-line mt-2 mb-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>
    
            <form>
            
                <div className="container">  
                  <div className="my-4">
                    <h5>Product Details</h5>
                  </div>
                  <div className="row my-2">

                    <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Product Name
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="product-name"
                        className="form-control px-3"
                        type="search"
                        onChange={name_changeHandler}
                        required
                      />
                      </div>

                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                      <label>
                        Short Name
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="short-name"
                        className="form-control px-3" 
                        type="search"
                      />
                    </div>
                    </div>
                  </div>
                
                
              <div className="row my-2">
                <div className="col">
                <div className="form-group">
                <label>
                  Description
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                  <textarea
                    id="description"
                    rows="3"
                    className="form-control px-3" type="search"
                    style={{
                      padding: '2% 2% 2% 2%'
                    }}
                  />
                  </div>
                  </div>
              </div>
              </div>

                <div 
                  className="line" 
                  style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
                >

                </div>
                <div className="container">
                <div>
                  <div 
                    className="PD-btn-section my-5"
                  >
                    <Button 
                      type="button"
                      onClick={goto_currency_details}
                      className="PD-button py-2 ml-4 btn-next font-weight-semibold"
                    >
                      Next
                      <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                    </Button>
                  
                    <Button 
                      onClick={goto_rdr}
                      className="PD-button py-2 ml-auto btn-prev font-weight-medium" 
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

export default PersonalDetails;
