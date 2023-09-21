import axios from "axios"
import { Post, PostProps } from "../types"
import { useState } from "react"




export const PostComp: React.FC<PostProps> = ({ post, setPosts }) => {

    const [updateFLag, setUpdateFlag] = useState<boolean>(false)

    const deletePost = (post: Post) => {
        axios.delete(`http://127.0.0.1:5000/posts/${post.id}`).then((res) => {
            console.log(res)
            setPosts((prev: Post[]) => prev.filter(function (prev: Post) {
                return prev.id !== post.id
            }))
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('PIZDEC')
        const formData = new FormData(e.target as HTMLFormElement)
        const updatedPost = Object.fromEntries(formData)
        axios.put(`http://127.0.0.1:5000/posts/${post.id}`, updatedPost).then((res) => {
            console.log(res)
            setUpdateFlag(!updateFLag)
            setPosts((prev: Post[]) => prev.map(p => p.id === post.id ? res.data : p))
        }).catch((err) => {
            console.log(err)
        })
    }

    const toggleUpdate = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        setUpdateFlag((prev: boolean) => !prev)
    }


    return (
        <div className="container mx-auto flex justify-center flex-col">

            <form onSubmit={handleSubmit} className="flex flex-row justify-center">
                <div className='max-w-md mt-4 mr-4'>
                    {updateFLag ?
                        <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' type="submit">Publish</button> :
                        <>
                            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mr-2" type="button" onClick={toggleUpdate}>Update</button>
                            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mr-4" type="button" onClick={() => deletePost(post)}>Delete</button>
                        </>
                    }
                </div>
                <div className='flex flex-col justify-center w-1/2'>
                    <textarea name="title" placeholder='Title' className='border-0 focus:outline-none text-5xl mb-4 font-light resize-none placeholder:text-purple-300 break-all h-fit  overflow-hidden' readOnly={!updateFLag} rows={2} value={post.title} />
                    <textarea name="content" placeholder='Content' className='border-0 focus:outline-none h-full text-4xl resize-none font-extralight placeholder:text-purple-200 break-all h-fit  overflow-hidden' readOnly={!updateFLag} rows={15} value={post.content} />
                </div >

            </form>

        </div>
    )
}