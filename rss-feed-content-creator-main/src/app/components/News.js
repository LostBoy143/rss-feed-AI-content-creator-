import Marquee from "react-fast-marquee";

function News() {
  const images = [
    { src: "./news_btc.jpg", alt: "news-btc" },
    {
      src: "./economic-times.jpg",
      alt: "economics",
    },
    { src: "science-daily.webp", alt: "science" },
    { src: "tech-crunch.png", alt: "tech" },
    {
      src: "the-guardian-logo.jpeg",
      alt: "guard",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-10">
        We Curate from the Best
      </h1>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex min-w-[100vw] justify-between ml:24 sm:ml-40 gap-12 sm:gap-0">
          {images.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="h-24 rounded-2xl"
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}

export default News;
