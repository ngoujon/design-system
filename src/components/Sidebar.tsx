import { NavLink } from "react-router-dom";

import { designSystems } from "../data/designSystems";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-neutral-800 bg-neutral-950 text-neutral-100 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-5 py-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Design Systems
            </p>
            <p className="text-xs text-neutral-500">Inspiration 2026</p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Masquer la sidebar"
            className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <ChevronLeftIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {designSystems.map((ds) => (
              <li key={ds.id}>
                <NavLink
                  to={`/site/${ds.id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100"
                    }`
                  }
                >
                  <span
                    className="h-6 w-6 shrink-0 rounded-md"
                    style={{
                      background: `linear-gradient(135deg, ${ds.swatch[0]}, ${ds.swatch[1]})`,
                    }}
                  />
                  <span className="flex flex-col">
                    <span className="font-medium">{ds.name}</span>
                    <span className="text-xs text-neutral-500">
                      {ds.tagline}
                    </span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-neutral-800 px-5 py-3 text-xs text-neutral-600">
          {designSystems.length} design systems
        </div>
      </aside>

      {!open && (
        <button
          type="button"
          onClick={onToggle}
          aria-label="Afficher la sidebar"
          className="fixed left-4 top-4 z-40 flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 shadow-lg hover:bg-neutral-900"
        >
          <ChevronRightIcon />
          Design systems
        </button>
      )}
    </>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
