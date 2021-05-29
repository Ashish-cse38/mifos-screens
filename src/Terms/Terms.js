import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Terms.css';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function Terms() {

  let history = useHistory();

  function goto_cd() {
    history.push('/currency-details');
  }

  function goto_settings() {
    history.push('/settings');
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
          <h2 
            className="py-4 large-text"
          >
            Create Recurring Deposit Products
          </h2>

        </div>
        
        <div
          className="h-auto bg-white mx-auto overflow-auto"
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

                  <span className="circle" style={{borderRadius: '100px', background: '#518EF8', fontSize: '20px', color: '#EEF4FF'}}>
                    <p className="text-center py-1">3</p>
                  </span>
                  <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

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

          <div className="ml-5 my-3">
            <h5>Term Details</h5>
          </div>

          <div className="terms-input-section mx-5 mt-4"
          >
           <div className="terms-input-field">
              <label>
                Default Deposit Amount
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <input
                id="short-name"
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '5% 4% 5% 4%',
                  borderRadius: '5px',
                }}
              />

            </div>

            <div className="terms-input-field">
              <label>
                Minimum Deposit Amount
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <input
                id="short-name"
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '5% 4% 5% 4%',
                  borderRadius: '5px',
                }}
              />

            </div>

            <div
              className="terms-input-field">
            <label>
              Maximum Deposit Amount
              <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
            </label>
              <input
                id="description"
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '5% 4% 5% 4%',
                  borderRadius: '5px',
                }}
              />

            </div>
          </div>

          <div className="terms-input-section mx-5 mt-4"
          >
            <div className="terms-input-field">
              <label>
                Interest compounding period
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <select 
                className="select custom-select custom-select-lg"
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  borderRadius: '5px',
                }}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

            <div className="terms-input-field">
              <label>
                Interest posting period
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <select 
                className="select custom-select custom-select-lg"
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  borderRadius: '5px',
                }}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

            <div className="terms-input-field">

            </div>
            
          </div>

          <div className="terms-input-section mx-5 mt-4"
          >
            <div className="terms-input-field">
              <label>
                Interest calculated using
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <select 
                className="select custom-select custom-select-lg"
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  borderRadius: '5px',
                }}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

            <div className="terms-input-field">
              <label>
                Days in year
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <select 
                className="select custom-select custom-select-lg"
                style={{
                  backgroundColor: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  borderRadius: '5px',
                }}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

            </div>

            <div className="terms-input-field">

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
              <Button 
                onClick={goto_settings}
                className="terms-button py-3 ml-4 mr-5 btn-next font-weight-semibold overflow-auto"
              >
                Next
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Button>
            
              <Button 
                onClick={goto_cd}
                className="terms-button py-3 ml-auto btn-prev font-weight-medium overflow-auto" 
              >
                <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                Previous
              </Button>
            </div>

          </div>
        </div>
      </div>
    
  );
}

export default Terms;
