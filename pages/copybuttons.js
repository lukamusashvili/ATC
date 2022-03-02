import Head from "next/head";
import React, {useState } from "react";
import Buttonnew from '../components/Buttonnew';
import Buttonupdate from '../components/Buttonupdate';


const URL = '	https://webhook.site/8bd2deab-8775-4678-802c-33021fd2098f/widget?'


function buttons(props) {

  
  let [results, setResults] = useState([]);
  
 
  function getData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${URL}/widgets`, requestOptions)
      .then(response => response.json())
      .then(res => setResults(res))
      .catch(error => console.log('error', error));
  }
   
  function handleClickluka() {
    getData()
  }




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
          
         <button onClick={()=> handleClickluka()}>click</button>
          <Buttonnew />

          {results.map((result, i) => (<Buttonupdate key={i} name={result.widgetName} id={result.widgetId}/>))}
          
        </div>

      </main>

    </div>
  );
}

export default buttons;
