import React from 'react';
import { NextStatelessComponent } from 'next';
import Link from 'next/link';

import Layout from '../components/MyLayout';

interface Post {
    id: number;
    title: string;
}

interface BlogProps {
    posts: Post[];
}

interface PostProps {
    post: Post;
}

const PostLink: NextStatelessComponent<PostProps> = ({ post }) => {
    return (
        <li>
            <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                <a>{post.title}</a>
            </Link>
        </li>
    );
};

const Blog: NextStatelessComponent<BlogProps> = ({ posts }) => {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {posts.map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
        </Layout>
    );
};

Blog.getInitialProps = async () => {
    const posts = [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
    ];

    return { posts };
};

export default Blog;
