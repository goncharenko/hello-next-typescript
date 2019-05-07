import React from 'react';

import { withRouter } from 'next/router';
import Markdown from 'react-markdown';

import Layout from '../components/MyLayout';

interface PostProps {
    router: {
        query: {
            title: string;
        };
    };
}

const Post: NextStatelessComponent<PostProps> = ({ router }: PostProps) => {
    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <div className="markdown">
                <Markdown
                    source={`
 This is our blog post.
 Yes. We can have a [link](/link).
 And we can have a title as well.
 ### This is a title
 And here's the content.`}
                />
            </div>
        </Layout>
    );
};

export default withRouter(Post);
