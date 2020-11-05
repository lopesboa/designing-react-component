import { useState } from "react";
import { REQUEST_STATUS } from "../../reducers/request";
import withRequest from "../HOCs/withRequest";
import Speaker from "../Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar";

const Speakers = ({ records: speakers, status, error, put, bgColor }) => {

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
export default withRequest('speakers')(Speakers);
