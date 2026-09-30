import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Construction Services in Cebu",
  description:
    "Residential construction, commercial building, renovation and remodeling, plus project management and architectural design coordination from Apex Build Philippines in Cebu.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        crumb="Services"
        image="/images/inner-banner.svg"
        alt="Placeholder banner for Apex Build Philippines construction services"
      />
      <main id="main_area" className="page_main">
        <div className="wrapper">
          <p className="sec_intro">
            All services below are delivered in Cebu only. Scopes are priced from approved drawings, a site inspection, and a written bill of quantities. Engineering stamps and specialty trades are engaged as the occupancy and PCAB rules require.
          </p>

          <article className="service_block">
            <div className="service_copy">
              <p className="sec_label">01</p>
              <h2>Residential Construction</h2>
              <p>
                We build single-family homes, duplexes, and small residential compounds from groundbreaking through occupancy. Work includes foundation systems suited to Cebu soil reports, reinforced concrete or approved structural systems, roofing designed for wind loads, and wet-area waterproofing.
              </p>
              <p>
                Homeowners receive a construction program, payment schedule tied to milestones, and coordination with the local building official for permits and inspections. Architectural and structural plans must be signed by licensed professionals; we can introduce design partners or build from your existing set.
              </p>
              <ul className="bullet">
                <li>Custom homes and townhouse clusters</li>
                <li>Owner-supplied or contractor-coordinated architectural plans</li>
                <li>Structural, electrical, and plumbing execution to approved drawings</li>
                <li>Punch-list closeout and occupancy support</li>
              </ul>
            </div>
            <div className="service_media">
              <figure>
                <img src={asset("/images/service-residential.svg" alt="Placeholder image of a residential construction project in Cebu" />
              </figure>
            </div>
          </article>

          <article className="service_block">
            <div className="service_copy">
              <p className="sec_label">02</p>
              <h2>Commercial Building</h2>
              <p>
                Commercial shells, offices, retail, and light industrial buildings are delivered with coordinated mechanical, electrical, plumbing, and fire protection (MEPF) trades. We plan floor loads, egress, and fire-code interfaces early so occupancy classification does not stall at inspection.
              </p>
              <p>
                Developers and tenant-owners get progress photos, quantity tracking, and meeting minutes. Where DPWH standard specifications apply to public-adjacent or infrastructure-related works, we follow the cited item numbers in the contract documents.
              </p>
              <ul className="bullet">
                <li>Office, retail, and mixed-use structures</li>
                <li>MEPF coordination and shop drawing review</li>
                <li>Fire and life-safety interfaces with the approved plans</li>
                <li>Turnover packages for facilities teams</li>
              </ul>
            </div>
            <div className="service_media">
              <figure>
                <img src={asset("/images/service-commercial.svg" alt="Placeholder image of a commercial building under construction" />
              </figure>
            </div>
          </article>

          <article className="service_block">
            <div className="service_copy">
              <p className="sec_label">03</p>
              <h2>Renovation &amp; Remodeling</h2>
              <p>
                Renovation work in occupied or existing buildings needs controlled demolition, temporary works, and respect for neighboring units. We survey as-builts, flag structural walls, and sequence wet areas so waterproofing and tiling are not rushed.
              </p>
              <p>
                Typical scopes include kitchen and bath remodels, office reconfiguration, façade repair, and roof replacement. Permit amendments are identified before we open walls that affect occupancy or fire separation.
              </p>
              <ul className="bullet">
                <li>Interior fit-outs and space planning refreshes</li>
                <li>Structural openings reviewed by a licensed engineer</li>
                <li>Waterproofing, tiling, and finishing packages</li>
                <li>Phased work for partially occupied sites</li>
              </ul>
            </div>
            <div className="service_media">
              <figure>
                <img src={asset("/images/service-renovation.svg" alt="Placeholder image of renovation and remodeling works" />
              </figure>
            </div>
          </article>

          <article className="service_block">
            <div className="service_copy">
              <p className="sec_label">04</p>
              <h2>Project Management &amp; Architectural Design</h2>
              <p>
                Owners who need a single accountable firm can engage Apex Build Philippines to manage design coordination and construction. We work with licensed architects and engineers to produce permit sets, then carry those drawings through procurement and site execution.
              </p>
              <p>
                Project management covers master schedule, cost plan, bid leveling for nominated suppliers, quality inspections, and claims administration. Architectural design support is coordination and constructability—not a substitute for an independent design professional where the law requires one.
              </p>
              <ul className="bullet">
                <li>Pre-construction estimating and value engineering</li>
                <li>Design-team coordination for PCAB and LGU submissions</li>
                <li>On-site supervision and weekly progress reports</li>
                <li>Closeout: as-builts, warranties, and operations manuals</li>
              </ul>
            </div>
            <div className="service_media">
              <figure>
                <img src={asset("/images/service-pm.svg" alt="Placeholder image of architectural plans and project management coordination" />
              </figure>
            </div>
          </article>
        </div>
      </main>
      <CtaBand heading="Need a written scope for Cebu?" copy="Send your drawings or a site address. We will confirm service fit, flag permit items, and prepare a quotation for review." />
    </>
  );
}
