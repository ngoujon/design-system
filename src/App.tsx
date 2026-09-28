import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import { designSystems } from "./data/designSystems";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-full bg-neutral-900">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <main
        className={`h-full overflow-y-auto transition-[margin] duration-300 ease-in-out ${
          sidebarOpen ? "ml-72" : "ml-0"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/site/${designSystems[0].id}`} replace />}
          />
          {designSystems.map((ds) => (
            <Route key={ds.id} path={`/site/${ds.id}`} element={<ds.component />} />
          ))}
          <Route
            path="*"
            element={<Navigate to={`/site/${designSystems[0].id}`} replace />}
          />
        </Routes>
      </main>
    </div>
  );
}
