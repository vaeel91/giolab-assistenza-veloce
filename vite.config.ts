import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core - loaded first
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'react-core';
          }
          // React Router - separate chunk
          if (id.includes('react-router')) {
            return 'react-router';
          }
          // TanStack Query - lazy load
          if (id.includes('@tanstack/react-query')) {
            return 'tanstack-query';
          }
          // Radix UI components - separate chunk
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          // Recharts - heavy, lazy load
          if (id.includes('recharts') || id.includes('d3-')) {
            return 'charts';
          }
          // Lucide icons - separate chunk
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Date utilities
          if (id.includes('date-fns')) {
            return 'date-utils';
          }
          // Embla carousel
          if (id.includes('embla-carousel')) {
            return 'carousel';
          }
          // Form utilities
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'forms';
          }
          // Supabase client
          if (id.includes('@supabase')) {
            return 'supabase';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/css/i.test(ext || '')) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
