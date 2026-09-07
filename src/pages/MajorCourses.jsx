import itData from "../data/itData";
import "../styles/course-groups.css";

function MajorCourses({ navigate, majorId }) {
  const major = itData.majors.find((item) => item.id === majorId);

  if (!major) {
    return (
      <main className="major-course-page" dir="rtl">
        <div className="container major-course-container">
          <button
            type="button"
            className="course-groups-back"
            onClick={() => navigate("/course-groups")}
          >
            <span>→</span>
            <span>العودة لجروبات المساقات</span>
          </button>

          <div className="major-course-empty">
            <div className="course-empty-icon">!</div>

            <h2>التخصص غير موجود</h2>

            <p>لم نتمكن من العثور على الصفحة المطلوبة.</p>
          </div>
        </div>
      </main>
    );
  }

  const courses = major.courses || [];

  return (
    <main className="major-course-page" dir="rtl">
      <div className="container major-course-container">
        <button
          type="button"
          className="course-groups-back"
          onClick={() => navigate("/course-groups")}
        >
          <span>→</span>
          <span>العودة لجروبات المساقات</span>
        </button>

        <section className="major-course-heading">
          <span>COURSE GROUPS</span>

          <h1>{major.name}</h1>

          <p>{major.englishName}</p>
        </section>

        {courses.length > 0 ? (
          <div className="course-links-grid">
            {courses.map((course, index) => (
              <a
                key={course.id}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="course-link-card"
              >
                <div className="course-link-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="course-link-content">
                  <span>{course.englishName}</span>

                  <h3>{course.name}</h3>
                </div>

                <div className="course-link-open">
                  <span>دخول الجروب</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="major-course-empty">
            <div className="course-empty-icon">+</div>

            <h2>لا توجد جروبات مضافة حاليًا</h2>

            <p>سيتم إضافة جروبات مساقات هذا التخصص عند توفرها.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default MajorCourses;
