const ShowMoreButton = ({ isExpanded, toggleExpand, label }) => {
    return (
      <button
        onClick={toggleExpand}
        className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg 
          hover:bg-orange-700 transition-all duration-300"
      >
        {isExpanded ? `Show Less ${label}` : `Show More ${label}`}
      </button>
    );
  };

export default ShowMoreButton;