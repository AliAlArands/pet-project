import "./feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="feedback background-gc">
        <p className="text-center feedback-title">Give us feedback!</p>
        <p className="pragraph">
          Your kudos and feedback are welcome! Share your thoughts using the box
          down
        </p>

        <form action="" className="w-100 mb-5">
          <input className="feedback-input" type="email" placeholder="Enter your email" />
          <input className="feedback-input" type="text" placeholder="Enter your message" />
        </form>

        <button className="btn btn-primary send-btn">Send</button>
      </div>
    </>
  );
};

export default Feedback;
