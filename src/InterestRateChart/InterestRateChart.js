import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './InterestRateChart.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Principal from './Principal';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';


function InterestRateChart() {

  let history = useHistory();

  const [add_prin, setAdd_prin] = useState('none');
  const [valid_from, setValid_from] = useState('');

  const [elements, setElements] = useState([]);
  const [show_elements, setShow_elements] = useState(['none']);

  function valid_fromHandler(e) {
    setValid_from(e.target.value);
  }


  function goto_settings() {
    history.push('/settings');
  } 

  function goto_charges() {
    if (valid_from == '') {
      localStorage.setItem('IRC-error', 'true');
      history.push('/charges');
    }
    else {
      localStorage.removeItem('IRC-error');
      history.push('/charges');
    }
  }

  const [x, setX] = React.useState(0);

  function Principal_div() {
    if (x == 0){
      setX(x+1);
      setShow_elements('block');
      setAdd_prin('flex');
    }
    else{
      setX(x-1);
      setAdd_prin('none');
      setShow_elements('none');
    }
    
  }

  function add_principal() { 
    setElements([...elements, <Principal id={uuidv4().toString()} array={elements}/>]);
  }

  useEffect(
    () => {
    setElements([...elements, <Principal id={uuidv4().toString()} array={elements}/>]); 
  },[])

  
  return (
      <div 
        id="InterestRateChart"
        className="pl-5"
      >
        
        <div 
          className="create_IRC"
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
            <div className="IRC-checkbox-container">
              <Checkboxes />
            </div>

            <div 
                className="line mt-2 mb-4" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>

            <form>
              <div className="container">

            <div className="my-4">
              <h5>Interest Rate Chart</h5>
            </div>

            <div className="row py-4"
            >
              <div className="col-md-6">
              <div className="form-group">
                <label>
                  Valid From Date
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                    id="short-name"
                    className="form-control px-3" type="date"
                    onChange={valid_fromHandler}
                />
              </div>
              </div>

              <div className="col-md-6">
              <div className="form-group">
                <label>
                  Valid Till Date
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                    id="short-name"
                    className="form-control px-3" type="date"
                />
              </div>
              </div>
              
            </div>


            <div 
                className="line-2 mb-4" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>        

            <div style={{fontSize: '20px'}}>

              <div class="custom-control custom-switch mb-4">
                <input onClick={Principal_div} type="checkbox" class="custom-control-input" id="customSwitch4" />
                <label class="custom-control-label settings-text-small" for="customSwitch4">Is primary grouping by Amount</label>
              </div>

              <div className="apply_pi" style={{display: `${show_elements}`}}>
                <form>
                  {elements}
                </form>
                

              </div>

              <div className="h-auto mt-5"
                style={{display: `${add_prin}`}}>
                <Button 
                  className="py-3 px-4" 
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

            <div 
                className="line my-4" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div className="container">
              <div 
                className="IRC-btn-section my-5"
              >
                <Button 
                  onClick={goto_charges}
                  className="IRC-button py-2 ml-4 btn-next font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_settings}
                  className="IRC-button py-2 ml-auto btn-prev font-weight-medium" 
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

export default InterestRateChart;
