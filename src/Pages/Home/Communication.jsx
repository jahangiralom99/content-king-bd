const Communication = () => {
  return (
    <div>
      <div className="mt-24 flex max-w-screen-xl mx-auto px-4 relative z-20 items-center overflow-hidden">
        <div className="container  mx-auto px-6 flex flex-col gap-6 md:flex-row relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <h1 className="font-bebas-neue uppercase text-4xl font-black flex flex-col leading-none">
              কেন কন্টেন্ট কিং প্ল্যাটফর্মে
            </h1>
            <h1 className="text-[#ffcb05] text-3xl mt-5">কোর্স করবেন?</h1>
            <p className=" mt-4 sm:text-base ">
              বাংলাদেশের প্রথম ই-লার্নিং প্ল্যাটফর্ম যেখানে কোর্স করেই ছেড়ে দেয়া
              হয় না; বরং, কোর্স করানোর পাশাপাশি লার্নারদের এসাইনমেন্ট দিয়ে সেই
              বিষয়ে দক্ষ করে গড়ে তোলা হয়। কারণ কনটেন্ট কিং বিশ্বাস করে স্কিল
              ছাড়া নলেজ মূল্যহীন।
            </p>
            <p className="mt-4">
              এছাড়াও আমরা সকল শিক্ষার্থীদের মধ্যে একটা কমিউনিটি তৈরি করে দেই
              যেটা পার্সোনাল এবং প্রফেশনাল লাইফে নিজেকে গ্রো করতে অভাবনিয় ভূমিকা
              রাখে।
            </p>
            <div className="flex items-center justify-center mt-8">
            <button className="px-6 bg-[#ffcb05] py-4 hover:text-black rounded font-bold text-white ">
                যোগাযোগ
              </button>
            </div>
          </div>
          <div className="block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://i.ibb.co/2kvsZPp/ekram-boss.jpg"
              className="max-w-xs md:max-w-sm m-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
