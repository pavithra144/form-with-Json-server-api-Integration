
import axios from 'axios';
import React, { useEffect, useState } from "react";
// import axios from "axios";

function Post() {
    const [getPost, setPost] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setLoading(false)
            setPost(response.data)
        }).catch((err) => {
            setLoading(false)
            setError(err)
        });
    }, []);

    return (
        <>
            {loading ? <> loading...</> : getPost.map((item) => (
                <div>
                    <p>{item.title}</p>
                </div>))}
        </>
    )
}

export default Post;