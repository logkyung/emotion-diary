import { useParams } from "react-router-dom";

function Diary() {
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>This page is to show {id}th diary detail.</p>
    </div>
  );
}

export default Diary;
