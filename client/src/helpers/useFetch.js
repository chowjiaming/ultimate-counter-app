import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    let response;
    const callAPI = async url => {
      try {
        response = await fetch(url);
        response = await response.text();
      } catch (error) {
        console.log(error);
        setState({ data: error, loading: false });
      }
      if (isCurrent.current) setState({ data: response, loading: false });
    };
    callAPI(url);
  }, [url, setState]);

  return state;
};
