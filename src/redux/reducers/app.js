const initialState = {
  videos: new Array(4).fill(null)
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case 'APP_VIDEO_SET':
      return Object.assign({}, state, {
        videos: state.videos.map((video, index) => {
          if (index === action.imageIndex) {
            return action.path;
          }
          return video;
        })
      });

    default:
      return state;
  }
};

export default app;
