import { useEffect } from "react";
import "./Fqa.css";
const Fqa = () => {
  const handleButtonClick = (btns, clickedBtn) => {
    btns.forEach((btn) => {
      if (btn === clickedBtn) {
        btn.classList.add("fqa-selected");
      } else {
        btn.classList.remove("fqa-selected");
      }
    });
    console.log("clicked");
  };
  useEffect(() => {
    const btns = document.querySelectorAll(".accordion-button");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        handleButtonClick(btns, btn);
      });
    });

    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("click", () => {
          handleButtonClick(btns, btn);
        });
      });
    };
  }, []);

  return (
    <div className=" fqa d-flex align-items-center flex-column background-gc">
      <h1 className="text-center fqa-heading">Genral pety FAQ</h1>
      <div className="accordion mt-5 w-50" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button fqa-selected"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.?
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lorem hac a ultricies. Id ornare turpis vulputate enim sed magna
              sit. A id cursus dolor urna. Aliquam diam integer vitae eget.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fqa;
