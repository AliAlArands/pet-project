import "./feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="feedback background-gc">
        <p className="text-center title large-title feedback-title">
          Give us feedback!
        </p>
        <p className="pragraph">
          Your kudos and feedback are welcome!
          <br /> Share your thoughts using the box down
        </p>

        <form action="" className="w-100 mb-5">
          {/* <input
            className="feedback-input"
            type="email"
            placeholder="Enter your email"
          /> */}
          <input
            className="feedback-input"
            type="text"
            placeholder="Enter your message"
          />
          <div className="d-flex algin-items-center justify-content-center mt-5">
            <button className="btn btn-primary submit-btn pages-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
