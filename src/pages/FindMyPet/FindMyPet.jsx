import Navbar from "../../components/Navbar/Navbar";
import Navigation from "../../components/Navigation/Navigation";
import "./find.css";

const FindMyPet = () => {
  return (
    <>
    <Navbar/>
    <Navigation/>
      <div className="Findmybet background-gc">
        <p className="text-center title large-title">Find my pet</p>

        <input className="id-input" type="text" placeholder="write your ID" />

        <button className="btn btn-primary submit-btn pages-btn">Tracker</button>
      </div>
    </>
  );
};

export default FindMyPet;
