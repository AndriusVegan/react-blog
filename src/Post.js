import React from 'react';
import './Post.css';

function Post(id, post) {
    return (
        <div className='post'>
            <div className='post__card'>
                <img src={post.imageUrl} alt={post.caption} />

            </div>

            <div className='post__content'> 
                <div className='post__caption'> 
                <div className='post__text'></div>
                 </div>
            </div>
            
        </div>
    )
}

export default Post
