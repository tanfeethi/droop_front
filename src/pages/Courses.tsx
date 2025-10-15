import { useLocation } from "react-router";
import RoundedButtton from "../components/reuse/Buttons/RoundedButtton";
import PagesHeroSection from "../components/reuse/hero/PagesHeroSection";
import { BsClock } from "react-icons/bs";
import { BiAward, BiMapPin, BiTrendingUp } from "react-icons/bi";

export interface ICourse {
  coursePlace: string;
  Accreditation_number: string;
  image: string;
  title: string;
  description: { day: string; topics: string[] }[];
  price: string;
  oldPrice?: string;
  duration: string;
  level: string;
}

const Courses = () => {
  const location = useLocation();
  const courseData = location.state as ICourse;

  return (
    <>
      <PagesHeroSection
        bgImage="/assets/images/imag1.jpg"
        topOverlayColor="rgba(9, 1, 50, 0.52)"
      >
        <RoundedButtton
          children={courseData.title}
          className="bg-white/20 p-3 h-fit"
        />
      </PagesHeroSection>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* Pricing Banner at Top */}
        <div className="mb-12 bg-gradient-to-l from-blue-800 to-blue-900 rounded-2xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-sm font-medium mb-2 opacity-90">
                سعر الدورة التدريبية
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-4">
                {courseData.oldPrice && (
                  <span className="text-2xl line-through opacity-70">
                    {courseData.oldPrice}
                  </span>
                )}
                <span className="text-5xl font-bold">{courseData.price}</span>
                {courseData.oldPrice && (
                  <span className="bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold text-lg">
                    خصم{" "}
                    {Math.round(
                      ((parseFloat(
                        courseData.oldPrice.replace(/[^0-9.]/g, "")
                      ) -
                        parseFloat(courseData.price.replace(/[^0-9.]/g, ""))) /
                        parseFloat(
                          courseData.oldPrice.replace(/[^0-9.]/g, "")
                        )) *
                        100
                    )}
                    %
                  </span>
                )}
              </div>
            </div>
            <button className="bg-white text-blue-700 font-bold text-lg px-12 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-md whitespace-nowrap">
              سجل الأن
            </button>
          </div>
        </div>

        {/* Course Image and Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={courseData.image}
                alt={courseData.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Quick Info Cards - Vertical on Side */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border-r-4 border-blue-500 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <BsClock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">المدة بالايام</p>
                  <p className="font-bold text-gray-900 text-lg">
                    {courseData.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-r-4 border-purple-500 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <BiTrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    عدد الساعات التدريبية
                  </p>
                  <p className="font-bold text-gray-900 text-lg">
                    {courseData.level}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-r-4 border-green-500 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <BiMapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">المكان</p>
                  <p className="font-bold text-gray-900 text-lg">
                    {courseData.coursePlace}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-r-4 border-amber-500 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <BiAward className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">رقم الاعتماد</p>
                  <p className="font-bold text-gray-900 text-base leading-tight">
                    {courseData.Accreditation_number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Description - Full Width */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 inline-block">
            محتوى الدورة التدريبية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {courseData.description.map((day, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-bold text-lg text-blue-700 mb-4 pb-2 border-b border-blue-200">
                  {day.day}
                </h4>
                <ul className="space-y-2">
                  {day.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <span className="text-blue-500 font-bold mt-0.5">→</span>
                      <span className="leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
