import React, { useState } from "react";
import axios from "axios";

function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    async function main() {
        setLoading(true);

        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
            let data = res.data;

            setComments(data);
            console.log("Kelgan ma'lumotlar:", data); 

        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button className="w-[100px] border-4 mx-auto" onClick={main}>
                Comments
            </button>

            {loading && <p>Loading...</p>}

            <div className="data">
                {comments.map((comment) => (
                    <div key={comment.id} className="box">
                        <h2>Nomi: {comment.name}</h2>
                        <h2>Email: {comment.email}</h2>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;