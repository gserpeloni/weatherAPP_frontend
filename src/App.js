import './App.css';
import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Background from "./components/Background"


function App() {
  //const locale = ["London", "Carapicuiba", "Barueri", "Holand"];
  const [data, setData] = useState();
  const [city, setCity] = useState("Carapicuiba");
  const [options] = useState(false);



  //Onde colocar a api key sem apresentala no codigo?
  useEffect(() => {
    try{
      if(city !== ""){
        api.get(`api/${city}`).then( response => {
            if(response.status === 200){
              const info = response.data
              console.log(info)
              setData(info);
              }
            });}
    }catch(err){
         console.error("Ocorreu um erro ao tentar receber os dados"+err)
    }
  }, [city,setData]);



  function click(){
    const cityName = document.getElementById("cityN").value;
    console.log(cityName);
    setCity(cityName);
  }


  return (
    <div>
      {options === false && <>
        <div className="App">
            <header> Weather APP </header>
        
          
          <div>
              <TextField id="cityN" label="City" />
          </div>

          <div className="div-bt" >
                  <Button variant="contained" color="primary" onClick={click}>
                    Buscar
                  </Button>
            </div>


              <h2>Locate: {data?.name}</h2>
              <h3>Temperature: {data?.main.temp | 'Blank'} C</h3>
          </div>

          <Background /> 
        
        
        </>}
      </div>
  );
}

export default App;
