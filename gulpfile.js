import gulp from "gulp";

import {path} from './gulp/config/path.js';

import {plugins} from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  isWp: process.argv.includes('--wordpress'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

import {copy} from './gulp/tasks/copy.js'
import {reset, resetJS, resetImg} from './gulp/tasks/reset.js'
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {scss} from './gulp/tasks/scss.js'
import {js} from './gulp/tasks/js.js'
import {images} from './gulp/tasks/images.js'
import {ttfToWoff, otfToTtf, fontsStyle} from './gulp/tasks/fonts.js'

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.series(otfToTtf, ttfToWoff, fontsStyle, gulp.parallel(copy, html, scss, js, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const jsProd = gulp.series(resetJS, js);
const imagesProd = gulp.series(resetImg, images);

export {dev}
export {build}
export {jsProd}
export {imagesProd}

gulp.task('default', dev)
gulp.task('build', build)
gulp.task('js', jsProd)