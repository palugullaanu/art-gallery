const artworks = [
  {
    id: 1,
    title: "Mona Lisa",
    image: "https://picsum.photos/300?1"
  },
  {
    id: 2,
    title: "Starry Night",
    image: "https://picsum.photos/300?2"
  },
  {
    id: 3,
    title: "Modern Art",
    image: "https://picsum.photos/300?3"
  }
];

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {artworks.map((art) => (
          <div key={art.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "250px",
            borderRadius: "8px"
          }}>
            <img src={art.image} alt={art.title} width="100%" />
            <h3>{art.title}</h3>
            <button
              style={{
                padding: "8px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "5px"
              }}
              onClick={() => alert("Purchase Successful!")}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}