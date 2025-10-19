import HeroCarousel from "../components/reuse/Carousel/HeroCarousel";
import CourseRegistrationModal from "../components/once/CourseRegistrationModal";
import { useFetchServices } from "../hooks/service/useFetchService";
import { useFetchStaticPages } from "../hooks/staticPages/useFetchStaticPages";
import { useCourseRegistrationModal } from "../hooks/useCourseRegistrationModal";
import { coursesData } from "../data/coursesData";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import CoursesSection from "../components/sections/CoursesSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  const { data: servicesData } = useFetchServices();
  const { data: staticData } = useFetchStaticPages();
  const aboutData = staticData?.find((item) => item.name === "about_us");

  const {
    isModalOpen,
    selectedCourse,
    showError,
    showSuccess,
    isPending,
    error,
    handleOpenModal,
    handleCloseModal,
    handleFormSubmit,
  } = useCourseRegistrationModal();

  return (
    <>
      <HeroCarousel />

      <AboutSection aboutData={aboutData} />

      <ServicesSection servicesData={servicesData} />

      <ProgramsSection />

      <CoursesSection coursesData={coursesData} onRegister={handleOpenModal} />

      <ContactSection />

      {/* Course Registration Modal */}
      <CourseRegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        courseTitle={selectedCourse?.title || ""}
        courseId={selectedCourse?.id}
        courseName={selectedCourse?.name}
        isLoading={isPending}
        onSubmit={handleFormSubmit}
        isError={showError}
        errorMessage={error?.response?.data?.error || ""}
        validationErrors={error?.response?.data?.errors}
        isSuccess={showSuccess}
        successMessage="تم التسجيل في الدورة بنجاح!"
      />
    </>
  );
};

export default Home;
