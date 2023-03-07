import { useEffect, useState } from "react"
export default function Posts(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + props.number);
      const json = await res.json();
      setPost(json);
    }

    fetchData();
  }, [props])

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}