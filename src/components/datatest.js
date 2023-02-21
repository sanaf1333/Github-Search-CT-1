import React, {useState, useEffect} from "react"
import axios from "axios";
const ShowPosts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users'); 
                setPosts(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return <div>{posts}</div>
}
export default ShowPosts;