import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts?page=${page}&limit=5`)
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error loading posts:", error));
    }, [page]);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '20px' }}>
            <h2>Latest Posts</h2>

            {posts.map(post => (
                <div key={post.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
                    <h3>
                        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                            {post.title}
                        </Link>
                    </h3>
                    <p>{post.content}</p>
                </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button onClick={() => setPage(page - 1)} disabled={page === 1} style={{ padding: '8px' }}>
                    ⬅ Previous
                </button>
                <span>Page {page}</span>
                <button onClick={() => setPage(page + 1)} style={{ padding: '8px' }}>
                    Next ➡
                </button>
            </div>
        </div>
    );
};

export default HomePage;