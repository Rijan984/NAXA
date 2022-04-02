import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";
import "./signup.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [cv, setCv] = useState("");
  const [cover, setCover] = useState("");
  const [nameErr, setNameerr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [numErr, setNumErr] = useState(false);
  const [enqErr, setEnqErr] = useState(false);
  const [cvErr, setCvErr] = useState(false);
  const [coverErr, setCoverErr] = useState(false);

  const dispatch = useDispatch();
  const validate = (e) => {
    e.preventDefault();
    if (!name) {
      setNameerr(true);
      //   alert("hey");
    }
    if (!email) {
      setEmailErr(true);
    }
    if (!num) {
      setNumErr(true);
    }
    if (!enquiry) {
      setEnqErr(true);
    }
    if (!cv) {
      setCvErr(true);
    }
    if (!cover) {
      setCoverErr(true);
    }
    if ((name, email, num, enquiry, cv, cover)) {
      dispatch(
        login({
          username: name,
        })
      );
      console.log();
    }
  };
  return (
    <div className="form">
      <p style={{ width: "100%", textAlign: "center" }}>
        Please Submit below information to see contents
      </p>
      <form>
        <div className="inputs diff">
          <input
            type="text"
            vlaue={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameerr(false);
            }}
            placeholder="Full Name"
          />
          {nameErr && (
            <p style={{ color: "red " }}>Please Fill the information above</p>
          )}
        </div>
        <div className="inputs">
          <div className="same" style={{ marginRight: "5%" }}>
            <input
              type="text"
              placeholder="Email"
              vlaue={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr(false);
              }}
            />
            {emailErr && (
              <p style={{ color: "red " }}>Please Fill the information above</p>
            )}
          </div>
          <div className="same">
            <input
              type="text"
              placeholder="Phone number"
              vlaue={num}
              onChange={(e) => {
                setNum(e.target.value);
                setNumErr(false);
              }}
            />
            {numErr && (
              <p style={{ color: "red " }}>Please Fill the information above</p>
            )}
          </div>
        </div>
        <div className="inputs diff">
          <textarea
            placeholder="Description"
            vlaue={enquiry}
            onChange={(e) => {
              setEnquiry(e.target.value);
              setEnqErr(false);
            }}
          />
          {enqErr && (
            <p style={{ color: "red " }}>Please Fill the information above</p>
          )}
        </div>
        <div className="inputs diff">
          <label>Upload your CV</label>
          <input
            type="file"
            vlaue={cv}
            onChange={(e) => {
              setCv(e.target.value);
              setCvErr(false);
            }}
          />
          {cvErr && (
            <p style={{ color: "red " }}>Please Fill the information above</p>
          )}
        </div>
        <div className="inputs diff">
          <label>Upload your cover letter</label>
          <input
            type="file"
            vlaue={cover}
            onChange={(e) => {
              setCover(e.target.value);
              setCoverErr(false);
            }}
          />
          {coverErr && (
            <p style={{ color: "red " }}>Please Fill the information above</p>
          )}
        </div>
        <div onClick={validate} style={{ width: "100%", textAlign: "center" }}>
          <div className="btn btn-success">Submit</div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
