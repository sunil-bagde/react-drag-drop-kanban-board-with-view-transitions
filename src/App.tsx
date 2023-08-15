import { useState } from "react";
import { flushSync } from "react-dom";

import { useBoardStore } from "@/store/board.store";

import Column from "@/components/column";
import { Columns } from "@/components/card-types";

import { initialCardsPosition } from "@/components/data";
import { moveCardToColumn } from "@/utils/board.utils";

const columnTitles: { [key in Columns]: string } = {
  [Columns.IDEAS]: "!i Ideas",
  [Columns.IN_PROGRESS]: "⛟ In Progress",
  [Columns.DONE]: "✓ Done",
};

const columnList = Object.keys(columnTitles);

function App() {
  const [cards, setCards] = useState(initialCardsPosition);

  const draggingCard = useBoardStore((state) => state.draggingCard);
  const handleDrop = (column, index) => {
    if (!draggingCard) return;

    const newCard = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index,
    });

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setCards(newCard);
      });
    });
  };
  return (
    <>
      <div className="columns-wrapper">
        <div className="columns-grid">
          {columnList.map((id) => {
            return (
              <Column
                id={id}
                columnTitle={columnTitles[id]}
                key={id}
                cards={cards[id]}
                onDrop={handleDrop}
              />
            );
          })}
          <Column />
        </div>
      </div>
    </>
  );
}

export default App;
