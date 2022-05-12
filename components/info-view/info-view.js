import { useEffect, useState } from 'react';
import { useAppContext } from "context/state";

import BookView from './book-view/book-view';

const InfoView = () => {
  const { selectedBook, infoViewType } = useAppContext().state;
  const { setSelectedBook } = useAppContext();

  let infoComponent = (<div></div>);

  if (infoViewType == 'book' && selectedBook) {
    infoComponent = <BookView book={selectedBook} />;
  }

  return (
    <div>
      {infoComponent}
    </div>
  );
}

export default InfoView;
