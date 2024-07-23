/** @type {import('next').NextConfig} */

// it seems @next/mdx does not support import syntax (?)
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const withMDX = require('@next/mdx')();

const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx'],
};

export default withMDX(nextConfig);
