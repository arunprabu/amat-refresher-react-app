import React, { useEffect, useState } from "react";

const Blog = () => {
  console.log("1. Program Started");
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts ] = useState([]);
  const [topicName, setTopicName] = useState('React Hooks Demo');

  useEffect(() => {
    // Will be called after initial rendering
    // ideal place for us to hit the rest api
    // alternative to componentDidMount of class comp
    // alternative to shouldComponentUpdate, componentDidUpdate of Class Comp

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then( (res) => {
        console.log(res);
        return res.json(); 
      })
      .then((resInJSON) => {
        console.log(resInJSON);
        setPosts(resInJSON);
        setIsLoading(false);
      })
      .catch( (err) => {
        console.log(err)
      })
      .finally( () => {
        console.log('It is over!');
      })

    console.log('3. Inside useEffect');
  }, [ topicName ]); // dep
  // dep is optional 

  console.log("2. Before Return");

  let postList = null;
  if(posts?.length > 0) {
    postList = posts.map( ( {id, title, body}) => {
      return(
        <div key={id}>
          <h5>{title}</h5>
          <p>{body}</p>
        </div>
      )
    })  
  }
  
  return (
    <div>
      <h4>Blog</h4>
      <div className="alert alert-info">We are learning: {topicName}</div>
      <button type="button" className="btn btn-info btn-sm"
      onClick={ () => {
        setTopicName('useEffect Hook Demo');
      }}>Change Topic Name to useEffect Hook</button>

      {isLoading ? (
        <div className="spinner-border text-success" role="status"></div>
      ) : (
        postList
      )}
    </div>
  );
};

export default Blog;
