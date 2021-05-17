import { useEffect, useState } from "react";

export default function Inbox() {
    let [inbox,setInbox] = useState([]);
     useEffect( async()=>{
        let data = await fetch('https://606ff05f85c3f0001746f0d5.mockapi.io/inbox');
        let inboxData = await data.json();
        setInbox([...inboxData]); 
     },[])

  return (
    <>
      <div className="emailList__list">
        {/* Email Row Starts */}
        {
            
        inbox.map((obj)=>{
            return <> 
            <div className="emailRow">
            <div className="emailRow__options">
              <input type="checkbox" name id />
              <span className="material-icons"> star_border </span>
              <span className="material-icons"> label_important </span>
            </div>
            <h3 className="emailRow__title">{obj.Name}</h3>
            <div className="emailRow__message">
              <h6>
                {obj.Title}
                <span className="emailRow__description">
                  {" "}
                  - {obj.Header}{" "}
                </span>
              </h6>
            </div>
            <p className="emailRow__time">{(obj.Date).slice(11, 16)}</p>
          </div>
          </>

        })
        }
    </div>
    </>
  );
}
