import { useNavigate, useSearchParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>Edit</h1>
      <p>This page is to edit diary.</p>
      <button onClick={() => setSearchParams({ who: "logkyung" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

export default Edit;
