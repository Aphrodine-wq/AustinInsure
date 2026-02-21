import { useEffect } from 'react';

/**
 * Lightweight alternative to react-helmet-async for React 19.
 * Sets document title, meta description, Open Graph, Twitter, and JSON-LD.
 */
export default function useDocumentHead({ title, description, url, image, jsonLd }) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Helper to set or create a <meta> tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('name', 'description', description);
      setMeta('name', 'title', title);
    }

    if (url) {
      setMeta('property', 'og:url', url);
      setMeta('property', 'twitter:url', url);
      // canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('property', 'twitter:title', title);
    }

    if (description) {
      setMeta('property', 'og:description', description);
      setMeta('property', 'twitter:description', description);
    }

    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('property', 'twitter:image', image);
    }

    // JSON-LD
    if (jsonLd) {
      let script = document.getElementById('dynamic-jsonld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
      return () => {
        script.remove();
      };
    }
  }, [title, description, url, image, jsonLd]);
}
