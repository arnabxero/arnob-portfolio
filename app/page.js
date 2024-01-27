'use client'
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext';


const page = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme} bg-background h-screen w-screen py-[3vh] px-[2vw]`}>
      <div className="background-animation bg-foreground rounded border border-border min-w-[96vw]  min-h-[94vh]">
        <span className="circle"></span>
        <div className="h-full w-full">
          <div className="text-primary">{theme}Welcome to the Themed App</div>
          <p className="text-secondary">This is an example component.</p>
        </div>

      </div>
    </div>
  )
}

export default page