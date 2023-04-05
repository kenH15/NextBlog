/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }


const withMDX = require('@next/mdx')({
  extension:  /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});


//module.exports = nextConfig

module.exports = withMDX({

  pageExtensions:['js','jsx','ts','tsx','md','mdx'],
});
