import { useEffect, useState } from 'react';

import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import { apiGetAllFlashCards } from '../services/apiService';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  useEffect(() => {
    //exemplo de promise:
    // apiGetAllFlashCards().then(allFlashCards => {
    //   setAllCards(allFlashCards);
    // });

    //exemplo de async await:
    async function getAllCards() {
      const backEndAllCards = await apiGetAllFlashCards();
      setAllCards(backEndAllCards);
      setLoading(false);
    }

    getAllCards();
  }, []);

  //exemplo de IIFE:
  //   (async function getAllCards() {
  //     const backEndAllCards = await apiGetAllFlashCards();
  //     setAllCards(backEndAllCards);
  //   })();

  // getAllCards();

  function handleShuffle() {
    const shuffledCards = helperShuffleArray(studyCards);
    setStudyCards(shuffledCards);
  }

  useEffect(() => {
    setStudyCards(allCards.map(card => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleRadioShowTitleClick() {
    const updatedCards = [...studyCards].map(card => ({
      ...card,
      showTitle: true,
    }));

    setStudyCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    const updatedCards = [...studyCards].map(card => ({
      ...card,
      showTitle: false,
    }));

    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setStudyCards(updatedCards);
  }

  return (
    <>
      <Header />
      <Main />
      <div className="text-center mb-4">
        <Button onButtonClick={handleShuffle}>Embaralhar Cards</Button>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 m-4">
        <RadioButton
          id="radioButtonShowTitle"
          name="showInfo"
          buttonChecked={radioButtonShowTitle}
          onButtonClick={handleRadioShowTitleClick}
        >
          Mostrar Título
        </RadioButton>
        <RadioButton
          id="radioButtonShowDescription"
          name="showInfo"
          buttonChecked={!radioButtonShowTitle}
          onButtonClick={handleRadioShowDescriptionClick}
        >
          Mostrar Descrição
        </RadioButton>
      </div>
      <FlashCards>
        {studyCards.map(({ id, title, description, showTitle }) => (
          <FlashCard
            key={id}
            id={id}
            title={title}
            description={description}
            showFlashCardTitle={showTitle}
            onToggleFlashCard={handleToggleFlashCard}
          />
        ))}
      </FlashCards>
    </>
  );
}

// retomar da aula 5.2
