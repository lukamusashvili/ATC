import Link from 'next/link';
import React, {Component} from "react";
import Form from "react-bootstrap/Form";


class Buttonupdate extends Component 
{
    constructor(props)
    {
      super(props);
      this.state = {
        el: {},
      }
    }

    componentDidMount = async () =>
    {
        
    }

    del = async () => {
        let myid = this.props.id
        this.props.hiddenEl(myid)

        
        
        console.log(myid)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
                
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: myid,
        };

        var a = window.location.ancestorOrigins[0]
        var shop = a.slice(8, a.length);
        console.log(shop)
        
        fetch(`/widgetdel?shop=`+shop, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    render() {
        return (

        <div className="myWidget" >
            <h1 id={this.props.id}>{this.props.name}</h1>
            <div className="widgetContent">

            <h6>All over web</h6>

            <Form.Check
                type="switch"
                id="custom-switch"
                className="form-check-switch "
                name="showQuantity"
                defaultChecked
            />
            </div>

            <Link href={`/button/${this.props.id}`} key={this.props.id} >
                <a> <button type="button" className="btn create-btn shadow-none buttonupdate">
                    Edit
                </button></a>
            </Link>

            <button onClick={()=> this.del()}>DEL</button>
        </div>
        )

    }
}
export default Buttonupdate