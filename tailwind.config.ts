import { type Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

export default config;
