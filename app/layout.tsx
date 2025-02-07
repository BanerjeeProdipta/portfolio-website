import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prodipta Banerjee | Software Engineer & Web Developer',
  description:
    'Prodipta Banerjee - Experienced Software Engineer specializing in React, Next.js, Web3, and AWS. Passionate about developing scalable, high-performance applications with modern technologies.',

  openGraph: {
    title: 'Prodipta Banerjee | Software Engineer & Web Developer',
    description:
      'Experienced in building scalable web applications with React, Next.js, Web3, and AWS. Check out my portfolio!',
    url: 'https://banerjee-prodipta.vercel.app',
    siteName: 'Prodipta Banerjee Portfolio',
    images: [
      {
        url: 'https://banerjee-prodipta.vercel.app/og-image.png', // Update this with a valid image URL
        width: 1200,
        height: 630,
        alt: 'Prodipta Banerjee - Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle', // Replace with your actual Twitter handle
    creator: '@yourTwitterHandle',
    title: 'Prodipta Banerjee | Software Engineer & Web Developer',
    description:
      'Experienced in React, Next.js, Web3, and AWS. Passionate about creating scalable web applications.',
    images: ['https://banerjee-prodipta.vercel.app/og-image.png'], // Update image URL
  },

  alternates: {
    canonical: 'https://banerjee-prodipta.vercel.app',
  },

  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon for branding
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest', // Helps with PWA and SEO

  keywords: [
    'Prodipta Banerjee',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web3 Developer',
    'JavaScript Engineer',
    'TypeScript Developer',
    'AWS Developer',
    'Portfolio Website',
    'Tech Blog',
  ],

  authors: [
    {
      name: 'Prodipta Banerjee',
      url: 'https://www.linkedin.com/in/banerjeeprodipta',
    },
  ],

  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  generator: 'Next.js',

  category: 'Technology, Web Development, Software Engineering',

  applicationName: 'Prodipta Banerjee Portfolio',
  publisher: 'Prodipta Banerjee',

  referrer: 'origin-when-cross-origin',

  themeColor: '#000000', // Match this with your website’s primary theme color

  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Prodipta Banerjee Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.className} relative antialiased flex flex-col prose-h2:font-medium prose-h2:text-xl prose-h2:lg:text-3xl bg-diagonal-lines bg-fixed border border-gray-500/20`}
      >
        {children}
      </body>
    </html>
  );
}
