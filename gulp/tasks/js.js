import webpack from "webpack-stream";
import named from "vinyl-named";

export const js = () => {
  console.log(app.isWp ? app.path.src.jsWp : app.path.src.js);
  return app.gulp
    .src(app.isWp ? app.path.src.jsWp : app.path.src.js, {
      sourcemaps: app.isDev,
    })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.if(app.isWp, named()))
    .pipe(
      app.plugins.if(
        app.isWp,
        webpack({
          mode: "production"
        }),
        webpack({
          mode: app.isBuild ? "production" : "development",
          devtool: "source-map",
          output: {
            filename: "app.min.js",
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
