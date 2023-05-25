import React from "react";
import "./verify.css";
const Verify = () => {
  return (
    <div className="background-gc contain">
      <form className="form text-center" action="" method="POST">
        <div className="title verify-title">Enter Verification Code</div>
        <div className="mb-4">
          <input type="text" maxlength="4" class="mb-3 input-field" />
          <p>
            If You Dont Recieve code{" "}
            <a href="#" className="link">
              Resend
            </a>
          </p>
        </div>
        <button type="submit" className="btn btn-primary w-75 mb-5 btn-send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Verify;
