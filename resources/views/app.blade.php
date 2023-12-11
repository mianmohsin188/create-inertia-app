<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @viteReactRefresh
        @vite([
        'resources/css/app.css',
        'resources/js/app.jsx',
        'resources/themeAssets/assets/images/favicon.png',
        'resources/themeAssets/assets/libs/flot/css/float-chart.css',
        'resources/themeAssets/dist/css/style.min.css',
        ])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @inertiaHead

    </head>
    <body>
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>

        @inertia
        @vite([
        'resources/themeAssets/assets/libs/jquery/dist/jquery.min.js',
        'resources/themeAssets/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
        'resources/themeAssets/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
        'resources/themeAssets/assets/extra-libs/sparkline/sparkline.js',
        'resources/themeAssets/dist/js/waves.js',
        'resources/themeAssets/dist/js/sidebarmenu.js',
        'resources/themeAssets/dist/js/custom.min.js',
        'resources/themeAssets/assets/libs/flot/excanvas.js',
        'resources/themeAssets/assets/libs/flot/jquery.flot.js',
        'resources/themeAssets/assets/libs/flot/jquery.flot.pie.js',
        'resources/themeAssets/assets/libs/flot/jquery.flot.time.js',
        'resources/themeAssets/assets/libs/flot/jquery.flot.stack.js',
        'resources/themeAssets/assets/libs/flot/jquery.flot.crosshair.js',
        'resources/themeAssets/assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js',
        'resources/themeAssets/dist/js/pages/chart/chart-page-init.js'
        ])
    </body>
</html>
