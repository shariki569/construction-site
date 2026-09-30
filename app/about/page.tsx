import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Build Philippines — a PCAB-licensed Cebu general contractor committed to National Building Code compliance, DPWH-aligned methods, and documented jobsite safety.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        crumb="About Us"
        image="/images/inner-banner.svg"
        alt="Placeholder banner of Apex Build Philippines construction works"
      />
      <main id="main_area" className="page_main">
        <div className="wrapper">
          <div className="split">
            <div className="split_copy">
              <p className="sec_label">Company Profile</p>
              <h2>General contracting with Cebu accountability</h2>
              <div className="gold_rule"></div>
              <p>
                Apex Build Philippines is a Cebu-based general contracting firm established to deliver complete building works for private owners and commercial clients. We handle residential construction, commercial building, renovation, and end-to-end project management from one licensed organization.
              </p>
              <p>
                Our practice is built around Philippine regulations: PCAB contractor licensing, the National Building Code of the Philippines (PD 1096), relevant DPWH standard specifications, and Occupational Safety and Health standards on site. We do not take work outside Cebu, so permitting, suppliers, and inspection schedules stay local and predictable.
              </p>
              <p>
                Replace this paragraph with your founding year, principals, and completed floor area once those details are confirmed. Until then, treat license numbers, office address, and key staff names as placeholders for legal review.
              </p>
            </div>
            <div className="split_media">
              <figure>
                <img src={asset("/images/about.svg")} alt="Placeholder photo of Apex Build Philippines office and site leadership" />
              </figure>
            </div>
          </div>

          <div className="mv_boxes">
            <section>
              <p className="sec_label">Mission</p>
              <h2>Mission</h2>
              <p>
                To deliver structurally sound, permit-ready buildings in Cebu through licensed engineering, honest cost reporting, and construction methods that respect the National Building Code and DPWH specifications.
              </p>
            </section>
            <section>
              <p className="sec_label">Vision</p>
              <h2>Vision</h2>
              <p>
                To be the Cebu contractor owners call when the drawings must match the as-built, the punch list must close, and every pour is documented for occupancy and long-term maintenance.
              </p>
            </section>
          </div>

          <p className="sec_label">How We Work</p>
          <h2>Core values</h2>
          <div className="gold_rule"></div>
          <div className="values">
            <section>
              <h3>Integrity</h3>
              <p>Quotes, variations, and progress billings are written. We do not hide scope in verbal side agreements.</p>
            </section>
            <section>
              <h3>Craft</h3>
              <p>Formworks, rebar, waterproofing, and finishes are inspected against drawings before they are covered up.</p>
            </section>
            <section>
              <h3>Safety</h3>
              <p>No schedule pressure overrides PPE, scaffolding checks, or lock-out procedures on energized systems.</p>
            </section>
            <section>
              <h3>Stewardship</h3>
              <p>We plan for typhoon loads, drainage, and material durability appropriate to Cebu’s climate.</p>
            </section>
          </div>

          <div className="compliance">
            <p className="sec_label">Compliance</p>
            <h2>PCAB license &amp; safety commitment</h2>
            <p>
              Apex Build Philippines operates as a PCAB-licensed contractor (License No. [XXXXX] — insert classification and validity date). We maintain the documentary requirements expected of licensed constructors, including company profile, key technical personnel, and equipment affidavits as applicable to our category.
            </p>
            <p>
              Safety is not a poster on the site office wall. Before mobilization we issue a construction safety and health program covering excavation, work at height, hot works, electrical isolation, and visitor control. Daily toolbox talks are logged. Incident reporting follows DOLE OSH rules.
            </p>
            <ul className="bullet">
              <li>PCAB license displayed on proposals and, where required, on the jobsite board</li>
              <li>Structural, sanitary, electrical, and architectural coordination before pouring and concealment</li>
              <li>Materials sampled or mill-certified when specifications require it</li>
              <li>As-built drawings and turnover manuals at substantial completion</li>
            </ul>
          </div>
        </div>
      </main>
      <CtaBand heading="Talk to our Cebu project team" copy="Share your lot location, occupancy type, and target start date. We will confirm whether the scope fits our PCAB classification and Cebu-only coverage." />
    </>
  );
}
