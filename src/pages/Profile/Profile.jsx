import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaChevronDown } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const handleOnClick = () => {
  const chevron = document.querySelector("#chevron");
  // console.log(chevron);
  const list = document.querySelector(".setting-list");
  list.classList.toggle("show-setting-list");
  chevron.classList.toggle("chevron-down");
};

const Profile = ({ user }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="profile">
        <div className="profile-section">
          <h2>Hi, {user.name}</h2>
          <img
            src="https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
            className="profile-img"
          />
        </div>
        <div className="profile-section">
          <div className="info">
            <div className="setting">
              <IoMdSettings /> <span>Setting</span>
              <FaChevronDown
                onClick={handleOnClick}
                id="chevron"
                className="icon"
              />
            </div>
            <ul className="list-group setting-list">
              <li className="list-group-item">
                <button
                  type="btn"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#photoModal"
                >
                  Change Image
                </button>
              </li>
              <li className="list-group-item">
                <button
                  type="btn"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#password"
                >
                  Change Password
                </button>
              </li>
              <li className="list-group-item">
                <button
                  type="btn"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#address"
                >
                  Change Address
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
      <div className="modal" id="password">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center ">
              <form className="w-75">
                <div class="form-group mb-3">
                  <label for="name ">Email address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    // aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    // id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="address">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Address</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center ">
              <form className="w-75">
                <div class="form-group mb-3">
                  <label for="old-address">Old address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="old-address"
                    // aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="new-address">New address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="new-address"
                    // aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Your Password</label>
                  <input
                    type="password"
                    class="form-control"
                    // id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
