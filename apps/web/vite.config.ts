import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	server: {
		port: 3001,
	},
	plugins: [
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tanstackStart({
			target: 'vercel',
		}),
		tailwindcss(),
	],
})
