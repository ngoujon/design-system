import { Suspense, useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import { designSystems } from "./data/designSystems";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  // Each showcase is a long page: start every newly selected site at the top.
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-full bg-neutral-900">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <main
        ref={mainRef}
        className={`h-full overflow-y-auto transition-[margin] duration-300 ease-in-out ${
          sidebarOpen ? "ml-72" : "ml-0"
        }`}
      >
        <Suspense fallback={<div className="h-full bg-neutral-900" />}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/site/${designSystems[0].id}`} replace />}
            />
            {designSystems.map((ds) => (
              <Route
                key={ds.id}
                path={`/site/${ds.id}`}
                element={<ds.component />}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={`/site/${designSystems[0].id}`} replace />}
            />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
