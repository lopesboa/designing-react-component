const SpeakerFavoriteButton = ({ isFavorite }) => (
  <div className={isFavorite ? "heartredbutton" : "heartdarkbutton"}></div>
);

export default SpeakerFavoriteButton;
