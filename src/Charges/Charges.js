import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Charges.scss';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faPlusCircle, faTimes, faTimesCircle, faChevronDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

function Charges() {

  let history = useHistory();
  const [charges, setCharges] = useState('');

  function goto_IRC() {
    history.push('/interest-rate-chart');
  }

  function goto_accounting() {
    if (charges == '') {
      localStorage.setItem('charges-error', 'true');
      history.push('/accounting');
    }
    else{
      localStorage.removeItem('charges-error');
      history.push('/accounting');
    }
  }

  /* function goto_terms() {
    if(dplaces == '') {
      localStorage.setItem('currency-error', 'true');
      history.push('/terms');
    }
    else {
      localStorage.removeItem('currency-error');
      history.push('/terms');
    }
    
  } */
  function chargesHandler(e) {
    setCharges(e.target.value);
    add_tags(e.target.value);
    e.target.value = 'Select Charges';
  }

  const charge_types = ['First', 'Second', 'Third', 'Other'];

  const [tags, setTags] = useState([
    {id: 1, Name: 'A Charge Title'},
    {id: 2, Name: 'B Charge Title'},
    {id: 3, Name: 'C Charge Title'},
    {id: 4, Name: 'D Charge Title'},
    {id: 5, Name: 'E Charge Title'},
    {id: 6, Name: 'F Charge Title'},
    {id: 7, Name: 'G Charge Title'},
    {id: 8, Name: 'H Charge Title'}
  ]);

  const [count, setCount] = useState(9);

  function add_tags(val) {
    setTags([...tags, {id: count, Name: val}]);
    setCount(count+1);
  }

  function delete_tags(id) {
    setTags(tags.filter(item => item.id != id));
  }

  const items = [{Name: 'A Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'AY Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'AYY Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'B Loan Product Name', Type: 'B-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'C Loan Product Name', Type: 'C-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'D Loan Product Name', Type: 'D-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'E Loan Product Name', Type: 'E-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'F Loan Product Name', Type: 'F-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'G Loan Product Name', Type: 'G-Pro', CollectedOn: 'March 25, 2021', Amount: '$745.65'}];

  const filters = [];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])

  
return (
      <div 
        id="Charges"
        className="pl-5"
      >

        
        <div 
          className="create_charges"
        >
          <h5 
            className="py-4"
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
            <div className="charges-checkbox-container">
              <Checkboxes />
            </div>

            <div 
                className="line mt-2 mb-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div className="ml-5 my-4">
              <h5>Charges</h5>
            </div>

            <form>
            <div className="charges-input-section mx-5 my-4 px-5 py-4 "
            >
              <div className="col-md-6">
                <select 
                  onChange={chargesHandler}
                  className="custom-select custom-select-lg px-3"
                  style={{
                    padding: '3% 0 3% 0',
                    backgroundColor: '#FCFCFC',
                    border: '0.5px solid rgba(10, 33, 62, 0.15)',
                    borderRadius: '5px',
                  }}>
                  <option selected disabled>Select Charges</option>
                  {charge_types.map((each) => (
                    <option 
                      value={each}>{each}</option>
                  ))}
                </select>

              </div>

              <div 
                className="mt-5 mb-4 px-2">
                <h6>Added Charges</h6>
              </div>

              <div className="Charge-tags d-flex pb-2 overflow-auto">
                {tags.map((entry) => (
                  <div
                    id={entry.id}
                    className="pt-2 px-2 d-flex mr-3"
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1.5px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}
                  >
                  <p className="mr-2"
                    style={{
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}>
                    {entry.Name}
                  </p>
                  <FontAwesomeIcon 
                    onClick={() => {delete_tags(entry.id)}}
                    className="mt-1 mr-2"
                    icon={faTimesCircle}
                    style={{
                      color: '#FD5E1A'
                  }} />
                </div>
                ))}

              </div>

            </div>

            <div 
                className="line my-2" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div 
              className="my-4 mx-5"
            >
            

              <Table 
                id="myTable"
                borderless 
                className="w-100 mx-auto table-sm table-hover table-responsive-sm"
                style={{background: '#FFFFFF'}}
              >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)', borderBottom: '0.5px solid rgba(10, 33, 62, 0.1)'}}>
                

                  <tr>
                    <th 
                      className="table-col py-3 font-weight-normal" 
                    >
                      Name
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="table-col py-3 font-weight-normal text-right" 
                      style={{paddingRight: '5%'}}
                    >
                      Type
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="table-col py-3 font-weight-normal text-center" 
                    >
                      Amount
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="table-col py-3 font-weight-normal" 
                    >
                      Collected On                  </th>
                    <th 
                      className="table-col py-3 font-weight-normal text-right" 
                      style={{paddingRight: '6%'}}
                    >
                      Action
                    </th>
                  </tr>

                </thead>
                
                <tbody id="table-body" className="mt-3 pt-4">
                  
                  {users.map((user) => (
                  <tr>
                    <td 
                      className="table-col py-3" 
                      style={{paddingTop: '2%'}}
                    >
                      {user.Name}
                    </td>
                    <td 
                      className="table-col py-3 text-right" 
                      style={{paddingTop: '2%', paddingRight: '7%'}}
                    >
                      {user.Type}
                    </td>
                    <td 
                      className="table-col py-3 text-right" 
                      style={{paddingTop: '2%', paddingRight: '7%'}}
                    >
                      {user.Amount}
                    </td>
                    <td 
                      className="table-col py-3 text-center" 
                      style={{paddingTop: '2%', marginLeft: '80px'}}
                    >
                      <div 
                        className="pt-1 pb-1 mx-auto" 
                        style={{paddingTop: '2%', paddingRight: '10%'}}
                      >
                        {user.CollectedOn}                   
                      </div>
                    </td>
                    <td 
                      className="table-col py-3 text-right" 
                      style={{paddingTop: '2%', color: '#518EF8', paddingRight: '6%'}}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faPen} />
                      Edit
                    </td>
                    
                  </tr>
                  ))}

                </tbody>
              </Table>
            </div>

            <div 
                className="line my-5" 
                style={{border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
              >
            </div>

            <div>
              <div 
                className="charges-btn-section my-5"
              >
                <Button 
                  onClick={goto_accounting}
                  className="charges-button py-3 ml-4 mr-5 btn-next border-0 rounded font-weight-semibold"
                >
                  Next
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
                <Button 
                  onClick={goto_IRC}
                  className="charges-button py-3 ml-auto btn-prev border-0 rounded font-weight-medium"
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

export default Charges;