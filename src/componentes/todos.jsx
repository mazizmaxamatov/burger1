import React, { useState } from "react";
import axios from "axios";

function Todos() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    async function main2() {
        setLoading(true);

        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
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
            <button className="w-[100px] border-4 mx-auto" onClick={main2}>
            Todos
            </button>

            {loading && <p>Loading...</p>}

            <div className="data">
                {comments.map((todos) => (
                    <div key={todos.id} className="box">
                        <h2>Nomi: {todos.name}</h2>
                        <h2>Email: {todos.email}</h2>
                        <p>{todos.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todos;