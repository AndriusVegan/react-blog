import React, { useState, useEffect} from 'react';
import './App.css';
import firebase from 'firebase';
import Banner from './components/Banner';
import { db } from './firebase';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
   db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setPosts(snapshot.docs.map(doc => ({
       id:doc.id,
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
    {posts.map(({id, post})=> (
      <Post postId={id} post={post} />
    )
    
    )}


     </div>

  
    </div>
  );
}

export default App;
