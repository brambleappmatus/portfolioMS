'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ExpandableSection({ title, children }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex w-full items-center justify-between text-left p-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">{title}</h2>
        <ChevronUpIcon
          className={`h-5 w-5 transform transition-transform ${
            isExpanded ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </div>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}