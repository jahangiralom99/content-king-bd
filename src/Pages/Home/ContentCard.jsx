import { VscDebugStart } from "react-icons/vsc";
import img from "../../assets/Symbols_Act-4-Good.png";
import { FaUsers } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
const ContentCard = () => {
  const data = [
    {
      id: 1,
      name: "Content King Professional",
      description:
        "অনলাইন উদ্যোক্তাদের জন্য একটি অন্তর্জাতিক মানের একটি কোর্স যেখানে  কনটেন্ট ডেভেলপমেন্টের পাশাপাশি শেখানো হবে ফেসবুক মার্কেটিং এর Exclusive সব ট্রিকস!",
      lesson: 30,
      student: 700,
      price: 4000,
      image: "https://i.ibb.co/tKCqQJY/Content-king-course-1.jpg",
    },
    {
      id: 2,
      name: "Sales Growth Foundation",
      description:
        "প্রোপার প্ল্যানিং এবং সেলস এর ফান্ডামেন্টাল না জেনে সেলস করে সাস্টেইন করা প্রায় অসম্ভভব। অনলাইন উদ্যোক্তাদের বিজনেস সেলস বাড়াতে এবং ফাউন্ডেশন স্ট্রং করতেই এই কোর্স।",
      lesson: 10,
      student: 78,
      price: 1000,
      image:
        "https://i.ibb.co/B4D4D0w/sales-growth-foundation-content-king.jpg",
    },
    {
      id: 3,
      name: "Facebook Ads Mastermind",
      description:
        "ইফেক্টিভ এড রান করার জন্য শুরু থেকে যা কিছু জানার প্রয়োজন Customer journey map, Strategy, data analysis এবং Facebook marketing এর সকল টুলস সম্বন্ধে জানতে পারবেন এই কোর্সে!",
      lesson: 70,
      student: 37,
      price: 3500,
      image: "https://i.ibb.co/dJ9my1H/abul-kalam-thumbnail-2-update.jpg",
    },
  ];
  return (
    <div className="bg-[#eff4fc]">
      <div className="max-w-screen-xl mx-auto px-4 mt-24 pb-24 ">
        <div className="pt-24">
          <img className="w-24 mx-auto" src={img} alt="" />
          <h1 className="max-w-4xl mx-auto text-4xl font-semibold text-center mt-6 tracking-wide">
            এই প্রতিযোগিতার যুগে সবাইকে ছাপিয়ে যাওয়ার এখনি সময়
          </h1>
          <p className="max-w-6xl mx-auto mt-8 text-center text-2xl font-medium tracking-wide">
            ঝাঁপিয়ে পড়ুন এবং আপনার উদ্যোক্তা মনোভাবকে আলিঙ্গন করুন – আপনার
            আইডিয়াকে বাস্তবে রূপান্তর করার জন্য এখনকার চেয়ে ভাল সময় আর নেই!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div className="bg-white p-5 rounded space-y-5" key={item.id}>
              <img
                className="lg:h-[250px] rounded-lg  w-full object-cover"
                src={item.image}
                alt=""
              />
              <p className="flex gap-4">
                <span className="text-red-600 font-bold text-3xl line-through">
                  10,00/-
                </span>
                <span className="text-[#1CAB55] font-bold text-3xl">
                  {item.price}/-
                </span>
              </p>
              <h2 className="text-2xl font-medium">{item.name}</h2>
              <p className="text-[#8B8A99]">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <VscDebugStart className="text-3xl bg-[#ffcb05] rounded-full p-1 " />
                  <p className="font-semibold">{item.lesson} + Lesson</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-3xl bg-[#ffcb05] rounded-full p-1 " />
                  <p className="font-semibold">{item.student} Student</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p>4.9</p>
                  <div className="flex">
                    <IoIosStar className="text-[#ffcb05]" />
                    <IoIosStar className="text-[#ffcb05]" />
                    <IoIosStar className="text-[#ffcb05]" />
                    <IoIosStar className="text-[#ffcb05]" />
                    <IoIosStar className="text-[#ffcb05]" />
                  </div>
                </div>
                <div>
                  <button className="px-6 hover:bg-[#ffcb05] py-2 bg-[#009b3e] rounded font-bold text-white ">
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
