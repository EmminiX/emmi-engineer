'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Create and append the analytics script
    const script = document.createElement('script');
    script.src = 'https://rybbit.emmi.zone/api/script.js';
    script.setAttribute('data-site-id', 'b8c6feaffbcf');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
