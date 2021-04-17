import React, {ChangeEvent, FC, useState} from 'react';
import {doesTriangleExist} from './validation';
import './App.css';
const MIN_VALUE = 1;
const App:FC<{}> = ()=>{
  const [valueA, setValueA] = useState<number>(1);
  const [valueB, setValueB] = useState<number>(1);
  const [valueC, setValueC] = useState<number>(1);
  const [triangleType, setTriangleType] = useState<string|undefined>(undefined);
  const submitTriangleHandler:()=>void = ()=>{
    // check if triangle is valid
    if (doesTriangleExist(valueA, valueB, valueC)) {
      // if yes then send to api
      const query = '?valueA='+valueA+'&valueB='+valueB+'&valueC='+valueC;

      fetch('http://localhost:8000'+query, {
        method: 'GET',

      }).then((response)=>{
        response.json().then((jsonData)=>{
          setTriangleType(jsonData.triangleType);
        });
      });
    } else {
      setTriangleType('does not exist');
    }

    // if not display error msg
  };

  return (
    <div className="trinagle_form">
      <input
        type="number"
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{
          setValueA(parseInt(e.target.value));
        }}
        value={valueA}
        min={MIN_VALUE}
      />
      <input
        type="number"
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{
          setValueB(parseInt(e.target.value));
        }}
        value={valueB}
        min={MIN_VALUE}
      />
      <input
        type="number"
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{
          setValueC(parseInt(e.target.value));
        }}
        value={valueC}
        min={MIN_VALUE}
      />
      <button onClick={submitTriangleHandler}>Get triangle type</button>
      {triangleType === undefined?
            '':triangleType}
    </div>
  );
};

export default App;
