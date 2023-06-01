import React from "react";
import "./verify.css";
import Back from "../../components/BackComponent/Back";
const Verify = () => {
  return (
    <>
      <Back/>
      <div className="background-gc contain">
        <form className="form text-center verify-form" action="" method="POST">
          <div className="title verify-title">Enter Verification Code</div>
          <div className="mb-4">
            <input type="text" maxlength="4" class="mb-3 customized-input input-verify-field" />
            <p>
              If You Dont Recieve code{" "}
              <a href="#" className="link">
                Resend
              </a>
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-75 mb-5 submit-btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Verify;
