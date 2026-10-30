import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function IconHelper({ name, size = 20, className = '', color }) {
  if (!name) return null;

  // Look up icon in Lucide
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles;

  return (
    <IconComponent
      size={size}
      className={className}
      style={color ? { color } : undefined}
      strokeWidth={2}
    />
  );
}
