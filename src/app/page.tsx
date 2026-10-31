import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export const metadata = {
    description: "Autopilot's meta description for this page.",
  title: "Autopilot title | Ours",
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      <h2>Autopilot section</h2>
      <p>A short section, with <a href="/x">a link</a> &amp; &#123;braces&#125;.</p>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "name": "Autopilot FAQ",
          "@type": "FAQPage",
          "@context": "https://schema.org",
          "mainEntity": []
        }) }} />
    </main>
  );
}
