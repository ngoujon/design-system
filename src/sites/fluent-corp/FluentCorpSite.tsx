import { useState } from "react";

import { img } from "../../lib/img";
import "./fluent-corp.css";

const logos = ["ACME Corp", "Nordis", "Vantage", "Cirrus", "Meridian", "Altura", "Keystone"];

const users = [
  { name: "Camille Aubert", email: "c.aubert@vantage.io", role: "Admin", team: "Finance", status: "Actif", avatar: "1573497019940-1c28c88b4f3e" },
  { name: "Julien Marchand", email: "j.marchand@vantage.io", role: "Éditeur", team: "Produit", status: "Actif", avatar: "1500648767791-00dcc994a43e" },
  { name: "Aïcha Diallo", email: "a.diallo@vantage.io", role: "Lecteur", team: "Juridique", status: "Invité", avatar: "1531746020798-e6953c6e8e04" },
  { name: "Pierre Lemoine", email: "p.lemoine@vantage.io", role: "Éditeur", team: "IT", status: "Suspendu", avatar: "1472099645785-5658abf4ff4e" },
];

const tabs = [
  {
    id: "identity",
    label: "Identité",
    title: "Un annuaire unique pour 50 000 collaborateurs",
    desc: "Provisionnez et révoquez les accès automatiquement depuis votre SIRH. SSO, SCIM, MFA adaptatif et revues d'accès trimestrielles en un clic.",
    points: ["SSO SAML & OIDC", "Provisioning SCIM 2.0", "Revues d'accès automatisées"],
  },
  {
    id: "billing",
    label: "Facturation",
    title: "Refacturation interne, sans tableur",
    desc: "Allouez chaque licence logicielle à un centre de coût, suivez les dépenses SaaS en temps réel et identifiez les licences dormantes.",
    points: ["Centres de coût illimités", "Détection des licences inutilisées", "Export comptable FEC"],
  },
  {
    id: "compliance",
    label: "Conformité",
    title: "Prêt pour l'audit, toute l'année",
    desc: "Collecte automatique des preuves, journal d'audit immuable et rapports prêts pour SOC 2, ISO 27001, NIS2 et DORA.",
    points: ["Journal d'audit immuable", "320 contrôles pré-configurés", "Rapports auditeurs en PDF"],
  },
];

const plans = [
  { name: "Team", price: "12 €", unit: "/ utilisateur / mois", desc: "Pour les PME jusqu'à 250 personnes.", features: ["SSO & MFA", "Annuaire centralisé", "Intégrations standard", "Support e-mail"] },
  { name: "Business", price: "24 €", unit: "/ utilisateur / mois", desc: "Pour les ETI multi-entités.", features: ["Tout Team, plus :", "Provisioning SCIM", "Refacturation interne", "Revues d'accès", "Support 24/7"], featured: true },
  { name: "Enterprise", price: "Sur mesure", unit: "", desc: "Pour les grands comptes régulés.", features: ["Tout Business, plus :", "Hébergement dédié UE", "NIS2 & DORA", "TAM dédié", "SLA 99,99 %"] },
];

const statusColor: Record<string, string> = {
  Actif: "fc-badge-green",
  Invité: "fc-badge-indigo",
  Suspendu: "fc-badge-gray",
};

