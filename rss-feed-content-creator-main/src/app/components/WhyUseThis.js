import { motion } from "framer-motion";
const WhyUseThis = () => {
  const items = [
    {
      heading: "Instant AI Content",
      subheading:
        "Get high-quality blog posts, tweets, and LinkedIn content in seconds with one click.",
    },
    {
      heading: "Live News Feeds",
      subheading:
        "We tap into top RSS sources to keep your content fresh and relevant.",
    },
    {
      heading: "Multiple Formats",
      subheading:
        "Choose how you publish — blogs, short tweets, or professional posts.",
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-center font-bold text-3xl mb-6">
        Why Use This?
      </h1>
      <div className="flex sm:flex-row flex-col justify-evenly sm:gap-0 gap-6">
        {items.map((item, index) => {
          return (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="transition-all duration-300 hover:scale-105 bg-white/10 hover:bg-white/5 border border-white/30 backdrop-blur-md  hover:shadow-md  rounded-2xl p-6 max-w-sm mx-auto"
            >
              <div className="">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.heading}
                </h3>
                <p className="text-cyan-300 text-md font-medium mb-2">
                  {item.subheading}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUseThis;
