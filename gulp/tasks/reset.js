import del from 'del';

export const reset = () => {
  return del(app.path.clean);
}
export const resetJS = () => {
  return del(app.path.build.js);
}
export const resetImg = () => {
  return del(app.path.build.images);
}