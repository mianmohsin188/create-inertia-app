// resources/js/app.js
import { createInertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import { InertiaProgress } from '@inertiajs/progress';



// Import your main layout component
import MainLayout from './Layouts/Main.jsx';

// Import the layout component for the login page
import LoginLayout from './Layouts/LoginLayout.jsx';

// Resolve React components from the Pages folder
const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    resolve: (name) => pages[`./Pages/${name}.jsx`]().then((module) => module.default),

    // Define the layout for your pages
    setup({ el, App, props }) {
        // Check if props is defined and has the necessary properties
        const routeName = props?.initialPage?.url;

        // Use the main layout for pages other than login
        const Layout = routeName === '/login' ? LoginLayout : MainLayout;

        return render(
            <React.StrictMode>
                {/* Wrap the App component with the determined layout */}
                <Layout>
                    <App {...props} />
                </Layout>
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
