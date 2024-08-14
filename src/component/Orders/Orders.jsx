import React from 'react';
import './order.css'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  
 const notify = () => {
  // Calling toast method by passing string
  toast("Order Successful");
};

  
 
  return (
    <div className="orderdata">
    <div className="orderf">
      <form className="orderform" >
        <div className="formgroup">
          <input type="text" className="formcontrol-o" id="pname" placeholder=" Product name" name="item_name" />
          <input type="quantity" className="formcontrol-or" id="quantity" placeholder="Quantity in kg"  name="quantity" />
        </div>

        <div className="formgroup">
          <input type="name"  className="formcontrol" id="name" placeholder="Name" />
        </div>
        <div className="formgroup">
          <input type="phonenumber"  className="formcontrol" id="phonenumber" maxLength={10} placeholder="Phone number" />
        </div>

        <div className="formgroup">
          <input type="text"   className="formcontrol" id="address" placeholder="Apartment/House/Shop" />
        </div>
        <div className="formgroup">
          <input type="text"  className="formcontrol" id="address1" placeholder="Address(Street/Area)" />
        </div>
        <div className="formgroup">
          <input type="text"   className="formcontrol" id="address2" placeholder="Distic/City" />
        </div>

        <div className="formgroup">
              <select id="inputState" className="formcontrol">
                <option selected disabled>Select State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="GA">Goa</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UT">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="LD">Lakshadweep</option>
                <option value="PY">Puducherry</option>
              </select>
            </div>


        <div className="formgroup ">
          <input type="text"  className="formcontrol" id="inputZip" placeholder='Postal Code' />
        </div>

        <button type="submit" onClick={notify} className="btn btn-primary">
          <Link to="/Orders/OrderSucess" >Place Order</Link>
        
        </button>
      </form>
    </div>
  </div>
  );
};
export default Orders;