import { getAllPosts } from "@/lib/api";

export const metadata = {
  description: "Services: what it is and who it is for.",
  title: "Services | Autopilot",
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <h1>Our services</h1>
      <h2>Our services?</h2>
      <p>Services for teams who want &#123;more&#125; &amp; better.</p>
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
      <h2>FAQ</h2>
      <h3>Why Services?</h3>
      <p>Because it&apos;s good.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@graph": [
          {
            "name": "Services",
            "@type": "WebPage"
          }
        ],
        "@context": "https://schema.org"
      }) }} />
    </main>
  );
}
