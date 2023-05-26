import React from "react";
import "./addpicture.css";
import boyWithSmallDog from "./../../assets/login/boyWithSmallDog.jpg";
import Profile from "./../../assets/login/Profile.jpg"
const AddPicture = () => {
  return (
    <>
      <div className="contain background-gc d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center picture mt-5">
          {/* <div className="mb-5 d-flex justify-content-center"></div> */}
            <img src={Profile} alt="" className="add-profile-img" />
          <button
            type="btn"
            className="btn btn-primary w-75 mx-auto submit-btn"
            data-bs-toggle="modal"
            data-bs-target="#photoModal"
          >
            Add Picture
          </button>
        </div>

        <div className="w-50">
          <img src={boyWithSmallDog} className="" alt="" />
        </div>
      </div>
      <div className="modal" id="photoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header mb-3">
              <h5 className="modal-title">Change Photo</h5>
              <button type="button" className="close fs-4" data-bs-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center ">
              <button className="mb-5 btn btn-primary m-btn w-50">
                Open Gallery
              </button>
              <button className="btn btn-primary m-btn w-50">Take Photo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPicture;
