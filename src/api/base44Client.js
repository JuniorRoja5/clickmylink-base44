import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "685913f83e874a316fa3ec55", 
  requiresAuth: false // <-- ¡THIS CHANGED
});
