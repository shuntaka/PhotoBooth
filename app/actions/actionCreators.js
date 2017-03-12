export function scoreFetchDataSuccess(score) {
  return {
    type: 'SCORE_FETCH_DATA_SUCCESS',
    score,
  };
}

export function scoreIsLoading(bool) {
  return {
    type: 'SCORE_IS_LOADING',
    isLoading: bool,
  };
}

export function scoreFetchData(url) {
  return (dispatch) => {
    dispatch(scoreIsLoading(true));

    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(scoreIsLoading(false));

      return response;
    })
    .then((response) => response.json())
    .then((score) => dispatch(scoreFetchDataSuccess(score)))
    .catch(() => dispatch(scoreHasErrored(true)));
    };
}
