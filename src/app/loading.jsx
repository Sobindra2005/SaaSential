export default function Loader() {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center">
      <div className="loader-container">
        <div className="loader">
          <span className="loader-text"></span>
        </div>
        <div className="loader">
          <span className="loader-text loader-text-small">Saa<span className="text-secondary">Sential</span></span>
        </div>
        <div className="loader">
          <span className="loader-text loader-text-tiny"></span>
        </div>
      </div>
    </div>
  );
}