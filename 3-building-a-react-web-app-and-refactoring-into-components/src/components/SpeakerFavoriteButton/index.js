const SpeakerFavoriteButton = ({ isFavorite, onFavoriteToggle }) => {
  return (
    <div
      className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={onFavoriteToggle}
    ></div>
  );
};

export default SpeakerFavoriteButton;
