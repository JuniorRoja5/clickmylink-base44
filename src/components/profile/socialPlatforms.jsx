
import React from 'react';

// SVG components for each platform
const InstagramLogo = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokLogo = (props) => (
  // Official, modern TikTok logo SVG
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.06 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-1.06-.63-1.9-1.47-2.46-2.55-1.01-1.92-1.13-4.28-.31-6.33.8-2.01 2.82-3.48 4.8-3.96.95-.23 1.9-.32 2.87-.33.01-4.04-.01-8.08.02-12.12.02-1.38.47-2.73 1.22-3.88.85-1.28 2.27-2.24 3.75-2.41z" />
  </svg>
);

const XLogo = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const LinkLogo = (props) => (
  // Modern link/hyperlink icon
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

// Define all platforms in one place
export const SOCIAL_PLATFORMS = [
  { id: 'instagram', name: 'Instagram', logoComponent: <InstagramLogo />, color: '#E4405F', placeholder: '@usuario o link completo', baseUrl: 'https://instagram.com/' },
  { id: 'tiktok', name: 'TikTok', logoComponent: <TikTokLogo />, color: '#000000', placeholder: '@usuario o link completo', baseUrl: 'https://tiktok.com/@' },
  { id: 'youtube', name: 'YouTube', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>, color: '#FF0000', placeholder: '@canal o link completo', baseUrl: 'https://youtube.com/@' },
  { id: 'twitter', name: 'X (Twitter)', logoComponent: <XLogo />, color: '#000000', placeholder: '@usuario o link completo', baseUrl: 'https://twitter.com/' },
  { id: 'facebook', name: 'Facebook', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22,12c0-5.523-4.477-10-10-10S2,6.477,2,12c0,4.99,3.657,9.128,8.438,9.878V14.89h-2.54 V12h2.54V9.797c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.771-1.63,1.562V12h2.773l-0.443,2.89h-2.33V21.878C18.343,21.128,22,16.99,22,12z" /></svg>, color: '#1877F2', placeholder: 'usuario o link completo', baseUrl: 'https://facebook.com/' },
  { id: 'linkedin', name: 'LinkedIn', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447,20.452h-3.554v-5.569c0-1.328-0.027-3.037-1.852-3.037c-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h0.046c0.477-0.9,1.637-1.85,3.37-1.85c3.601,0,4.267,2.37,4.267,5.455V20.452z M5.337,7.433c-1.144,0-2.063-0.926-2.063-2.065c0-1.138,0.92-2.063,2.063-2.063c1.14,0,2.064,0.925,2.064,2.063C7.401,6.507,6.477,7.433,5.337,7.433z M7.096,20.452H3.58V9h3.516V20.452z" /></svg>, color: '#0A66C2', placeholder: 'usuario o link completo', baseUrl: 'https://linkedin.com/in/' },
  { id: 'pinterest', name: 'Pinterest', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.088-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.97,1.172-4.97s-0.299-0.6-0.299-1.486c0-1.39,0.806-2.428,1.81-2.428c0.852,0,1.264,0.64,1.264,1.408 c0,0.858-0.545,2.14-0.828,3.328c-0.236,1.005,0.5,1.83,1.51,1.83c1.81,0,3.2-1.916,3.2-4.73c0-2.48-1.733-4.29-4.94-4.29 c-3.39,0-5.373,2.549-5.373,5.143c0,0.874,0.333,1.83,0.78,2.364C9.107,15.41,9.15,15.5,9.08,15.747 c-0.05,0.18-0.17,0.6-0.22,0.787c-0.07,0.255-0.3,0.345-0.54,0.24c-1.429-0.454-2.33-1.85-2.33-3.64 c0-3.04,2.21-5.83,6.26-5.83c3.28,0,5.66,2.34,5.66,5.26c0,3.308-2.072,5.925-5.02,5.925c-1.02,0-1.99-.525-2.32-1.133 c0,0-0.504,2.014-0.62,2.485C8.369,21.267,8.069,22,7.745,22c-0.31,0-0.6-.14-0.6-.42c0-0.26,0.31-1.04,0.5-1.63 C7.114,18.5,6.5,16.5,6.5,14.914c0-2.83,2.14-5.42,5.5-5.42c3.007,0,5.1,2.06,5.1,4.86c0,2.83-1.7,5.08-4.1,5.08 c-1.38,0-2.65-1.12-2.65-2.52c0-1.18,0.86-2.22,1.93-2.22c0.84,0,1.35,0.84,1.35,1.71c0,0.73-0.27,1.52-0.4,1.9 c-0.13,0.4-0.2,0.8-0.2,1.15c0,0.51,0.22,0.96,0.22,0.96S13.8,21.8,14.12,21.8c0.97,0,1.7-1.4,1.7-2.9 c0-2.2-1.2-3.8-3.3-3.8c-2.4,0-4.1,1.9-4.1,3.9c0,1.1,0.5,1.9,1.2,1.9c0.2,0,0.3-0.1,0.4-0.2c-0.1-0.4-0.2-0.8-0.2-1.1 c0-0.8,0.4-1.5,1.2-1.5c1.1,0,1.8,1.2,1.8,2.7c0,1.7-1.1,3.2-2.7,3.2c-2.2,0-3.9-2.2-3.9-4.8c0-3.1,2.7-5.8,6.6-5.8c4,0,7.1,3,7.1,6.5 C21.5,17.9,19.3,21,15.5,21c-1.7,0-3.3-0.8-3.3-2.3c0-1.6,1.1-2.8,2.6-2.8c1.1,0,1.9,0.8,1.9,2c0,1.1-0.4,2.1-0.8,2.7 c-0.1,0.2-0.1,0.4,0,0.6C15.3,21.8,15.6,22,16,22c1.1,0,2.2-1.5,2.2-3.4c0-2.6-1.8-4.8-4.9-4.8c-3.5,0-6.1,2.8-6.1,6 c0,1.6,0.8,2.9,2.1,2.9c0.4,0,0.7-0.2,0.8-0.5c-0.2-0.7-0.4-1.2-0.4-1.7c0-1.4,0.9-2.6,2.4-2.6c1.4,0,2.4,1.2,2.4,2.8 c0,2-1.3,3.6-3.1,3.6c-2.5,0-4.4-2.5-4.4-5.3c0-3.4,3-6.4,7.3-6.4c4.4,0,7.8,3.2,7.8,7.1C22,18.4,19.6,22,15,22z"/></svg>, color: '#BD081C', placeholder: 'usuario o link completo', baseUrl: 'https://pinterest.com/' },
  { id: 'whatsapp', name: 'WhatsApp', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04,2C6.58,2,2.13,6.45,2.13,12c0,1.75,0.46,3.42,1.29,4.9l-1.41,5.15l5.27-1.38c1.42,0.76,2.99,1.17,4.61,1.17 c5.46,0,9.91-4.45,9.91-9.91C21.95,6.45,17.5,2,12.04,2z M12.04,20.15c-1.43,0-2.81-0.38-4.02-1.07l-0.29-0.17l-3,0.79l0.8-2.92 l-0.2-0.31c-0.76-1.25-1.17-2.69-1.17-4.18c0-4.54,3.69-8.23,8.23-8.23c2.23,0,4.32,0.87,5.82,2.37 c1.5,1.5,2.37,3.59,2.37,5.82C20.27,16.46,16.58,20.15,12.04,20.15z M17.29,14.45c-0.27-0.13-1.58-0.78-1.83-0.87 c-0.25-0.09-0.43-0.13-0.62,0.13c-0.19,0.27-0.69,0.87-0.85,1.04c-0.16,0.18-0.31,0.2-0.58,0.06c-0.27-0.13-1.15-0.42-2.19-1.35 c-0.81-0.72-1.35-1.61-1.51-1.88c-0.16-0.27-0.02-0.42,0.12-0.55c0.12-0.12,0.27-0.31,0.4-0.47c0.13-0.16,0.18-0.27,0.27-0.46 c0.09-0.19,0.04-0.35-0.02-0.48c-0.06-0.13-0.62-1.49-0.85-2.04c-0.22-0.55-0.45-0.47-0.62-0.48c-0.16-0.01-0.35-0.01-0.53-0.01 c-0.18,0-0.48,0.07-0.73,0.34c-0.25,0.27-0.95,0.92-0.95,2.25c0,1.33,0.98,2.61,1.11,2.78c0.13,0.18,1.95,2.98,4.74,4.19 c0.66,0.29,1.18,0.46,1.59,0.59c0.7,0.22,1.34,0.19,1.83,0.11c0.55-0.09,1.58-0.64,1.8-1.25c0.23-0.6,0.23-1.11,0.16-1.25 C17.74,14.65,17.56,14.58,17.29,14.45z" /></svg>, color: '#25D366', placeholder: 'número o link', baseUrl: 'https://wa.me/' },
  { id: 'telegram', name: 'Telegram', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm5.47,7.3-1.48,6.96a0.5,0.5,0,0,1-.95.24l-2.22-1.63-1.07,1a0.5,0.5,0,0,1-.66.07l0.29-2.31,4.45-4c0.14-.12-.05-.19-0.23-0.07L8.2,13.63,5.71,12.8A0.5,0.5,0,0,1,6,11.85l10.8-4.2C17.22,7.5,17.5,7.61,17.47,7.3Z" /></svg>, color: '#0088CC', placeholder: '@usuario', baseUrl: 'https://t.me/' },
  { id: 'spotify', name: 'Spotify', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.711,16.513 C16.52,16.82,16.14,16.924,15.832,16.733c-2.512-1.529-5.665-1.865-9.336-1.018c-0.34,0.077-0.686-0.126-0.763-0.466 c-0.077-0.34,0.126-0.686,0.466-0.763c4.018-0.915,7.499-0.54,10.28,1.155C16.82,15.824,16.903,16.173,16.711,16.513z M17.848,13.43c-0.221,0.42-0.707,0.569-1.127,0.348c-2.848-1.745-7.158-2.245-10.45-1.22c-0.407,0.126-0.848-0.089-0.974-0.495 c-0.126-0.407,0.089-0.848,0.495-0.974c3.7-1.155,8.448-0.6,11.666,1.41C17.898,12.723,18.068,13.209,17.848,13.43z M17.98,10.22c-0.274,0.505-0.886,0.687-1.391,0.413c-3.385-2.029-8.953-2.185-12.019-1.2c-0.485,0.152-1.018-0.125-1.17-0.61 c-0.152-0.485,0.125-1.018,0.61-1.17c3.552-1.099,9.626-0.906,13.448,1.41C18.01,8.966,18.254,9.715,17.98,10.22z"/></svg>, color: '#1DB954', placeholder: 'artista, playlist, etc.', baseUrl: 'https://open.spotify.com/' },
  { id: 'website', name: 'Sitio Web', logoComponent: <LinkLogo />, color: '#6B7280', placeholder: 'https://tusitio.com', baseUrl: '' },
  { id: 'email', name: 'Email', logoComponent: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6z M20,6l-8,5l-8-5H20z M20,18H4 V8l8,5l8-5V18z" /></svg>, color: '#6B7280', placeholder: 'correo@ejemplo.com', baseUrl: 'mailto:' },
];

// Create a Map for quick lookups
export const SOCIAL_PLATFORMS_MAP = new Map(SOCIAL_PLATFORMS.map(p => [p.id, p]));
