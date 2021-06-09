import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './PreviewShareProduct.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function PreviewShareProduct() {
  let history = useHistory();

  function goto_rdr() {
    history.push("/recurring-deposit-products");
  }

  return (
      <div 
        id="PreviewShareProduct"
        className="pl-5"
      >
        <h5 
          className="py-3 text-break"
        >
          Preview Share Product
        </h5>

        <motion.div
          className="h-auto bg-white  pt-1 mb-4 pb-4 PSP-rounded"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="container">
          <div
            className="w-100 mt-4 mb-5"
          >
            <h5
              className="section-heading mb-4  font-weight-medium text-break"
            >
              Details
            </h5>

            <div
              className="greydiv py-3 d-flex rounded-right"
              style={{}}
            >
              <h6
                className="w-50 font-weight-medium"
              >
                Description
              </h6>

              <h6
                className="w-50 text-right font-weight-medium"
              >
                False
              </h6>

            </div>

            <div
              className="whitediv  py-3 d-flex"
            >
              <h6
                className="w-50 font-weight-medium"
              >
                Short Name
              </h6>

              <h6
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <hr/>
          </div>

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="section-heading mb-4  font-weight-medium text-break"
            >
              Items
            </h5>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Currency
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="whitediv  py-3 d-flex"
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Decimal Places
              </h6>

              <h6 
                className="text-right font-weight-medium ml-auto"
              >
                False
              </h6>

            </div>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Currency in Multiples Of
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>

            </div>

            <div 
              className="whitediv  py-3 d-flex"
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Total Shares
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Total Shares to be issued
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>

            </div>

            <div 
              className="whitediv  py-3 d-flex"
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Nominal / Unit Price
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Total Shares Capital Value
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <hr/>

          </div> 

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="section-heading mb-4  font-weight-medium text-break"
            >
              Settings
            </h5>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium" 
              >
                Shares per Client
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="whitediv  py-3 d-flex"
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Minimum Active Period
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="greydiv  py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Lock-in Period
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>

            </div>

            <div 
              className="whitediv  py-3 d-flex"
            >
              <h6 
                className="w-50 font-weight-medium"
              >
                Allow dividends for inactive clients
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="mt-4 " 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width:'90%'}}
            >           
            </div>
          </div> 

          <div 
            className=" my-5"
            style={{width: '100%'}}
          >
            <h5 
              className="section-heading mb-4  font-weight-medium overflow-x-auto"
            >
              Market Price
            </h5>

            <div className=""
              style={{background: '#F3F5F8'}}
            >
              <Table 
                borderless 
                className="PreviewShareProduct-table  h-100 table-sm rounded table-responsive-sm"
                style={{}}
                >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                  <tr>
                    <th 
                      className="py-3 font-weight-medium"
                    >
                      From Date
                    </th>
                    <th 
                      className="py-3 font-weight-medium text-right"
                      style={{paddingRight: '6%'}}
                    >
                      Nominal/Unit Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="py-3"
                    >
                      March 25, 2021
                    </td>
                    <td className="py-3 text-right"
                      style={{paddingRight: '6%'}}
                    >
                      Price
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3"
                    >
                      March 25, 2021
                    </td>
                    <td className="py-3 text-right"
                      style={{paddingRight: '6%'}}
                    >
                      Price
                    </td>
                  </tr>
                </tbody>
              </Table>

            </div>

            <hr/>

          </div>

          <div 
            className=" my-5"
            style={{width: '100%'}}
          >
            <h5 
              className="section-heading mb-4  font-weight-medium text-break"
            >
              Charges
            </h5>

            <div className=""
              style={{background: '#F3F5F8'}}
            >
              <Table 
                borderless 
                className="PreviewShareProduct-table  h-100 table-sm rounded table-responsive-sm"
                style={{}}
              >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                  <tr>
                    <th 
                      className="table-col py-3 font-weight-medium"
                    >
                      Name
                    </th>
                    <th 
                      className="table-col py-3 font-weight-medium text-right"
                    >
                      Type
                    </th>
                    <th 
                      className="table-col py-3 font-weight-medium text-right"
                    >
                      Amount
                    </th>
                    <th 
                      className="table-col py-3 font-weight-medium text-right" 
                      style={{paddingRight: '6%'}}
                    >
                      Collected On
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="table-col py-3"
                    >
                      Some Random Name
                    </td>
                    <td className="table-col py-3 text-right"
                    >
                      Cash
                    </td>
                    <td className="table-col py-3 text-right"
                    >
                      $7850.02
                    </td>
                    <td 
                      className="table-col py-3 text-right" 
                      style={{paddingRight: '6%'}}
                    >
                      March 25, 2021
                    </td>
                  </tr>

                  <tr>
                    <td className="table-col py-3"
                    >
                      Some Random Name
                    </td>
                    <td className="table-col py-3 text-right"
                    >
                      Cash
                    </td>
                    <td className="table-col py-3 text-right"
                    >
                      $7850.02
                    </td>
                    <td 
                      className="table-col py-3 text-right" 
                      style={{paddingRight: '6%'}}
                    >
                      March 25, 2021
                    </td>
                  </tr>
                </tbody>
              </Table>

            </div>

            <hr/>
          </div>

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="section-heading mb-4  font-weight-medium text-break"
            >
              Accounting
            </h5>

            <div 
              className="greydiv  py-3 d-flex rounded-right"
              style={{background: '#F3F5F8'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Shares Reference (Assets)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="whitediv  py-3 d-flex">
              <h6 
                className="w-50 font-weight-medium"
              >
                Shares Suspense Control (Liabilities)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="greydiv  py-3 d-flex rounded-right"
              style={{background: '#F3F5F8'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Share Equity (Equity)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="whitediv  py-3 d-flex">
              <h6 
                className="w-50 font-weight-medium"
              >
                Income From Fee (Income)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>
            </div>
            
          </div> 
          <hr/>

          <div className="container"
          >
            <div 
              className="PreviewShareProduct-btns my-5 w-100"
            >
              <Button 
                className="PSP-button py-2 btn-edit font-weight-medium text-break" 
              >
                <FontAwesomeIcon className="mr-3" icon={faEdit} />
                Edit
              </Button>
              <Button 
                className="PSP-button py-2 btn-confirm rounded border-0 font-weight-semibold text-break"
                onClick={goto_rdr}
              >
                Confirm
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Button>
             
            </div>
          </div>  
        </motion.div>
      </div>
    
  );
}

export default PreviewShareProduct;
