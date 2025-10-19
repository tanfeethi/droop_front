import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import apiClient from "../../utils/apiClient";

interface UseContactForm {
  course_id: number;
  course_name: string;
  price: string;
  price_after_discount: string;
  full_name: string;
  phone_number: string;
}

interface ErrorResponse {
  data: any[];
  status: string;
  error: string;
  errors: {
    [key: string]: string[];
  };
  code: number;
}

const useBookingCourse = () => {
  return useMutation<UseContactForm, AxiosError<ErrorResponse>, UseContactForm>(
    {
      mutationFn: async (payload: UseContactForm) => {
        const response = await apiClient.post("/api/frontend/booking", payload);
        return response.data;
      },
      onSuccess: (data: any) => {
        console.log("success=>", data.message || "Course booking successful");
      },
      onError: (error) => {
        const errorData = error.response?.data;
        if (errorData) {
          console.error("Booking failed:", {
            status: errorData.status,
            error: errorData.error,
            code: errorData.code,
            validationErrors: errorData.errors
          });
        } else {
          console.error("Error sending booking request:", error.message);
        }
      },
    }
  );
};

export default useBookingCourse;
