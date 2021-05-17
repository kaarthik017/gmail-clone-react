import { useEffect, useState } from "react";

export default function Sent({value}){
   
    let[sent,setSent] = useState([]);
   
    useEffect( async()=>{
        let data = await fetch('https://606ff05f85c3f0001746f0d5.mockapi.io/sent');
        let sentData = await data.json();
        setSent([...sentData]); 
     },[value])
      
    return <>
        <div className="emailList__list">
        {
            
        sent.map((obj)=>{
            if(obj.Type===value){
            return <> 
            <div className="emailRow">
            <div className="emailRow__options">
              <input type="checkbox" name id />
              <span className="material-icons"> star_border </span>
              <span className="material-icons"> label_important </span>
            </div>
            <h3 className="emailRow__title">{obj.Email}</h3>
            <div className="emailRow__message">
              <h6>
                {obj.Content}
              </h6>
            </div>
            <p className="emailRow__time">{obj.Date}</p>
          </div>
          </>
          }
        })
        }
    </div>
    </>
}