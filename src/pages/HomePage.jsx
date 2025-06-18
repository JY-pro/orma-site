import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ------------------------------ DATA ------------------------------
  const navItems = [
    { label: "Home", to: "#home" },
    { label: "Story", to: "#story" },
    { label: "Philosophy", to: "#philosophy" },
    { label: "Sustainability", to: "#sustainability" },
    { label: "Collection", to: "#collection" },
    { label: "Journal", to: "#journal" },
    { label: "Contact", to: "#contact" }
  ];

  const values = [
    {
      title: "Skin‑first Science",
      desc: "Active levels backed by peer‑reviewed literature and verified in‑house stability/efficacy tests."
    },
    {
      title: "Luxury without Compromise",
      desc: "Fine‑fragrance accords, cashmere textures, and recyclable glass or aluminium components."
    },
    {
      title: "Conscious Beauty",
      desc: "RSPO‑certified emollients, traceable botanicals, never animal‑derived, and cruelty‑free."
    },
    {
      title: "Designed for Women 40+",
      desc: "Addresses barrier thinning, dehydration, dullness, and emerging pigment without heavy occlusion."
    }
  ];

  const sustainability = [
    {
      pillar: "Packaging Circularity",
      goal: "≥85 % recyclable or refillable",
      progress: "73 % (glass & aluminium)"
    },
    {
      pillar: "Low‑Impact Sourcing",
      goal: "100 % RSPO‑segregated palm",
      progress: "58 % converted; remainder Q4"
    },
    {
      pillar: "Transparent Supply Chain",
      goal: "Publish full INCI origin map",
      progress: "Data collection; live Q3"
    },
    {
      pillar: "Net‑Zero by 2030",
      goal: "Scope 1 & 2 offsets from launch",
      progress: "Audit scheduled with provider"
    }
  ];

  const glossary = [
    { inci: "Niacinamide", why: "Strengthens barrier, reduces pigmentation (4–5 %)", products: "Serum, Cleanser" },
    { inci: "Peptide Tri‑Complex", why: "Signals collagen I/III boost in vitro", products: "Moisturiser" },
    { inci: "Non‑nano Zinc Oxide", why: "Broad‑spectrum UV + visible‑light scatter", products: "Sunscreen" },
    { inci: "Urea (5 %)", why: "NMF mimetic; gentle keratolytic", products: "Hand Cream" },
    { inci: "Shea Butter", why: "Stearic/oleic‑rich lipid replenisher", products: "Hand Cream" },
    { inci: "Squalane", why: "Light biomimetic emollient, ECOCERT", products: "Moisturiser, Serum" }
  ];

  const collection = [
    {
      name: "Luminous Renewal Serum",
      type: "Weightless water‑gel",
      actives: "5 % Niacinamide • Multi‑weight HA • Tri‑peptide Brightener",
      claim: "96 % saw noticeably brighter skin in 4 weeks†",
      sensory: "Dew‑drop texture; white‑tea & bergamot accord",
      packaging: "Frosted‑glass airless pump (50 mL)"
    },
    {
      name: "Velvet Cleanse Cream",
      type: "Oil‑in‑water cushioning emulsion",
      actives: "2 % Niacinamide • Aloe Vera • Ceramide‑boost blend",
      claim: "Dissolves SPF & long‑wear makeup while supporting barrier",
      sensory: "Massage 30 s on dry skin, add water, rinse",
      packaging: "—"
    },
    {
      name: "Hydra‑Lift Moisturiser",
      type: "Silky mid‑weight cream",
      actives: "Peptide Tri‑Complex • 3 % Squalane • Encaps. Vitamin C • Prickly‑Pear",
      claim: "+19 % firmness & +44 % hydration in 28 days†",
      sensory: "Cloud‑cream, velvet finish; rose‑tea aroma",
      packaging: "Refillable glass jar 50 mL"
    },
    {
      name: "Radiant Shield SPF 50",
      type: "Hybrid mineral–organic lotion",
      actives: "12 % ZnO • 7 % Tinosorb S • Vitamin E • Green‑Tea Catechins",
      claim: "Broad‑spectrum UVA/UVB, PA++++, reef‑safe",
      sensory: "Feather‑light, invisible; fragrance‑free",
      packaging: "—"
    },
    {
      name: "Replenishing Hand Cream",
      type: "Rich oil‑in‑water emulsion",
      actives: "Shea Butter • 5 % Urea • Panthenol • Allantoin",
      claim: "Repairs micro‑cracks, boosts moisture 8 h",
      sensory: "Velvet balm‑to‑cream; sandalwood‑floral trail",
      packaging: "PCR aluminium tube 50 mL"
    }
  ];

  const routines = {
    morning: [
      "Velvet Cleanse Cream",
      "Luminous Renewal Serum",
      "Hydra‑Lift Moisturiser",
      "Radiant Shield SPF 50"
    ],
    evening: [
      "Velvet Cleanse Cream (double‑cleanse)",
      "Luminous Renewal Serum",
      "Hydra‑Lift Moisturiser",
      "Replenishing Hand Cream"
    ]
  };

  // ------------------------------ RENDER ------------------------------
  return (
    <div className="font-sans antialiased scroll-smooth text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-950">
      {/* -------------------------- NAVIGATION -------------------------- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#home" className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary-600">ORMA</span>
          </a>

          <nav className="hidden md:flex gap-6">
            {navItems.map(({ label, to }) => (
              <a
                key={label}
                href={to}
                className="relative text-sm font-medium hover:text-primary-600 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map(({ label, to }) => (
                <a
                  key={label}
                  href={to}
                  className="text-sm font-medium hover:text-primary-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ----------------------------- HERO ----------------------------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 pt-24 md:pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 md:px-0 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">From Leaf to Luxe</h1>
          <p className="text-xl md:text-2xl font-medium mb-6">
            Skincare that leaves only a beautiful trace
          </p>
          <p className="text-sm md:text-base uppercase tracking-wide mb-8">
            Targeted Age Support&nbsp;•&nbsp;Sensorial Botanicals&nbsp;•&nbsp;Conscious Science
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#collection">Shop the Collection</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#story">Discover Our Story</a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ----------------------------- STORY ---------------------------- */}
      <section id="story" className="container mx-auto py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Story
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Heritage</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Founded in 2025 by six Pharmaceutical Science graduates at Monash
              University, ORMA marries academic rigour with modern perfumery.
              <em> Orma</em>—Italian for "trace" or "scent trail"—captures our
              mission to leave skin visibly renewed while treading lightly on
              the planet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What Drives Us</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map(({ title, desc }) => (
                <Card key={title} className="h-full">
                  <CardContent className="p-6 space-y-2">
                    <h4 className="font-semibold text-primary-600">{title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ------------------------- PHILOSOPHY --------------------------- */}
      <section id="philosophy" className="bg-gray-50 dark:bg-gray-900/40 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Formulation Philosophy
          </motion.h2>

          <p className="italic text-center text-gray-700 dark:text-gray-300 mb-12">
            “Clinically proven where it counts, botanically elevated everywhere
            else.”
          </p>

          <div className="space-y-8 text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-semibold mb-2">Active‑First Framework</h3>
              <p>
                We start with evidence‑based percentages of hero ingredients
                (e.g., 5 % Niacinamide, 12 % non‑nano ZnO) and build the
                texture around them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Synergistic Blends</h3>
              <p>
                Every formula combines at least one dermatology‑grade molecule
                with a phyto‑extract that enhances the same pathway (ex:
                Peptide + Hibiscus Seed to support collagen).
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Triple‑Testing Protocol</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Stability (4 °C, 25 °C, 45 °C; 12 weeks)</li>
                <li>Safety (patch testing on ≥25 volunteers, HRIPT planned)</li>
                <li>
                  Efficacy (instrumental TEWL, image analysis,
                  consumer‑perception studies)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- SUSTAINABILITY ------------------------- */}
      <section id="sustainability" className="container mx-auto py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Sustainability Commitments
        </motion.h2>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
            <thead>
              <tr className="bg-primary-600 text-white text-left">
                <th className="p-3 font-semibold">Pillar</th>
                <th className="p-3 font-semibold">2025 Goal</th>
                <th className="p-3 font-semibold">Progress</th>
              </tr>
            </thead>
            <tbody>
              {sustainability.map(({ pillar, goal, progress }, idx) => (
                <tr key={pillar} className={idx % 2 ? "bg-gray-50 dark:bg-gray-900/30" : ""}>
                  <td className="p-3">{pillar}</td>
                  <td className="p-3">{goal}</td>
                  <td className="p-3">{progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ------------------- INGREDIENT GLOSSARY SNAPSHOT -------------- */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Ingredient Glossary—Snapshot
          </motion.h2>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
              <thead>
                <tr className="bg-primary-600 text-white text-left">
                  <th className="p-3 font-semibold">INCI</th>
                  <th className="p-3 font-semibold">Why we chose it</th>
                  <th className="p-3 font-semibold">Products</th>
                </tr>
              </thead>
              <tbody>
                {glossary.map(({ inci, why, products }, idx) => (
                  <tr key={inci} className={idx % 2 ? "bg-gray-50 dark:bg-gray-900/30" : ""}>
                    <td className="p-3 whitespace-nowrap">{inci}</td>
                    <td className="p-3">{why}</td>
                    <td className="p-3">{products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm mt-4">
            A full alphabetical glossary lives <a href="#" className="text-primary-600 underline">here</a>.
          </p>
        </div>
      </section>

      {/* -------------------------- COLLECTION ------------------------- */}
      <section id="collection" className="container mx-auto py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          The ORMA Collection
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collection.map(({ name, type, actives, claim, sensory, packaging }) => (
            <Card key={name} className="h-full">
              <CardContent className="p-6 space-y-3 flex flex-col">
                <h3 className="text-lg font-semibold text-primary-600">{name}</h3>
                <p className="text-sm text-gray-500">{type}</p>
                <p className="text-sm">
                  <span className="font-medium">Hero Actives:</span> {actives}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Claim:</span> {claim}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Sensory:</span> {sensory}
                </p>
                {packaging && (
                  <p className="text-sm">
                    <span className="font-medium">Packaging:</span> {packaging}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ------------------------ RITUAL GUIDES ------------------------ */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Skin‑Ritual Guides
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-3 text-primary-600">Morning Routine</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {routines.morning.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-primary-600">Evening Routine</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {routines.evening.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- JOURNAL --------------------------- */}
      <section id="journal" className="container mx-auto py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Journal
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            <strong>Age‑Positive Derm Focus</strong> – deep dives on menopause‑related
            barrier shifts
          </p>
          <p>
            <strong>Behind the INCI</strong> – spotlights on Niacinamide, Peptides,
            next‑gen UV filters
          </p>
          <p>
            <strong>Sustainability Diaries</strong> – quarterly progress on our
            net‑zero roadmap
          </p>
          <p className="mt-6">
            New articles every second Friday; sign up for the <em>ORMA Trail</em>
            newsletter.
          </p>
        </div>
      </section>

      {/* --------------------- STOCKISTS & EVENTS ---------------------- */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Stockists & Events
          </motion.h2>

          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Online Store</strong> – launching <em>[date]</em> with worldwide
              shipping to ≥20 regions
            </li>
            <li>
              <strong>Pop‑Up Experience</strong> – <em>[venue]</em> Melbourne,
              <em>[dates]</em>
            </li>
            <li>
              <strong>Industry Showcase</strong> – Cosmetics Expo Booth XX, Sydney
              (Nov 2025)
            </li>
            <li>
              Interested retailers may contact
              <a
                href="mailto:partnerships@orma-beauty.com"
                className="text-primary-600 underline"
              >
                partnerships@orma-beauty.com
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* -------------------------- CONTACT ---------------------------- */}
      <section id="contact" className="container mx-auto py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Contact
        </motion.h2>

        <div className="max-w-xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400 space-y-4">
          <p>
            Customer Care:
            <a href="mailto:hello@orma-beauty.com" className="text-primary-600 underline ml-1">
              hello@orma-beauty.com
            </a>
          </p>
          <p>
            Partnerships:
            <a
              href="mailto:partnerships@orma-beauty.com"
              className="text-primary-600 underline ml-1"
            >
              partnerships@orma-beauty.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-primary-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.011 7.052.07 5.773.128 4.543.434 3.515 1.462 2.487 2.49 2.181 3.72 2.123 5.0" />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>
      </section>

      {/* --------------------------- FOOTER ---------------------------- */}
      <footer className="bg-gray-100 dark:bg-gray-900/70 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} ORMA. All rights reserved.
      </footer>
    </div>
  );
}
