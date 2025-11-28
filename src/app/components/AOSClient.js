"use client";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AOSClient() {
  useEffect(() => {
    let mounted = true;
    import('aos')
      .then((AOS) => {
        if (mounted && AOS && typeof AOS.init === 'function') {
          AOS.init({ once: true, duration: 600 });
        }
      })
      .catch((err) => console.warn('AOS failed to load', err));
    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
