import React, { useState } from "react";
import axios from "axios";

function Posts() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    async function main1() {
        setLoading(true);

        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let data = res.data;

            setComments(data);
            console.log(data); 

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button className="w-[100px] border-4 mx-auto" onClick={main1}>
            Posts
            </button>

            {loading && <p>Loading...</p>}

            <div className="data">
                {comments.map((posts) => (
                    <div key={posts.id} className="box">
                        <h2>Nomi: {posts.name}</h2>
                        <h2>Email: {posts.email}</h2>
                        <p>{posts.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;