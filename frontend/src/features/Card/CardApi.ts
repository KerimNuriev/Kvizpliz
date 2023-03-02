import type Card from './type/Card';

export async function loadCards(): Promise<Card[]> {
  const res = await fetch('/api/card');
  return res.json();
}

export default loadCards;
