import { useState } from 'react';

export default function FlashCard({
  title = 'Título do card',
  description = 'Descrição do card, que pode conter mais palavras que o título',
}) {
  const [showTitle, setShowTitle] = useState(true);

  function handleCardClick() {
    //setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle); //versão mais elegante, segundo o Gomide
  }

  const fontSizeClassName = showTitle ? 'text-xl' : 'text-md';

  return (
    <div
      className={`shadow-lg w-64 h-32 cursor-pointer
      flex flex-row items-center justify-center
      font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'JetBrains Mono', 'monospace'" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
