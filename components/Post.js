import React from 'react';
import './Post.css';

function Post(id, post) {
    return (
        <div className='post'>
            <div className='post__card'>
                <img className='post_image' src={post.imageUrl} alt={post.caption} />

            </div>

            <div className='post__content'> 
                <div className='post__caption'> 
                    <h1>{post.caption}</h1>
                </div>
                <div className='post__text'>
                    {post.text}
                </div>
                
            </div>
            
        </div>
    )
}

export default Post
