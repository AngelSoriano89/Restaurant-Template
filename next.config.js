/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para producción
  reactStrictMode: true,
  swcMinify: true,

  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // IMPORTANTE: Deshabilita optimización en build para evitar errores
    unoptimized: process.env.NODE_ENV === 'production',
  },

  // Output para Netlify
  output: 'standalone',

  // Compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Configuración de TypeScript para build
  typescript: {
    // ⚠️ TEMPORAL: Permite build aunque haya errores de TypeScript
    // Cambia a false después de corregir todos los errores
    ignoreBuildErrors: false,
  },

  // Configuración de ESLint para build
  eslint: {
    // ⚠️ TEMPORAL: Permite build aunque haya warnings de ESLint
    // Cambia a false después de corregir todos los warnings
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
