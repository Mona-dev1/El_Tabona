export default function Footer() {
  return (
    <footer
      className="py-3 px-4 d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "#031c1f", color: "#fff" }}
    >
      {/* LEFT TEXT */}
      <div className="footer-left">
        <span>© BakeDelight</span>
        <span> | Made with ❤️</span>
      </div>

      {/* ICONS */}
      <div className="d-flex gap-3 align-items-center icons">
        <a href="https://facebook.com" className="text-white fs-5">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-white fs-5">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="text-white fs-5">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" className="text-white fs-5">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}
