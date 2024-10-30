import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        // Add your password reset logic here
        try {
            // Simulate an API call for password reset
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Assume successful response
                    resolve();
                    // If you want to simulate an error, uncomment the line below:
                    // reject('Error: Unable to send password reset email.');
                }, 2000);
            });

            setSuccessMessage('A password reset link has been sent to your email address.');
        } catch (error) {
            setErrorMessage(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center h-screen bg-cover"
            style={{
                backgroundImage: "url('https://viditrade.com/wp-content/uploads/2022/04/login-pg-img.jpg')",
            }}
        >
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center">Reset Password</h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="rounded-md shadow-sm">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                {successMessage && (
                    <div className="mt-4 text-green-600 text-center">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="mt-4 text-red-600 text-center">
                        {errorMessage}
                    </div>
                )}

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remembered your password?
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
