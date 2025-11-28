import { Link } from "react-router-dom";

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
            className="col-12 col-xs-12 col-sm-6 col-lg-4 col-xl-3"
            style={{ backgroundColor: "#111" }}
          >
            <div className="card text-white text-center p-2 rounded mx-auto w-100">
              <img
                src={item.image[0]}
                alt={item.title}
                className="img-fluid rounded mb-2"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <Link to={`/product/${item.id}`}>
                <p className="mb-1">{item.title}</p>
              </Link>
              <strong className="text-warning">{item.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
