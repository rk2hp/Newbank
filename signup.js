import { auth, createUserWithEmailAndPassword } from './firebase.js';

export const renderSignup = () => {
    const signupHTML = `
        <form id="signupForm">
            <h2>Create an account</h2>
            <input type="email" id="signupEmail" placeholder="Email address" required>
            <input type="password" id="signupPassword" placeholder="Password" required>
            <input type="password" id="signupConfirmPassword" placeholder="Confirm password" required>
            <button type="submit">Create account</button>
            <p>Already have an account? <a href="/login" data-link>Sign in</a></p>
        </form>
    `;
    document.getElementById('app').innerHTML = signupHTML;

    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Account created successfully!');
        } catch (error) {
            alert(error.message);
        }
    });
};