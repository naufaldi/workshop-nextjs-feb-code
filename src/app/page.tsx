// import Home from '@/lib/pages/home';

// export default Home;

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/lib/components/ui/button'

const Home = () => {
    const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)
    return (
        <div>
            <h1 className="font-inter">Inter Font</h1>
            <h1 className="font-jakarta text-xl font-bold">Font Jakarta</h1>
            <h1 className="font-mono text-xl font-bold">Font Mono</h1>
            <Link href="/contact">
                <Button variant="default"> Pindah Halaman </Button>
            </Link>
            <Button variant="default" asChild>
                <Link href="/contact"> Halaman Contact</Link>
            </Button>
            <Image
                src="/images/slava.jpg"
                width={1000}
                height={1000}
                alt="Image Slava"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(1000, 1000)
                )}`}
            />
            <Image
                alt="Random Image"
                src="https://source.unsplash.com/random/500x200"
                width={500}
                height={200}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 200))}`}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                }}
            />
        </div>
    )
}

export default Home
