import { useState } from "react";
import { compose } from 'recompose';
import { REQUEST_STATUS } from "../../reducers/request";
import withRequest from "../HOCs/withRequest";
import withSpecialMessage from "../HOCs/withSpecialMessage";
import Speaker from "../Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar";

const Speakers = ({ records: speakers, status, error, put, bgColor, specialMessage }) => {

  const handleOnFavoriteToggle = async (speakerRec) => {
    put({
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    });
  };

  const [searchQuery, setSearchQuery] = useState("");

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  return (
    <div className={bgColor}>
      <SpeakerSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {specialMessage && specialMessage.length > 0 && (
        <div className="bg-orange-100 border-1-8 borer-orange-500 text-orange-700 p-4 text-2x1" role="alert">
          <p className="font-bold">Special Message</p>
          <p>{specialMessage}</p>
        </div>
      )}
      {isLoading && <div>Loading</div>}
      {hasErrored && (
        <div>
          <p>
            Loading error... Is the server running? (try run the server first)
          </p>
          <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}

      {success && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
          {speakers
            .filter((rec) => {
              const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
              return searchQuery.length === 0
                ? true
                : targetString.includes(searchQuery.toLowerCase());
            })
            .map((speaker) => (
              <Speaker
                key={speaker.id}
                {...speaker}
                onFavoriteToggle={() => handleOnFavoriteToggle(speaker)}
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default compose(
  withRequest('speakers'),
  withSpecialMessage(),
)(Speakers);
