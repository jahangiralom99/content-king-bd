import { CiLock } from "react-icons/ci";
import { IoIosContract } from "react-icons/io";
import { VscDebugStart } from "react-icons/vsc";

const VideoCourse = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="md:flex-1 p-8 space-y-5">
          <h1 className="text-3xl font-bold">আপনার সাথে আমাদের পথচলা</h1>
          <p className="text-[#ffcb05] text-xl">
            ঝাঁপিয়ে পড়ুন এবং আপনার উদ্যোক্তা মনোভাবকে আলিঙ্গন করুন – আপনার
            আইডিয়াকে বাস্তবে রূপান্তর করার জন্য এখনকার চেয়ে ভাল সময় আর নেই!
          </p>
        </div>
        <div className="md:flex-1 bg-[#F3F3F3] p-6 rounded-lg">
          <div className="text-[#ffcb05]  flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Video Course</h1>
            <p className="font-medium">(8/110)</p>
          </div>
          <div className="mt-4 flex justify-between text-white rounded-lg items-center p-4 bg-[#009b3e]">
            <div className="flex items-center gap-3">
              <VscDebugStart className="text-3xl bg-[#ffcb05] rounded-full p-1 " />
              <h3 className="text-xl font-semibold">Sales Increasing Hacks</h3>
            </div>
            <p className="text-xl font-semibold">45:43</p>
          </div>
          <div className="mt-4 flex justify-between bg-white rounded-lg items-center p-4 ">
            <div className="flex items-center gap-3">
              <CiLock className="text-3xl bg-[#EFF4FC] rounded-full p-1 " />
              <h3 className="text-xl font-semibold">Fruitful content idea</h3>
            </div>
            <p className="text-xl font-semibold">58:00</p>
          </div>
          <div className="mt-4 flex justify-between bg-white rounded-lg items-center p-4">
            <div className="flex items-center gap-3">
              <CiLock className="text-3xl bg-[#EFF4FC] rounded-full p-1 " />
              <h3 className="text-xl font-semibold">Assignment</h3>
            </div>
            <p className="text-xl font-semibold">0:00</p>
          </div>
        </div>
      </div>
      <div className="mt-24 grid lg:grid-cols-3 gap-6 ">
        <div className="flex flex-col  rounded gap-5 bg-[#EFF4FC] p-6">
          <div className="p-5 w-20 rounded bg-[#009b3e]">
            <IoIosContract className="text-4xl text-white " />
          </div>
          <div className="space-y-5">
            <h1 className="text-[#ffcb05] text-2xl font-semibold">
              কোর্স এনরোলমেন্ট
            </h1>
            <p className="font-semibold">
              রেজিস্ট্রেশন করে Enroll Now বাটলে ক্লিক করে পেমেন্ট করুন। দ্রুতই
              কোর্সের এক্সেস পেয়ে যাবেন।
            </p>
          </div>
        </div>
        <div className="flex flex-col  rounded gap-5 bg-[#EFF4FC] p-6">
          <div className="p-5 w-20 rounded bg-[#EE7F50]">
            <IoIosContract className="text-4xl text-white " />
          </div>
          <div className="space-y-5">
            <h1 className="text-[#ffcb05] text-2xl font-semibold">
              অ্যাসাইনমেন্ট
            </h1>
            <p className="font-semibold">
              কোর্সের বিভিন্ন অংশে আমরা অ্যাসাইনমেন্ট জমা দিয়ে নলেজ কে স্কিলে
              রুপান্তর করতে পারবেন
            </p>
          </div>
        </div>
        <div className="flex flex-col  rounded gap-5 bg-[#EFF4FC] p-6">
          <div className="p-5 w-20 rounded bg-[#FFCB06]">
            <IoIosContract className="text-4xl text-white " />
          </div>
          <div className="space-y-5">
            <h1 className="text-[#FFCB06] text-2xl font-semibold">
              সাপোর্টিভ কমিউনিটি
            </h1>
            <p className="font-semibold">
            একটি কমিউনিটিতে যুক্ত করে দেয়া হয়ে; যেখানে মেন্টর সহ সকল স্কিল্ড লার্নারদের সাপোর্ট পাবেন
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCourse;
