import { auth, signInWithEmailAndPassword } from './firebase.js';

export const renderLogin = () => {
    const loginHTML = `
        <form id="loginForm">
            <h2>Welcome back</h2>
            <input type="email" id="loginEmail" placeholder="Email address" required>
            <input type="password" id="loginPassword" placeholder="Password" required>
            <button type="submit">Sign in</button>
            <p>Don't have an account? <a href="/signup" data-link>Sign up</a></p>
        </form>
    `;
    document.getElementById('app').innerHTML = loginHTML;

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
        } catch (error) {
            alert(error.message);
        }
    });
};