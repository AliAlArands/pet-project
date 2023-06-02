import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaChevronDown } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import profileImage from "./../../assets/profile/profile-Image.svg";
const handleOnClick = () => {
  const chevron = document.querySelector("#chevron");
  // console.log(chevron);
  const list = document.querySelector("#profile-list-group");
  console.log(list);
  list.classList.toggle("show-setting-list");
  chevron.classList.toggle("chevron-down");
};

const Profile = ({ user }) => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <h2 className="name">{user.name}</h2>
        <img alt="" src={profileImage} className="profile-img" />
        <div className="profile-section">
          <div className="info">
            <div className="setting">
              <IoMdSettings className="fs-3 icon" />{" "}
              <span className="setting-label">Setting</span>
              <FaChevronDown
                onClick={handleOnClick}
                id="chevron"
                className="fs-3 icon"
              />
            </div>
            <ul className="list-group setting-list" id="profile-list-group">
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
                <div className="form-group mb-3">
                  <label htmlFor="name ">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    // aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    // id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
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
                <div className="form-group mb-3">
                  <label htmlFor="old-address">Old address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="old-address"
                    // aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="new-address">New address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="new-address"
                    // aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Your Password</label>
                  <input
                    type="password"
                    className="form-control"
                    // id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
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
