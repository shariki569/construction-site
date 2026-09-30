import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Cebu General Contractor | Homes, Commercial & Renovation",
  description:
    "Apex Build Philippines builds and renovates homes, commercial buildings, and industrial facilities in Cebu. PCAB licensed. DPWH and National Building Code aligned.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="hero_bg">
          <figure>
            <img src={asset("/images/hero.svg")} alt="Industrial skyline representing Apex Build Philippines construction projects" />
          </figure>
        </div>
        <div className="wrapper hero_con">
          <div className="hero_copy">
            <p className="eyebrow">PCAB Licensed · Cebu, Philippines</p>
            <h1>
              Built to Last.
              <span>Engineered for Cebu.</span>
            </h1>
            <p>
              Apex Build Philippines is a general contracting firm delivering residential, commercial, and renovation projects that meet Philippine building standards, DPWH specifications, and strict on-site safety controls.
            </p>
            <div className="hero_actions">
              <Link className="btn" href="/contact">Request a Project Quote</Link>
              <Link className="btn btn_outline" href="/projects">View Past Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <div id="middle">
        <div className="wrapper mid_con">
          <article className="mid_item">
            <span className="mid_icon">01</span>
            <div>
              <h3>PCAB Licensed</h3>
              <p>Registered contractor ready for regulated public and private works.</p>
            </div>
          </article>
          <article className="mid_item">
            <span className="mid_icon">02</span>
            <div>
              <h3>NBC &amp; DPWH Aligned</h3>
              <p>Design and build methods reviewed against the National Building Code.</p>
            </div>
          </article>
          <article className="mid_item">
            <span className="mid_icon">03</span>
            <div>
              <h3>Cebu Focused</h3>
              <p>One service area so crews, suppliers, and inspectors stay coordinated.</p>
            </div>
          </article>
          <article className="mid_item">
            <span className="mid_icon">04</span>
            <div>
              <h3>Safety First</h3>
              <p>Toolbox talks, PPE rules, and written method statements.</p>
            </div>
          </article>
        </div>
      </div>

      <main id="main_area">
        <div className="wrapper main_con">
          <div className="about_flex">
            <div className="about_copy">
              <p className="sec_label">Who We Are</p>
              <h2 className="sec_title">A Cebu contractor you can put on the permit</h2>
              <div className="gold_rule"></div>
              <p>
                Apex Build Philippines is a general contracting and construction firm based in Cebu. We manage ground-up builds, fit-outs, and renovations for homeowners, developers, and commercial occupiers who need a single accountable contractor.
              </p>
              <p>
                Our project teams coordinate architecture, structural, electrical, and sanitary works so drawings, bill of quantities, and site execution stay aligned. Every engagement is scoped for PCAB classification, occupancy type, and the local building official’s review process.
              </p>
              <Link className="more_link" href="/about">Read Our Company Profile</Link>
            </div>
            <div className="about_media">
              <figure>
                <img src={asset("/images/about.svg")} alt="Placeholder image of Apex Build Philippines jobsite and building envelope" />
              </figure>
            </div>
          </div>
        </div>
      </main>

      <div id="bottom1">
        <div className="wrapper btm1_con">
          <div className="btm1_info">
            <p className="sec_label">What We Build</p>
            <h2 className="sec_title">Featured services</h2>
            <div className="gold_rule"></div>
            <p className="sec_intro">From family homes to commercial shells, we take work from schematic design through turnover with documented quality checks.</p>
          </div>
          <div className="btm1_boxes">
            <section>
              <figure>
                <img src={asset("/images/service-residential.svg")} alt="Placeholder for residential construction in Cebu" />
              </figure>
              <h3>Residential Construction</h3>
              <p>Custom homes, townhouses, and residential compounds built to approved structural and architectural plans.</p>
              <Link className="more_link" href="/services">View Service</Link>
            </section>
            <section>
              <figure>
                <img src={asset("/images/service-commercial.svg")} alt="Placeholder for commercial building construction" />
              </figure>
              <h3>Commercial Building</h3>
              <p>Offices, retail, and mixed-use structures with coordinated MEPF and occupancy-ready turnover.</p>
              <Link className="more_link" href="/services">View Service</Link>
            </section>
            <section>
              <figure>
                <img src={asset("/images/service-renovation.svg")} alt="Placeholder for renovation and remodeling works" />
              </figure>
              <h3>Renovation &amp; Remodeling</h3>
              <p>Structural openings, wet-area upgrades, and full interior refreshes with controlled demolition.</p>
              <Link className="more_link" href="/services">View Service</Link>
            </section>
            <section>
              <figure>
                <img src={asset("/images/service-pm.svg")} alt="Placeholder for project management and architectural coordination" />
              </figure>
              <h3>Project Management</h3>
              <p>Schedule, cost, and design coordination for owners who need a licensed contractor at the helm.</p>
              <Link className="more_link" href="/services">View Service</Link>
            </section>
          </div>
        </div>
      </div>

      <div id="bottom2">
        <div className="wrapper btm2_con">
          <div className="btm2_info">
            <p className="sec_label">Why Choose Us</p>
            <h2 className="sec_title">Accountability on every drawing and pour</h2>
            <p className="sec_intro">Owners hire Apex Build Philippines when they need a contractor who documents the work, not just finishes the slab.</p>
          </div>
          <div className="btm2_flex">
            <section>
              <h3>Licensed &amp; Classified</h3>
              <p>We operate as a PCAB-licensed contractor and staff projects with licensed civil and professional engineers as required by scope.</p>
            </section>
            <section>
              <h3>Code-Compliant Build</h3>
              <p>Materials, formworks, and MEPF installations are checked against the National Building Code of the Philippines and applicable DPWH standards.</p>
            </section>
            <section>
              <h3>Cebu Site Knowledge</h3>
              <p>Local soil conditions, typhoon loading, and LGU permitting in Cebu are built into our planning—not treated as afterthoughts.</p>
            </section>
            <section>
              <h3>Transparent Cost Control</h3>
              <p>Progress billings follow an agreed bill of quantities. Variations are written, priced, and approved before work proceeds.</p>
            </section>
            <section>
              <h3>Documented Safety</h3>
              <p>Jobsite safety programs include toolbox meetings, PPE rules, and method statements for excavation, height work, and hot works.</p>
            </section>
            <section>
              <h3>Single Point of Contact</h3>
              <p>A project manager owns the schedule from groundbreaking to punch-list closeout so owners are not chasing multiple trades.</p>
            </section>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
