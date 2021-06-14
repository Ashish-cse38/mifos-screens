import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Edit_charge.scss';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faChevronRight, faTrash, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

function Edit_charge() {


  return (
    
    <div
    id="Charge_details"
    className="pl-5">

      <h5 className="py-4">
        Edit Charge
      </h5>

      <div className="container mb-2">
       
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
                    <input type="checkbox" class="custom-control-input" id="customSwitch0" />
                    <label class="custom-control-label" for="customSwitch0">
                      
                    </label>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col greyFont">
                  <div className="col d-flex">
                    <FontAwesomeIcon className="mr-2" icon={faEdit}/>
                    <h6>Edit Charge</h6>
                    <FontAwesomeIcon className="ml-auto" icon={faChevronRight}/>
                  </div>
                  <div className="col d-flex">
                    <FontAwesomeIcon className="mr-2" icon={faTrashAlt}/>
                    <h6>Delete Charge</h6>
                    <FontAwesomeIcon className="ml-auto" icon={faChevronRight} />
                  </div>

                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-8" >
            <div className="col py-4 bg-white" style={{borderRadius: '15px', background: '#F3F5F8'}}>
              <div className="row px-2">
                <div className="col pb-4">
                  <h5>Edit Charge</h5>
                </div>
              </div>
              <form className="px-2">
                <div className="form-group">
                  <label>
                    Charge applies to
                  </label>
                  <select
                    className="custom-select px-3"
                    type="select">
                    <option selected>Select Currency</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Name
                      </label>
                      <input
                        className="form-control px-3"
                        type="text">
                      </input>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Currency
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>Indian Rupee</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Charge time type
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>Disbursement</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Charge calculation
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>%Amount</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Charge payment by
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>Regular</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr/>
                <div className="row mt-4">
                  <div className="col">
                    <div className="form-group">
                      <div class="custom-control custom-switch my-2">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label accounting-text-small" for="customSwitch1">
                          Add Fee Frequency
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Charge Frequency
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>Disbursement</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Frequency Interval
                      </label>
                      <input
                        className="form-control px-3"
                        type="text">
                      </input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Amount
                      </label>
                      <input
                        className="form-control px-3"
                        type="text">
                      </input>
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="row mt-4">
                  <div className="col">
                    <div className="form-group">
                      <div class="custom-control custom-switch my-2">
                        <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                        <label class="custom-control-label accounting-text-small" for="customSwitch2">
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div class="custom-control custom-switch my-2">
                        <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                        <label class="custom-control-label accounting-text-small" for="customSwitch3">
                          Is Penalty ?
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Tax Group
                      </label>
                      <select
                        className="custom-select px-3"
                        type="select">
                        <option selected>Select Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr/>

                <div 
                  className="Edit_charge-btns my-4 w-100"
                >
                  <Button 
                    className="py-2 px-4 btn-cancel font-weight-medium text-break" 
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="py-2 btn-submit rounded border-0 font-weight-semibold text-break"
                  >
                    <FontAwesomeIcon className="mr-3" icon={faSave} />
                    Submit
                  </Button>
                
                </div>

              </form>
            </div>
              
          </div>
        </div>
      </div>

    </div>
  );
}

export default Edit_charge;