import { useNavigate } from "react-router";
import CourseCard from "../../components/reuse/courseCard/CourseCard";
import type { Course } from "../../data/coursesData";
import { getCoursesData } from "../../data/coursesData";
import { useTranslation } from "react-i18next";

interface CoursesSectionProps {
  onRegister: (course: Course) => void;
}

const CoursesSection = ({ onRegister }: CoursesSectionProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  // Get courses data based on current language
  const coursesData = getCoursesData(i18n.language as "ar" | "en");

  return (
    <section className="w-full bg-[#F6F9FF] p-3">
      <div className="w-[98%] m-auto mb-3">
        <h1 className="text-[#274185] text-4xl font-bold mb-3">
          احدث الدورات التدريبية
        </h1>
        <p className="text-2xl font-normal">نص</p>
      </div>
      <div className="w-[98%] m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <CourseCard
              key={course.Accreditation_number}
              {...course}
              onRegister={() => onRegister(course)}
              onDetails={() => navigate("/course", { state: course })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
