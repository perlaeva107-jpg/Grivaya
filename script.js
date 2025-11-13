document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.wrapper form');
    const usernameInput = document.querySelector('.input-box input[type="text"]');
    const passwordInput = document.querySelector('.input-box input[type="password"]');
    
    // --- Define Your Specific Credentials ---
    
    // 1. Your Account Details
    const YOUR_USERNAME = 'Griffin'; // <<< CHANGE THIS TO YOUR USERNAME
    
    // 2. Your Friend's Account Details
    const FRIEND_USERNAME = 'Rivay'; // <<< CHANGE THIS TO YOUR FRIEND'S USERNAME
    
    // 3. The Shared Secret Password (This must be the same for both)
    const SHARED_PASSWORD = 'Grivaya'; // <<< CHANGE THIS TO YOUR SHARED PASSWORD

    // --- Add event listener for form submission ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === "" || enteredPassword === "") {
            alert('Please enter both username and password.');
            return;
        }

        let loginSuccess = false;
        let loginUser = '';

        // --- Check for Your Credentials ---
        if (enteredUsername === YOUR_USERNAME && enteredPassword === SHARED_PASSWORD) {
            loginSuccess = true;
            loginUser = YOUR_USERNAME;
        } 
        // --- Check for Your Friend's Credentials ---
        else if (enteredUsername === FRIEND_USERNAME && enteredPassword === SHARED_PASSWORD) {
            loginSuccess = true;
            loginUser = FRIEND_USERNAME;
        }
        
        // --- Handle Result ---
        if (loginSuccess) {
            alert(`Login Successful! Welcome, ${loginUser}!\n\nYou can now access the messaging app.`);
            // In a real app, you would redirect here: window.location.href = '/app';
        } else {
            // FAILURE: Show error message, showing what they typed
            alert(`Login Failed: Credentials incorrect.\n\nYou Entered:\nUsername: ${enteredUsername}\nPassword: ${enteredPassword}`);
            
            // Clear the password field on failure
            passwordInput.value = '';
        }
    });
});