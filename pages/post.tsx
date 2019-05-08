import React from 'react';
import { NextStatelessComponent } from 'next';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

import Layout from '../components/MyLayout';

const Post: NextStatelessComponent = () => {
    const { query } = useRouter();
    return (
        <Layout>
            <h1>{query.title}</h1>
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

export default Post;
