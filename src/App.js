
import './App.css';
import Dropdown from 'react-dropdown';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import 'react-dropdown/style.css';
import Logo from './logo.png'


function App() {


const [options, setOptions] = useState([])
const [input , setInput] = useState([])
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("kes")
const [output, setOutput] = useState([])
const [info, setInfo] = useState([])
useEffect(() => {
  
}, [])



 useEffect(() => {
  Axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
  .then((res) =>{
    setInfo(res.data[from]);
})},[from])

useEffect(() => {
  
  setOptions(Object.keys(info));
  convert();
}, [info])

function convert() {
 
  var rate = info[to]
  setOutput(input * rate)
}
  return (
    <div className=''>
      <div className='bg-black text-orange-600 font-bold px-4 py-4 flex justify-between'>
        Currency Converter
        <img src={Logo} alt='logo'/>
      </div>
    <div className='max-w-lg mx-auto my-6 '>
      <div>
        <input type="text"
        placeholder="Enter the amount?"
        onChange={(e) => setInput(e.target.value)} 
        className='px-4 py-4 font-semibold capitalize text-center border-r rounded-md mx-32 mb-10 text-orange-600 bg-black'/>
      </div>
      <div>
        <Dropdown options={options}
        onChange={(e) => setFrom(e.value)}
        value={from}
        placeholder="From"
        className='capitalize bg-black  text-orange-600 font-bold'/>
      </div>
      <div>
        <Dropdown options={options}
        onChange={(e) => setTo(e.value)}
        value={to}
        placeholder="To"
        className='capitalize bg-black  text-orange-600 font-bold'/>
      </div>
      <div>
        <button onClick={() => {convert() }}
        className='py-4 px-4 my-20 border rounded-md drop-shadow-lg bg-black text-orange-700  w-80 font-bold uppercase mx-24'>Convert
        </button>

        <p
        className='text-black font-bold capitalize text-3xl my-3 mx-10'>{input + "   " + from+ "    = "+output+"  "+to}</p>


      </div>
      

    </div>
    <div className='bg-black text-orange-600 font-bold px-4 py-4'>
        Paul Webo @2023
      </div>
    </div>
  );
}

export default App;
