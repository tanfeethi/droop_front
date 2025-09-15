import WrapperContainer from "../reuse/WrapperContainer";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <WrapperContainer>
        <form className="w-full ">
          {/* First + Last Name */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label className="text-white font-medium mb-1">
                الاسم الاول <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك الاول"
                className="p-3 rounded-md border border-gray-300 outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white font-medium mb-1">
                الاسم الاخير <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك الاخير"
                className="p-3 rounded-md border border-gray-300 outline-none focus:border-blue-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="text-white font-medium mb-1">
              إيميلك <span className="text-white text-sm">(اختياري)</span>
            </label>
            <input
              type="email"
              placeholder="info@******"
              className="p-3 rounded-md border border-gray-300 outline-none focus:border-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col mb-4">
            <label className="text-white font-medium mb-1">
              رقم التواصل <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-5">
              <input
                type="tel"
                placeholder="5XXXXXXXX"
                className="w-full p-3 outline-none"
              />
              <select
                className=" text-white text-sm px-3 py-2 outline-none"
                defaultValue="+966"
              >
                <option className="text-black" value="+966">
                  🇸🇦 +966
                </option>
                <option className="text-black" value="+20">
                  🇪🇬 +20
                </option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col mb-6">
            <label className="text-white font-medium mb-1">
              رسالتك <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="اكتب رسالتك"
              rows={4}
              className="p-3 rounded-md border border-gray-300 outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#273E8A] text-white font-medium py-3 rounded-md hover:bg-[#1e326f] transition"
          >
            ارسال
          </button>
        </form>
      </WrapperContainer>
    </div>
  );
};

export default ContactForm;
