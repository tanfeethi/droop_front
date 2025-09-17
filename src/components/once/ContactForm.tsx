import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { IoIosArrowBack } from "react-icons/io";
import useContactForm from "../../hooks/contactus/useContactForm";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// ✅ Props for dynamic styles
interface ContactFormProps {
  labelColor?: string; // Example: "text-black" or "text-white"
  inputBg?: string; // Example: "bg-gray-100"
  buttonBg?: string; // Example: "bg-blue-600"
  buttonHoverBg?: string; // Example: "hover:bg-blue-700"
  buttonTextColor?: string; // Example: "text-white"
  buttonWidth?: string;
  buttonExtraClasses?: string;
}

const ContactForm = ({
  labelColor = "text-white",
  inputBg = "bg-white",
  buttonBg = "bg-[#273E8A]",
  buttonHoverBg = "hover:bg-[#1e326f]",
  buttonTextColor = "text-white",
  buttonWidth = "w-full",
  buttonExtraClasses = "",
}: ContactFormProps) => {
  const { mutate, isSuccess, isError, error } = useContactForm();
  const [form, setForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): ContactFormErrors => {
    let newErrors: ContactFormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "الاسم الاول مطلوب";
    if (!form.lastName.trim()) newErrors.lastName = "الاسم الاخير مطلوب";

    if (!form.email.trim()) {
      newErrors.email = "الايميل مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "الايميل غير صحيح";
    }

    if (!/^[0-9]{8,12}$/.test(form.phone))
      newErrors.phone = "رقم الهاتف غير صحيح";

    if (!form.message.trim() || form.message.length < 10)
      newErrors.message = "الرسالة يجب أن تحتوي على 10 أحرف على الأقل";

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // ✅ Transform to API structure
    const payload = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      subject: "Contact Form Submission", // or a field if you want subject input
      massage: form.message, // notice your API expects "massage"
    };

    mutate(payload, {
      onSuccess: () => {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <form className="w-full" onSubmit={handleSubmit}>
        {/* First + Last Name */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full">
            <label className={`${labelColor} font-medium mb-1`}>
              الاسم الاول <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              placeholder="اكتب اسمك الاول"
              className={`p-4 rounded-md border ${inputBg} text-[#585858C9] border-gray-300 outline-none focus:border-blue-400`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label className={`${labelColor} font-medium mb-1`}>
              الاسم الاخير <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              placeholder="اكتب اسمك الاخير"
              className={`p-4 rounded-md border ${inputBg} text-[#585858C9] border-gray-300 outline-none focus:border-blue-400`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className={`${labelColor} font-medium mb-1`}>
            البريد الاليكتروني <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="info@******"
            className={`p-4 rounded-md border ${inputBg} text-[#585858C9] border-gray-300 outline-none focus:border-blue-400`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col mb-4">
          <label className={`${labelColor} font-medium mb-1`}>
            رقم التواصل <span className="text-red-500">*</span>
          </label>
          <div className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border-gray-300 transition-colors duration-200">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="5XXXXXXXX"
              className={`flex-1 px-4 py-3 outline-none ${inputBg} text-gray-700 placeholder-gray-400 focus:bg-gray-50 transition-colors duration-200`}
            />
            <div className="border-r-2 border-gray-200">
              <select className="h-full px-3 py-3 text-gray-700 text-sm bg-white hover:bg-gray-50 focus:bg-gray-50 outline-none cursor-pointer transition-colors duration-200 min-w-[100px]">
                <option className="text-gray-700 bg-white" value="+966">
                  🇸🇦 +966
                </option>
              </select>
            </div>
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col mb-6">
          <label className={`${labelColor} font-medium mb-1`}>
            رسالتك <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="اكتب رسالتك"
            rows={4}
            className={`p-4 rounded-md border ${inputBg} text-[#585858C9] border-gray-300 outline-none focus:border-blue-400`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`${buttonWidth} ${buttonBg} ${buttonHoverBg} ${buttonTextColor} ${buttonExtraClasses} font-medium py-3 rounded-md transition cursor-pointer flex items-center`}
        >
          ارسال
          <IoIosArrowBack />
        </button>
        {isSuccess && (
          <div className="bg-green-200 p-3 mt-5 text-center rounded-lg text-green-900">
            تم استلام رسالتك
          </div>
        )}
        {isError && (
          <div className="bg-red-200 p-3 mt-5 text-center rounded-lg text-red-900">
            {error.response?.data.error || "حدث خطأ ما"}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
