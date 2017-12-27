const gulp=require('gulp');
const ts=require('gulp-typescript');

const tsProject=ts.createProject('tsconfig.json');

gulp.task('default',['watch']);

gulp.task('watch',()=>{
    gulp.watch('src/*.ts',['compile']);
});

gulp.task('compile',()=>{
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

