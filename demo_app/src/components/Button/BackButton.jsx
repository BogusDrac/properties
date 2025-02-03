import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 dark:bg-orange-600 bg-gray-600 text-white rounded-lg dark:hover:bg-orange-700 hover:bg-gray-800 transition-colors"
    >
      Back
    </button>
  );
};

export default BackButton;
