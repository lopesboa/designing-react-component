import { useState } from "react";
import { REQUEST_STATUS } from "../../reducers/request";
import SpecialMessageRenderProps from "../RPs/SpecialMessageRenderProps";
import Speaker from "../Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar";

const Speakers = ({ bgColor }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={bgColor}>
      <SpeakerSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <>
        <SpecialMessageRenderProps>
          {({ specialMessage }) => {
            return (
              <Request routeName="speakers">
                {({ records: speakers, status, error, put }) => {
                  const onFavoriteToggleHandler = async (speakerRec) => {
                    put({
                      ...speakerRec,
                      isFavorite: !speakerRec.isFavorite,
                    });
                  };
                  const success = status === REQUEST_STATUS.SUCCESS;
                  const isLoading = status === REQUEST_STATUS.LOADING;
                  const hasErrored = status === REQUEST_STATUS.ERROR;

                  return (
                    <>
                      {specialMessage && specialMessage.length > 0 && (
                        <div
                          className="bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2xl"
                          role="alert"
                        >
                          <p className="font-bold">Special Message</p>
                          <p>{specialMessage}</p>
                        </div>
                      )}

                      {isLoading && <div>Loading...</div>}
                      {hasErrored && (
                        <div>
                          Loading error... Is the json-server running? (try "npm
                          run json-server" at terminal prompt)
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
                                : targetString.includes(
                                    searchQuery.toLowerCase()
                                  );
                            })
                            .map((speaker) => (
                              <Speaker
                                key={speaker.id}
                                {...speaker}
                                onFavoriteToggle={() =>
                                  onFavoriteToggleHandler(speaker)
                                }
                              />
                            ))}
                        </div>
                      )}
                    </>
                  );
                }}
              </Request>
            );
          }}
        </SpecialMessageRenderProps>
      </>
    </div>
  );
};
export default Speakers;
