import type CardType from './type/CardType';

export default async function loadCards(): Promise<CardType[]> {
  const res = await fetch('/api/cards');
  return res.json();
}

// export async function checkCard(id): Promise<string> {
//   const res = await fetch(`api/cards/check/${id}`)
//   return res.json()
// } 
