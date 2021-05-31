import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './RecurringDepositProducts.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function RecurringDepositProducts() {

  let history = useHistory();

  const items = [{Name: 'A Product Name', Shortname: 'A-Pro', Status: 'Active'},
  {Name: 'AY Product Name', Shortname: 'A-Pro', Status: 'Active'},
  {Name: 'AYY Product Name', Shortname: 'A-Pro', Status: 'Active'},
  {Name: 'B Product Name', Shortname: 'B-Pro', Status: 'Active'},
  {Name: 'C Product Name', Shortname: 'C-Pro', Status: 'Active'},
  {Name: 'D Product Name', Shortname: 'D-Pro', Status: 'Inactive'},
  {Name: 'E Product Name', Shortname: 'E-Pro', Status: 'Active'},
  {Name: 'F Product Name', Shortname: 'F-Pro', Status: 'Inactive'},
  {Name: 'G Product Name', Shortname: 'G-Pro', Status: 'Active'}];

  const filters = [];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])
  
  function goto_pd() {
    history.push("/personal-details");
  }

  function filterFunction() {
    var input, filter, i, text;
    input = document.getElementById("filter-by-name");
    filter = input.value.toUpperCase();

    for (i = 0; i < items.length; i++) {
      text = items[i].Name;
      if (text) {
        if (text.toUpperCase().indexOf(filter) > -1) {
          filters.push(items[i]);
          setUsers(filters);
        }
      }       
    }
  }

  return (
      <div 
        id="RecurringDepositProducts"
        className="px-3 py-5 w-100 overflow-auto"
        style={{height: '100vh', background: '#F3F5F8'}}
      >
        
        <div 
          className="RDP w-auto"
        >
          <h4 
            className="py-4"
          >
            Recurring Deposit Products
          </h4>

          <motion.div 
            className="create h-25 mt-2 py-2 px-3 ml-auto"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
            onClick={goto_pd} >
            <FontAwesomeIcon className="mr-3 mt-1" icon={faPlusCircle} style={{fontSize: '20px'}}/>
            Create Recurring Deposit Products
          </motion.div>

        </div>

        <motion.div 
          className="search input-group input-group-lg mx-auto d-flex"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span 
            className="input-span input-group-append bg-white border-right-0 mb-4 pl-2" 
          >
            <span 
              className="input-group-text bg-transparent border-0" st>
              <FontAwesomeIcon className="search-icon mr-3 mt-1" icon={faSearch} style={{fontSize: '20px'}}/>
            </span>
          </span>

        
          <input
            id="filter-by-name"
            onChange={filterFunction}
            className="search-bar form-control border-left-0 mb-4" type="search" placeholder="Filter by name..."
            style={{
              border: '0.5px solid rgba(10, 33, 62, 0.15)',
              fontSize: '18px',
              padding: '4% 4% 4% 0',
              borderRadius: '0 39.5px 39.5px 0',
              boxShadow: '0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)'
            }}
          />
         
        </motion.div>
        
        <motion.div
          className="w-100 bg-white mx-auto py-1 table-div"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div 
            className="my-4 mx-auto"
            style={{width: '96%'}}
          >
           

            <Table 
              id="myTable"
              borderless 
              className="RecurringDepositProducts-table h-100 table-sm table-hover table-responsive-sm"
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
                    Short Name
                    <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                  </th>
                  <th 
                    className="table-col py-3 font-weight-normal text-center" 
                  >
                    Status
                  </th>
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
                    {user.Shortname}
                  </td>
                  <td 
                    className="table-col py-3 text-center" 
                    style={{paddingTop: '2%', marginLeft: '80px'}}
                  >
                    <div 
                      className="pt-1 pb-1 mx-auto" 
                      style={user.Status==='Active' ? {width: '80px', color: '#0A9D7A', background: 'rgba(10, 157, 122, 0.1)', borderRadius: '100px'}
                              : {width: '80px', color: '#FD5E1A', background: 'rgba(253, 94, 26, 0.1)', borderRadius: '100px'}}
                    >
                      {user.Status}                   
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
        </motion.div>
      </div>
    
  );
}

export default RecurringDepositProducts;
