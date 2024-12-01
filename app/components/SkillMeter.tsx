'use client';

import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

interface SkillMeterProps {
  skill: string;
  defaultValue: number;
}

const humbleMessages = [
  "Whoa there! I'm not quite at guru level yet! 😅",
  "Easy now, still learning this one! 📚",
  "Thanks for the vote of confidence, but let's be realistic! 😊",
  "Flattering, but I'm more of a work in progress! 🌱",
  "You're too kind, but I'm still on this journey! 🚶"
];

const defensiveMessages = [
  "Hey, I worked hard for that skill! 💪",
  "Come on, I'm better than that! 😤",
  "That's a bit harsh, don't you think? 🤨",
  "I've got certificates to prove otherwise! 📜",
  "My mom says I'm very talented! 👩‍👦"
];

export function SkillMeter({ skill, defaultValue }: SkillMeterProps) {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const [canShowToast, setCanShowToast] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastToastRef = useRef<number>(defaultValue);

  const showToast = (newValue: number) => {
    if (!canShowToast) return;

    const difference = newValue - defaultValue;
    if (Math.abs(difference) > 5) {
      const messages = difference > 0 ? humbleMessages : defensiveMessages;
      const message = messages[Math.floor(Math.random() * messages.length)];
      
      toast(message, {
        icon: difference > 0 ? '😅' : '💪',
        id: 'skill-toast',
      });

      setCanShowToast(false);
      setTimeout(() => setCanShowToast(true), 1000);
    }
  };

  const handleDrag = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newValue = Math.round((x / rect.width) * 100);
    
    if (Math.abs(newValue - lastToastRef.current) > 5) {
      showToast(newValue);
      lastToastRef.current = newValue;
    }
    
    setValue(newValue);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isDragging) {
      timeoutId = setTimeout(() => {
        setValue(defaultValue);
        lastToastRef.current = defaultValue;
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isDragging, defaultValue]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleDrag(e);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm">
        <span>{skill}</span>
        <span>{value}%</span>
      </div>
      <div
        ref={containerRef}
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleDrag(e);
        }}
      >
        <div
          className="h-full bg-black dark:bg-white transition-all duration-300 rounded-full relative"
          style={{ width: `${value}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-3 cursor-ew-resize" />
        </div>
      </div>
    </div>
  );
}