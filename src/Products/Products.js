import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Products.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import GMB from './greenMoneyBag.png';
import RCI from './redCrossIcon.png';
import BL from './blueLuggage.png';
import PL from './purpleLuggage.png';
import PiL from './pinkLuggage.png';
import GL from './greenLuggage.png';
import GC from './greenCassette.png';
import PS from './purpleSetting.png';
import YC from './yellowCassette.png';

const Product = ({Name, Detail, Icon, Background}) => {
  return(
    <div 
      className="bg-white py-3"
      style={{width: '350px', borderRadius: '15px'}}
    >
      <div className="col">
        <div className="row">
          <div 
            className="col-3 pt-2"
          >
            <div 
              className="product-icon mx-auto d-flex justify-content-center"
              style={{background: `${Background}`}}>
              <img 
                className="h-100 w-100"
                src={Icon}
              />
            </div>
          </div>
          <div className="col-9">
            <h6>
              {Name}
            </h6>
            <p style={{fontSize: '14px'}}>
              {Detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Products = () => {
  return(
    <div 
        id="Products"
        className="pl-5"
    >
      <h5 className="py-4">
          Products
      </h5>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >

        <div className="d-flex flex-wrap jsutify-content-between">
          <div className="pr-4 pb-4">
            <Product Name="Loan product" Detail="Add new loan product or modify or inactivate loan products." Icon={GMB} Background="rgba(10, 157, 122, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Product Mix" Detail="Define rules for taking multiple rules." Icon={RCI} Background="rgba(244, 190, 44, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Saving Products" Detail="Add new savings products or modify or inactivate savings products" Icon={BL} Background="rgba(0, 180, 216, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Fixed Deposit Products" Detail="Add, modify or inactivat a fixed deposit products" Icon={PL} Background="rgba(114, 78, 145, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Share Products" Detail="Add new share product or modify or inactivate share products" Icon={PiL} Background="rgba(224, 59, 139, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Recurring Deposit Products" Detail="Add, modify or inactivate recurring deposit products" Icon={GL} Background="rgba(78, 205, 196, 0.15)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Charges" Detail="Define charges / penalties for loan products, Savings and deposit products." Icon={GC} Background="rgba(53, 114, 102, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Manage Tax Configurations" Detail="Define Tax components and tax groups" Icon={PS} Background="rgba(114, 78, 145, 0.1)"/>
          </div>
          <div className="pr-4 pb-4">
            <Product Name="Floating Rates" Detail="Define floating rates for loan products" Icon={YC} Background="rgba(244, 190, 44, 0.1)"/>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default Products;