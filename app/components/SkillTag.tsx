interface SkillTagProps {
  children: React.ReactNode;
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block px-2 py-1 rounded-full bg-gray-100 dark:bg-black text-xs font-medium text-black dark:text-white border dark:border-gray-800">
      {children}
    </span>
  );
}