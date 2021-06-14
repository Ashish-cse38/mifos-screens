import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Charge_details.scss';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faChevronRight, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

function Delete_charge() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="changeCursor">
      <h6 onClick={handleShow}>
        Delete Charge
      </h6>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Body>
          <h5 className="text-center mt-2 mb-5">Delete Charge?</h5>
          <div>
            <Button 
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#FD5E1A'}}>
              <h6>Yes, Delete</h6>
            </Button>
          </div>
          <div>
            <Button 
              onClick={handleClose}
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#F3F5F8', color: 'rgba(10, 33, 62, 0.6)'}}>
              <h6>No, Keep it</h6>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

ReactDOM.render(<Delete_charge />, document.getElementById('root'));


function Charge_details() {
  let history = useHistory();

  function gotoEditCharge() {
    history.push('/edit-charge')
  }
  return (
    
    <div
    id="Charge_details"
    className="pl-5">

        <h5 className="py-4">
          Charge Details
        </h5>


      <div className="container">
       
        <div className="row">
          <div className="col-md-4 mb-3">
            
            <div className="col py-4 bg-white"
              style={{borderRadius: '15px'}}>
              <div className="row d-flex">
                <div className="col-8 d-flex">
                  <div className="col">
                    <h5><b>Origination Fee</b></h5>
                    <h6 className="greyFont">Status:Active</h6>
                  </div>
                  
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <div class="custom-control custom-switch my-2">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                    <label class="custom-control-label" for="customSwitch1">
                      
                    </label>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col greyFont">
                  <div className="col d-flex">
                    <FontAwesomeIcon className="mr-2" icon={faEdit}/>
                    <div className="changeCursor">
                      <h6
                        onClick={gotoEditCharge}
                      >
                        Edit Charge
                      </h6>
                    </div>
                    <FontAwesomeIcon className="ml-auto" icon={faChevronRight}/>
                  </div>
                  <div className="col d-flex">
                    <FontAwesomeIcon className="mr-2" icon={faTrashAlt}/>
                    <Delete_charge />
                    <FontAwesomeIcon className="ml-auto" icon={faChevronRight} />
                  </div>

                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-8" >
            <div className="col py-4 bg-white" style={{borderRadius: '15px'}}>
              <div className="row px-2">
                <div className="col">
                  <h5>Charge Details</h5>
                </div>
              </div>
              <div className="row px-2">
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Charge Type
                    </h6>
                    <h6>
                      <b>Charge</b>
                    </h6>
                  </div>
                  
                </div>
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Currency
                    </h6>
                    <h6>
                      <b>Indian Rupee</b>
                    </h6>
                  </div>
                  
                </div>
              </div>

              <div className="row px-2">
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Amount
                    </h6>
                    <h6>
                      <b>0.75</b>
                    </h6>
                  </div>
                  
                </div>
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Charge Time Type
                    </h6>
                    <h6>
                      <b>Disbursement</b>
                    </h6>
                  </div>
                  
                </div>
              </div>

              <div className="row px-2">
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Charge Applies to
                    </h6>
                    <h6>
                      <b>Loan</b>
                    </h6>
                  </div>
                  
                </div>
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Charge Calculation Type
                    </h6>
                    <h6>
                      <b>% Amount</b>
                    </h6>
                  </div>
                  
                </div>
              </div>

              <div className="row px-2">
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Active
                    </h6>
                    <h6>
                      <b>Yes</b>
                    </h6>
                  </div>
                  
                </div>
                <div className="col-md-6 py-2" >
                  <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                    <h6 className="greyFont">
                      Charge Payment Mode
                    </h6>
                    <h6>
                      <b>Regular</b>
                    </h6>
                  </div>
                  
                </div>
              </div>
            </div>
              
          </div>
        </div>
      </div>

    </div>
  );
}

export default Charge_details;