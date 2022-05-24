import { useState } from "react"


const FileUpload = ()=>{
  const [image, setImage] = useState({preview:"", imgUrl:""});
  
  
   //------ onChange Method--------
  const handleChange = (e) => {
    e.preventDefault();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      imgUrl: e.target.files[0],
    }
    setImage(img)
  }
  console.log("image preview",image.preview)
  
   //-----Uploading files------
   const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image.imgUrl);
        console.log("image submit",image.imgUrl)
        
        let res = await fetch("http://localhost:4000/api/file-uploading", {
            method: "POST",
            body: formData,
        });
       res = await res.json()
       alert(res.message);
   };
   
   
  return(
        <div className="fileUploadWrapper">
           <h5> File Upload </h5>
            <div>
              <img 
              style={{ margin:"1em",width:"60vw", height:"11em", objectFit:"cover" }} 
              src={image.preview} alt="i-m-g preview"/>
            </div>
             <div>
                <input type="file" onChange={handleChange} />
            </div>
            <button style={{background:"black"}}
            onClick={handleSubmit}> Submit </button>
        </div>
    )
}

export default FileUpload