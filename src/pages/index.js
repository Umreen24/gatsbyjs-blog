import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
    <Layout>
        <Title text='Welcome'/>
        <p>
            Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
            Volutpat blandit aliquam etiam erat velit scelerisque in.
            Vel quam elementum pulvinar etiam. Duis at tellus at urna condimentum.
            Arcu non odio euismod lacinia at. Sed adipiscing diam donec adipiscing tristique risus nec.
            Fames ac turpis egestas maecenas. Ac auctor augue mauris augue neque gravida in fermentum et.
            Eget nunc scelerisque viverra mauris. Tempus quam pellentesque nec nam aliquam sem et.
        </p>
        <p>
            Arcu non odio euismod lacinia at. Sed adipiscing diam donec adipiscing tristique risus nec.
            Fames ac turpis egestas maecenas. Ac auctor augue mauris augue neque gravida in fermentum et.
            Eget nunc scelerisque viverra mauris. Tempus quam pellentesque nec nam aliquam sem et.
        </p>
        <br/>
        <ArticleList/>
    </Layout>
)