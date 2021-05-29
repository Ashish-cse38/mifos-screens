import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './CreateRecurringDepositProducts.css';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function CreateRecurringDepositProducts() {
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
        className="create_rdr px-3 py-5 overflow-auto"
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
          className="h-auto w-100 bg-white mx-auto py-2"
        >
          <div className="crdr-checkbox-container">
          <div 
            className="crdr-checkbox-div h-auto mx-auto d-flex my-4"
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
              className="crdr-line mt-2 mb-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
          </div>
  


          <div className="ml-5 my-4">
            <h5>Product Details</h5>
          </div>

          <div className="crdr-input-section mx-5 my-4">
            <div className="crdr-input-field mr-4">
              <label>
                Product Name
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
              <input
                id="product-name"
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '6% 4% 6% 4%',
                  borderRadius: '5px',
                }}
              />

            </div>
            <div className="crdr-input-field">
              <label>
                Short Name
                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label>
              <input
                id="short-name"
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '6% 4% 6% 4%',
                  borderRadius: '5px',
                }}
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
                className="search-bar form-control" type="search"
                style={{
                  background: '#FCFCFC',
                  border: '0.5px solid rgba(10, 33, 62, 0.15)',
                  fontSize: '18px',
                  padding: '2% 2% 2% 2%',
                  borderRadius: '5px',
                }}
              />

            </div>

            <div 
              className="crdr-line my-5" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <div>
              <div 
                className="CRDR-btn-section my-5"
              >
                <Button 
                  onClick={goto_currency_details}
                  className="CRDR-button py-3 ml-4 mr-5 btn-next font-weight-semibold overflow-auto"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_rdr}
                  className="CRDR-button py-3 ml-auto btn-prev font-weight-medium overflow-auto" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />Previous
                </Button>
              </div>

            </div>
        </div>
      </div>
    
  );
}

export default CreateRecurringDepositProducts;
