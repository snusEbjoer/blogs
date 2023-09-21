import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Post } from './types'
import { CreatePost } from './components/CreatePost'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PostsPage } from './components/PostsPage';
import { Header } from './components/Header';

function App() {
  const [posts, setPosts] = useState<Post[]>([])


  useEffect(() => {
    axios.get('http://127.0.0.1:5000/posts').then((res) => {
      setPosts(res.data)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className='container mx-auto flex flex-col'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreatePost setPosts={setPosts} />} />
          <Route path="/posts" element={<PostsPage setPosts={setPosts} posts={posts} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
