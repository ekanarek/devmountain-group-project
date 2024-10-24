export default function GenreButton({ genre }) {
  return (
    <div style={{ paddingTop: "12px" }}>
      <button style={{ width: "300px", justifyContent: "center" }}>
        {genre}
      </button>
    </div>
  );
}
