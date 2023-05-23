import React from "react";
import "./addpicture.css";

const AddPicture = () => {
  return (
    <div className="d-flex flex-column justify-content-center algin-items-center mt-5 w-50 mx-auto">
      <div className="mb-5 w-100 d-flex justify-content-center">
        <img
          src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="add-picture-img"
          alt=""
        />
      </div>

      <button
        type="btn"
        className="btn btn-secondary w-25 mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#photoModal"
      >
        Add Picture
      </button>

      <div className="modal" id="photoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Photo</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center ">
              <button className="mb-2 btn btn-secondary w-50">
                Open Gallery
              </button>
              <button className="btn btn-secondary w-50">Take Photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPicture;
