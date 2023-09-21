import { Post, PostsPageProps } from "../types";
import { PostComp } from "./PostComp";






export const PostsPage: React.FC<PostsPageProps> = ({ posts, setPosts }) => {
    return (
        <div>
            {posts.map((post: Post) => <PostComp key={post.id} post={post} setPosts={setPosts} />)}
        </div>
    )
}