import React, { useContext, useState } from "react";
import { ImagePlus, Star } from "lucide-react";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FinalCheck from "./FinalCheck";
import { MyContext } from "../App";
import { Button } from "@mui/material";


function SecondSection() {
  const { cropImg, setCropImg } = useContext(MyContext);

  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const initialVal = {
    img: null,
    uname: "",
    dob: "",
    pob: "",
    rashi: "",
    naksh: "",
    height: "",
    gotra: "",
    edu: "",
    job: "",
    fname: "",
    fjob: "",
    mname: "",
    mjob: "",
    sibl: "",
    cperson: "",
    cnum: "",
    email: "",
    adrs: "",
  };

  const validateData = (values) => {
    if (cropImg == null) {
      toast.error("Please Upload the Image");
    } else if (values.uname === "" || values.uname.length < 3) {
      toast.error("Please enter Name");
    } else if (values.dob === "") {
      toast.error("Please Enter Date of Birth");
    } else if (values.pob === "") {
      toast.error("Please Enter Place of birth");
    } else if (values.rashi === "") {
      toast.error("Please Enter Your Rashi");
    } else if (values.height === "") {
      toast.error("Please Enter your height");
    } else if (values.gotra === "") {
      toast.error("Please Provide your gotra");
    } else if (values.edu === "") {
      toast.error("Please Enter your higher Qualification");
    } else if (values.job === "") {
      toast.error("Please provide your Job Profile");
    } else if (values.fname === "") {
      toast.error("Please Provide Father's Name");
    } else if (values.fjob === "") {
      toast.error("Please Provide  father's Occupation");
    } else if (values.mname === "") {
      toast.error("Please Provide  Mother's Name");
    } else if (values.mjob === "") {
      toast.error("Please Enter Mother's Occupation");
    } else if (values.cperson === "") {
      toast.error("Please Provide Contact Person Name");
    } else if (values.cnum === "") {
      toast.error("Please Provide Phone Number of Contact Person");
    } else if (values.email === "") {
      toast.error("Please Provide email address");
    } else if (values.adrs === "") {
      toast.error("Please Provide Address");
    } else {
      verifyData(values);
    }
  };

  const verifyData = (values) => {
    const { uname, height, cnum, email } = values;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileReg = /^[789]\d{9}$/;

    if (uname.length < 3) {
      toast.error("Name must be greater then 3 letters");
    } else if (parseFloat(height) < 2 || parseFloat(height) > 7) {
      toast.error("Please Enter Valid Height");
    } else if (!emailReg.test(email)) {
      toast.error("Invalid Email! Please Enter valid Email");
    } else if (!mobileReg.test(cnum)) {
      toast.error("Invalid Mobile Number!");
    } else {
      navigate("../template", { state: values });
    }
  };

  const handleForm = (values) => {
    values.img = cropImg;
    validateData(values);
  };

  return (
    <div>
      <div>
        <div>
          <section
            id="bottom"
            className="bg-gradient-to-r from-pink-400 via-green-200 to-yellow-200 text-center p-6 text-3xl md:text-5xl md:p-8 font-semibold mb-8"
          >
            <p>Start Creating your Biodata</p>
          </section>
        </div>
        <div>
          <section className="md:mx-4 lg:mx-44 md:mt-8">
            <Toaster />
            <Formik initialValues={initialVal} onSubmit={handleForm}>
              {({ setFieldValue }) => (
                <Form className="md:flex md:flex-row-reverse md:items-start">
                  <section className="grid place-content-center md:sticky md:top-2 md:mb-44 md:mt-20 ">
                    <label onClick={() => setCheck(!check)}>
                      <div
                        className={`${
                          cropImg
                            ? "bg-gray-300 h-96 w-64"
                            : "bg-gray-300 h-96 w-64"
                        } rounded-xl grid place-items-center cursor-pointer`}
                      >
                        {cropImg ? (
                          <div>
                            <img src={cropImg} alt="img" className="border-2" onClick={()=>{setCheck(!check),setCropImg(null)}} />
                            <p className="text-md text-center mt-2">Double Tap on image for change the Image</p>
                          </div>
                        ) : (
                          <ImagePlus size={64} className="text-gray-500" />
                        )}
                      </div>
                    </label>
                    {check ? (
                      <div
                        className={`absolute margin-auto w-[100%] ${
                          cropImg ? "hidden" : "block"
                        }`}
                      >
                        <div className="absolute left-[10%] sm:left-[28%] md:left-0 margin-auto">
                        <Button variant="contained" color="primary" onClick={()=>setCheck(false)}>Back</Button>
                        </div>
                        <FinalCheck />
                      </div>
                    ) : (
                      ""
                    )}
                  </section>
                  <section className="mx-4 md:w-[60%] lg:w-[70%]">
                    <div>
                      <p className="text-3xl font-semibold mb-6 mt-8">
                        Personal Details
                      </p>
                      <label className="labelBox">
                        Full Name
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="inputBox"
                        name="uname"
                      />
                      <label className="labelBox">
                        Date Of Birth
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className="inputBox"
                        name="dob"
                      />
                      <label className="labelBox">
                        Place Of Birth
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Name"
                        className="inputBox"
                        name="pob"
                      />
                      <label className="labelBox">
                        Rashi
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field as="select" className="inputBox" name="rashi">
                        <option value=""></option>
                        <option value="Mesh (Aries)">Mesh (Aries)</option>
                        <option value="Varishabha (Taurus)">
                          Varishabha (Taurus)
                        </option>
                        <option value="Mithuna (Gemini)">
                          Mithuna (Gemini)
                        </option>
                        <option value="Mithuna (Gemini)">
                          Mithuna (Gemini)
                        </option>
                        <option value="Karka (Cancer)">Karka (Cancer)</option>
                        <option value="Simha (Leo)">Simha (Leo)</option>
                        <option value="Kanya (Virgo)">Kanya (Virgo)</option>
                        <option value="Tula (Liba)">Tula (Liba)</option>
                        <option value="Vrischika (Scorpio)">
                          Vrischika (Scorpio)
                        </option>
                        <option value="Dhanur (Sagittarious)">
                          Dhanur (Sagittarious)
                        </option>
                        <option value="Makara (Capricorn)">
                          Makara (Capricorn)
                        </option>
                        <option value="Kumbha (Aquarius)">
                          Kumbha (Aquarius)
                        </option>
                        <option value="Meena (Pisces)">Meena (Pisces)</option>
                      </Field>
                      <label className="labelBox">Nakshatra</label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Nakshatra"
                        className="inputBox"
                        name="naksh"
                      />
                      <label className="labelBox">
                        Height
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Height in Feet"
                        className="inputBox"
                        name="height"
                      />
                      <label className="labelBox">
                        Gotra
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Gotra"
                        className="inputBox"
                        name="gotra"
                      />
                      <label className="labelBox">
                        Education
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Higher Education"
                        className="inputBox"
                        name="edu"
                      />
                      <label className="labelBox">
                        Job
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Job Profile"
                        className="inputBox"
                        name="job"
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-semibold mb-6">
                        Family Details
                      </p>
                      <label className="labelBox">
                        Father's Name
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Father Name"
                        className="inputBox"
                        name="fname"
                      />
                      <label className="labelBox">
                        Father's Occupation
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Father Occupation"
                        className="inputBox"
                        name="fjob"
                      />
                      <label className="labelBox">
                        Mother's Name
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Mother Name"
                        className="inputBox"
                        name="mname"
                      />
                      <label className="labelBox">
                        Mother's Occupation
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Mother Occupation"
                        className="inputBox"
                        name="mjob"
                      />
                      <label className="labelBox">Siblings</label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Your Siblings"
                        className="inputBox"
                        name="sibl"
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-semibold mb-6">
                        Contact Details
                      </p>
                      <label className="labelBox">
                        Contact Person
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Contact Person Name"
                        className="inputBox"
                        name="cperson"
                      />
                      <label className="labelBox">
                        Contact Number
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Phone Number"
                        className="inputBox"
                        name="cnum"
                      />
                      <label className="labelBox">
                        Email Id
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="email"
                        placeholder="Enter Email-Id"
                        className="inputBox"
                        name="email"
                      />
                      <label className="labelBox">
                        Address
                        <span className="text-2xl text-red-600 relative bottom-1">
                          *
                        </span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        placeholder="Enter Address"
                        className="inputBox"
                        name="adrs"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-red-500 text-lg text-white p-2 rounded-full hover:bg-red-700 w-[100%] mt-4 lg:w-[60%]"
                      >
                        {" "}
                        Choose a Template
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="reset"
                        className="p-2 rounded-full text-lg border-2 hover:bg-gray-200 w-[100%] mt-2 mb-10 lg:w-[60%]"
                      >
                        Reset Form
                      </button>
                    </div>
                  </section>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
