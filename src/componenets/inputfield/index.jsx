import React from 'react'
import { useState } from 'react'
import { EditableContentBlock } from "@attrybtech/attryb-ui"
import DOMPurify from "dompurify"

const htmlSample = {
    plain: "What is happening?",

    list: "<ul><li>Proin sed erat sit amet felis commodo sagitti. Phasellus feugiat volutpat mauris vestibulum.</li><li>Proin sed erat sit amet felis commodo sagitti. Phasellus feugiat volutpat mauris vestibulum.</li><li>Proin sed erat sit amet felis commodo sagitti. Phasellus feugiat volutpat mauris vestibulum.</li></ul>",

    listEmpty: "<ul><li></li></ul>",
}


const InputContent = () => {
    const [data,Setdata] = useState('');
    const [ECBFirst, setECBFirst] = useState(false)
    const [ECBSecond, setECBSecond] = useState(true)

    const [plainContent, setPlainContent] = useState(htmlSample.plain)
    const [listContent, setListContent] = useState(htmlSample.listEmpty)

    const handleData = (e) =>{
      Setdata(...data,e.target.value);
    }

  return (
    <>
    <p>Write Your Post here...</p>
    <EditableContentBlock   
                        id ="editable"
                        
                        editMode={ECBSecond}
                        showCharsCount={true}
                        maxCharsLimit={160}
                        manualSave={false}
                        allowEmpty={true}
                        placeholder={"Hi man You are writing here"}
                        onClick={() => {
                            console.log("on clicking...")
                            setECBSecond(true)
                        }}
                        onChange= {(e)=>{handleData(e)}}
                        >   
                    </EditableContentBlock>
                    </>
  )
}

export default InputContent;