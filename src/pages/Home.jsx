import itData from "../data/itData";
import "../styles/home.css";

function Home({ navigate }) {
  return (
    <main className="home-page" dir="rtl">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <span className="hero-kicker">
            FACULTY OF INFORMATION TECHNOLOGY & AI
          </span>

          <h1>
            دليل جروبات كلية
            <span> تكنولوجيا المعلومات والذكاء الاصطناعي</span>
          </h1>

          <p className="hero-description">
            مكان واحد يجمع جروبات طلبة الكلية، جروبات دفعة 126، وجروبات المساقات
            لجميع الدفعات والتخصصات.
          </p>

          <div className="groups-update-note">
            <div className="groups-update-note-icon">!</div>

            <div className="groups-update-note-content">
              <strong>تنويه بخصوص جروبات المساقات</strong>

              <p>
                يتم تحديث وتجديد روابط جروبات المساقات مع بداية كل فصل دراسي،
                لضمان وصول الطلبة إلى الجروبات المحدثة والفعّالة.
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-primary-button"
              onClick={() => navigate("/batch-groups")}
            >
              <span>جروبات دفعة 126</span>
              <span>←</span>
            </button>

            <button
              type="button"
              className="hero-secondary-button"
              onClick={() => navigate("/course-groups")}
            >
              <span>جروبات المساقات</span>
              <span>←</span>
            </button>
          </div>
        </div>
      </section>

      {/* UNIVERSITY REQUIRED */}
      <section className="university-entry-section" id="university-required">
        <div className="container">
          <button
            type="button"
            className="university-entry-card"
            onClick={() => navigate("/university-required")}
          >
            <div className="university-entry-content">
              <span>UNIVERSITY REQUIRED COURSES</span>

              <h2>إجباري جامعة</h2>

              <p>ادخل للوصول إلى جروبات مساقات إجباري الجامعة.</p>
            </div>

            <div className="university-entry-arrow">←</div>
          </button>
        </div>
      </section>

      {/* FACULTY GROUPS */}
      <section className="faculty-home-section" id="faculty-groups">
        <div className="container">
          <div className="faculty-home-heading">
            <div>
              <span>FACULTY COMMUNITY</span>
              <h2>جروبات الكلية</h2>
            </div>

            <p>
              الجروبات العامة للتواصل بين طلبة كلية تكنولوجيا المعلومات والذكاء
              الاصطناعي.
            </p>
          </div>

          <div className="faculty-home-grid">
            <a
              className="faculty-home-card"
              href={itData.facultyGroups.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="faculty-card-icon">WA</div>

              <div className="faculty-card-content">
                <span>WHATSAPP</span>

                <div className="faculty-card-note">خاص بطلبة دفعة 126</div>

                <h3>{itData.facultyGroups.whatsapp.name}</h3>

                <p>
                  الجروب الخاص بطلبة كلية تكنولوجيا المعلومات والذكاء الاصطناعي
                  - دفعة 126.
                </p>
              </div>

              <div className="faculty-card-arrow">↗</div>
            </a>

            <a
              className="faculty-home-card"
              href={itData.facultyGroups.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="faculty-card-icon">FB</div>

              <div className="faculty-card-content">
                <span>FACEBOOK</span>

                <h3>{itData.facultyGroups.facebook.name}</h3>

                <p>
                  تجمع عام لطلبة كلية تكنولوجيا المعلومات والذكاء الاصطناعي.
                </p>
              </div>

              <div className="faculty-card-arrow">↗</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
