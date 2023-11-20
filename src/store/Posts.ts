import { create } from "zustand"

interface PostsStore {
    posts: PostTypes[];
    addPost: (newPost: PostTypes) => void;
    editPost: (id: number, updatedPost: PostTypes) => void;
    deletePost: (id: number) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    addPost: (newPost: PostTypes) => {
        set((state: any) => {
            return { posts: [...state.posts, newPost] }
        })
    },
    editPost: (id: number, updatedPost: PostTypes) => {
        set((state: any) => {
            const updatedPosts = state.posts.map((post: PostTypes) => {
                if (post.id === id) {
                    return { ...post, ...updatedPost }
                }
                return post;
            });
            return { posts: updatedPosts }
        })
    },
    deletePost: (id: number) => {
        set((state: any) => {
            const updatedPosts = state.posts.filter((post: PostTypes) => post.id !== id)
            return { posts: updatedPosts }
        })
    },
}))