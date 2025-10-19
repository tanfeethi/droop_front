import { useState, useEffect } from "react";
import useBookingCourse from "./bookCourse/useBookingCourse";

export interface SelectedCourse {
  id: number;
  title: string;
  name?: string;
  price?: string;
  oldPrice?: string;
}

export interface FormData {
  name: string;
  phone: string;
  courseId?: number;
  courseTitle?: string;
  courseName?: string;
}

export const useCourseRegistrationModal = () => {
  const { mutate, isPending, isError, error, isSuccess } = useBookingCourse();

  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<SelectedCourse | null>(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Modal handlers
  const handleOpenModal = (course: SelectedCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    setShowError(false);
    setShowSuccess(false);
  };

  // Show error when mutation fails
  useEffect(() => {
    if (isError) {
      setShowError(true);
    }
  }, [isError]);

  // Show success when mutation succeeds
  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
    }
  }, [isSuccess]);

  // Auto-close modal after 10 seconds when successful
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleFormSubmit = (formData: FormData) => {
    mutate({
      course_id: formData.courseId || 0,
      course_name: formData.courseTitle || "",
      price: selectedCourse?.price || "",
      price_after_discount: selectedCourse?.oldPrice || "",
      full_name: formData.name,
      phone_number: formData.phone,
    });
  };

  return {
    isModalOpen,
    selectedCourse,
    showError,
    showSuccess,
    isPending,
    error,
    handleOpenModal,
    handleCloseModal,
    handleFormSubmit,
  };
};
