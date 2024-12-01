'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ExpandableSection } from './ExpandableSection';
import { SkillMeter } from './SkillMeter';
import { Toaster } from 'react-hot-toast';
import { SkillTag } from './SkillTag';

const salesSkills = [
  'Team Management',
  'Revenue Growth',
  'Client Relations',
  'Strategic Planning',
  'Sales Operations',
  'Market Analysis'
];

const technicalSkills = [
  'CRM Systems',
  'Sales Analytics',
  'Data Visualization',
  'Process Automation',
  'Digital Marketing'
];

const achievements = [
  '150% Sales Target',
  '30% Efficiency Boost',
  'Market Expansion',
  'Top Sales Manager 2022'
];

export default function ProfileCard() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 px-4">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
          },
        }}
      />
      
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-black dark:text-white">Matúš Staňo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Sales Manager & Tech Enthusiast</p>
          
          <button className="inline-flex items-center px-6 py-3 text-base border border-transparent font-medium rounded-lg text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Download CV
          </button>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <ExpandableSection title="Sales Leadership">
          <div className="py-4 space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-300">
              Leading sales teams and driving revenue growth through strategic planning.
            </p>
            <div className="flex flex-wrap gap-2">
              {salesSkills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Sales Expertise" defaultValue={95} />
          </div>
        </ExpandableSection>

        <ExpandableSection title="Technical Skills">
          <div className="py-4 space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-300">
              Technical tools and platforms expertise.
            </p>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Technical Proficiency" defaultValue={85} />
          </div>
        </ExpandableSection>

        <ExpandableSection title="Personal Achievements">
          <div className="py-4 space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-300">
              Key milestones and recognition.
            </p>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement) => (
                <SkillTag key={achievement}>{achievement}</SkillTag>
              ))}
            </div>
            <SkillMeter skill="Overall Performance" defaultValue={92} />
          </div>
        </ExpandableSection>
      </div>
    </div>
  );
}