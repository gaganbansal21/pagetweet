import React, { useState } from "react";
import "./index.css";
import {
  Navbar,
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  Button,
  useModal,
  Alert
} from "@attrybtech/attryb-ui";
import InputContent from "../inputfield/index.jsx";



// eslint-disable-next-line no-unused-vars
const NavbarComponenet = ({sendBackData}) => {

  const [data,Setdata] = useState("");
  const { modalState, modalRef, exitModal, showModal } = useModal();
  const [showAlert, setShowAlert] = useState(false)
  const [themeofAlert, setAlertTheme] = useState("success")

  // const sendingData = () =>{
  //   sendBackData(data);
  // }

  const modalOkayHandler = () => {
    const el = document.getElementById("editable").children[0];
    const newData = el.innerText;
    if(el.innerText.length > 160){
      alert("You have reached the word limit!")
    }
    else{
      Setdata(el.innerText);
      sendBackData(newData);
      console.log("newdata",newData);
      setShowAlert(true),
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
      setAlertTheme("success"),
      exitModal();
    }
  };

  const modalCancelHandler = () => {
    console.log("Cancelled");
    exitModal();
  };

  
  return (
    <Navbar
      navbarLeftSection={<>
        <div className="left-section-navbar">
          <h3>Home</h3>
          <h3>Moments</h3>
          <h3>Notifications</h3>
          <h3>Messages</h3>
        </div>
      </>}
      navbarRightSection={
        <>
          <Button onClick={showModal}>POST</Button>
          <AlertPopup
            wrapperRef={modalRef}
            name="example-popup-1"
            visibility={modalState}
            onBackdropClick={modalCancelHandler}
          >
            <AlertPopupHeader></AlertPopupHeader>
            <AlertPopupBody> 
                <InputContent />
            </AlertPopupBody>
            <AlertPopupFooter>
              <Button onClick={modalCancelHandler} variant="link">
                Cancel
              </Button>
              <Button onClick={modalOkayHandler}>Post</Button>
            </AlertPopupFooter>
          </AlertPopup>
          {showAlert && <Alert content="Default Alert Text" theme={themeofAlert} showAlert={showAlert}/>}
        </>
      }
    />
  );
};

export default NavbarComponenet;
