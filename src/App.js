import React from 'react';
import './App.css';
import Banner from './Banner';
import { db } from './firebase';
import Post from './Post'

function App() {
  const [posts, setPost] = useState([])

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
    <div className='app__poastContainer'>
      {posts.map({id, post}) =>{
        
      }
      <Post postid />
      }

     </div>

  
    </div>
  );
}

export default App;
