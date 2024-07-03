import image1 from "../../assets/hridi-thumbnai-1.jpg";
import image2 from "../../assets/ekram-2.jpg";
import image3 from "../../assets/Vector-2.png";
import { VscDebugStart } from "react-icons/vsc";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { RiScrollToBottomLine } from "react-icons/ri";
const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-screen-xl relative mx-auto px-2 mt-44">
      <div className="flex justify-center">
        <div className="md:w-[20%] relative hidden md:block">
          <img className="rounded-3xl w-44" src={image1} alt="" />
          <div
            onClick={() => setShowModal(!showModal)}
            className=" absolute top-20 left-16 cursor-pointer"
          >
            <VscDebugStart className="text-4xl bg-[#ffcb05] rounded-full p-1 text-white" />
          </div>
          <p className="mt-3 text-[#ffcb05] font-bold">Enrollment Process</p>
          <p className="mt-3">Just 2 mins</p>
        </div>
        <div className="text-center md:w-[60%] space-y-16">
          <h1 className="text-5xl tracking-wide font-extrabold ">
            নলেজ থেকে স্কিল;
            <br /> গন্তব্য হউক সফলতার পথে
          </h1>
          <p className="text-xl tracking-wide font-semibold">
            লার্নিং এর এই ইজি দুনিয়ায়, হাজারো অজুহাতে নিজের সফলতাকে আটকে
            দিচ্ছেন নিজেই! সব অজুহাত ছাপিয়ে এখন ঘরে বসে স্কিল ডেভেলপ করুন
            দেশসেরা এক্সপার্টদের কাছে।
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <button className="px-6 text-2xl hover:bg-[#ffcb05] py-4 bg-[#009b3e] rounded font-bold text-white ">
              কোর্স ডিটেইলস
            </button>
            <button className=" text-xl text-[#ffcb05] underline rounded font-bold ">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
        <div className="md:w-[20%] hidden md:block">
          <img src={image3} alt="" />
          <img className="w-48 mt-4 rounded-2xl" src={image2} alt="" />
          <h1 className="text-2xl text-[#ffcb05] mt-3 font-bold">Md. Ekram</h1>
          <p className="font-semibold mt-2">Mentor</p>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none ">
              <div className="relative w-full md:w-full my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div
                  className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
                >
                  {/*header*/}

                  {/*body*/}
                  <iframe
                    width="full"
                    height="400"
                    src="https://www.youtube.com/embed/4O8QhasLiiU?si=UjXYrlU2wWGxYzw5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  {/*footer*/}
                  <div
                    onClick={() => setShowModal(false)}
                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                  >
                    <button className="px-6 hover:bg-[#ffcb05] py-2 bg-[#009b3e] rounded font-bold text-white ">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <div className="lg:absolute lg:top-80 lg:left-8 flex flex-col justify-between lg:w-96 p-  mt-6">
        <div className="text-[#ffcb05] flex items-center justify-center text-center gap-2">
          <IoIosStar className="text-xl" />
          <IoIosStar className="text-xl" />
          <IoIosStar className="text-xl" />
          <IoIosStar className="text-xl" />
          <IoIosStar className="text-xl" />
        </div>

        <p className="my-4 mb-0 text-base text-center font-normal leading-relaxed tracking-wide">
          কন্টেন্ট কিং শুধু কোর্সে ভর্তি করে়ই না, বরং শিখিয়ে-পড়িয়ে মানুষ
          বানিয়ে তবেই ছাড়ে!
        </p>

        <div className="mt-6 flex items-center justify-center gap-6 ">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://www.contentkingbd.com/wp-content/uploads/2023/10/358597496_1331567521097208_8713970842428475920_n.jpg"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="inline-block "
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="leading-relaxed font-semibold text-[#ffcb05] tracking-wide ">
              Fouad Kemal Kaderi
            </p>
            <p className="text-xs leading-relaxed tracking-wide">
              Entrepreneur
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center gap-3 lg:mt-44 font-semibold">
        <RiScrollToBottomLine className="text-xl " />
        <p className="text-[#ffcb05]">Scroll Down</p>
      </div>
    </div>
  );
};

export default Banner;
