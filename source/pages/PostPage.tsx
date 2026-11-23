import { useParams, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { blogPosts } from '../data/posts'

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <Layout title={post.title} subtitle={post.subtitle}>
      <article
        style={{
          backgroundColor: 'rgba(2, 6, 23, 0.78)',
          border: '1.5px solid rgba(93, 235, 192, 0.45)',
          borderRadius: '1.5rem',
          padding: 'clamp(1.25rem, 4vw, 2.5rem)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 14px 36px rgba(0, 0, 0, 0.4)',
        }}
        className="blog-article animate-fade-up"
      >
        {post.content}
      </article>
    </Layout>
  )
}
