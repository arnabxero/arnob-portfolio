'use client'
import React, { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext';
import Topbar from '@/components/navigation/Topbar';
import HomePage from '@/components/MainPages/HomePage';

const page = () => {
  const { themes, theme, setTheme } = useTheme();

  const allTabs = ['_Hello', '_About', '_Projects', '_Researches', '_Contact'];
  const [activeTab, setActiveTab] = useState('_Hello');

  return (
    <div className={`${theme} bg-background h-screen w-screen py-[3vh] px-[2vw] text-[14px]`}>
      <div className="background-animation bg-foreground rounded border border-border min-w-[96vw]  min-h-[94vh]">
        <span className="circle"></span>
        <div className="h-full w-full">
          <Topbar allTabs={allTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === '_Hello' &&
            (<>
              <HomePage />
            </>)
          }
        </div>
      </div>
    </div>
  )
}

export default page