const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 py-10 px-6 rounded-t-2xl shadow">
      <div className="max-w-7xl justify-around mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Brand and Description */}
        <div>
          <h2 className="text-xl font-bold text-white">
            AI Content Creator
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Generate high-quality LinkedIn posts,
            tweets, and blogs from live RSS feeds.
            Choose a category, get real-time news,
            and let AI do the writing.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Technology</li>
            <li>Stocks</li>
            <li>Wellness</li>
            <li>Politics</li>
            <li>Finance</li>
            <li>Cryptocurrency</li>
          </ul>
        </div>

        {/* Content Types */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Generate
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Expand</li>
            <li>Blog Post</li>
            <li>Tweet</li>
            <li>LinkedIn Post</li>
          </ul>
        </div>

        {/* Socials or Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AI Content
        Creator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
