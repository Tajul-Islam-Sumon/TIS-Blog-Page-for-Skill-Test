import BlogList from "../components/blogs/blog-list";

async function extractAllBlogs() {
    const res = 
    
    await fetch(`/api/blog-post/get-all-posts`, {
        method: 'GET',
        cache: 'no-store'
    })

    const data = await res.json();
    if (data.success) return data.data
}

export default async function Blogs() {
    const blogPostList = await extractAllBlogs();

    return <BlogList lists={blogPostList} />
}