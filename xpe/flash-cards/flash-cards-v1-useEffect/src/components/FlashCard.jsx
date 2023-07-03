import { useEffect, useState } from 'react';

export default function FlashCard({
  title = 'Título do card',
  description = 'Descrição do card, que pode conter mais palavras que o título',
  showFlashCardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    //setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle); //versão mais elegante, segundo o Gomide
  }

  const fontSizeClassName = showTitle ? 'text-xl' : 'text-md';

  return (
    <div
      className={`bg-blue-100 shadow-lg p-4 m-2 w-80 h-60 cursor-pointer
      flex flex-row items-center justify-center
      font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'Space Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
