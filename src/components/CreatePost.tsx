"use client"
import React, { useState } from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";
import { usePostsStore } from '@/store/Posts';


const CreatePost = () => {

    const { addPost } = usePostsStore();

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handlePost = () => {
        if (!title && !description) return alert("Title and description is required")

        const newPost = {
            id: Date.now(),
            title,
            description
        }

        addPost(newPost)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-[400px] my-2 container flex justify-center items-center flex-col border-2 p-2 rounded-xl border-gray-500">
            <h1>Create Post</h1>
            <Input type="text" label="Title" className="w-full" value={title} onValueChange={setTitle} />
            <Textarea
                label="Description"
                placeholder="Enter your description"
                className="w-full my-3"
                value={description}
                onValueChange={setDescription}
            />
            <Button color="success" className='w-full' onClick={handlePost}>
                Create
            </Button>
        </div>
    )
}

export default CreatePost