import Head from "next/head";
import Form from "react-bootstrap/Form";
import React, { Component, setState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "next/image";
import { withRouter } from "next/router";
import serialize from 'form-serialize';
import { Button } from '@nextui-org/react';
import WidgetTemplate from '../../components/WidgetTemplate'
import Timerdate from '../../components/Timerdate'

if (process.browser) {
    $(document).ready(function () {


      // general
      $(".ifCheckedGeneral").on("click", function () {
        
          $(".ifEnabledGeneral").toggleClass("dsbl");
          $(".ifEnabledGeneral").toggleClass("enbl");
        
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

  




   //booleans

    
    $(".ifUrgencyTime input").on("click", function () {
      var statusOne = $(".fieldsetTimer .dropdown-div input").prop("disabled");
      var statusTwo = $(".fieldsetTimer").prop("disabled");
      $(".fieldsetTimer .dropdown-div input").prop("disabled", !statusOne)
      if(!statusOne) {
        $(".fieldsetTimer .dropdown-div input").removeClass('required wasnot-validated')
        
      } else {
        $(".fieldsetTimer .dropdown-div input").addClass('required')
      }
      $(".fieldsetTimer").prop("disabled", !statusTwo)
    });

    $(".ifshowMediaIcons input").on("click", function () {
      var statusOne = $(".fieldsetMedia  input").prop("disabled");
      var statusTwo = $(".fieldsetMedia").prop("disabled");
      $(".fieldsetMedia .dropdown-div input").prop("disabled", !statusOne)
      if(!statusOne) {
        $(".fieldsetMedia input[type=text]").removeClass('required wasnot-validated')
        
      } else {
        $(".fieldsetMedia input[type=text]").addClass('required')
      }
      $(".fieldsetMedia").prop("disabled", !statusTwo)
    });

 

    


    $(".ifCheckedGeneral input").on('click', function () {
      if ($(this).is(":checked")) {
        const aa = $(".ifCheckedGeneral input");
        
      }
    });

    //form validation

    $('form').on('submit', (e)=> {
      let messages = []

      
      $('.required').each(function() {
        if($(this).val().length === 0) {
          messages.push('please fill the input!')
          $(this).addClass('wasnot-validated')
        }else {
          $(this).removeClass('wasnot-validated')
          $(this).addClass('was-validated')
        }

        $( this ).on('change', (function() {
            if($(this).val().length > 0) {
              $(this).addClass('was-validated')
            } else {
              $(this).removeClass('was-validated')
              $(this).addClass('wasnot-validated')
            }
        }));
      })

      if(messages.length > 0 ) {
       
       return false
      }
    })
    
    
//end jquery
  });
    //end process browser
  }


export class update extends Component
{
    constructor(props) 
    {
        super(props);
        const { query } = this.props.router;
    
        this.state = {
            id: 'create',
            query: query,
            updateResponse: [],
            dataisLoaded: true,
            addTextBox:[{}],
            validated:false,
            widgetId:null,
            widgetStatus:true,
            buttonBGcolor : "#0083f8",
           

            //general
            widgetName:"",
            //pages to show??
            generalStyle:"Choose your style",
            progressBar : 0,
            showStatusMobile:false,
            optionalQuestionOne:false,
            optionalQuestionTwo:false,
            optionalQuestionThree:false,

            showOnMobile : false,
            showProductImage:true,
            showProductName:true,
            showPrice:true,
            showVariants:true,
            showQuantity:false,
            showOutOfStocks:false,
            borderBackgroundColor: "#133b5e", 
            borderHeight: 10,
            borderAnimation:"", // select
            borderSpeedOfAnimation:2, // aq stringi giweria da num ar unda modiodes?
            showLoopAnimation:false,
            buyButtonColor:"#779438",
            buyButtonShape:"", //select
            buyButtonText:"Add to Cart", // empty str default
            showStatusDesktop:true,
           //bar alignment
            widgetPositions:"center",
            barAlignment:"",
            //timer
            showUrgencyTime: true,
            timerdate:'30:00',  // es num unda iyos
            timerText: "Hurry up! Sale ends in",
            timerBackgroundColor: "#0083f8",
            timerTextSize: 14,
            timerTextColor: "#050b0f",
            timerFont: "",

            //media
            showMediaIcons: true,
            showMediaIconsFacebook: true,
            showMediaIconsFacebookUrl: "",

            showMediaIconsInstagram: true,
            showMediaIconsInstagramUrl: "",

            showMediaIconsTwitter: true,
            showMediaIconsTwitterUrl: "",

            showMediaIconsGoogle: true,
            showMediaIconsGoogleUrl: "",

            showMediaIconsLinkedin: true,
            showMediaIconsLinkedinUrl: "",

            showMediaIconsPinterest: true,
            showMediaIconsPinterestUrl: "",
            
            showMediaIconsTumblr: true,
            showMediaIconsTumblrUrl: "",
        };
    }

//LISTIS
  addControls() {
    this.setState(({
      addTextBox: [...this.state.addTextBox, {}]
    }))
  }

  delControls(i) {
    $('.pagesToShowDeleteBtn').click(function () {
      $(".name").eq(1).remove();
    });
  }
   
    sendData = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const seri_form = serialize(form, {hash: true, empty: false})
        //var1
        //seri_form.showStatusMobile = seri_form.showStatusMobile === '' ? false : true
        //var2
      
        seri_form.showStatusDesktop = this.state.showStatusDesktop 
        seri_form.showStatusMobile = this.state.showStatusMobile 
        seri_form.optionalQuestionOne = this.state.optionalQuestionOne 
        seri_form.optionalQuestionTwo = this.state.optionalQuestionTwo 
        seri_form.optionalQuestionThree = this.state.optionalQuestionThree 

        seri_form.showProductImage = this.state.showProductImage 
        seri_form.showProductName = this.state.showProductName 
        seri_form.showPrice = this.state.showPrice 
        seri_form.showVariants = this.state.showVariants 
        seri_form.showQuantity = this.state.showQuantity 
        seri_form.showOutOfStocks = this.state.showOutOfStocks 
        seri_form.showLoopAnimation = this.state.showLoopAnimation 

        seri_form.showUrgencyTime = this.state.showUrgencyTime 
        
        seri_form.showMediaIcons = this.state.showMediaIcons
        // seri_form.showMediaIconsFacebookUrl = this.state.showMediaIconsFacebookUrl
        // seri_form.showMediaIconsInstagramUrl = this.state.showMediaIconsInstagramUrl
        // seri_form.showMediaIconsTwitterUrl = this.state.showMediaIconsTwitterUrl
        // seri_form.showMediaIconsGoogleUrl = this.state.showMediaIconsGoogleUrl
        // seri_form.showMediaIconsLinkedinUrl = this.state.showMediaIconsLinkedinUrl
        // seri_form.showMediaIconsPinterestUrl = this.state.showMediaIconsPinterestUrl
        // seri_form.showMediaIconsTumblrUrl = this.state.showMediaIconsTumblrUrl

      

        seri_form.widgetId = this.state.widgetId
        seri_form.widgetStatus = this.state.widgetStatus
        var postmethod = 'PUT'
        var mode = 'cors'
        if(this.state.id === 'create') {
           postmethod = 'POST'
           mode = 'no-cors'
        }
        fetch(`/widget`, {
            method: postmethod,
            mode: mode,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(seri_form),
        })
        
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          this.setState({
            setValidated:true
          })
        }

        
    }
    

    updateData = (id) => {
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain");
      myHeaders.append("Accept", "application/json");

      
      var raw = id;
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`/getwidget`, requestOptions)
      .then(response => response.json())
      .then(res => this.setState({updateResponse:res}))
      .catch(error => console.log('error', error));
  }
    
    static getInitialProps({query}) {
      return {query}
    }

    componentDidMount() 
    {
        //var { update } = this.state.query
        var { update } = this.props.query

        if (update != "create") {
          this.setState({id: update})
          this.setState({widgetId:update})
          this.updateData(update)
        }
    }



    render() {
        if (!this.state.dataisLoaded)
        return (
            <div>
              <h1> Please wait some time.... </h1>
            </div>
        ) 


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
            <form className="tab-content my-sidebar-right" id="v-pills-tabContent" 
                  noValidate 
                  method="POST"
                  action={`/widget` }
                  onSubmit={this.sendData}
            >

              <button
                name="saveData"
                className="btn create-btn shadow-none generalSave formsave"
                style={{ width: 90 + "px" }}

              >
                {this.state.id === 'create' ? 'Save' : 'Edit'}
              </button>
              <div
                className="tab-pane fade show active bg-light"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                {/* <!-- start --> */}
                
                <div className="sidebar-content">
                  
                  <fieldset className="sidebar-content-scroll fieldsetGeneral">
                    <div className="dropdown-div " >
                      <label htmlFor="select">Widget name *</label>
                      <input
                        name="widgetName"
                        className="form-control shadow-none border-0 buttons-inside-input widgetName required"
                        maxLength="50"
                        type="text"
                        aria-label="default input example"
                        placeholder="Type name"
                        defaultValue={this.state.id === 'create' ? this.state.widgetName : this.state.updateResponse.widgetName}
                        onChange={(e) => this.setState({widgetName:e.target.value})}
                      ></input>
                    </div>
                    <div className="dropdown-div " id="pagesToShow">
                      <label htmlFor="select">Pages to show: *</label>
                     
                      <Button type="button" id="addPagesToShow" color="secondary" auto onClick={()=>this.addControls()}>+</Button>

                     
                      <div>
                        {this.state.addTextBox.map((txt,index)=> ( 
                          <div style={{position:'relative',marginTop: 3+"px", marginBottom: 3+"px",}} key={index} >
                            <input
                              name="pagesToShow[]"
                              className="form-control shadow-none border-0 buttons-inside-input name required"
                              
                              type="text"
                              aria-label="default input example"
                              placeholder="Type page link here"
                              defaultValue={this.state.id === 'create' ? this.state.pagesToShow : this.state.updateResponse.pagesToShow}
                              onChange={(e) => this.setState({pagesToShow:e.target.value})}
                            >
                            
                          </input> {index ? <Button color="warning" auto bordered type="button" className="pagesToShowDeleteBtn" onClick={()=>this.delControls(index)}>X</Button> : null}
                          
                          </div>
                          
                         ))}
                        
                      </div>
                    </div>
                    <div className="dropdown-div">
                      <label htmlFor="select">Choose From Our Default Styles</label>
                      <select
                        className="form-select my-select shadow-none"
                        aria-label="Default select example"
                        name="generalStyle"
                        defaultValue={this.state.id === 'create' ? this.state.generalStyle : this.state.updateResponse.generalStyle}
                        onChange={(e) => this.setState({generalStyle:e.target.value})}
                      >
                       
                          <option >
                          choose your style
                        </option>
                        <option defaultValue="Rounded Style">
                          STYLE 1
                        </option>
                        <option defaultValue="Two">
                          STYLE 2
                        </option>
                        <option defaultValue="Three">
                          STYLE 3
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
                          defaultValue={this.state.id === 'create' ? this.state.progressbar : this.state.updateResponse.progressbar}
                          onChange={(e) => this.setState({progressBar:e.target.value})}
                        />
                        <label className="progressBarLabel">%</label>
                      </div>
                    </div>
                    {/* test */}
                    <div className="dropdown-div">
                      <label htmlFor="select">Show status:</label>
                      <div className="checkboxes"  >
                        <div className="form-check">
                         
                           <input
                            name="showStatusDesktop"
                            className="form-check-input shadow-none"
                            type="checkbox"
                            defaultChecked
                            defaultValue={this.state.id === 'create' ? this.state.showStatusDesktop : this.state.updateResponse.showStatusDesktop}
                            onChange={(e) =>
                              this.setState({showStatusDesktop:e.target.checked})
                          }
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
                            //
                            // id="flexCheckChecked"
                            defaultValue={this.state.id === 'create' ? this.state.showStatusMobile : this.state.updateResponse.showStatusMobile}
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
                      <div className="checkboxes checkboxes-optional">
                        <div className="form-check mb-1">
                          <input
                            className="form-check-input shadow-none"
                            type="checkbox"
                           
                            
                            name="optionalQuestionOne"
                            value={this.state.id === 'create' ? this.state.optionalQuestionOne : this.state.updateResponse.optionalQuestionOne}
                            
                            onChange={(e) =>
                              this.setState({optionalQuestionOne:e.target.checked})
                          }
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
                            defaultValue=""
                            
                            name="optionalQuestionTwo"
                            defaultValue={this.state.id === 'create' ? this.state.optionalQuestionTwo : this.state.updateResponse.optionalQuestionTwo}
                            onChange={(e) =>
                                this.setState({optionalQuestionTwo:e.target.checked})
                            }
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
                            defaultValue=""
                            
                            name="optionalQuestionThree"
                            defaultValue={this.state.id === 'create' ? this.state.optionalQuestionThree : this.state.updateResponse.optionalQuestionThree}
                            onChange={(e) =>
                                this.setState({optionalQuestionThree:e.target.checked})
                            }
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
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                
               
                  <div className="sidebar-content">
                  
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
                                className="form-check-switch showProductImage"
                                name="showProductImage"
                                defaultChecked
                                defaultValue={this.state.id === 'create' ? this.state.showProductImage : this.state.updateResponse.showProductImage}
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
                                defaultChecked
                                defaultValue={this.state.id === 'create' ? this.state.showProductName : this.state.updateResponse.showProductName}
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
                                defaultChecked
                                defaultValue={this.state.id === 'create' ? this.state.showPrice : this.state.updateResponse.showPrice}
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
                                defaultChecked
                                defaultValue={this.state.id === 'create' ? this.state.showVariants : this.state.updateResponse.showVariants}
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
                                defaultValue={this.state.id === 'create' ? this.state.showQuantity : this.state.updateResponse.showQuantity}
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
                                defaultValue={this.state.id === 'create' ? this.state.showOutOfStocks : this.state.updateResponse.showOutOfStocks}
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
                                {this.state.borderBackgroundColor}
                              </label>
                              <input
                                name="borderBackgroundColor"
                                type="color"
                                id="choose-color"
                                className="choose-color-border"
                                defaultValue={this.state.id === 'create' ? this.state.borderBackgroundColor : this.state.updateResponse.borderBackgroundColor}
                                onInput={ (e) => this.setState({borderBackgroundColor: e.target.value}) }
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
                              className=" shadow-none "
                              type="number"
                             
                              min="10" max="30"
                              id="input-size"
                              defaultValue={this.state.id === 'create' ? this.state.borderHeight : this.state.updateResponse.borderHeight}
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
                              defaultValue={this.state.id === 'create' ? this.state.borderAnimation : this.state.updateResponse.borderAnimation}
                              
                              onChange={(e) =>
                                this.setState({borderAnimation:e.target.value})
                               }
                            >
                              <option value='none'>none</option>
                              <option value="animate__animated animate__bounce " defaultValue>Bounce</option>
                              <option value="animate__animated animate__shakeX ">Shake</option>
                              <option value="animate__animated animate__pulse ">Pulse</option>
                              <option value="animate__animated animate__tada ">Tada</option>
                            </select>
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Border Animation:
                            </label>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            {/* <input
                              className=" shadow-none"
                              type="number"
                              id="input-size"
                              min="2" max="5"
                              name="borderSpeedOfAnimation"
                              defaultValue={this.state.id === 'create' ? this.state.borderSpeedOfAnimation : this.state.updateResponse.borderSpeedOfAnimation}
                              onChange={(e) =>
                                this.setState({borderSpeedOfAnimation:e.target.value})
                               }
                            ></input> */}
                            <select
                              name="borderSpeedOfAnimation"
                              className="form-select-sm"
                              aria-label="Default select example"
                              defaultValue={this.state.id === 'create' ? this.state.borderSpeedOfAnimation : this.state.updateResponse.borderSpeedOfAnimation}
                              onChange={(e) =>
                                this.setState({borderSpeedOfAnimation:e.target.value})
                               }
                              
                            >
                              <option value='default'>default (1s)</option>
                              <option value="animate__animated animate__slow " >Slow</option>
                              <option value="animate__animated animate__fast ">Fast</option>
                              <option value="animate__animated animate__slower ">Slower</option>
                              <option value="animate__faster ">Faster</option>
                            </select>
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
                                defaultValue={this.state.id === 'create' ? this.state.showLoopAnimation : this.state.updateResponse.showLoopAnimation}
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
                                  defaultValue={this.state.id === 'create' ? this.state.buyButtonColor : this.state.updateResponse.buyButtonColor}
                                  onChange={(e) =>
                                   this.setState({buyButtonColor:e.target.value})
                                  }
                                ></input>
                              </div>
                            </div>
                            <div className="form-check form-switch show-settings-div show-settings-div-animation">
                              <select
                                name="buyButtonShape"
                                className="form-select-sm"
                                aria-label="Default select example"
                                defaultValue={this.state.id === 'create' ? this.state.buyButtonShape : this.state.updateResponse.buyButtonShape}
                                onChange={(e) =>
                                  this.setState({buyButtonShape:e.target.value})
                                 }
                              >
                                <option value={5} defaultValue>Curved</option>
                                <option value={50}>Rounder</option>
                                <option value={0}>Solid</option>
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
                                className=" shadow-none required"
                                type="text"
                                id="input-size"
                                placeholder="text here"
                                maxLength="20"
                                defaultValue={this.state.id === 'create' ? this.state.buyButtonText : this.state.updateResponse.buyButtonText}
                                onChange={(e) =>  this.setState({ buyButtonText:e.target.value })  }
                              ></input>
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Button text: *
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
               
                <div  className="sidebar-content">
                 
                  <fieldset className="sidebar-content-scroll fieldsetPosition">
                    <div className="dropdown-div">
                      <label htmlFor="select" id="settings-label">
                        Settings
                      </label>
  
                      <div className="form-check form-switch show-settings-div show-settings-div-animation">
                        <select
                          className="form-select-sm"
                          aria-label="Default select example"
                          name="widgetPositions"
                          defaultValue={this.state.id === 'create' ? this.state.widgetPositions : this.state.updateResponse.widgetPositions}
                          onChange={(e) => this.setState({ widgetPositions:e.target.value })  }
                        >
                          <option value="" >Choose position</option>
                          <option value="flex-start" >Top</option>
                          <option value="flex-end">Bottom</option>
                          
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
                          defaultValue={this.state.id === 'create' ? this.state.barAlignment : this.state.updateResponse.barAlignment}
                          onChange={(e) => this.setState({ barAlignment:e.target.value })  }
                        >
                          <option defaultValue="Left" defaultValue>Left</option>
                          <option defaultValue="Right">Right</option>
                          <option defaultValue="Center">Center</option>
                          <option defaultValue="Full">Full</option>
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
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
               

                <div className="sidebar-content">
                  
                  <div className="sidebar-content-scroll ">
                    <div className="dropdown-div">
                      <label htmlFor="select" id="settings-label">
                        Settings
                      </label>
  
                      <div className="form-check form-switch show-settings-div ifUrgencyTime ">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch"
                            defaultChecked
                            name="showUrgencyTime"
                            defaultValue={this.state.id === 'create' ? this.state.showUrgencyTime : this.state.updateResponse.showUrgencyTime}
                                onChange={() =>
                                    this.setState(prevState => ({
                                      showUrgencyTime:!prevState.showUrgencyTime //zemot maqvs datruebuli 
                                    }))
                                }
                                
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
                            className="form-control shadow-none border-0 buttons-inside-input required"
                            type="text"
                            aria-label="default input example"
                            placeholder="Add deadline date"
                            name="timerdate"
                            defaultValue={this.state.id === 'create' ? this.state.timerdate : this.state.updateResponse.timerdate}
                            onChange={(e) => this.setState({ timerdate:e.target.value })  }
                          ></input>
                        </div>
                        <Timerdate />
                        <div
                          className="dropdown-div"
                          style={{ marginBotton: 4 + "px" }}
                        >
                          <label htmlFor="select">Timer text:</label>
                          <input
                            className="form-control shadow-none border-0 buttons-inside-input required"
                            type="text"
                            aria-label="default input example"
                            maxLength="50"
                            placeholder="Type name"
                            name="timerText"
                            defaultValue={this.state.id === 'create' ? this.state.timerText : this.state.updateResponse.timerText}
                            onChange={(e) => this.setState({ timerText:e.target.value })  }
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
                               {this.state.id === 'create' ? this.state.timerBackgroundColor : this.state.updateResponse.timerBackgroundColor} 
                              </label>
                              <input
                                type="color"
                                id="choose-color"
                                name="timerBackgroundColor"
                                className="choose-color-timerBGcolor"
                                defaultValue={this.state.id === 'create' ? this.state.timerBackgroundColor : this.state.updateResponse.timerBackgroundColor}
                                onChange={(e) => this.setState({ timerBackgroundColor:e.target.value })  }
                              ></input>
                            </div>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              className="form-select-sm text-center"
                              aria-label="Default select example"
                              name="timerTextSize"
                              defaultValue={this.state.id === 'create' ? this.state.timerTextSize : this.state.updateResponse.timerTextSize}
                              onChange={(e) => this.setState({ timerTextSize: parseInt(e.target.value, 10)})  }
                            >
                              <option value='14'>14</option>
                              <option value='12'>12</option>
                              <option value='10'>10</option>
                              <option value='30'>30</option>
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
                                {this.state.timerTextColor}
                              </label>
                              <input
                                type="color"
                                id="choose-color"
                                className="choose-color-timerTXTcolor"
                                name="timerTextColor"
                                defaultValue={this.state.id === 'create' ? this.state.timerTextColor : this.state.updateResponse.timerTextColor}
                                onChange={(e) => this.setState({timerTextColor: e.target.value})}
                              ></input>
                            </div>
                          </div>
                          <div className="form-check form-switch show-settings-div show-settings-div-animation">
                            <select
                              className="form-select-sm"
                              aria-label="Default select example"
                              name="timerFont"
                              defaultValue={this.state.id === 'create' ? this.state.timerFont : this.state.updateResponse.timerFont}
                              onChange={(e) => this.setState({ timerFont:e.target.value })  }
                            >
                              <option defaultValue="Roboto" defaultValue>Roboto</option>
                              <option defaultValue="One">One</option>
                              <option defaultValue="Two">Two</option>
                              <option defaultValue="Three">Three</option>
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-media"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                
                <div  className="sidebar-content">
                  
                  
                    <div className="dropdown-div">
                      <label htmlFor="select">Settings</label>
  
                      <div className="form-check form-switch show-settings-div">
                        
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="form-check-switch ifshowMediaIcons"
                            defaultChecked
                            name="showMediaIcons"
                            defaultValue={this.state.id === 'create' ? this.state.showMediaIcons : this.state.updateResponse.showMediaIcons}
                                onChange={() =>
                                    this.setState(prevState => ({
                                      showMediaIcons:!prevState.showMediaIcons //zemot maqvs datruebuli 
                                    }))
                                }
                          />
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                          style={{ marginBottom: 10 + "px" }}
                        >
                          Show media icons:
                        </label>
                      </div>
<fieldset className="sidebar-content-scroll fieldsetMedia">
                      
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                        
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Facebook:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  fb"
                          type="text"
                          aria-label="default input example"
                          placeholder="Facebook page Tracking ID"
                          
                          name="showMediaIconsFacebookUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsFacebookUrl : this.state.updateResponse.showMediaIconsFacebookUrl}
                        onChange={(e) => this.setState({showMediaIconsFacebookUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media ">
                       
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Instagram:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  in"
                          type="text"
                          aria-label="default input example"
                          placeholder="Instagram page Tracking ID"
                          name="showMediaIconsInstagramUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsInstagramUrl : this.state.updateResponse.showMediaIconsInstagramUrl}
                        onChange={(e) => this.setState({showMediaIconsInstagramUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media ">
                        
                         
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Twitter:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  tw"
                          type="text"
                          aria-label="default input example"
                          placeholder="Twitter page Tracking ID"
                          name="showMediaIconsTwitterUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsTwitterUrl : this.state.updateResponse.showMediaIconsTwitterUrl}
                        onChange={(e) => this.setState({showMediaIconsTwitterUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          
                       
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Google+:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  go"
                          type="text"
                          aria-label="default input example"
                          placeholder="Google+ page Tracking ID"
                          name="showMediaIconsGoogleUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsGoogleUrl : this.state.updateResponse.showMediaIconsGoogleUrl}
                        onChange={(e) => this.setState({showMediaIconsGoogleUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                        
                          
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Linkedin:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  lk"
                          type="text"
                          aria-label="default input example"
                          placeholder="Linkedin page Tracking ID"
                          name="showMediaIconsLinkedinUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsLinkedinUrl : this.state.updateResponse.showMediaIconsLinkedinUrl}
                          onChange={(e) => this.setState({showMediaIconsLinkedinUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">

                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Pinterest:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  pi"
                          type="text"
                          aria-label="default input example"
                          placeholder="Pinterest page Tracking ID"
                          name="showMediaIconsPinterestUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsPinterestUrl : this.state.updateResponse.showMediaIconsPinterestUrl}
                          onChange={(e) => this.setState({showMediaIconsPinterestUrl:e.target.value})}
                        ></input>
                      </div>
                      <div className="form-check form-switch show-settings-div dropdown-div media">
                      
                        
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Tumblr:
                        </label>
                        <input
                          className="form-control shadow-none border-0 buttons-inside-input mt-2  tu"
                          type="text"
                          aria-label="default input example"
                          placeholder="Tumblr page Tracking ID"
                          name="showMediaIconsTumblrUrl"
                          defaultValue={this.state.id === 'create' ? this.state.showMediaIconsTumblrUrl : this.state.updateResponse.showMediaIconsTumblrUrl}
                          onChange={(e) => this.setState({showMediaIconsTumblrUrl:e.target.value})}
                        ></input>
                      </div>
                    </fieldset>
                    </div>
                  
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-css"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                
                <div className="sidebar-content">
                  
                  <fieldset className="sidebar-content-scroll fieldsetCss">
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
                </div>
              </div>
            </form>
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


            <WidgetTemplate 
              id = {this.state.id}
              name={this.state.widgetName} 

              borderAnimation = {this.state.borderAnimation}
               
              timerBackgroundColor={this.state.timerBackgroundColor} 
              timerBackgroundColorPut = {this.state.updateResponse.timerBackgroundColor}

              timerTextColor={this.state.timerTextColor}
              timerTextColorPut={this.state.updateResponse.timerTextColor}

              timerTextSize={this.state.timerTextSize}
              timerTextSizePut={this.state.updateResponse.timerTextSize}

              timerText={this.state.timerText}
              timerTextPut={this.state.updateResponse.timerText}

              timerdate={this.state.timerdate}
              timerdatePut={this.state.updateResponse.timerdate}

              showProductImage={this.state.showProductImage}
              showProductName={this.state.showProductName}
              showPrice={this.state.showPrice}
              showVariants={this.state.showVariants}
              showProductQuantity={this.state.showProductQuantity}
              showOutOfStocks={this.state.showOutOfStocks}

              showUrgencyTime={this.state.showUrgencyTime}
              showUrgencyTimePut={this.state.updateResponse.showUrgencyTime}

              buyButtonText = {this.state.buyButtonText}
              buyButtonTextPut = {this.state.updateResponse.buyButtonText}

              borderBackgroundColor = {this.state.borderBackgroundColor}
              borderBackgroundColorPut = {this.state.updateResponse.borderBackgroundColor}

              showLoopAnimation = {this.state.showLoopAnimation}
              borderSpeedOfAnimation = {this.state.borderSpeedOfAnimation}
              buyButtonColor = {this.state.buyButtonColor}
              buyButtonShape = {this.state.buyButtonShape} 
              widgetPositions = {this.state.widgetPositions}

              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              // showProductImage={this.state.showProductImage}
              />
          </div>
        </main>
      </div>
    )
    
  }
}

export default withRouter(update)