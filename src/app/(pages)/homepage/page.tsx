import React from 'react'
import Posts from '@/components/Posts';
import CreatePost from '@/components/CreatePost';

const page = () => {
    return (
        <div>
            <h1 className='text-center my-3 text-4xl'>Zustad State Management Demo</h1>
            <div className="createPost">
                <CreatePost />
            </div>
            <div className="allPosts">
                <Posts />
            </div>
        </div>
    )
}

export default page