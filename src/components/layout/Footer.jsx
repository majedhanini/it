import "../../styles/footer.css";
import shabibaLogo from "../../assets/images/shabiba-logo.png";

function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img
                src={shabibaLogo}
                alt="شعار حركة الشبيبة الطلابية"
                className="footer-logo"
              />
            </div>

            <div className="footer-brand-text">
              <span className="footer-kicker">SHABIBA STUDENT MOVEMENT</span>

              <h2>حركة الشبيبة الطلابية</h2>

              <p>
                دليل موحد لجروبات طلبة كلية تكنولوجيا المعلومات والذكاء
                الاصطناعي، لتسهيل الوصول إلى جروبات الكلية والتخصصات والمساقات.
              </p>
            </div>
          </div>

          <div className="footer-info">
            <span className="footer-info-label">FACULTY OF IT & AI</span>

            <strong>كلية تكنولوجيا المعلومات والذكاء الاصطناعي</strong>

            <p>جروبات الكلية · جروبات التخصصات · جروبات المساقات</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>حركة الشبيبة الطلابية</span>
          <span>جامعة النجاح الوطنية</span>
        </div>

        <div className="footer-developer">
          <span className="developer-label">DESIGNED & DEVELOPED BY</span>

          <span className="developer-name">Majed Hanini</span>

          <span className="developer-line"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
