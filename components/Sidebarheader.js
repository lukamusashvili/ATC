import React from 'react';
import Form from "react-bootstrap/Form";
function Sidebarheader() {
  return (
    <>
      <div className="sidebar-header">
        <div className="form-check form-switch sidebar-form-switch shadow-none">
          <label
            className="form-check-label ifEnabled ifEnabledGeneral enbl"
            htmlFor="flexSwitchCheckChecked"
          ></label>

          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              className="form-check-switch ifChecked ifCheckedGeneral"
              defaultChecked
            />
          </Form>
        </div>
      </div>
    </>
  );
}

export default Sidebarheader;
