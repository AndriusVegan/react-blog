import React, { useState, useEffect} from 'react';
import './App.css';
import Banner from './components/Banner';
import { db } from './firebase';
import Post from '../components/Post'

function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
   db.collection('posts').orderBy('timestap', 'desc').onSnapshot(snapshot=>{
     setPost(snapshot.docs.map(docs => ({
       id:docs.id,
       post: doc.data()
     })))
   })
    
  }, [])

  return (
    <div className="App">
      <h1> Go Vegan now</h1>
    <Banner />
    <Banner />
    <hr></hr>
    <div className='app__postContainer'>
    {post.map(({id, post})=> (
      <Post postId={id} post={post} />
    )
    
    )}


     </div>

  
    </div>
  );
}

export default App;
