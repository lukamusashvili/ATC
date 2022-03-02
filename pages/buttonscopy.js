import Head from "next/head";
import Form from "react-bootstrap/Form";
import React, { Component, setState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "next/image";
// import { ajax } from "jquery";
// import jquery from "jquery";
//import { Form } from 'react-advanced-form'






if (process.browser) {
    $(document).ready(function () {

      //if(location.href.index('update')){

      // general
      $(".ifCheckedGeneral").on("click", function () {
        
          $(".ifEnabledGeneral").toggleClass("dsbl");
          $(".ifEnabledGeneral").toggleClass("enbl");
        
      });
      // buttons
      $(".ifCheckedButtons").on("click", function () {
       
          $(".ifEnabledButtons").toggleClass("dsbl");
          $(".ifEnabledButtons").toggleClass("enbl");
        
      });
      // positions
      $(".ifCheckedPosition").on("click", function () {
        
          $(".ifEnabledPosition").toggleClass("dsbl");
          $(".ifEnabledPosition").toggleClass("enbl");
        
      });
      //timer
      $(".ifCheckedTimer").on("click", function () {
        
          $(".ifEnabledTimer").toggleClass("dsbl");
          $(".ifEnabledTimer").toggleClass("enbl");
        
      });
      //media
      $(".ifCheckedMedia").on("click", function () {
        
          $(".ifEnabledMedia").toggleClass("dsbl");
          $(".ifEnabledMedia").toggleClass("enbl");
        
      });
      //custom css
      $(".ifCheckedCss").on("click", function () {
        
          $(".ifEnabledCss").toggleClass("dsbl");
          $(".ifEnabledCss").toggleClass("enbl");
        

        // media icons
      });
    

      /// btns show settings
    $('.showOnMobile input').click(function (e) { 
      $(this).toggleClass("showOnMobile");
    });
    $(".showProductImage input").click(function (e) {
      $(this).toggleClass("showProductImage");
    });
    $(".showProductName input").click(function (e) {
      $(this).toggleClass("showProductName");
    });
    $(".showPrice input").click(function (e) {
      $(this).toggleClass("showPrice");
    });
    $(".showVariants input").click(function (e) {
      $(this).toggleClass("showVariants");
    });
    $(".showQuantity input").click(function (e) {
      $(this).toggleClass("showQuantity");
    });
    $(".showOutOfStocks input").click(function (e) {
      $(this).toggleClass("showOutOfStocks");
    });
    $(".showLoopAnimation input").click(function (e) {
      $(this).toggleClass("showLoopAnimation");
    });

   // enable timer? 
   $(".ifUrgencyTime input").on("click", function () {
     var status = $(".fieldsetTimer").prop("disabled");
     $(".fieldsetButtons").prop("disabled", !status);
   });




   //booleans
   
   //console.log( showOnMobile, 'value!!')

   
    //end jquery
    $(".ifUrgencyTime input").on("click", function () {
      var status = $(".fieldsetTimer").prop("disabled");
      $(".buttonsSave").prop("disabled", false);
      $(".fieldsetTimer").prop("disabled", !status)
      const bzbz = $(".ifCheckedGeneral");
      // console.log(typeof bzbz);
    });
    $(".ifCheckedGeneral input").on('click', function () {
      if ($(this).is(":checked")) {
        const aa = $(".ifCheckedGeneral input");
        // console.log(typeof aa);
      }
    });
    

  });

 
    //end process browser
  }


export class buttonscopy extends Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            lukaRequest: [],
            dataisLoaded: false,

           
            buttonBGcolor : "#0083f8",
            timerBGcolor : "#0083f8",
            timerTXTcolor : "#0083f8",
            progressBar : 0,

            //general
            generalStyle:"Choose your style :)",
            widgetName:"",
            showStatusMobile:false,
            showStatusDesktop:false,

            showOnMobile : false,
            showProductImage:false,
            showProductName:false,
            showPrice:false,
            showVariants:false,
            showQuantity:false,
            showOutOfStocks:false,
            borderBGcolor: "#0083f8", // same as borderBackgroundColor
            borderHeight: undefined, //add
            borderAnimation:"", // select
            borderSpeedOfAnimation:undefined, // aq stringi giweria da num ar unda modiodes?
            showLoopAnimation:false,
            buyButtonColor:"#0083f8",
            buyButtonShape:"", //select
            buyButtonText:"" // empty str default
        };
    }

   
    sendLuka = (divid) => {
        //this.form.serialize() // { "username": "admin" }
        fetch("https://webhook.site/435f58ac-d5d4-4704-b02e-f6c975a8b058", {
     
            // Adding method type
            method: "POST",
            mode: "no-cors",
            // Adding body or contents to send
            // body: JSON.stringify({
            //   showOnMobile: showOnMobile
            // }),
            body: $("#" + divid).serialize(),
            // body: $("#b1").serialize(),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    getLuka = () => {
        //this.form.serialize() // { "username": "admin" }
        fetch("/button.json", {
     
            // Adding method type
            method: "get",
            mode: "no-cors",
            // Adding body or contents to send
            // body: JSON.stringify({
            //   showOnMobile: showOnMobile
            // }),
            //body: this.form.serialize(),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(res => {
            this.setState({lukaRequest: res, dataisLoaded: true})
        })

    }

    componentDidMount() 
    {
        this.getLuka()
    }

    render() {
      console.log(this.state.showOnMobile,"ani11")



    if (!this.state.dataisLoaded)
        return (
            <div>
              <h1> Please wait some time.... </h1>
            </div>
        ) 


       // console.log(this.state.lukaRequest)
    


    return (
        <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
  
        <main className="btn-main btn-main-inline">
          <div className="d-flex align-items-start my-sidebar bg-light my-sidebar-inline">
            <div
              className="nav flex-column nav-pills my-sidebar-left"
              id="v-pills-tab"
              role="tablist"
              // aria-orientation="vertical"
            >
              <button
                className="nav-link active my-sidebar-link"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
               
              >
                <Image
                  src="/assets/settings.svg"
                  alt="calendar-arrow-left"
                  width={14}
                  height={14}
                  className="img"
                />
                General
              </button>
              <button
                className="nav-link my-sidebar-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                
              >
                <Image
                  src="/assets/buttons.svg"
                  alt="calendar-arrow-left"
                  width={14}
                  height={14}
                  className="img"
                />
                Buttons
              </button>
              <button
                className="nav-link my-sidebar-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
              
              >
                <Image
                  src="/assets/positions.svg"
                  alt="calendar-arrow-left"
                  width={14}
                  height={14}
                  className="img"
                />
                Positions
              </button>
              <button
                className="nav-link my-sidebar-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
              
              >
                <Image
                  src="/assets/quantity.svg"
                  alt="calendar-arrow-left"
                  width={14}
                  height={14}
                  className="img"
                />
                Timer
              </button>
              <button
                className="nav-link my-sidebar-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-media"
                type="button"
                role="tab"
                // aria-controls="v-pills-settings"
                // aria-defaultValue="false"
              >
                <Image
                  src="/assets/media.svg"
                  alt="calendar-arrow-left"
                  width={14}
                  height={14}
                  className="img"
                />{" "}
                Media
              </button>
              <button
                className="nav-link my-sidebar-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-css"
                type="button"
                role="tab"
                
              >
                <Image
                  src="/assets/customcss.svg"
                  alt="calendar-arrow-left"
                  width={22}
                  height={14}
                  className="img"
                />{" "}
                Custom CSS
              </button>
            </div>
            <div className="tab-content my-sidebar-right" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active bg-light"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                {/* <!-- start --> */}
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledGeneral enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                 
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedGeneral"
                        defaultChecked
                      />
                   
                  </div>
                </div>
                <form
                  className="sidebar-content"
                //   action="luka.ge/button/save"
            
                method="POST"
               id="form1" action="https://webhook.site/435f58ac-d5d4-4704-b02e-f6c975a8b058" 
                >
                  <button
                    name="saveData"
                    type="button"
                    className="btn create-btn shadow-none generalSave formsave"
                    style={{ width: 90 + "px" }}
                    onClick={() => this.sendLuka('form1') } //remember
                  >
                    Save
                  </button>
                  <fieldset className="sidebar-content-scroll fieldsetGeneral">
                    <div className="dropdown-div">
                      <label htmlFor="select">Widget name</label>
                      <input
                        name="widgetName"
                        className="form-control shadow-none border-0 buttons-inside-input"
                        type="text"
                        aria-label="default input example"
                        placeholder="Type name"
                        value={this.state.widgetName}
                        // value={this.state.lukaRequest.widgetName}
                        onChange={(e) => this.setState({widgetName:e.target.value})}
                      ></input>
                    </div>
                    <div className="dropdown-div">
                      <label htmlFor="select">Pages to show:</label>
                      <div>
                        <input
                          name="pagesToShow[]"
                          className="form-control shadow-none border-0 buttons-inside-input"
                          type="text"
                          aria-label="default input example"
                          placeholder="Type page link here"
                        ></input>
                        {/* <input
                         name="pagesToShow[]"
                          className="form-control shadow-none border-0 buttons-inside-input"
                          type="text"
                          aria-label="default input example"
                          placeholder="Type page link here"
                        ></input> */}
                      </div>
                    </div>
                    <div className="dropdown-div">
                      <label htmlFor="select">Style</label>
                      <select
                        className="form-select my-select shadow-none"
                        aria-label="Default select example"
                        name="generalStyle"
                        value={this.state.generalStyle}
                        onChange={(e) => this.setState({generalStyle:e.target.value})}
                      >
                        {/* <option value="" disabled defaultValue>
                          Choose style
                        </option>
                        <option selected={this.state.lukaRequest.style == "1"} value="1">
                          Rounded Style
                        </option>
                        <option selected={this.state.lukaRequest.style == "2"} value="2">
                          Two
                        </option>
                        <option selected={this.state.lukaRequest.style == "3"} value="3">
                          Three
                        </option> */}
                          <option value="" defaultValue>
                          choose oyur style
                        </option>
                        <option value="Rounded Style">
                          Rounded Style
                        </option>
                        <option value="Two">
                          Two
                        </option>
                        <option value="Three">
                          Three
                        </option>
                      </select>
                    </div>
                    <div className="dropdown-div">
                      <label htmlFor="select">Show On Page Scroll After:</label>
                      <div style={{ position: "relative" }}>
                        <ProgressBar
                          now={this.state.progressBar}
                          label={`${this.state.progressBar}%`}
                          className="progress my-progress"
                          />
                        <input
                          name="progressbar"
                          type="number"
                          className="progress-bar-buttons"
                          value={this.state.progressBar}
                          onChange={(e) => this.setState({progressBar:e.target.value})}
                        />
                        <label className="progressBarLabel">%</label>
                      </div>
                    </div>
                    <div className="dropdown-div">
                      <label htmlFor="select">Show status:</label>
                      <div className="checkboxes" >
                        <div className="form-check">
                          <input
                          name="showStatusDesktop"
                            className="form-check-input shadow-none"
                            type="checkbox"
                            id="flexCheckDefault"
                            value={this.state.showStatusDesktop}
                            onChange={ (e) => this.setState({showStatusDesktop: e.target.checked}) }
                            
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Desktop
                          </label>
                        </div>
  
                        <div className="form-check">
                          <input
                          name="showStatusMobile"
                            className="form-check-input shadow-none"
                            type="checkbox"
                            id="flexCheckChecked"
                            value={this.state.showStatusMobile}
                            onChange={(e) =>
                                this.setState({showStatusMobile:e.target.checked})
                            }
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Mobile
                          </label>
                        </div>
                      </div>
                    </div>
  
                    <div className="dropdown-div">
                      <label htmlFor="select">Others (Optional):</label>
                      <div className="checkboxes checkboxes-optional" multiple>
                        <div className="form-check mb-1">
                          <input
                            className="form-check-input shadow-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Skip Cart and go Checkout?
                          </label>
                        </div>
                        <div className="form-check mb-1">
                          <input
                            className="form-check-input shadow-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Enable Instant Load?
                          </label>
                        </div>
                        <div className="form-check mb-1">
                          <input
                            className="form-check-input shadow-none ifCalculateClicks"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Calculate clicks
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledButtons enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                   
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedButtons"
                        defaultChecked
                      />
                   
                  </div>
                </div>
                {/* <form id="b2" className="sidebar-content" action="https://webhook.site/435f58ac-d5d4-4704-b02e-f6c975a8b058" method="POST">
                  <button
                    name="saveData"
                    type="button"
                    className="btn create-btn shadow-none formsave buttonsSave"
                    style={{ width: 90 + "px" }}
                    onClick={this.sendLuka}
                  > */}
                  <form id="form2" className="sidebar-content" action="https://webhook.site/435f58ac-d5d4-4704-b02e-f6c975a8b058" method="POST">
                  <button
                    name="saveData"
                    type="button"
                    className="btn create-btn shadow-none formsave buttonsSave"
                    style={{ width: 90 + "px" }}
                    onClick={() => this.sendLuka('form2') }
                    //'form1'{() => this.sendLuka(1) }
                  >
                    Save
                  </button>
                  <fieldset className="sidebar-content-scroll fieldsetButtons">
                    <div className="dropdown-div buttons-div">
                      <label htmlFor="select" id="settings-label">
                        Show Settings:
                      </label>
                      <div>
                        <div className="show-settings">
                          <div className="form-check form-switch show-settings-div">
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showOnMobile"
                                name="showOnMobile" //neimit modis
                                value={this.state.showOnMobile}
                                onChange={() =>
                                    this.setState(prevState => ({
                                        showOnMobile:!prevState.showOnMobile
                                    }))
                                }
                              /> 
                              
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Checked on Mobile:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                           
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showProductImage"
                                name="showProductImage"
                                value={this.state.showProductImage}
                                onChange={() =>
                                    this.setState(prevState => ({
                                        showProductImage:!prevState.showProductImage
                                    }))
                                }
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show product image:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showProductName"
                                name="showProductName"
                                value={this.state.showProductName}
                                onChange={()=> {
                                    this.setState(prevState => ({
                                        showProductName:!prevState.showProductName
                                    }))
                                }}
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show product name:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                           
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showPrice"
                                name="showPrice"
                                value={this.state.showPrice}
                                onChange={()=> {
                                    this.setState(prevState => ({
                                        showPrice:!prevState.showPrice
                                    }))
                                }}
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show price:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showVariants"
                                name="showVariants"
                                value={this.state.showVariants}
                                onChange={()=> {
                                    this.setState(prevState => ({
                                        showVariants:!prevState.showVariants
                                    }))
                                }}
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show Variants:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showQuantity"
                                name="showQuantity"
                                value={this.state.showQuantity}
                                onChange={()=> {
                                    this.setState(prevState => ({
                                        showQuantity:!prevState.showQuantity
                                    }))
                                }}
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show quantity:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showOutOfStocks"
                                name="showOutOfStocks"
                                value={this.state.showOutOfStocks}
                                onChange={()=> {
                                    this.setState(prevState => ({
                                        showOutOfStocks:!prevState.showOutOfStocks
                                    }))
                                }}
                              />
                            
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Show out of stock:
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="dropdown-div">
                      <label htmlFor="select" id="settings-label">
                        Border Settings:
                      </label>
  
                      <div>
                        <div className="show-settings">
                          <div
                            className="form-check form-switch show-settings-div"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Background color:
                            </label>
                            <div className="input-border">
                              <label
                                htmlFor="input-color"
                                id="choose-color-value"
                                className="choose-color-value-border"
                              >
                                {this.state.borderBGcolor}
                              </label>
                              <input
                                name="borderBackgroundColor"
                                type="color"
                                id="choose-color"
                                className="choose-color-border"
                                value={this.state.borderBGcolor}
                                onInput={ (e) => this.setState({borderBGcolor: e.target.value}) }
                              ></input>
                            </div>
                          </div>
                          <div
                            className="form-check form-switch show-settings-div"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="border-height"
                            >
                              Border height:
                            </label>
                            <input
                              name="borderHeight"
                              className=" shadow-none"
                              type="number"
                              id="input-size"
                              value={this.state.borderHeight}
                              onChange={(e) =>
                                this.setState({borderHeight:e.target.value})
                               }
                            ></input>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              name="borderAnimation"
                              className="form-select-sm"
                              aria-label="Default select example"
                            >
                              <option defaultValue>Bounce</option>
                              <option value="shake">Shake</option>
                            </select>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Border Animation:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div">
                            <input
                              className=" shadow-none"
                              type="number"
                              id="input-size"
                              name="borderSpeedOfAnimation"
                              value={this.state.borderSpeedOfAnimation}
                              onChange={(e) =>
                                this.setState({borderSpeedOfAnimation:e.target.value})
                               }
                            ></input>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Speed of the animation:
                            </label>
                          </div>
  
                          <div
                            className="form-check form-switch show-settings-div show-settings-div-inline"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Loop Animation:
                            </label>
                            
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="form-check-switch showLoopAnimation"
                                name="showLoopAnimation"
                                value={this.state.showLoopAnimation}
                                onChange={() =>
                                    this.setState(prevState => ({
                                        showLoopAnimation:!prevState.showLoopAnimation
                                    }))
                                }
                              />
                            
                          </div>
                        </div>
  
                        <label htmlFor="select" id="settings-label">
                          Button Settings:
                        </label>
  
                        <div>
                          <div className="show-settings">
                            <div
                              className="form-check form-switch show-settings-div"
                              id="input-color"
                            >
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Button color:
                              </label>
                              <div className="input-border">
                                <label
                                  htmlFor="input-color"
                                  id="choose-color-value"
                                  className="choose-color-value-button"
                                  
                                >
                                  {this.state.buyButtonColor}
                                </label>
                                <input
                                  name="buyButtonColor"
                                  type="color"
                                  id="choose-color"
                                  className="choose-color-button"
                                  value={this.state.buyButtonColor}
                                  onChange={(e) =>
                                   this.setState({buyButtonColor:e.target.value})
                                  }
                                ></input>
                              </div>
                            </div>
                            <div className="form-check form-switch show-settings-div show-settings-div-animation">
                              <select
                                name="buttonButtonShape"
                                className="form-select-sm"
                                aria-label="Default select example"
                              >
                                <option defaultValue>Curved</option>
                                <option value="1">Rounder</option>
                                <option value="2">Solid</option>
                              </select>
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Button shape:
                              </label>
                            </div>
                            <div className="form-check form-switch show-settings-div">
                              <input
                                name="buyButtonText"
                                className=" shadow-none"
                                type="text"
                                id="input-size"
                                placeholder="text here"
                                value={this.state.buyButtonText}
                                onChange={(e) =>  setState({ buyButtonText:e.target.value })  }
                              ></input>
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Button text:
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledPosition enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                    
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedPosition"
                        defaultChecked
                      />
                    
                  </div>
                </div>
                <form className="sidebar-content" action="/" method="POST">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave positionSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <fieldset className="sidebar-content-scroll fieldsetPosition">
                    <div className="dropdown-div">
                      <label htmlFor="select" id="settings-label">
                        Settings
                      </label>
  
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                          name="widgetPosition"
                        >
                          <option defaultValue>Top</option>
                          <option value="1">Bottom</option>
                          
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Widget position:
                        </label>
                      </div>
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                          name="barAlignment"
                        >
                          <option defaultValue>Left</option>
                          <option value="1">Right</option>
                          <option value="2">Center</option>
                          <option value="3">Full</option>
                        </select>
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Bar alignment:
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledTimer enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                    
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedTimer"
                        defaultChecked
                      />
                   
                  </div>
                </div>
                <div className="sidebar-content" action="/" method="POST">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave timerSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <div className="sidebar-content-scroll ">
                    <form className="dropdown-div">
                      <label htmlFor="select" id="settings-label">
                        Settings
                      </label>
  
                      <div className="form-check form-switch show-settings-div ifUrgencyTime ">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Urgency time:
                          </label>
                        
                      </div>
                      <fieldset className="fieldsetTimer">
                        <div
                          className="dropdown-div"
                          style={{ marginBotton: 4 + "px" }}
                        >
                          <label htmlFor="select">Add deadline date:</label>
                          <input
                            className="form-control shadow-none border-0 buttons-inside-input"
                            type="text"
                            aria-label="default input example"
                            placeholder="Add deadline date"
                            name="timerText"
                          ></input>
                        </div>
                        <div
                          className="dropdown-div"
                          style={{ marginBotton: 4 + "px" }}
                        >
                          <label htmlFor="select">Timer text:</label>
                          <input
                            className="form-control shadow-none border-0 buttons-inside-input"
                            type="text"
                            aria-label="default input example"
                            placeholder="Type name"
                            name="timerText"
                          ></input>
                        </div>
                        <div className="show-settings">
                          <div
                            className="form-check form-switch show-settings-div"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Background color:
                            </label>
                            <div className="input-border">
                              <label
                                htmlFor="input-color"
                                id="choose-color-value"
                                className="choose-color-value-timerBGcolor"
                              >
                                {this.state.timerBGcolor}
                              </label>
                              <input
                                type="color"
                                value={this.state.timerBGcolor}
                                id="choose-color"
                                name="timerBackgroundColor"
                                className="choose-color-timerBGcolor"
                                onChange={(e) =>  setState({ timerBGcolor:e.target.value })  }
                              ></input>
                            </div>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              className="form-select-sm text-center"
                              aria-label="Default select example"
                              name="timerTextSize"
                            >
                              <option defaultValue>14</option>
                              <option value="1">12</option>
                              <option value="2">10</option>
                              <option value="3">8</option>
                            </select>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Text size:
                            </label>
                          </div>
                          <div
                            className="form-check form-switch show-settings-div"
                            id="input-color"
                          >
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Text color:
                            </label>
                            <div className="input-border">
                              <label
                                htmlFor="input-color"
                                id="choose-color-value"
                                className="choose-color-value-timerTXTcolor"
                              >
                                {this.state.timerTXTcolor}
                              </label>
                              <input
                                type="color"
                                value={this.state.timerTXTcolor}
                                id="choose-color"
                                className="choose-color-timerTXTcolor"
                                name="timerTextColor"
                                onChange={(e) => setState({timerTXTcolor: e.target.value})}
                              ></input>
                            </div>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              className="form-select-sm"
                              aria-label="Default select example"
                              name="timerFont"
                            >
                              <option defaultValue>Roboto</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Font:
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-media"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledMedia enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                   
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedMedia"
                        defaultChecked
                      />
                    
                  </div>
                </div>
                <form className="sidebar-content" action="/" method="POST">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave mediaSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <fieldset className="sidebar-content-scroll fieldsetMedia">
                    <div className="dropdown-div">
                      <label htmlFor="select">Settings</label>
  
                      <div className="form-check form-switch show-settings-div">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                          style={{ marginBottom: 10 + "px" }}
                        >
                          Show media icons:
                        </label>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Facebook:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Facebook page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                       
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Instagram:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Instagram page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Twitter:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Twitter page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Google+:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Google+ page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Linkedin:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Linkedin page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                       
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Pinterest:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Pinterest page Tracking ID"
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                       
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Tumblr:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2"
                          type="text"
                          aria-label="default input example"
                          placeholder="Tumblr page Tracking ID"
                        ></input>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-css"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="sidebar-header">
                  <div className="form-check form-switch sidebar-form-switch shadow-none">
                    <label
                      className="form-check-label ifEnabled ifEnabledCss enbl"
                      htmlFor="flexSwitchCheckChecked"
                    ></label>
  
                
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="form-check-switch ifChecked ifCheckedCss"
                        defaultChecked
                      />
                    
                  </div>
                </div>
                <form className="sidebar-content" action="/" method="POST">
                  <button
                    name="saveData"
                    type="submit"
                    className="btn create-btn shadow-none formsave cssSave"
                    style={{ width: 90 + "px" }}
                  >
                    Save
                  </button>
                  <fieldset className="sidebar-content-scroll fieldsetCss">
                    <div className="dropdown-div">
                      <label htmlFor="select">Settings</label>
  
                      <div className="form-check form-switch show-settings-div">
                       
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                            defaultChecked
                          />
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Custom css:
                        </label>
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control border-0 textarea shadow-none"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Type here"
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
  
          <div className="buttons-content">
            <div className="black-buttons black-buttons-view ">
              Preview:
              <div className="black-buttons-view1">
                <Image
                  src="/assets/mobile-view.svg"
                  alt="mobile"
                  width={13}
                  height={18}
                  className="img"
                />
              </div>
              <div className="black-buttons-view2">
                <Image
                  src="/assets/desktop-view.svg"
                  alt="desktop-view"
                  width={18}
                  height={16}
                  className="img"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default buttonscopy