import React from "react";
import { useState, useEffect } from "react";
import "./form.scss";

function Form(props) {
  const [APIurl, setAPIurl] = useState("");
  const [APImethod, setAPImethod] = useState("");

  let API = {
    url: APIurl,
    method: APImethod,
  };

  const [show, setShow] = useState(false);
  const [statusName, setStatusName] = useState("show methods👀");
  const [urlName, setUrlName] = useState("");

  useEffect(() => {
    console.log(urlName);
  }, [urlName]);

  const changeShow = () => {
    if (show === true) {
      setStatusName("Show methods👀");
      setShow(false);
    } else {
      setStatusName("Hide methods🙈");

      setShow(true);
    }
  };
  const handleUrlChange =(e)=>{
    setUrlName(e.target.value);
    setAPIurl(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(API);
    props.handleApiCall(API);
  };


  return (
    <>
      
      {/* <ul >
        API options : <br></br>
        https://api.themoviedb.org/3/movie/550?api_key=6f7fea2a73b77fb5ffeb104ba61d85d9<br></br>
        https://pokeapi.co/api/v2/pokemon<br></br>
        https://jsonplaceholder.typicode.com/users<br></br>
        https://datausa.io/api/data?drilldowns=Nation&measures=Population
      </ul> */}
     
      <p> API - URL : {urlName} </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span data-testid="span-url" >URL:</span>
          <br></br>

          <input
            onChange={(e) => {
              
              handleUrlChange(e)}}
            
            name="url"
            type="text"
            placeholder="INSERT API URL HERE..."
          />
          {/* <input name="url"type="text"/> */}

          {/* <input onChange={(e)=>{setAPImethod(e.target.value)}} name="method" type="text" /> */}

          {/* <button type="submit">GO!</button> */}
          <button
            data-testid="show"
            onClick={() => {
              changeShow();
            }}
            id="show"
          >
            {statusName}
          </button>
          {/* {show && (<button data-testid='hide' onClick={(e)=>{setShow(false)} }id="hide">hide methods</button>)} */}
        </label>

        {show && (
          <label className="methods">
            <span> </span>

            <button
              data-testid="get"
              onClick={(e) => {
                setAPImethod("GET");
              }}
              id="get"
            >
              GET
            </button>
            <button
              data-testid="post"
              onClick={(e) => {
                setAPImethod("POST");
              }}
              id="post"
            >
              POST
            </button>
            <button
              data-testid="put"
              onClick={(e) => {
                setAPImethod("PUT");
              }}
              id="put"
            >
              PUT
            </button>
            <button
              data-testid="delete"
              onClick={(e) => {
                setAPImethod("DELETE");
              }}
              id="delete"
            >
              DELETE
            </button>
          </label>
        )}
        
      </form>
      
    </>
  );
}

export default Form;
