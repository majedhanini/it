import itData from "../data/itData";
import "../styles/university-required.css";

function UniversityRequired({ navigate }) {
  return (
    <main className="university-page" dir="rtl">
      <section className="university-hero">
        <div className="container university-hero-container">
          <button
            type="button"
            className="university-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <span className="university-kicker">UNIVERSITY REQUIRED COURSES</span>

          <h1>
            إجباري <span>جامعة</span>
          </h1>

          <p>جروبات مساقات إجباري الجامعة المتاحة لطلبة الكلية.</p>
        </div>
      </section>

      <section className="university-courses-section">
        <div className="container">
          <div className="university-section-heading">
            <div>
              <span>COURSE GROUPS</span>
              <h2>اختر المساق</h2>
            </div>

            <p>اضغط على المساق للدخول إلى جروب الواتساب الخاص فيه.</p>
          </div>

          <div className="university-courses-grid">
            {itData.universityRequired.map((course, index) => {
              const hasLink = Boolean(course.url);

              return (
                <a
                  key={course.id}
                  className={`university-course-card ${
                    !hasLink ? "is-disabled" : ""
                  }`}
                  href={hasLink ? course.url : undefined}
                  target={hasLink ? "_blank" : undefined}
                  rel={hasLink ? "noopener noreferrer" : undefined}
                  onClick={(event) => {
                    if (!hasLink) {
                      event.preventDefault();
                    }
                  }}
                >
                  <div className="university-course-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="university-course-content">
                    <span>{course.englishName}</span>
                    <h3>{course.name}</h3>
                  </div>

                  <div className="university-course-action">
                    {hasLink ? "↗" : "قريبًا"}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default UniversityRequired;
