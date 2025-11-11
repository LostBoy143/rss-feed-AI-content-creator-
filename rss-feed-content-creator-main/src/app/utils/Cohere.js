import { CohereClient } from "cohere-ai";

// Prefer a non-public API key env var. Keep the original NEXT_PUBLIC_API_URL as a fallback
// for CI or older setups but it's recommended to set COHERE_API_KEY in your environment.
const apiKey =
  process.env.COHERE_API_KEY ||
  process.env.NEXT_PUBLIC_API_URL;

const cohere = new CohereClient({
  token: apiKey,
});

export default cohere;
