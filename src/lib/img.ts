/**
 * Builds an Unsplash CDN URL for a photo id (the part after "photo-").
 * All ids used across the showcase sites have been checked to resolve.
 */
export function img(id: string, w = 1200, h?: number): string {
  const size = h ? `&w=${w}&h=${h}` : `&w=${w}`;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop${size}&q=80`;
}
