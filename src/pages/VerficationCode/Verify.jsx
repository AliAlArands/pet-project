import React from "react";
import "./verify.css";
const Verify = () => {
  return (
    <form className="form text-center" action="" method="POST">
      <div className="h3 mb-3">Enter Verification Code</div>
      <div className="mb-4">
        <input type="text" maxlength="4" class="mb-3 input-field" />

        <p>
          If You Dont Recieve code 
          <a href="#" className="link">
            Resend
          </a>
        </p>
      </div>
      <button type="submit" className="btn btn-dark w-75 mb-5">
        Send
      </button>
    </form>
  );
};

export default Verify;
