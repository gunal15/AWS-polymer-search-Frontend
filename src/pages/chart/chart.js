/* eslint-disable react-hooks/exhaustive-deps */
import {Bar} from "react-chartjs-2"
import "./chart.css"
import { DataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";

export default function Chart()
{
const {tags}=useContext(DataContext)
const [value,setValue]=useState()
const [labelArray,setLabelArray]=useState([])
const [dataArray,setDataArray] =useState([])





const chart=(value)=>
{
    let  labelArray1=[]
    let  dataArray1=[]
   for(let key1 in tags)
   {
       // console.log(key1)
       
       if(key1 ===value)
       {
           for(let key2 in tags[key1])
           {
               labelArray1.push(key2)
               dataArray1.push(tags[key1][key2])
           }
       }
       
   }

console.log(labelArray1)
setLabelArray([...labelArray1])
console.log(dataArray)
setDataArray([...dataArray1])
}

useEffect(()=>{
chart(value)
},[value])

    const data = {
        labels:labelArray,
        datasets: [
          {
            label: value,
            data: dataArray,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
             borderColor:'rgba(54, 162, 235, 1)',
            
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
 
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${value} distibution`,
          },
        },
      };
    

      const handleChange=({target:{value}})=>{
          console.log(value)
        setValue(value)
      }

    return(
        <>
        <div  className="d-flex flex-column align-items-center  w-100 mt-2 p-4">
            <div>
                <label ><p className="mr-3">select axis</p></label>
                <select className="dropd" name="data" value={value} onChange={(event)=>{handleChange(event)}}  >
                <option className="options" value="">Select</option>
                    <option className="options" value="topics">Topics</option>
                    <option className="options" value="language">Language</option> 
                    <option className="options" value="license">License</option>
                    <option className="options" value="forks_count">Forks</option>
                    <option className="options" value="stargazers_count">Stars</option>
                    <option className="options" value="open_issues_count">Open Issues</option>
                    <option className="options" value="watchers_count">Watchers</option> 
                    <option className="options" value="has_wiki">Has Wiki</option>
                </select>
                
            </div>
        { value &&
        <div className="chart">
        <Bar  data={data} options={options}  />
        </div>
        }
        </div>
        </>
    )
}