import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../components/Button/Button";

const handleOnClick = () => {
  const chevron = document.querySelector("#show-choices");
  // console.log(icon);
  const list = document.querySelector(".setting-list");
  list.classList.toggle("show-setting-list");
  chevron.classList.toggle("chevron-down");
};

const changeAdress = () => {
  const chevron = document.querySelector("#show-address-choices");
  const address = document.querySelector(".address");
  chevron.classList.toggle("chevron-down");
  if (getComputedStyle(address).display == "none")
    address.style.display = "block";
  else address.style.display = "none";
};

const Profile = ({ user }) => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-section">
          <h2>Hi, {user.name}</h2>
          <img
            src="https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
            className="profile-img"
          />
        </div>
        <div className="profile-section info fw-bold d-flex flex-column">
          <div>
            <p>Birth Day : {user.birthDay}</p>
            <p>Pet type : {user.pet.type}</p>
          </div>

          <div className="mt-5 w-25 apply">
            <div className="setting">
              <span>Setting</span>
              <span>
                <FaChevronDown
                  onClick={handleOnClick}
                  className="icon"
                  id="show-choices"
                />
              </span>
            </div>
            <ul className="setting-list">
              <li className="setting-list-item">
                <button
                  type="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#photoModal"
                >
                  change image
                  <FaShoppingCart className="cart"/>
                </button>
              </li>
              <li className="setting-list-item">
                <button type="btn">change name</button>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <div className="d-flex justify-content-between w-25 mb-2">
              <span>Adress</span>
              <span>
                <FaChevronDown
                  onClick={changeAdress}
                  className="icon"
                  id="show-address-choices"
                />
              </span>
            </div>
            <button type="btn" className="fw-bold address">
              change your address
            </button>
          </div>
        </div>
      </div>

      <div className="modal me-auto" id="photoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Photo</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center ">
              <Button
                content="Open Gallery"
                classes="mb-2 btn btn-secondary w-50"
              />
              <Button content="Take Photo" classes="btn btn-secondary w-50" />
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
