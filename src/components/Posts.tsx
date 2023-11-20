"use client"
import React from 'react'
import Post from './Post'
import { usePostsStore } from '@/store/Posts'

const Posts = () => {

    const { posts } = usePostsStore()

    return (
        <div className='container flex justify-center items-center flex-col'>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    )
}

export default Posts