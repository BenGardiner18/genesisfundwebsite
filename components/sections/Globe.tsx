"use client"
import { useEffect, useRef } from 'react';
import Logo from '@/components/ui/Logo';

const Globe = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Logo size={400} className="text-gray-200" />
    </div>
  );
};

export default Globe;
