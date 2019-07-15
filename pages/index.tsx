import React from 'react';
import Link from 'next/link';

import Layout from '../components/MyLayout';

interface Post {
    id: string;
    title: string;
}

interface BlogProps {
    posts: Post[];
}

interface PostProps {
    post: Post;
}

const PostLink: React.FunctionComponent<PostProps> = ({ post }) => {
    return (
        <li>
            <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                <a>{post.title}</a>
            </Link>
            <style jsx>{`
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'Arial';
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </li>
    );
};

class Blog extends React.Component<BlogProps> {
    public static getInitialProps = async () => {
        const posts: Post[] = [
            { id: 'hello-nextjs', title: 'Hello Next.js' },
            { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
            { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
        ];

        return { posts: posts };
    };

    public render() {
        const { posts } = this.props;

        return (
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    {posts.map(post => (
                        <PostLink key={post.id} post={post} />
                    ))}
                </ul>
                <style jsx>{`
                    h1,
                    a {
                        font-family: 'Arial';
                    }

                    ul {
                        padding: 0;
                    }

                    li {
                        list-style: none;
                        margin: 5px 0;
                    }

                    a {
                        text-decoration: none;
                        color: blue;
                    }

                    a:hover {
                        opacity: 0.6;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default Blog;
