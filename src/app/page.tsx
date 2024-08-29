'use client'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Sparkle, Timer } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

export default function Home() {
  useEffect(() => {
    mixpanel.init('f4ad5d527929117bc9254bdd7adc6979', {
      track_pageview: true
    })
  }, [])

  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          AltPost
          <br />
          <br />
          Content planning for every platform.
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Upload your content to one platform, and schedule
          it anywhere. AltPost is the only platform with
          support for conservative, alternative, and
          free-speech networks.
        </Typography>
        <Link
          href="https://0b4z4ead6bk.typeform.com/to/zJvUoA0o"
          target="_blank"
        >
          <Button
            onClick={() => {
              mixpanel.track('Hero CTA Clicked')
            }}
            size="tiny"
            variant="ghost"
          >
            {`Sign Up`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="AltPost.io hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Content scheduling tools for underserved
            networks
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Save precious time"
              description="Save countless hours typically spent uploading, tweaking and fine-tuning your posts by uploading once."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Diverse platforms"
              description="Works with Instagram, TikTok, Facebook, Threads, X, TUVU, LinkedIn, Lemon8, Gab, Gettr, Parler, Truth Social, and Mastodon. Need more? Just ask."
            />
            <Feature
              icon={<Sparkle size={24} />}
              headline="AI Content Suggestions"
              description="(COMING SOON) Get platform-specific AI suggestions to optimize content for virality and maximum engagement."
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant posts
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="AltPost.io hero image"
            src="/hero1.png"
          />
        </div> */}
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get Started
          </Typography>
          <div>
            We&apos;re brand new.
            <br />
            Get 3-months on content management 100% free by
            joining today.
          </div>
          <Link
            href="https://0b4z4ead6bk.typeform.com/to/zJvUoA0o"
            target="_blank"
          >
            <Button
              onClick={() => {
                mixpanel.track('Bottom CTA Clicked')
              }}
              size="tiny"
              variant="ghost"
            >
              {`Sign Up`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
