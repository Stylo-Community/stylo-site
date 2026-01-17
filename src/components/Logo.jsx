import React from 'react';
import MaterialIcon from './MaterialIcon.jsx';

export default function Logo({ variant = 'square' }) {
  if (variant === 'square') {
    return (
      <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(244,207,62,0.3)]">
        <MaterialIcon name="terminal" className="text-black font-bold" />
      </div>
    );
  }

  return (
    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-black">
      <MaterialIcon name="terminal" className="font-bold" />
    </div>
  );
}
