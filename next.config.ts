import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["handlebars"] = "handlebars/dist/handlebars.min.js";
    config.ignoreWarnings = [
      {
        module: /node_modules\/prismjs/,
        message: /Critical dependency/,
      },
    ];
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        handlebars: "handlebars/dist/handlebars.min.js",
      },
    },
  },
};

export default nextConfig;