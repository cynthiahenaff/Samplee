const initialState = {
  video0: null,
  video1: null,
  video2: null,
  video3: null
};

const app = (state = initialState, action) => {
  switch (action.type) {

    case 'APP_VIDEO_SET_0':
      return Object.assign({}, state, {
        video0: action.path
      });

    case 'APP_VIDEO_SET_1':
      return Object.assign({}, state, {
        video1: action.path
      });

    case 'APP_VIDEO_SET_2':
      return Object.assign({}, state, {
        video2: action.path
      });

    case 'APP_VIDEO_SET_3':
      return Object.assign({}, state, {
        video3: action.path
      });


    default:
      return state;
  }
};

export default app;
