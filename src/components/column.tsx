import * as React from "react";
import Card from "./card";
import DropArea from "./drop-area";

const Column = ({ id, columnTitle, cards, onDrop }) => {
    return (
        <div className="column-wrapper ">
            <h2 className="column-title">{columnTitle}</h2>
            <div className=" cards">
                <DropArea onDrop={() => onDrop(id, 0)} />
                {cards?.map((card, index) => {
                    return (
                        <React.Fragment key={card.id}>
                            <Card key={card.id} card={card} />
                            <DropArea onDrop={() => onDrop(id, index + 1)} />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Column;
