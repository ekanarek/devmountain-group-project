export default function GenreButton({ genre, onClick }) {
  return (
    <div style={{ paddingTop: "12px" }}>
      <button
        style={{ width: "300px", justifyContent: "center" }}
        onClick={() => onClick(genre)}
      >
        {genre.toUpperCase()}
      </button>
    </div>
  );
}
