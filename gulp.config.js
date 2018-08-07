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
            src: ['./node_modules/jquery/dist/jquery.js',
                './node_modules/popper.js/dist/umd/popper.js',
                './node_modules/bootstrap/dist/js/bootstrap.js',
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
            src: ['./src/html/*.html', './src/html/pages/**/*.html'],
            dest: './dist/',
            watch: ['./src/html/**/*.html']
        },
    };
    return config;
}