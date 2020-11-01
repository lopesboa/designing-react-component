import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Speaker from "../Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar";
// import swr from 'swr';
const Speakers = () => {
  function handleToggleSpeakerFavorite(speakerRec) {
    return {
      ...speakerRec,
      isFavorite: !speakerRec.isFavorite,
    };
  }

  async function handleOnFavoriteToggle(speakerRec) {
    const toggleSpeakerRec = handleToggleSpeakerFavorite(speakerRec);
    const speakerIndex = speakers
      .map((speaker) => speaker.id)
      .indexOf(speakerRec.id);
    try {
      await api.put(`speakers/${speakerRec.id}`, toggleSpeakerRec);
      setSpeakers([
        ...speakers.slice(0, speakerIndex),
        toggleSpeakerRec,
        ...speakers.slice(speakerIndex + 1),
      ]);
    } catch (error) {
      setStatus(REQUEST_STATUS.ERROR);
      setError(error);
    }
  }

  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [speakers, setSpeakers] = useState([]);
  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("speakers");
        setSpeakers(response.data);
        setStatus(REQUEST_STATUS.SUCCESS);
      } catch (error) {
        setStatus(REQUEST_STATUS.ERROR);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  return (
    <div>
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
export default Speakers;
