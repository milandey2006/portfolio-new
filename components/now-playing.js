"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiYoutubemusic } from 'react-icons/si'

export default function NowPlaying() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch('/api/now-playing')
      const json = await res.json()
      setData(json)
    } catch (e) {
      console.error('Failed to fetch now playing:', e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading || !data) {
    return (
      <div className="flex items-center gap-3 py-2 animate-pulse">
        <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
        <div className="flex flex-col gap-1.5">
          <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
      </div>
    )
  }

  const { isPlaying, title, artist, albumArt, url } = data

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 py-1 group">
        {/* Album Art / Icon Container */}
        <div className="relative h-11 w-11 flex-shrink-0">
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3], 
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-md bg-red-500/30 blur-md"
            />
          )}
          
          <div className="relative h-full w-full overflow-hidden rounded-[4px] transition-all duration-300 flex items-center justify-center">
            {albumArt ? (
              <img 
                src={albumArt} 
                alt={title} 
                className={`h-full w-full object-cover transition-opacity duration-300 ${!isPlaying ? 'grayscale opacity-70' : 'opacity-100'}`} 
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-red-500">
                <SiYoutubemusic size={20} />
              </div>
            )}
          </div>
          
          {/* YT Music Badge */}
          <div className="absolute -bottom-1.5 -right-1.5 z-10 rounded-full border-[1.5px] border-background bg-white dark:bg-neutral-950 p-[2px]">
            <div className="bg-[#FF0000] rounded-full p-[2px]">
              <SiYoutubemusic className="text-white h-2.5 w-2.5" />
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col min-w-0 flex-1 ml-1">
          <div className="flex items-center gap-2">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="truncate text-[14px] font-semibold text-primary hover:text-red-500 transition-colors leading-tight"
            >
              {isPlaying ? 'Now Listening to' : 'Last Played'} &nbsp;
              {title || 'Nothing'}
            </a>
            
            {isPlaying && <AudioVisualizer />}
          </div>
          <p className="truncate text-[12px] text-muted-foreground font-medium">
            {isPlaying ? artist : 'Last played on YT Music'}
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes audio-bar {
          0% { height: 4px; }
          50% { height: 12px; }
          100% { height: 4px; }
        }
      `}</style>
    </div>
  )
}

function AudioVisualizer() {
  return (
    <div className="flex items-end gap-[1.5px] h-3 w-3.5 mb-0.5">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-red-500 rounded-t-[1px]"
          animate={{
            height: ["20%", "70%", "100%", "40%", "20%"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
