    import React,{useState} from 'react'
    import {Link} from "react-router-dom"
    import "./custom.css";
    import back from "../images/back.gif"
    
    const GettingStarted = () => {

      const [expiryDate, setExpiryDate] = useState(" ");

    //  const expiryDate=useRef(); 

    //  console.log(expiryDate);
   
    const handleFormat=(e)=>
    {
      let input=e.target.value;
        

          console.log(input);

        // Remove any characters that are not digits or slash
         input = input.replace(/[^\d\/]/g, "");

        // Add slash if it's not present and the length is 2
      if (input.length === 2 && !input.includes("/")) {
        input += "/";
      }

        // Enforce MM/YY format
        let parts = input.split("/");
        if (parts.length > 1) {
          parts[0] = Math.min(parseInt(parts[0], 10), 12)
            .toString()
            .padStart(2, "0"); // Correct month
          parts[1] = parts[1].substring(0, 2); 
          input = parts.join("/");
        }
       

        setExpiryDate(input);
    }



  
      // .addEventListener("input", function (e) {
       
      // });


      return (
        <>
          <form className="form">
            <div className="title">
              <img
                src="https://i.pinimg.com/originals/b4/6b/7d/b46b7d4c8d0f4e12b4b3ec29c69f4e6e.jpg"
                alt="logo"
                className="logo"
              />
              <h3>Welcome to Your First Payment!</h3>
            </div>
            <div className="details">
              <div className="receipt">
                <label htmlFor="bill" className="bill-label">
                  Month to Month Payment
                </label>
                <input type="number" name="bill" placeholder="INR" />
                <p className="price-tagline">
                  Price after 1st month of service (1st charge to be prorated)
                </p>
              </div>

              {/* Credit Card */}
              <fieldset className="card-details">
                <div className="card-title">
                  <h3>Card Details</h3>
                </div>

                <div className="card-values">
                  <div className="name-holder">
                    <input
                      type="text"
                      className="first-name-input"
                      name="first-name"
                      required
                    />
                    <label htmlFor="first-name" className="first-name-label">
                      First Name
                    </label>
                  </div>
                  <div className="name-holder">
                    <input
                      type="text"
                      className="last-name-input"
                      name="last-name"
                      required
                    />
                    <label htmlFor="last-name" className="last-name-label">
                      Last Name
                    </label>
                  </div>
                  <div className="name-holder">
                    <input
                      type="email"
                      className="email-input"
                      name="email"
                      required
                    />
                    <label htmlFor="email" className="email-label">
                      Email ID
                    </label>
                  </div>
                  <div className="name-holder">
                    <input
                      type="number"
                      className="card-no-input"
                      name="card-no"
                      required
                    />
                    <label htmlFor="card-no" className="card-no-label">
                      Card No
                    </label>
                  </div>
                  <div className="name-holder">
                    <input
                      type="number"
                      className="cvv-input"
                      name="cvv"
                      required
                    />
                    <label htmlFor="CVV" className="cvv-label">
                      CVV
                    </label>
                  </div>
                  <div className="name-holder">
                    <input
                      type="text"
                      className="expiry-input"
                      name="expiry-date"
                      value={expiryDate}
                      id="expiry-date"
                      placeholder="MM/YY"
                      maxLength="5"
                      onChange={handleFormat}
                      
                      required
                    />
                    <label htmlFor="expiry" className="expiry-label">
                      Expiry Date
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="break"></div>

            <div className="personal-details mt-4">
              <h3>Billing Address</h3>

              <label htmlFor="street1" className="street-label mb-3 mt-3">
                Street Address Line 1
                <input
                  type="text"
                  placeholder="House No, Road No, Flat No etc"
                  name="address1"
                  required
                />
              </label>

              <label htmlFor="street2">
                Street Address Line 2
                <input
                  type="text"
                  placeholder="Street address, Area, Locality"
                  name="address2"
                />
              </label>

              <div className="address">
                <label htmlFor="city" className="city-label">
                  City <input type="text" name="city" />
                </label>

                <label htmlFor="state">
                  State <input type="text" name="state" />
                </label>

                <label htmlFor="pincode">
                  Pincode <input type="text" name="pincode" />
                </label>
              </div>
            </div>

            <div className="end-form">
              <p>
                By signing below I hereby authorize the company to charge my
                credit card for the amount shown above on a month to month
                basis.
              </p>
              <div className="terms">
                <input id="terms-and-conditions" type="checkbox" required />
                <label htmlFor="terms-and-conditions">
                  I accept the <span> </span>
                  <a href="https://www.freecodecamp.org/news/terms-of-service/">
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <button className="btn btn-primary">
            <Link to="/">
            <img src={back} className="backimage" />
            </Link>
          </button>
        </>
      );
    }
    
    export default GettingStarted