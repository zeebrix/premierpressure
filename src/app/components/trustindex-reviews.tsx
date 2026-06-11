'use client';

import { useEffect, useRef } from 'react';

const TRUSTINDEX_SRC =
  'https://cdn.trustindex.io/loader.js?d7937c0732a1947099463ca7e40';

/*
  Trustindex Google reviews widget.

  The loader is designed to run as a parser-inserted <script> on a static page:
  it locates itself via document.currentScript and replaces that script with the
  rendered widget. Inside a Next.js (React) page none of the in-page embeds work
  reliably — a useEffect injection has a null currentScript, and a server-rendered
  <script> fetches the content but React's hydration reconciles the mount subtree
  and discards the widget the loader injects.

  Running it inside a self-contained iframe sidesteps all of that: the loader
  executes in its own top-level document (its native environment), React never
  touches that document, and the widget renders immediately. The iframe srcDoc is
  same-origin, so we read its document to auto-size the frame to the widget height.
*/
const SRC_DOC =
  '<!doctype html><html><head><meta charset="utf-8">' +
  '<base target="_blank">' +
  '<style>html,body{margin:0;padding:0;background:transparent}</style></head>' +
  '<body><script defer src="' + TRUSTINDEX_SRC + '"></scr' + 'ipt></body></html>';

export function TrustindexReviews() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentDocument;
        const h = doc?.body?.scrollHeight ?? 0;
        if (h > 0) iframe.style.height = `${h}px`;
      } catch {
        /* same-origin srcDoc — should not throw, but stay safe */
      }
    };

    // The widget renders + lazy-loads images asynchronously, so poll briefly
    // while it settles, then stop.
    const interval = window.setInterval(resize, 400);
    const stop = window.setTimeout(() => window.clearInterval(interval), 20000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <iframe
      ref={ref}
      srcDoc={SRC_DOC}
      title="Google reviews"
      scrolling="no"
      style={{ width: '100%', border: 0, height: 480, overflow: 'hidden' }}
    />
  );
}
