const gulp=require('gulp');
const ts=require('gulp-typescript');
const nodemon=require('gulp-nodemon');

const tsProject=ts.createProject('tsconfig.json');

gulp.task('default',['watch'],()=>{
    const stream=nodemon({
        script:'dist/main.js'
    }).on('restart',()=>{
        console.log('Restarted');
    });          
});

gulp.task('watch',()=>{
    gulp.watch('src/*.ts',['compile']);
});

gulp.task('compile',()=>{
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

