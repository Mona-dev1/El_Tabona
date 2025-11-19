export default function Modal({ children, onClose }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.8)", zIndex: 9999 }}
    >
      <div
        className="bg-dark p-3 rounded"
        style={{ maxWidth: "900px", width: "95%", textAlign: "center" }}
      >
        <button
          className="btn btn-close btn-close-white position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}
