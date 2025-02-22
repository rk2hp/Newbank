import { renderLogin, renderSignup } from './login.js';

const app = document.getElementById('app');

const routes = {
    '/login': renderLogin,
    '/signup': renderSignup
};

const navigateTo = (path) => {
    window.history.pushState({}, path, window.location.origin + path);
    app.innerHTML = '';
    routes[path]();
};

window.onpopstate = () => {
    app.innerHTML = '';
    routes[window.location.pathname]();
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    navigateTo('/login');
});