function ProductMock({ tab }: { tab: string }) {
  if (tab === "billing") {
    return (
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#0a2540]">Dépenses SaaS — septembre</p>
          <span className="fc-badge fc-badge-green">−14 % vs août</span>
        </div>
        <p className="text-3xl font-semibold text-[#0a2540]">184 320,00 €</p>
        <div className="mt-5 flex h-36 items-end gap-3">
          {[62, 70, 58, 80, 75, 88, 66, 72, 60, 54, 50, 48].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i > 8 ? "#635bff" : "#c7c4ff" }} />
          ))}
        </div>
        <div className="mt-5 space-y-2 text-sm">
          {[
            ["Figma", "Design", "18 420 €", "12 licences dormantes"],
            ["Salesforce", "Ventes", "62 100 €", ""],
            ["Notion", "Tous", "9 840 €", "4 licences dormantes"],
          ].map(([a, b, c, d]) => (
            <div key={a} className="flex items-center justify-between rounded-lg border border-[#e6ebf1] px-3 py-2">
              <span className="font-medium text-[#0a2540]">{a}</span>
              <span className="text-[#697386]">{b}</span>
              {d ? <span className="fc-badge fc-badge-amber">{d}</span> : <span />}
              <span className="font-medium text-[#0a2540]">{c}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (tab === "compliance") {
    return (
      <div className="p-5">
        <p className="mb-4 text-sm font-semibold text-[#0a2540]">Préparation à l'audit</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["SOC 2 Type II", 96],
            ["ISO 27001", 91],
            ["NIS2", 78],
            ["DORA", 64],
          ].map(([n, v]) => (
            <div key={n} className="rounded-xl border border-[#e6ebf1] p-4">
              <p className="text-xs text-[#697386]">{n}</p>
              <p className="mt-1 text-2xl font-semibold text-[#0a2540]">{v} %</p>
              <div className="mt-2 h-1.5 rounded-full bg-[#eef1f6]">
                <div className="h-full rounded-full bg-[#635bff]" style={{ width: `${v}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {[
            ["✓", "Chiffrement des postes vérifié", "il y a 2 h"],
            ["✓", "Revue des accès admin — Q3", "hier"],
            ["!", "3 comptes sans MFA", "à traiter"],
          ].map(([i, t, d]) => (
            <div key={t} className="flex items-center gap-3 rounded-lg bg-[#f6f9fc] px-3 py-2">
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${i === "!" ? "bg-[#fff4e5] text-[#b25e09]" : "bg-[#e8f8ef] text-[#0e8a4a]"}`}>{i}</span>
              <span className="flex-1 text-[#0a2540]">{t}</span>
              <span className="text-xs text-[#697386]">{d}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#0a2540]">Utilisateurs · 1 284</p>
        <button className="fc-btn fc-btn-primary !px-3 !py-1.5 text-xs">+ Inviter</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-[11px] uppercase tracking-wide text-[#697386]">
            <th className="pb-2 font-medium">Nom</th>
            <th className="pb-2 font-medium max-sm:hidden">Équipe</th>
            <th className="pb-2 font-medium">Rôle</th>
            <th className="pb-2 font-medium">Statut</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.email} className="border-t border-[#e6ebf1]">
              <td className="py-2.5">
                <div className="flex items-center gap-2.5">
                  <img src={img(u.avatar, 64, 64)} alt="" className="h-7 w-7 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-[#0a2540]">{u.name}</p>
                    <p className="text-[11px] text-[#697386]">{u.email}</p>
                  </div>
                </div>
              </td>
              <td className="text-[#425466] max-sm:hidden">{u.team}</td>
              <td className="text-[#425466]">{u.role}</td>
              <td>
                <span className={`fc-badge ${statusColor[u.status]}`}>{u.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FluentCorpSite() {
  const [tab, setTab] = useState("identity");
  const current = tabs.find((t) => t.id === tab)!;

  return (
    <div className="fc-root min-h-full">
      <div className="fc-stripe" aria-hidden="true" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="fc-logo flex items-center gap-2 text-[#0a2540]">
            <span className="fc-logo-mark" />
            corda
          </div>
          <nav className="hidden gap-7 text-[15px] font-medium text-[#0a2540] lg:flex">
            {["Produits", "Solutions", "Développeurs", "Ressources", "Tarifs"].map((l) => (
              <a key={l} href="#" className="flex items-center gap-1 hover:text-[#635bff]">
                {l}
                {l !== "Tarifs" && <span className="text-[10px] opacity-70">▾</span>}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-[15px] font-medium text-[#0a2540] sm:block">
              Se connecter →
            </a>
            <button className="fc-btn fc-btn-white">Contacter les ventes</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <span className="fc-chip mb-6 inline-flex items-center gap-2">
            <span className="rounded-full bg-[#635bff] px-2 py-0.5 text-[11px] font-semibold text-white">Nouveau</span>
            Corda pour l'IT : gérez aussi les appareils →
          </span>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#0a2540] md:text-[4.1rem]">
            L'infrastructure de gestion pour entreprises exigeantes
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#425466]">
            Des millions de collaborateurs dans 40 pays s'appuient sur Corda pour gérer leurs identités, leurs licences logicielles et leur conformité — dans une seule plateforme.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="fc-btn fc-btn-primary">Démarrer maintenant →</button>
            <button className="fc-btn fc-btn-ghost">Demander une démo →</button>
          </div>
        </div>
        <div className="relative">
          <div className="fc-card fc-card-lg overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[#e6ebf1] bg-[#f6f9fc] px-4 py-2.5">
              <span className="fc-logo-mark !h-4 !w-4" />
              <span className="text-xs font-medium text-[#0a2540]">Vantage Group</span>
              <span className="ml-auto rounded bg-white px-2 py-0.5 text-[11px] text-[#697386] ring-1 ring-[#e6ebf1]">⌘K Rechercher</span>
            </div>
            <ProductMock tab="identity" />
          </div>
          <div className="fc-card fc-float absolute -bottom-8 -left-8 w-64 p-4 max-md:hidden">
            <p className="text-xs text-[#697386]">Accès révoqués automatiquement</p>
            <p className="mt-1 text-2xl font-semibold text-[#0a2540]">312</p>
            <p className="text-xs text-[#0e8a4a]">↑ départs synchronisés depuis Workday</p>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 items-center gap-8 text-center sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((l, i) => (
            <span key={l} className="fc-client text-[#8792a2]" style={{ fontStyle: i % 3 === 1 ? "italic" : "normal", letterSpacing: i % 2 ? "0.08em" : "-0.02em" }}>
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="fc-soft relative z-10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="fc-eyebrow">Une plateforme, trois produits</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[#0a2540]">Tout ce dont vos équipes IT, finance et conformité ont besoin.</h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={`fc-tab ${tab === t.id ? "fc-tab-active" : ""}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="text-2xl font-semibold text-[#0a2540]">{current.title}</h3>
              <p className="mt-4 leading-relaxed text-[#425466]">{current.desc}</p>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[#0a2540]">
                    <span className="fc-check">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#" className="fc-link mt-8 inline-block font-semibold">
                Découvrir {current.label} →
              </a>
            </div>
            <div className="fc-card fc-card-lg overflow-hidden bg-white">
              <ProductMock tab={tab} />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 border-l border-[#e6ebf1] md:grid-cols-4">
          {[
            ["99,999 %", "de disponibilité historique"],
            ["4 800+", "entreprises clientes"],
            ["62 M", "d'identités gérées"],
            ["< 200 ms", "latence d'authentification"],
          ].map(([v, l]) => (
            <div key={l} className="fc-metric pl-6">
              <p className="text-3xl font-semibold tracking-tight text-[#0a2540]">{v}</p>
              <p className="mt-1 text-[15px] text-[#425466]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developers */}
      <section className="fc-dark relative z-10 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="fc-eyebrow !text-[#a5a1ff]">Pour les développeurs</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">Une API pensée pour s'intégrer partout.</h2>
            <p className="mt-4 leading-relaxed text-[#adbdcc]">
              REST, webhooks, SDK en 7 langages et un environnement de test illimité. Automatisez l'arrivée d'un collaborateur en 12 lignes de code.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              {[
                ["Documentation", "Guides et référence complète"],
                ["SDK", "Node, Python, Go, Java…"],
                ["Webhooks", "140 événements signés"],
                ["Sandbox", "Données de test illimitées"],
              ].map(([t, d]) => (
                <div key={t} className="border-l border-white/15 pl-4">
                  <p className="font-semibold text-white">{t}</p>
                  <p className="text-[#adbdcc]">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="fc-code overflow-hidden rounded-xl">
            <div className="flex gap-4 border-b border-white/10 px-4 py-3 text-xs text-[#adbdcc]">
              <span className="text-white">onboarding.ts</span>
              <span>webhook.py</span>
              <span>curl</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
              <code>
                <span className="c-k">import</span> {"{ Corda }"} <span className="c-k">from</span> <span className="c-s">"@corda/node"</span>;{"\n\n"}
                <span className="c-k">const</span> corda = <span className="c-k">new</span> <span className="c-f">Corda</span>(process.env.<span className="c-p">CORDA_KEY</span>);{"\n\n"}
                <span className="c-c">// Nouvelle recrue : accès, licences, appareil</span>{"\n"}
                <span className="c-k">await</span> corda.users.<span className="c-f">create</span>({"{"}{"\n"}
                {"  "}email: <span className="c-s">"a.diallo@vantage.io"</span>,{"\n"}
                {"  "}team: <span className="c-s">"juridique"</span>,{"\n"}
                {"  "}costCenter: <span className="c-s">"CC-4120"</span>,{"\n"}
                {"  "}apps: [<span className="c-s">"slack"</span>, <span className="c-s">"notion"</span>, <span className="c-s">"docusign"</span>],{"\n"}
                {"  "}device: {"{"} model: <span className="c-s">"macbook-air-m4"</span> {"}"},{"\n"}
                {"}"});{"\n\n"}
                <span className="c-c">// → 201 Created · 3 licences allouées · 184 ms</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="fc-card grid overflow-hidden lg:grid-cols-2">
          <img src={img("1600880292203-757bb62b4baf", 1000, 800)} alt="Équipe en réunion" className="h-full min-h-[320px] w-full object-cover" />
          <div className="p-10">
            <p className="fc-client text-[#0a2540]">Meridian</p>
            <blockquote className="mt-6 text-2xl font-medium leading-snug text-[#0a2540]">
              « Nous avons consolidé 14 outils en un seul et passé notre audit ISO 27001 en six semaines au lieu de six mois. »
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src={img("1519085360753-af0119f7cbe7", 96, 96)} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-sm">
                <p className="font-semibold text-[#0a2540]">Olivier Garnier</p>
                <p className="text-[#697386]">DSI, Meridian Group · 12 000 collaborateurs</p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#e6ebf1] pt-8">
              {[
                ["−71 %", "tickets d'accès"],
                ["1,2 M€", "économisés / an"],
                ["6 sem.", "pour l'audit"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl font-semibold text-[#635bff]">{v}</p>
                  <p className="text-sm text-[#425466]">{l}</p>
                </div>
              ))}
            </div>
            <a href="#" className="fc-link mt-8 inline-block font-semibold">
              Lire l'étude de cas →
            </a>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="fc-eyebrow">Sécurité & conformité</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0a2540]">La confiance, par conception.</h2>
            <p className="mt-4 text-[#425466]">Données hébergées en France et en Allemagne, chiffrement de bout en bout, tests d'intrusion trimestriels.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["SOC 2 Type II", "ISO 27001", "HDS", "RGPD"].map((c) => (
              <div key={c} className="fc-card flex flex-col items-center gap-3 p-5 text-center">
                <span className="fc-shield">✓</span>
                <span className="text-sm font-semibold text-[#0a2540]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="fc-soft relative z-10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="fc-eyebrow">Tarifs</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0a2540]">Un prix clair, qui grandit avec vous.</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`fc-card flex flex-col p-8 ${p.featured ? "fc-featured" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-[#0a2540]">{p.name}</p>
                  {p.featured && <span className="fc-chip !py-0.5 text-xs">Recommandé</span>}
                </div>
                <p className="mt-1 text-sm text-[#425466]">{p.desc}</p>
                <p className="mt-6">
                  <span className="text-4xl font-semibold tracking-tight text-[#0a2540]">{p.price}</span>
                  <span className="text-sm text-[#697386]"> {p.unit}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-[15px] text-[#425466]">
                  {p.features.map((f, i) => (
                    <li key={f} className="flex items-center gap-2.5">
                      {i === 0 && f.endsWith(":") ? <span className="font-medium text-[#0a2540]">{f}</span> : (
                        <>
                          <span className="fc-check">✓</span>
                          {f}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <button className={`fc-btn mt-8 w-full justify-center ${p.featured ? "fc-btn-primary" : "fc-btn-outline"}`}>
                  {p.name === "Enterprise" ? "Contacter les ventes" : "Commencer l'essai"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0a2540]">Prêt à simplifier votre SI ?</h2>
          <p className="mt-4 text-lg text-[#425466]">Créez un compte en 3 minutes ou parlez à un expert pour construire une offre sur mesure.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="fc-btn fc-btn-primary">Démarrer maintenant →</button>
            <button className="fc-btn fc-btn-ghost">Contacter les ventes →</button>
          </div>
        </div>
        {[
          ["⚡", "Tarification à l'usage", "Aucun engagement, facturé au nombre d'utilisateurs actifs."],
          ["⌘", "Intégration en jours", "120+ connecteurs natifs et une équipe d'intégration dédiée."],
        ].map(([i, t, d]) => (
          <div key={t} className="border-l border-[#e6ebf1] pl-6">
            <span className="fc-icon">{i}</span>
            <p className="mt-4 font-semibold text-[#0a2540]">{t}</p>
            <p className="mt-1 text-[15px] text-[#425466]">{d}</p>
          </div>
        ))}
      </section>

      <footer className="fc-soft relative z-10 border-t border-[#e6ebf1]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-5">
          <div>
            <div className="fc-logo flex items-center gap-2 text-[#0a2540]">
              <span className="fc-logo-mark" />
              corda
            </div>
            <p className="mt-4 text-sm text-[#697386]">🇫🇷 Français · EUR €</p>
          </div>
          {[
            ["Produits", ["Identité", "Facturation", "Conformité", "Appareils"]],
            ["Solutions", ["ETI", "Grands comptes", "Secteur public", "Santé"]],
            ["Développeurs", ["Documentation", "Référence API", "Statut", "Changelog"]],
            ["Entreprise", ["À propos", "Clients", "Carrières", "Presse"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="mb-4 text-sm font-semibold text-[#0a2540]">{t}</p>
              <ul className="space-y-2.5 text-sm text-[#425466]">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-[#0a2540]">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="border-t border-[#e6ebf1] py-6 text-center text-xs text-[#697386]">© 2026 Corda SAS — design system « Fluent Corp »</p>
      </footer>
    </div>
  );
}
