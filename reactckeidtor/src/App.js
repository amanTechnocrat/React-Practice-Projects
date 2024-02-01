import React,{useState} from 'react'; 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [cdata, setdata] = useState("");

  const handlechange =(e,editor)=>{
    setdata(editor.getData())
  }
  return (
    <>
      <h1>CKEditor</h1>
      <CKEditor editor={ ClassicEditor } onChange={handlechange} data={cdata}  />
      <div style={{textAlign:"center"}}>{cdata}</div>
      <span>
      <div dangerouslySetInnerHTML={{__html:cdata}} />
      </span>
    </>
  );
}

export default App;
