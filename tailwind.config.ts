
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					red: '#FF3A5E',
					blue: '#0090FF',
					purple: '#7000FF',
					green: '#00FF7F',
					black: '#111111',
					'dark-gray': '#222222',
					'light-gray': '#F8F8F8',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 144, 255, 0.5), 0 0 10px rgba(0, 144, 255, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(0, 144, 255, 0.8), 0 0 20px rgba(0, 144, 255, 0.5)' 
					}
				},
				'cyber-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 128, 0.5), 0 0 10px rgba(0, 255, 128, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(0, 255, 128, 0.8), 0 0 30px rgba(0, 255, 128, 0.5)' 
					}
				},
				'text-glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(112, 0, 255, 0.5), 0 0 10px rgba(112, 0, 255, 0.3)' 
					},
					'50%': { 
						textShadow: '0 0 15px rgba(112, 0, 255, 0.8), 0 0 20px rgba(112, 0, 255, 0.5)' 
					}
				},
				'border-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'slide-down': 'slide-down 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'blur-in': 'blur-in 0.5s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'border-flow': 'border-flow 3s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
