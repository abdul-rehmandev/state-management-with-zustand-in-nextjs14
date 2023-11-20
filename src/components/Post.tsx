"use client"
import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Divider, Button, CardHeader, Input, Textarea } from "@nextui-org/react";
import { usePostsStore } from '@/store/Posts';

interface PostPropsTypes {
    post: PostTypes
}

const Post = ({ post }: PostPropsTypes) => {

    const { editPost, deletePost } = usePostsStore()

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(post.title)
    const [description, setDescription] = useState<string>(post.description)

    const handleEditPost = (id: number) => {
        const updatedPost = {
            id: post.id,
            title,
            description
        }

        editPost(post.id, updatedPost)
        setIsEdit(false)
    }

    const handleDeletePost = (id: number) => {
        deletePost(id)
    }

    return (
        <Card className="min-w-[400px] my-2">
            <CardHeader>
                {isEdit ? (
                    <Input type="text" label="Title" placeholder={post.title} className="w-full" value={title} onValueChange={setTitle} />
                ) : (
                    <p>{post.title}</p>
                )}
            </CardHeader>
            <Divider />
            <CardBody>
                {isEdit ? (
                    <Textarea
                        label="Description"
                        placeholder={post.description}
                        className="w-full my-3"
                        value={description}
                        onValueChange={setDescription}
                    />
                ) : (
                    <p>{post.description}</p>
                )}
            </CardBody>
            <Divider />
            <CardFooter className='flex justify-around'>
                {isEdit ? (
                    <Button color="success" onClick={() => handleEditPost(post.id)}>Update</Button>
                ) : (
                    <Button color="primary" onClick={() => setIsEdit(!isEdit)}>Edit</Button>
                )}
                <Button color="danger" onClick={() => handleDeletePost(post.id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}

export default Post