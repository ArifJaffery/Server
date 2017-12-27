const gulp=require('gulp');
const ts=require('gulp-typescript');
const nodemon=require('gulp-nodemon');
const uglify=require('gulp-uglify');

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
    gulp.watch('dist/js/*.js',['minify']);
});

gulp.task('compile',()=>{
    console.log('Compiling');
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist/js"));
});

gulp.task('minify',()=>{
    console.log('Minifying');    
    gulp.src("dist/js/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
});
