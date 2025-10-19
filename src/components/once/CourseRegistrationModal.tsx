import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CourseRegistrationModalProps {
  errorMessage?: string;
  isError?: boolean;
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseId?: number;
  courseName?: string;
  isLoading?: boolean;
  validationErrors?: {
    [key: string]: string[];
  };
  isSuccess?: boolean;
  successMessage?: string;
  onSubmit: (formData: {
    name: string;
    phone: string;
    courseId?: number;
    courseTitle?: string;
    courseName?: string;
  }) => void;
}

const CourseRegistrationModal: React.FC<CourseRegistrationModalProps> = ({
  errorMessage,
  isError,
  isOpen,
  onClose,
  courseTitle,
  courseId,
  courseName,
  isLoading = false,
  validationErrors,
  isSuccess,
  successMessage,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  const [countdown, setCountdown] = useState(10);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", phone: "" });
      setErrors({ name: "", phone: "" });
    }
  }, [isOpen]);

  // Handle API validation errors
  useEffect(() => {
    if (validationErrors) {
      const apiErrors = {
        name:
          validationErrors.full_name?.[0] || validationErrors.name?.[0] || "",
        phone:
          validationErrors.phone_number?.[0] ||
          validationErrors.phone?.[0] ||
          "",
      };
      setErrors(apiErrors);
    }
  }, [validationErrors]);

  // Countdown timer for auto-close
  useEffect(() => {
    if (isSuccess) {
      setCountdown(10);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Format Saudi phone number as user types
      let formattedValue = value.replace(/[^\d]/g, ""); // Remove all non-digits

      // Limit to 10 digits (Saudi mobile numbers)
      if (formattedValue.length > 10) {
        formattedValue = formattedValue.substring(0, 10);
      }

      // Add formatting: 05X XXX XXXX
      if (formattedValue.length > 0) {
        if (formattedValue.length <= 3) {
          formattedValue = formattedValue;
        } else if (formattedValue.length <= 6) {
          formattedValue = `${formattedValue.substring(
            0,
            3
          )} ${formattedValue.substring(3)}`;
        } else {
          formattedValue = `${formattedValue.substring(
            0,
            3
          )} ${formattedValue.substring(3, 6)} ${formattedValue.substring(6)}`;
        }
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else {
      // Saudi phone number validation
      const saudiPhoneRegex = /^(\+966|966|0)?(5[0-9]{8})$/;
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");

      if (!saudiPhoneRegex.test(cleanPhone)) {
        newErrors.phone = "يرجى إدخال رقم هاتف سعودي صحيح (مثال: 0512345678)";
      }
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({
        ...formData,
        courseId,
        courseTitle,
        courseName,
      });
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 16, 59, 0.9) 100%)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.5,
            }}
            className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl border border-gray-100"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 cursor-pointer left-4 text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-bold text-[#274185] mb-2">
                تسجيل في الدورة التدريبية
              </h2>
              {courseName && (
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {courseName}
                </p>
              )}
              <p className="text-gray-600 text-sm">{courseTitle}</p>
              {courseId && (
                <p className="text-xs text-gray-500 mt-1">
                  رقم الدورة: {courseId}
                </p>
              )}
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم الكامل *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#274185] transition-all duration-200 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="أدخل اسمك الكامل"
                  dir="rtl"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Phone input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رقم الهاتف السعودي *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 h-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#274185] transition-all duration-200 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="05X XXX XXXX"
                  dir="ltr"
                  maxLength={12}
                  pattern="[0-9\s]*"
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* General error message */}
              {isError && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 border border-red-200 p-3 text-center rounded-lg"
                >
                  <p className="text-red-700 text-sm font-medium">
                    {errorMessage}
                  </p>
                </motion.div>
              )}

              {/* Success message */}
              {isSuccess && successMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-50 border border-green-200 p-3 text-center rounded-lg"
                >
                  <p className="text-green-700 text-sm font-medium">
                    {successMessage}
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    سيتم إغلاق النافذة تلقائياً خلال {countdown} ثانية
                  </p>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex gap-3 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleClose}
                  disabled={isLoading}
                  className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg transition-all duration-200 ${
                    isLoading
                      ? "cursor-not-allowed text-gray-400"
                      : "cursor-pointer text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  إلغاء
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(39, 65, 133, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "cursor-pointer bg-[#274185] text-white hover:bg-[#1f356b]"
                  }`}
                >
                  {isLoading ? "جاري التسجيل..." : "تأكيد التسجيل"}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseRegistrationModal;
