import React, { useState ,useReducer} from "react";

import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Form from "./component/form/form";
import Results from "./component/results/result";
import "./app.scss";
import DataReducer ,{addData ,removeUrl,emptyAction} from "./component/useReducer";

const initState ={
url:[],
  data:[],
  count :0
  }
function App() {
  const [apiData,dispatch]=useReducer(DataReducer,initState)

  const [user, setUser] = useState({
    data: null,
    requestParams: {},
  });


  async function callApi(requestParams) {
    if (requestParams.method === "GET") {
      const response = await fetch(requestParams.url);
      var data = await response.json();
alert("Nice choice ✔✔😎!")
      // console.log(data);
      data.url=requestParams.url
      console.log(data.url,"++++++++++++++++++++")
      dispatch(addData(data))
      
      if (requestParams) {
        setUser({ user, data: data, requestParams: requestParams });
      }
    } else if(requestParams.method === "POST" ||requestParams.method === "PUT" ||requestParams.method === "DELETE"){
alert("oh No.. 💣💣💥")

      const data = {
        message: `you cannot Apply >> ${requestParams.method} << method yet  `,
      };

      if (requestParams) {
        setUser({ user, data: data, requestParams: requestParams });
      }
    } 

  }
console.log(apiData.url);
  return (
    <React.Fragment>
<Header />
   <div data-testid="request">
        Request Method:{user.requestParams.method}
      </div>
      
      <div data-testid="url">URL: {user.requestParams.url}</div>
      <h3> you have tested : {apiData.count} api's till now 😛 check data in the console</h3>
{/* <h4>{apiData.data}</h4> */}<p>list of API tested</p>
<ul> 
{
                    apiData.url.map((url, idx) => {
                        return (
                            // <li key={idx} onClick={() => dispatch(removePerson(person))}>{person}</li>
                            <>
                           
                            <li key={idx} onClick={() => dispatch(removeUrl(idx))} >{url} <span id="delete">delete</span> </li>
                            </>
                            
                        )
                    })
                }
</ul>
<button id="clear" onClick={() => dispatch(emptyAction())}>Clear All</button>
      <Form handleApiCall={callApi} />
     <Results  data={user.data} />
     
      <Footer />
    </React.Fragment>
  );
}

export default App;
