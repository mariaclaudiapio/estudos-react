import { useEffect, useState } from 'react';

export default function FlashCard({
  id,
  title = 'Título do card',
  description = 'Descrição do card, que pode conter mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-md';

  return (
    <div
      className={`bg-yellow-100 shadow-lg p-4 m-2 w-80 h-60 cursor-pointer  rounded-lg
      flex flex-row items-center justify-center
      font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'Space Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
