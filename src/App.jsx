import { useEffect, useState } from "react";

import Home from "./pages/Home";
import BatchGroups from "./pages/BatchGroups";
import CourseGroups from "./pages/CourseGroups";
import MajorCourses from "./pages/MajorCourses";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import "./styles/global.css";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const navigate = (path) => {
    window.history.pushState({}, "", path);

    setCurrentPath(path);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToTop();
        });
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const cleanPath =
    currentPath !== "/" && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

  const pathParts = cleanPath.split("/").filter(Boolean);

  let page;

  if (cleanPath === "/") {
    page = <Home navigate={navigate} />;
  } else if (cleanPath === "/batch-groups") {
    page = <BatchGroups navigate={navigate} />;
  } else if (cleanPath === "/course-groups") {
    page = <CourseGroups navigate={navigate} />;
  } else if (cleanPath === "/course-groups/shared") {
    page = <MajorCourses navigate={navigate} majorId="shared" />;
  } else if (pathParts.length === 2 && pathParts[0] === "course-groups") {
    page = <MajorCourses navigate={navigate} majorId={pathParts[1]} />;
  } else {
    page = (
      <main
        dir="rtl"
        style={{
          minHeight: "70vh",
          display: "grid",
          placeItems: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div>
          <h1>الصفحة غير موجودة</h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            العودة للرئيسية
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header navigate={navigate} />

      {page}

      <Footer />
    </>
  );
}

export default App;
