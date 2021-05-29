import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './PreviewShareProduct.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';

function PreviewShareProduct() {
  let history = useHistory();

  function goto_rdr() {
    history.push("/recurring-deposit-products");
  }

  return (
      <div 
        id="PreviewShareProduct"
        className="h-100 w-100 px-3 py-5"
        style={{background: '#F3F5F8'}}
      >
        <h4 
          className="py-4 overflow-auto"
          style={{transform: 'none'}}
        >
          Preview Share Product
        </h4>

        <div
          className="h-75 w-100 mx-auto py-1 psprounded"
          style={{background: '#FFFFFF'}}
        >
          <div
            className="w-100 my-5"
          >
            <h5
              className="mb-4 ml-5 font-weight-medium medium-text overflow-auto"
            >
              Details
            </h5>

            <div
              className="Grey-div mx-auto px-4 py-3 d-flex rounded-right"
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
              className="whitediv py-3 d-flex"
              style={{background: '#FBFBFB'}}
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

            <div 
              className="mt-3"
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width: '90%'}}
            >
            </div>
          </div>

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="main mb-4 font-weight-medium medium-text overflow-auto"
            >
              Items
            </h5>

            <div 
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}
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
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}
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
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}
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
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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

            <div 
              className="mt-4" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width: '90%'}}
            >
            </div>

          </div> 

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="mb-4 font-weight-medium medium-text overflow-auto"
            >
              Settings
            </h5>

            <div 
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}
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
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
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
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}
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
              className="mt-4" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width:'90%'}}
            >           
            </div>
          </div> 

          <div 
            className="mx-auto my-5"
            style={{width: '100%'}}
          >
            <h5 
              className="mb-4 mx-auto font-weight-medium medium-text overflow-x-auto"
              style={{width: '90%'}}
            >
              Market Price
            </h5>

            <div className="mx-auto"
              style={{width: '90%', background: '#F3F5F8'}}
            >
              <Table 
                borderless 
                className="PreviewShareProduct-table mx-auto h-100 table-sm rounded table-responsive-sm"
                style={{}}
                >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                  <tr>
                    <th 
                      className="py-3 font-medium"
                    >
                      From Date
                    </th>
                    <th 
                      className="py-3 font-medium text-right"
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

            <div 
              className="mt-3 mx-auto" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width: '90%'}}
            >
            </div>

          </div>

          <div 
            className="mx-auto my-5"
            style={{width: '100%'}}
          >
            <h5 
              className="mb-4 mx-auto font-weight-medium medium-text overflow-auto"
              style={{width: '90%'}}
            >
              Charges
            </h5>

            <div className="mx-auto"
              style={{width: '90%', background: '#F3F5F8'}}
            >
              <Table 
                borderless 
                className="PreviewShareProduct-table mx-auto h-100 table-sm rounded table-responsive-sm"
                style={{}}
              >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                  <tr>
                    <th 
                      className="table-col py-3 font-medium"
                    >
                      Name
                    </th>
                    <th 
                      className="table-col py-3 font-medium text-right"
                    >
                      Type
                    </th>
                    <th 
                      className="table-col py-3 font-medium text-right"
                    >
                      Amount
                    </th>
                    <th 
                      className="table-col py-3 font-medium text-right" 
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

            <div 
              className="mt-3 mx-auto" 
              style={{border: '0.5px solid rgba(10, 33, 62, 0.1)', width: '90%'}}
            >
            </div>
          </div>

          <div 
            className="w-100 my-5"
          >
            <h5 
              className="mb-4 font-weight-medium medium-text overflow-auto"
            >
              Accounting
            </h5>

            <div 
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Shares Reference(Assets)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Shares Suspense Control(Liabilities)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="mx-5 px-4 py-3 d-flex rounded-right d-flex"
              style={{background: '#F3F5F8'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Share Equity(Equity)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="White-div py-3 d-flex"
              style={{background: '#FBFBFB'}}>
              <h6 
                className="w-50 font-weight-medium"
              >
                Income From Fee(Income)
              </h6>

              <h6 
                className="w-50 text-right font-weight-medium ml-auto"
              >
                False
              </h6>
            </div>

            <div 
              className="mt-3" 
              style={{width: '90%', border: '0.5px solid rgba(10, 33, 62, 0.1)'}}
            >
            </div>
          </div> 

          <div 
          >
            <div 
              className="PreviewShareProduct-btns my-5"
            >
              <Button 
                className="PSP-button py-3 ml-4 btn-confirm font-weight-semibold overflow-auto"
                onClick={goto_rdr}
              >
                Confirm
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </Button>
             
              <Button 
                className="PSP-button py-3 ml-auto btn-edit font-weight-medium overflow-auto" 
              >
                <FontAwesomeIcon className="mr-3" icon={faEdit} />
                Edit
              </Button>
            </div>
          </div>  
        </div>
      </div>
    
  );
}

export default PreviewShareProduct;
