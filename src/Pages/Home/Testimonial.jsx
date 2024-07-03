import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-4">
      <div>
        <div className="text-center">
          <img
            className="inline w-44"
            src="https://i.ibb.co/8sNmQJ1/feedback-01.png"
            alt=""
          />
        </div>
        <p className="text-3xl text-center font-bold">
          দেশ সেরা ই-লার্নিং প্লাটফর্ম কনটেন্ট কিং
        </p>
        <p className="max-w-3xl mx-auto text-center mt-6 text-xl">
          চলুন দেখে নেয়া যাক – কি বলছে আমাদের শিক্ষার্থীরা, যেগুলো দেখে কোর্সে
          ভর্তি হওয়ার সিদ্ধান্ত নিতে আপনাকে সহায়তা করবে
        </p>
        <div className="mt-26">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-3">
                          ফেসবুক মার্কেটিং নিয়ে আরও কমবেশি ৭-৮টা কোর্স করেছি।
                          সকল কোর্স করার পরই, সেখানের তথ্যগুলো আমার বাস্তবিক
                          বাজারের সাথে মিল খুজে পেতাম না। কিন্তু কনটেন্ট কিং
                          কোর্স করার পর আমার সেই অভাবটি পূরণ হয়েছে, বইয়ের তথ্যের
                          মত নয়, একদম বাস্তবিক, আমি যা ফেস করছি, সেগুলোর সমাধানই
                          খুজে পেয়েছি কোর্সটাতে। সাপ্তাহিক লাইভ ক্লাশের প্রতিটা
                          লেসন আমার লাইফে করা যেকোন কোর্স বা ক্লাশের সাথে তুলনা
                          করলে, সেরা ক্লাশ।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/sova-apu.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Fatema Khatun Shova
                            </span>
                            <span className="text-gray-500 text-sm">
                              Chairman at রমণীর রঙ
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-4">
                          অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে
                          আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি,
                          সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার
                          পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে
                          বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক
                          আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার
                          দেখা সবচাইতে সেরা।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/Man.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Tawhidul Islam
                            </span>
                            <span className="text-gray-500 text-sm">
                              Co-Founder at shutkiz.com
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-3">
                          ফেসবুক মার্কেটিং নিয়ে আরও কমবেশি ৭-৮টা কোর্স করেছি।
                          সকল কোর্স করার পরই, সেখানের তথ্যগুলো আমার বাস্তবিক
                          বাজারের সাথে মিল খুজে পেতাম না। কিন্তু কনটেন্ট কিং
                          কোর্স করার পর আমার সেই অভাবটি পূরণ হয়েছে, বইয়ের তথ্যের
                          মত নয়, একদম বাস্তবিক, আমি যা ফেস করছি, সেগুলোর সমাধানই
                          খুজে পেয়েছি কোর্সটাতে। সাপ্তাহিক লাইভ ক্লাশের প্রতিটা
                          লেসন আমার লাইফে করা যেকোন কোর্স বা ক্লাশের সাথে তুলনা
                          করলে, সেরা ক্লাশ।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/sova-apu.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Fatema Khatun Shova
                            </span>
                            <span className="text-gray-500 text-sm">
                              Chairman at রমণীর রঙ
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-4">
                          অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে
                          আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি,
                          সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার
                          পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে
                          বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক
                          আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার
                          দেখা সবচাইতে সেরা।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/Man.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Tawhidul Islam
                            </span>
                            <span className="text-gray-500 text-sm">
                              Co-Founder at shutkiz.com
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-3">
                          ফেসবুক মার্কেটিং নিয়ে আরও কমবেশি ৭-৮টা কোর্স করেছি।
                          সকল কোর্স করার পরই, সেখানের তথ্যগুলো আমার বাস্তবিক
                          বাজারের সাথে মিল খুজে পেতাম না। কিন্তু কনটেন্ট কিং
                          কোর্স করার পর আমার সেই অভাবটি পূরণ হয়েছে, বইয়ের তথ্যের
                          মত নয়, একদম বাস্তবিক, আমি যা ফেস করছি, সেগুলোর সমাধানই
                          খুজে পেয়েছি কোর্সটাতে। সাপ্তাহিক লাইভ ক্লাশের প্রতিটা
                          লেসন আমার লাইফে করা যেকোন কোর্স বা ক্লাশের সাথে তুলনা
                          করলে, সেরা ক্লাশ।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/sova-apu.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Fatema Khatun Shova
                            </span>
                            <span className="text-gray-500 text-sm">
                              Chairman at রমণীর রঙ
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <div className="flex text-[#ffcb05] items-start">
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                          <IoMdStar className="text-2xl" />
                        </div>
                        <p className="leading-relaxed mb-6 mt-4">
                          অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে
                          আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি,
                          সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার
                          পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে
                          বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক
                          আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার
                          দেখা সবচাইতে সেরা।
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="https://www.contentkingbd.com/wp-content/uploads/2023/06/Man.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Tawhidul Islam
                            </span>
                            <span className="text-gray-500 text-sm">
                              Co-Founder at shutkiz.com
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
