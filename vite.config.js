import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },



      
    },
  },
  content:["./src//*.{js,ts.jsx,tsx}"],
  plugins: [react(),
    tailwindcss(),
    
    
  ],
})