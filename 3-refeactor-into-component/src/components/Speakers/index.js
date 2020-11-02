import { useEffect, useReducer, useState } from "react";
import {
  GET_ALL_FAILURE,
  GET_ALL_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS
} from "../../actions/request";
import requestReducer, { REQUEST_STATUS } from "../../reducers/request";
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

  const handleOnFavoriteToggle = async (speakerRec) => {
    try {
      const toggleSpeakerRec = {
        ...speakerRec,
        isFavorite: !speakerRec.isFavorite,
      };

      await api.put(`speakers/${speakerRec.id}`, toggleSpeakerRec);
      dispatch({
        type: PUT_SUCCESS,
        record: toggleSpeakerRec,
      });
    } catch (e) {
      dispatch({
        type: PUT_FAILURE,
        error: e,
      });
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  const [{ records: speakers, status, error }, dispatch] = useReducer(
    requestReducer,
    {
      records: [],
      status: REQUEST_STATUS.LOADING,
      error: null,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("speakers");
        dispatch({
          type: GET_ALL_SUCCESS,
          records: response.data,
        });
      } catch (e) {
        console.log("Loading data error", e);
        dispatch({
          type: GET_ALL_FAILURE,
          error: e,
        });
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
