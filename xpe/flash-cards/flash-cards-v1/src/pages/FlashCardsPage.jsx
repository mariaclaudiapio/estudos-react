import FlashCard from '../components/FlashCard';
import Header from '../components/Header';
import Main from '../components/Main';
import { allFlashCards } from '../data/allFlashCards';

export default function FlashCardsPage() {
  return (
    <div>
      <Header />
      <Main />
      <FlashCard />
      <FlashCard
        title="React"
        description="Biblioteca voltada para o front-end"
      />
    </div>
  );
}

// retomar da aula 4.4
