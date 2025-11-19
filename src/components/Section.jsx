export default function Section({ title, items }) {
  return (
    <div className="my-5">
      <h2
        className="text-center text-warning mb-4"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        {title}
      </h2>

      <div className="row g-3 section-box p-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="col-6 col-md-3"
            style={{ backgroundColor: "#111" }}
          >
            <div className="card text-white text-center p-2 rounded">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <p className="mb-1">{item.name}</p>
              <strong className="text-warning">{item.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
