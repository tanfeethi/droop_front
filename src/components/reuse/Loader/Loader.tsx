import React, { useEffect, type ReactNode } from "react";

interface FullScreenLoaderProps {
  message?: ReactNode;
  subMessage?: ReactNode;
  showLogo?: boolean;
}

const FullScreenLoader = ({
  message = "جارٍ التحميل...",
  subMessage = "يرجى الانتظار قليلاً",
  showLogo = true,
}: FullScreenLoaderProps) => {
  return (
    <div className="min-h-screen absolute w-full flex items-center justify-center z-50 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-300 rounded-full transform -translate-y-1/2"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-2 h-32 bg-white opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-2 h-24 bg-blue-300 opacity-30 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-20 bg-white opacity-15 transform rotate-75"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo/Brand Area */}
        {showLogo && (
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              {/* Stylized logo placeholder inspired by the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-800">د</div>
              </div>
            </div>
            <div className="text-white text-lg font-semibold mb-2">
              مركز دروب المستقبل للتدريب والاستشارات
            </div>
            <div className="text-blue-200 text-sm">
              منصة رائدة ومتخصصة في تطوير الكفاءات البشرية
            </div>
          </div>
        )}

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-16 h-16 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-blue-300 border-t-orange-400 rounded-full animate-spin"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-orange-400 rounded-full animate-pulse opacity-80"></div>
            {/* Center dot */}
            <div className="absolute inset-6 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">{message}</h2>
          <p className="text-blue-200 text-lg">{subMessage}</p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8">
          <div className="w-64 h-1 bg-blue-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loader = () => {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [currentDemo, setCurrentDemo] = React.useState(0);

  const demos = [
    {
      component: <FullScreenLoader />,
      title: "التصميم الأساسي",
    },
    {
      component: (
        <FullScreenLoader
          message="جاري تجهيز موقعك..."
          subMessage="يتم إعداد تجربتك التعليمية المخصصة"
          showLogo={true}
        />
      ),
      title: "تحميل موقعك",
    },
    {
      component: (
        <FullScreenLoader
          message="جاري تحميل الدورات التدريبية..."
          subMessage="يتم إعداد المحتوى التعليمي"
          showLogo={false}
        />
      ),
      title: "تحميل المحتوى",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className="relative">{demos[currentDemo].component}</div>;
};

export default Loader;
