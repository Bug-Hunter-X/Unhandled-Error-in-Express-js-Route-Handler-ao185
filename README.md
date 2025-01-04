# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  missing error handling for invalid input.

The `bug.js` file shows a route handler that attempts to find a user by ID. It fails to handle cases where the ID is not a number or when the user is not found, resulting in a server error.

The `bugSolution.js` file provides a corrected version with proper error handling using `parseInt` for type conversion and `try...catch` for potential errors during this process and a check for a non-existent user. 