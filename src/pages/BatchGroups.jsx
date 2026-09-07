import itData from "../data/itData";
import "../styles/groups.css";

function BatchGroups({ navigate }) {
  return (
    <main className="groups-page" dir="rtl">
      <section className="groups-hero">
        <div className="container groups-hero-container">
          <button
            type="button"
            className="groups-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <span className="groups-kicker">BATCH 126 · MAJOR GROUPS</span>

          <h1>جروبات تخصصات دفعة 126</h1>

          <p>اختر تخصصك للدخول إلى جروب دفعة 126 الخاص فيه.</p>
        </div>
      </section>

      <section className="major-groups-section">
        <div className="container">
          <div className="groups-section-title">
            <span>IT & AI MAJORS</span>

            <h2>اختر تخصصك</h2>

            <p>جروبات دفعة 126 الخاصة بتخصصات الكلية.</p>
          </div>

          <div className="major-groups-grid">
            {itData.majors.map((major, index) => (
              <a
                key={major.id}
                className="major-group-card"
                href={major.batchGroup}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="major-group-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <span className="major-group-tag">126</span>
                </div>

                <div className="major-group-content">
                  <span>{major.englishName}</span>

                  <h3>{major.name}</h3>
                </div>

                <div className="major-group-button">
                  <span>دخول جروب الدفعة</span>

                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BatchGroups;
