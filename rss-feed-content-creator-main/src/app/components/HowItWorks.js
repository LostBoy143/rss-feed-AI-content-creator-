import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      heading: " 🎯 Pick a Category",
      subheading: "Choose Your Niche",
      desc: "From Technology to Wellness, select the category that fits your audience. We support Tech, Crypto, Stocks, Finance, Politics, and more.",
    },
    {
      heading: " 📰 Fetch Latest News",
      subheading: "Real-Time RSS Integration",
      desc: "We automatically pull in the latest headlines from trusted sources so you're always working with fresh, relevant content.",
    },
    {
      heading: "⚡ Generate AI-Powered Content",
      subheading:
        "Pick Your Format: Blog | Tweet | LinkedIn",
      desc: "Transform headlines into compelling posts instantly. Expand ideas or generate ready-to-publish content with a single click.",
    },
  ];

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-6">
        How It Works
      </h1>
      <div className="flex justify-evenly flex-col sm:flex-row sm:gap-0 gap-2 ">
        {steps.map((step, index) => (
          <motion.div
            key={step.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="transition-all duration-300 hover:scale-105 bg-white/10 hover:bg-white/5 border border-white/30 backdrop-blur-md  hover:shadow-md  rounded-2xl p-6 max-w-sm mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {step.heading}
            </h3>
            <h4 className="text-cyan-300 text-md font-medium mb-2">
              {step.subheading}
            </h4>
            <p className="text-gray-300 text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
