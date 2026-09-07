import itData from "../data/itData";
import "../styles/home.css";

function Home({ navigate }) {
  return (
    <main className="home-page" dir="rtl">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-shabiba">
            <div className="hero-shabiba-logo-wrap">
              <img
                src="/shabiba-logo.png"
                alt="شعار حركة الشبيبة الطلابية"
                className="hero-shabiba-logo"
              />
            </div>

            <div className="hero-shabiba-text">
              <strong>حركة الشبيبة الطلابية</strong>
              <span>SHABIBA STUDENT MOVEMENT</span>
            </div>
          </div>

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

          <div className="hero-note">
            <span className="hero-note-dot"></span>

            <p>
              جروبات الدفعة مخصصة لدفعة 126، بينما جروبات المساقات متاحة لجميع
              طلبة الكلية.
            </p>
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
