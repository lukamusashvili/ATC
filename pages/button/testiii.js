import Head from "next/head";
import React, {useState } from "react";
import Buttonnew from '../components/Buttonnew';
import Buttonupdate from '../components/Buttonupdate';

export const getStaticProps = async function getAllWidgets() {
    const res = await fetch('/widgets');
    const data = await res.json()

    return {
      props: {results : data}
    }
}

function test(z, call) {

  z[0].widgetName = 'xxx'
  call(z)

  call(
    z
 )
  console.log(z)
}

function buttons({results}) {
  
  const [zdata, setZdata] = useState(results);

  //setZdata(results)
  
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

          {zdata.map((result, i) => (<Buttonupdate key={i} name={result.widgetName} id={result.widgetId}/>))}
          
          <button onClick={() => test(zdata, setZdata)}>test</button>
        </div>

      </main>

    </div>
  );
}

export default buttons;
