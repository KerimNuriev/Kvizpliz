import type CardType from './type/CardType';

async function loadCards(): Promise<CardType[]> {
  const res = await fetch('/api/card');
  return res.json();
}

export default loadCards;
