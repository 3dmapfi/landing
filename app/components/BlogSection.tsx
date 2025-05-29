export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background/95 backdrop-blur rounded-2xl shadow-xl mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Blog Posts */}
          <div className="bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 rounded-lg p-8 shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-white">How AI is Transforming Geospatial Analytics</h3>
            <p className="text-cyan-100/90 mb-4">Discover the latest advancements in AI-driven map intelligence and how businesses are leveraging these tools for smarter decision making.</p>
            <span className="text-xs text-cyan-200/70 mb-2">May 20, 2025</span>
            <button className="mt-auto text-blue-300 hover:underline font-medium text-left">Read More →</button>
          </div>
          <div className="bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 rounded-lg p-8 shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-white">Blockchain for Map Data Integrity</h3>
            <p className="text-cyan-100/90 mb-4">Explore how blockchain technology is ensuring the authenticity and traceability of geospatial data in modern mapping solutions.</p>
            <span className="text-xs text-cyan-200/70 mb-2">May 10, 2025</span>
            <button className="mt-auto text-blue-300 hover:underline font-medium text-left">Read More →</button>
          </div>
          <div className="bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 rounded-lg p-8 shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-white">Collaborative Mapping: The Future of Teamwork</h3>
            <p className="text-cyan-100/90 mb-4">See how real-time collaboration tools are changing the way teams build, edit, and share geospatial projects.</p>
            <span className="text-xs text-cyan-200/70 mb-2">April 28, 2025</span>
            <button className="mt-auto text-blue-300 hover:underline font-medium text-left">Read More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
