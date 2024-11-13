import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div  className="flex flex-col justify-center items-center gap-3 py-5">
            <div>
              <img className="w-[600px]" src={logo} alt="" />
            </div>
              <h2 className="text-2xl text-gray-400 ">Journalism Without Fear or Favour</h2>
              <p className="text-xl flex gap-2">
                <span> {moment().format("dddd,")}</span>
                <span className="text-gray-400">{moment().format("MMMM Do, YYYY")}</span>
              </p>
        </div>
    );
};

export default Header;