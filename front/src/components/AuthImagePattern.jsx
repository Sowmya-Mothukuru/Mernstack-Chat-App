const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center relative bg-blue-200 overflow-hidden">
      {/* Pattern background using CSS */}
      <div className="absolute inset-0 bg-white bg-[radial-gradient(circle,_#cbd5e1_1px,_transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

      {/* Text content on top of pattern */}
      <div className="relative z-10 text-center max-w-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
