/* eslint-disable react-hooks/exhaustive-deps */
import {  Button, Container } from "react-bootstrap";
import { useContext,useState,useEffect } from "react";
import { DataContext } from "../../context/context";
import "./query.css"
import DisplayCard from "../../components/card/card";


export default function Query()
{
    const {data,mainTags}=useContext(DataContext)
    const [filterData,setFilterData] =useState([])
    const [search,setSearch]=useState()
    const [tags,setTags]=useState([])
   // const [filterApplied, setFilterApplied] = useState(false);


  

    useEffect(()=>{
        // console.log("in mount")
        setFilterData([...data])
        // console.log(mainTags)
        for (let key in mainTags)
        {
            // console.log(mainTags[key])
           if( Object.keys(mainTags[key]).length>0)
           {
               mainTags[key].forEach((a)=>{
                //    console.log(a)
                   setTags(tags=>[...tags,a])
               })
           }
        //    console.log(tags)
        }

    },[])

    if(data.length<1) return[]

    const handleSearch=({target:{value}})=>{
        setSearch(value)

        if(value)
        {
            const regex = new RegExp(value,"gi")

            let newData= filterData.filter((a)=>{
                return regex.test(a.name)
            }
            )
            console.log(newData)
            setFilterData([...newData])
        }
        else{
            setFilterData([...data])
        }
    }

    return(
        <>
        <div className="outerContainer">
        <div className="tagBar">
            <div className="ms-5 mt-2">
                <p className="ptag">FILTERS :
                    {
                    tags.map((a)=>{
                        return <div className="tagBarItem text-muted">{a}</div>
                    })
                    }
                    <Button className="clearbutton" style={{marginLeft:"80%"}}><a href="https://eclectic-haupia-0bab18.netlify.app/">Clear</a></Button>
                </p>
            </div>
        </div>
        <Container className=" bg-muted d-flex flex-column align-items-center ">
            
            <p style={{textAlign:"center",fontFamily:"Consolas",fontWeight:"bolder",color:"black",fontSize:"30px", marginTop:"20px", marginBottom:"20px"}}>aws_browser.csv</p>
            <div className="searchContainer">
                <div>
                    <form>
                        <input  className="searchBox form-control" placeholder="search..." onChange={handleSearch} value={search}/>
                    </form>
                </div>
            </div>
        </Container>
    
        <div className="countBar">
                <div>
                    <p><p className="d-inline text-muted"> {filterData.length} </p>Results</p>
                </div>
        </div>
    
            <div className="row cardContainer">
                {
                    filterData.map((a)=>{
                       return <DisplayCard  key={a._id} data={a}/>
                    })
                }
               
            </div>
            
        </div>

        </>
    )
}