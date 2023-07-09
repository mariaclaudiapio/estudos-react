import { get } from './httpService';

const BACKEND_URL = 'http://localhost:3001/flashcards';

export async function apiGetAllFlashCards() {
  const allFlashCards = await get(BACKEND_URL);
  return allFlashCards;
}
