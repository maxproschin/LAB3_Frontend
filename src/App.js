import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <nav style={{ padding: '15px', background: '#282c34', marginBottom: '20px' }}>
                    <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>🏠 Home</Link>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>🔑 Login</Link>
                </nav>

                <div style={{ padding: '0 20px' }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/post/:id" element={<PostDetailPage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;