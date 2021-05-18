const mix = require('laravel-mix');
require('laravel-mix-serve');

mix.serve();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .sass('resources/sass/app.scss', 'public/css')
    // Home
    .sass('resources/sass/views/home/index.scss', 'public/css/home')
    // Product
    .sass('resources/sass/views/product/index.scss', 'public/css/product')