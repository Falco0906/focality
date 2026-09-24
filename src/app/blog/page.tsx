import Link from "next/link";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog / Focality",
  description: "Notes from Focality on building useful AI products.",
};

const Blog = () => (
  <main className="focality-blog-page">
    <section className="focality-blog-hero">
      <div className="focality-shell">
        <p className="focality-blog-kicker">Focality / Notes</p>
        <h1>Thinking about intelligent software.</h1>
        <p>Ideas, observations, and things we&apos;re learning while building products for the way work actually happens.</p>
      </div>
    </section>

    <section className="focality-blog-list" aria-label="Articles">
      <div className="focality-shell">
          {blogData.map((blog, index) => (
            <article className="focality-post-row" key={blog.id}>
            <div className="focality-post-index">0{index + 1}</div>
            <div className="focality-post-content">
              <div className="focality-post-meta"><span>{blog.tags[0]}</span><span>{blog.publishDate}</span></div>
              <h2><Link href="/blog-details">{blog.title}</Link></h2>
              <p>{blog.paragraph}</p>
              <Link className="focality-post-link" href="/blog-details">Read note <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Blog;
