import { useEffect, useReducer } from "react";
import {
  GET_ALL_FAILURE,
  GET_ALL_SUCCESS,
  PUT_FAILURE,
  PUT_SUCCESS
} from "../../actions/request";
import requestReducer, { REQUEST_STATUS } from "../../reducers/request";
import { api } from "../../services/api";

const withRequest = (routeName) => (Component) => (props) => {
  const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(routeName);
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
  }, [routeName]);

  const propsLocal = {
    records,
    status,
    error,
    put: async (record) => {
      try {
        await api.put(`${routeName}/${record.id}`, record);
        dispatch({
          type: PUT_SUCCESS,
          record,
        });
      } catch (e) {
        dispatch({
          type: PUT_FAILURE,
          error: e,
        });
      }
    },
  };
  return <Component {...props} {...propsLocal}></Component>;
};

export default withRequest;
