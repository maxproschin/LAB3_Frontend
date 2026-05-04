import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetailPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.error(err));

        axios.get(`http://127.0.0.1:8000/posts/${id}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!post) return <h3 style={{ textAlign: 'center' }}>Loading...</h3>;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>⬅ Back to posts</Link>

            <h2 style={{ marginTop: '20px' }}>{post.title}</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{post.content}</p>

            <hr style={{ margin: '30px 0' }} />

            <h3>Comments:</h3>
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                <ul style={{ paddingLeft: '20px' }}>
                    {comments.map(comment => (
                        <li key={comment.id} style={{ marginBottom: '10px' }}>
                            {comment.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostDetailPage;