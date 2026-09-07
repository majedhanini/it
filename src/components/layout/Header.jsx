import "../../styles/header.css";

function Header({ navigate }) {
  const goToFacultyGroups = () => {
    navigate("/");

    setTimeout(() => {
      document.querySelector("#faculty-groups")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <header className="site-header" dir="rtl">
      <div className="container header-container">
        <button
          type="button"
          className="header-brand"
          onClick={() => navigate("/")}
        >
          <div className="header-logo-wrap">
            <img
              src="/shabiba-logo.png"
              alt="شعار حركة الشبيبة الطلابية"
              className="header-logo"
            />
          </div>

          <div className="header-brand-text">
            <span>SHABIBA STUDENT MOVEMENT</span>
            <strong>دليل جروبات IT & AI</strong>
          </div>
        </button>

        <nav className="header-nav">
          <button type="button" onClick={() => navigate("/")}>
            الرئيسية
          </button>

          <button type="button" onClick={goToFacultyGroups}>
            جروبات الكلية
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
