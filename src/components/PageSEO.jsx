import { useEffect } from 'react';

/**
 * Dynamically updates the page <title> and meta description.
 * Usage: <PageSEO title="..." description="..." />
 */
export default function PageSEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}