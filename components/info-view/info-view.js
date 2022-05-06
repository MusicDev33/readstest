import { useAppContext } from "context/state";

const InfoView = () => {
  const { selectedBook } = useAppContext().state;

  console.log(selectedBook);

  return (
    <div></div>
  );
}

export default InfoView;
