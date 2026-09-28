import { useMemo, useState, type MouseEvent } from "react";
import { NavLink } from "react-router-dom";

import { designSystems } from "../data/designSystems";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return designSystems;
    return designSystems.filter((ds) =>
      [ds.name, ds.category, ds.tagline].some((field) =>
        field.toLowerCase().includes(q),
      ),
    );
  }, [query]);

  async function handleCopy(e: MouseEvent, id: string, prompt: string) {
    e.preventDefault();
    e.stopPropagation();

    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(prompt);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      // navigator.clipboard requires a secure context (https or localhost);
      // fall back to the legacy execCommand approach for plain-http hosts
      // such as a LAN hostname.
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      document.body.removeChild(textarea);
    }

    if (copied) {
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1800);
    }
  }

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

        <div className="border-b border-neutral-800 px-3 py-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un design system..."
              className="w-full rounded-md border border-neutral-800 bg-neutral-900 py-2 pl-8 pr-3 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
            />
          </div>
        </div>

        <nav className="ds-scroll flex-1 overflow-y-auto px-3 py-3">
          <ul className="flex flex-col gap-1">
            {filtered.map((ds) => (
              <li key={ds.id} className="group relative">
                <NavLink
                  to={`/site/${ds.id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg py-2.5 pl-3 pr-9 text-sm transition-colors ${
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
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="truncate font-medium">{ds.name}</span>
                    <span className="w-fit rounded-full bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
                      {ds.category}
                    </span>
                    <span className="truncate text-xs text-neutral-500">
                      {ds.tagline}
                    </span>
                  </span>
                </NavLink>
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, ds.id, ds.prompt)}
                  aria-label={`Copier le prompt « ${ds.name} »`}
                  title="Copier le prompt pour un LLM"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-neutral-500 opacity-0 transition-opacity hover:bg-neutral-700 hover:text-white group-hover:opacity-100 focus:opacity-100"
                >
                  {copiedId === ds.id ? <CheckIcon /> : <CopyIcon />}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-3 py-6 text-center text-sm text-neutral-600">
                Aucun design system trouvé.
              </li>
            )}
          </ul>
        </nav>

        <div className="border-t border-neutral-800 px-5 py-3 text-xs text-neutral-600">
          {filtered.length} / {designSystems.length} design systems
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

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6 9 17l-5-5"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
