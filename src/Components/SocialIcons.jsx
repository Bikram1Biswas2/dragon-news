import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl mb-3">Login With</h2>

            <div className="flex flex-col items-center gap-3">
                <button className="btn btn-outline w-full text-rose-500"><FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialIcons;