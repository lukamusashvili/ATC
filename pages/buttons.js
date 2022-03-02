import { url } from "koa-router";
import Head from "next/head";
import React, { Component } from "react";
import Buttonnew from '../components/Buttonnew';
import Buttonupdate from '../components/Buttonupdate';




class buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      results: []
    }
  }

  componentDidMount = async () =>
  {
    const URL = "/widgets"
    const res = await fetch(URL);
    const data = await res.json()

    this.setState({results: data})
  
  }

   hiddenEl(wdid) {


    var newResults = this.state.results.filter(function(wd) { 
       return wd.widgetId !== wdid 
    })

    this.setState({results: newResults});
    console.log(this.state)
  }
  

  render() {
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
    
    
          <main style={{ padding: 30 + "px" }}>
            <div className="buttonContainer">
              
        
              <Buttonnew />
    
              {
              this.state.results.map(
                (result, i) => (
                  <Buttonupdate key={i} name={result.widgetName} id={result.widgetId} hiddenEl={this.hiddenEl.bind(this)}/>
                  )
                )
              
              }

            </div>
    
          </main>
    
        </div>
    )
  }
}

export default buttons
