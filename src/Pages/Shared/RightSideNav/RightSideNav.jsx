import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            {/* Log in */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>

            {/* Find us */}
            <div className="p-4  mb-6">
                <h2 className="text-2xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3" />
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaTwitter className="mr-3" />
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaInstagram className="mr-3" />
                    Instagram
                </a>
            </div>

            {/* q zone */}
            <div className="p-4  mb-6">
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;