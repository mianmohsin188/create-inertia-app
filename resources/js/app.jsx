import { createInertiaApp } from '@inertiajs/inertia-react';
import { render } from 'react-dom';
import { InertiaProgress } from '@inertiajs/progress';
import React from "react";



// Resolve React components from the Pages folder
const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    resolve: (name) => pages[`./Pages/${name}.jsx`]().then((module) => module.default),

    // Define the layout for your pages
    setup({ el, App, props }) {
        const auth = props?.initialPage?.props?.auth;
        const routeName = props?.initialPage?.url;

        if ( auth?.user) {
            // Redirect to dashboard if the user is authenticated;
            if (routeName == '/login') {
                window.location.href = '/dashboard';
            }
        }

        return render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>,
            el
        );
    },
});

// Initialize InertiaProgress
InertiaProgress.init({
    color: '#4B5563',
    showSpinner: true,
});
