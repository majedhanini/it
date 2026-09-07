import itData from "../data/itData";
import "../styles/course-groups.css";

function CourseGroups({ navigate }) {
  return (
    <main className="course-groups-page" dir="rtl">
      <section className="course-groups-hero">
        <div className="container course-groups-hero-container">
          <button
            type="button"
            className="course-groups-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <span className="course-groups-kicker">IT & AI · COURSE GROUPS</span>

          <h1>
            جروبات
            <span> المساقات</span>
          </h1>

          <p>اختر تخصصك للوصول إلى جروبات المساقات الخاصة فيه.</p>
        </div>
      </section>

      <section className="major-courses-section">
        <div className="container">
          <div className="course-section-heading">
            <div>
              <span>IT & AI MAJORS</span>
              <h2>اختر تخصصك</h2>
            </div>

            <p>
              جروبات المساقات الخاصة بتخصصات كلية تكنولوجيا المعلومات والذكاء
              الاصطناعي.
            </p>
          </div>

          <div className="course-majors-grid">
            {itData.majors.map((major, index) => (
              <button
                type="button"
                key={major.id}
                className="course-major-card"
                onClick={() => navigate(`/course-groups/${major.id}`)}
              >
                <div className="course-major-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <span className="course-major-tag">IT & AI</span>
                </div>

                <div className="course-major-content">
                  <span>{major.englishName}</span>

                  <h3>{major.name}</h3>

                  <p>جروبات المساقات الخاصة بهذا التخصص.</p>
                </div>

                <div className="course-major-button">
                  <span>عرض جروبات المساقات</span>
                  <span>←</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CourseGroups;
