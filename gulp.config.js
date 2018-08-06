module.exports = function () {
    var config = {
        app: 'Front',
        dist: './dist/',
        src: './src/',
        sass: {
            src: ['src/sass/*.scss'],
            dest: './dist/css/',
            output: 'styles.css',
            watch: ['./src/sass/**/*.scss']
        },
        js: {
            src: ['./src/js/!(vendor)**/!(app)*.js',
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/popper.js/dist/popper.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './node_modules/babel-polyfill/dist/polyfill.js',
                './src/js/app.js'],
            dest: './dist/js/',
            output: 'scripts.js',
            watch: ['./src/js/**/*.js']
        },
        img: {
            src: './src/images/**',
            dest: './dist/images/',
            watch: ['./src/images/**']
        },
        html: {
            src: './src/html/*.html',
            dest: './dist/',
            watch: ['./src/html/**/*.html']
        },
    };
    return config;
}