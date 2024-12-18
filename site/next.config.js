/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Luke's Workspaces',
    description: 'Kasm workspaces provided by vanvonlj',
    icon: 'https://www.linuxserver.io/user/assets/typhoon/Asset%202.svg',
    listUrl: 'https://vanvonlj.github.io/kasm_workspaces_registry/',
    contactUrl: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
