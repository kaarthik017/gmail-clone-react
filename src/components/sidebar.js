import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";

export default function Sidebar(){
    const [show, setShow] = useState(false);
    let [Email,setEmail] = useState('');
    let [Content,setMessage] = useState('');
    let [focus,setFocus] = useState('none');
    
    const handleClose = (e) =>{ 
      
        setShow(false); 
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        if(e!==undefined){
          var type;
        if((e.target.value==="send")){
           type = 'Sent';   
        }
        if((e.target.value==="close")){
          type = 'Draft';
        }
        sendEmail(date,type);
        setEmail('');
        setMessage('');
      }
    }

    const handleShow = (e) => setShow(true);

    async function sendEmail (Date,Type) {
        await fetch("https://606ff05f85c3f0001746f0d5.mockapi.io/sent",{
            method: "POST",
            body: JSON.stringify({
                Email,
                Content,
                Date,
                Type
            }),
            headers:{
                "content-type":"application/json"
            }
        })
    }

    return <>
    <div className="sidebar">
   <button className="sidebar__compose" onClick={handleShow}><span className="material-icons"> add </span>Compose</button>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compose Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
    <   Form.Label>Recipient Email address</Form.Label>
        <Form.Control type="email" value={Email} placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
         <Form.Control value={Content} as="textarea" rows={3} onChange={(e)=>{setMessage(e.target.value)}} />
         </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" value="close" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" value="send" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
    </Modal>

    
  <div className={`sidebarOption ${(focus==='inbox') ? "sidebarOption__active" : ""}`}>
    <span className="material-icons" > inbox </span>
    <Link to="/inbox" style={{ textDecoration: 'none' },{color:'grey'}} onClick={()=>setFocus('inbox')}><h3>Inbox</h3></Link>
  </div>
  <div className={`sidebarOption ${(focus==='sent') ? "sidebarOption__active" : ""}`}>
    <span className="material-icons"> near_me </span>
    <Link to="/sent" style={{ textDecoration: 'none' },{color:'grey'}} onClick={()=>setFocus('sent')}><h3>Sent</h3></Link>
  </div>
  <div className={`sidebarOption ${(focus==='draft') ? "sidebarOption__active" : ""}`}>
    <span className="material-icons"> note </span>
    <Link to="/draft" style={{ textDecoration: 'none' },{color:'grey'}} onClick={()=>setFocus('draft')}><h3>Drafts</h3></Link>
  </div>
  <div className="sidebar__footer">
    <div className="sidebar__footerIcons">
      <span className="material-icons"> person </span>
      <span className="material-icons"> duo </span>
      <span className="material-icons"> phone </span> 
    </div>
  </div>
</div>

    </>
}