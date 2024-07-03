import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/content-king-reverse.svg";
const Footer = () => {
  return (
    <footer className=" mt-12 ">
      <div className="bg-black">
        <div className="max-w-screen-xl mx-auto flex px-16 py-12 items-center justify-between text-white">
          <div className="space-y-6">
            <p className="text-2xl font-semibold">
              কথা বলুন আমাদের এক্সপার্ট এর সাথে! কল করুন
            </p>
            <h1 className="text-4xl font-bold text-[#ffcb05]">
              +880 1776-825-224
            </h1>
          </div>
          <div>
            <button className="px-16 hover:bg-[#ffcb05] py-6 bg-[#009b3e] rounded font-bold text-white ">
              যোগাযোগ
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ffcb05] text-center p-5">
        <div className="pt-12">
          <img className="w-56 inline" src={logo} alt="" />
          <p className="text-3xl max-w-3xl mt-8 mx-auto font-semibold text-black">
            কনটেন্ট কিং বাংলাদেশের অন্যতম সেরা ই-লার্নিং প্ল্যাটফর্ম। নলেজকে
            স্কিলে পরিণত করতে কনটেন্ট কিং বদ্ধপরিকর
          </p>
          <div className=" flex items-center justify-center gap-6 mt-8 mx-auto">
            <div className="">
              <FaFacebook className="text-6xl p-4 hover:text-[#ffcb05] bg-white rounded-full" />
            </div>
            <div className="">
              <FaTwitter className="text-6xl p-4 hover:text-[#ffcb05] bg-white rounded-full" />
            </div>
            <div className="">
              <FaYoutube className="text-6xl p-4 hover:text-[#ffcb05] bg-white rounded-full" />
            </div>
          </div>
        </div>
        <p className="mt-12 text-sm font-semibold">
          © 2024 Ionic Corporation | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
