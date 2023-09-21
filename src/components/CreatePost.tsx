import axios from 'axios';
import { CreatePostProps, Post } from "../types"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export const CreatePost: React.FC<CreatePostProps> = ({ setPosts }) => {

    const navigate = useNavigate()


    const [post, setPost] = useState<Post>({
        'content': '',
        "title": ''
    })


    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/posts', post).then((res) => {
            console.log(res)
            setPosts((prev: Post[]) => [...prev, res.data])
            navigate('/posts')
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setPost((prev: Post) => {
            return { ...prev, [name]: value }
        })

    }

    console.log(post)
    return (
        <div className='flex flex-row p-4 justify-center'>
            <div className='flex flex-col justify-center w-1/2'>
                <textarea placeholder='Title' className='border-0 focus:outline-none text-5xl mb-4 font-light resize-none placeholder:text-purple-300 break-all h-fit overflow-hidden' required name='title' value={post.title} onChange={handleChange} />
                <textarea placeholder='Content' className='border-0 focus:outline-none h-full text-4xl resize-none font-extralight placeholder:text-purple-200 break-all h-fit  overflow-hidden' required name='content' value={post.content} onChange={handleChange} />
                <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={handleSubmit}>Publish</button>
            </div >
        </div >
    )
}