import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import getCroppedImg from "./CropImage";
import { MyContext } from "../App";
import toast, { Toaster } from "react-hot-toast";


const FinalCheck = () => {
  const inputRef = React.useRef();
  const {cropImg,setCropImg} = useContext(MyContext);

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropImage, setCropImage] = useState(null);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const onCropp = async () => {
    toast.success("Image Cropped!",)
    setCropImage((await getCroppedImg(image, croppedArea)).toDataURL());
  };

  const onUpload = ()=>{
    setCropImg(cropImage)
  }

  const onCancel =()=>{
    setCropImage(null)
  }

  return (
    <div>
      <div className="container">
        <div className="container-cropper">
          {image ? (
            <>
              <div className="cropper">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  class="relative height-[100px]"
                />
              </div>
              <div className="slider">
                <Slider
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
            </>
          ) : null}
          <label
            onClick={triggerFileSelectPopup}
            className="flex justify-center items-center text-lg text-gray-500 h-[100%] rounded-md"
          >
            <p className={`${image ? 'hidden':'block'}`}>Drag Your Image</p>
          </label>
        </div>
        <div className="container-buttons">
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            hidden
            onChange={onSelectFile}
          />
          <Button variant="contained" color="primary" onClick={onCropp}>
            Crop
          </Button>
          <Button variant="contained" color="secondary" onClick={onUpload}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalCheck;
