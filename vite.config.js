import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/app.js',
                'resources/themeAssets/assets/images/favicon.png',
                'resources/themeAssets/assets/libs/flot/css/float-chart.css',
                'resources/themeAssets/assets/dist/css/style.min.css',
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
            ],
            refresh: true,
        }),
    ],
});
