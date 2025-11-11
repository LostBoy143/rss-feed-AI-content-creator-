import cohere from "./Cohere";

// Hardcoded working model — replace this string if Cohere deprecates it in future.
const call = async (prompt, content) => {
  const data = await cohere.chat({
    model: "command-xlarge-nightly",
    chatHistory: [
      {
        role: "USER",
        message: prompt,
      },
      {
        role: "USER",
        message:
          "Only return the relevant text and not other considerations of yours and avoid giving extra notes.",
      },
    ],
    message: content,
  });
  return data;
};

export default call;
