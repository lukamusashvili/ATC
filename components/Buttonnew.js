import Link from 'next/link';
import React, { setState, useState, useEffect } from "react";


function sendLuka(showOnMobile)
{


  fetch("https://58fe-109-172-169-150.ngrok.io/widgets", {
     
    // Adding method type
    method: "POST",
    mode: "no-cors",
    // Adding body or contents to send
    body: JSON.stringify({
      showOnMobile: showOnMobile
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 


}



function Buttonnew(props) {
 
  var [lukaRequest, setLukaRequest] = useState({});
  

    

 


  return (

          <div className="myWidget">

            <h1>sticky widget new</h1>

            <div className="dropdown-div">
                          <select
                            className="form-select my-select shadow-none"
                            aria-label="Default select example"
                            name="generalStyle"
                          >
                          
                              <option value="" defaultValue>
                              Sticky widget
                            </option>
                            <option value="Rounded Style">
                              sticky
                            </option>
                            <option value="Two">
                              Two
                            </option>
                            <option value="Three">
                              Three
                            </option>
                          </select>
                        </div>

          <Link href="/button/create">
                  <a> <button type="button" className="btn create-btn shadow-none  buttonsbtn">
                      Create
                    </button></a>
          </Link>
          </div>
    
  );
}

export default Buttonnew;
