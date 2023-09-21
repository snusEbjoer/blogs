export type Post = {
    id?: number,
    title: string,
    content: string,
}

export type CreatePostProps = {
    setPosts(prev: any): void
}


export type Response = {
    response: string | "No responce"
}

export type PostProps = {
    post: Post,
    setPosts(prev: any): void
}

export type PostsPageProps = {
    posts: Post[],
    setPosts(prev: any): void
}