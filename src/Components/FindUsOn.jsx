import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-3">Find Us On</h2>
      <div className="join join-vertical flex">
        <button className="btn join-item justify-start text-blue-600"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start text-[#D82D7E]"><FaInstagram></FaInstagram> Instagram</button>
        <button className="btn join-item justify-start text-[#58A7DE]"><FaTwitter></FaTwitter> Twitter</button>
      </div>
    </div>
  );
};

export default FindUsOn;
