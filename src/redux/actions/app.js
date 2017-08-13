export function videoSet(path, imageIndex) {
  return {
    type: 'APP_VIDEO_SET',
    path: path,
    imageIndex: imageIndex
  };
}
