export function score(state = null, action) {
  switch (action.type) {
    case 'SCORE_FETCH_DATA_SUCCESS':
      return action.score;
    default:
      return state;
  }
}

export function scoreIsLoading(state = false, action) {
  switch (action.type) {
    case 'SCORE_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
