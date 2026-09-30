import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Selected Philippine projects by Apex Build Philippines: a residential villa in Cavite, commercial hub in Cebu, warehouse in Laguna, and office fit-out in BGC. Current service area is Cebu only.",
  alternates: { canonical: "/projects" }
};

const projects = [
  {
    title: "Residential Villa in Cavite",
    tag: "Residential",
    image: "/images/project-cavite.svg",
    alt: "Placeholder gallery image for a residential villa project in Cavite",
    copy: "A multi-level family residence with reinforced concrete framing, typhoon-rated roofing, and landscaped outdoor living. Delivered with coordinated architectural and structural packages and a documented punch-list closeout."
  },
  {
    title: "Commercial Hub in Cebu",
    tag: "Commercial",
    image: "/images/project-cebu.svg",
    alt: "Placeholder gallery image for a commercial hub project in Cebu",
    copy: "A mixed commercial building in Metro Cebu combining retail at grade with office floors above. Scope included structural works, MEPF rough-ins, and façade installation sequenced around LGU inspections."
  },
  {
    title: "Warehouse in Laguna",
    tag: "Industrial",
    image: "/images/project-laguna.svg",
    alt: "Placeholder gallery image for a warehouse project in Laguna",
    copy: "A pre-engineered warehouse with concrete yard works, loading docks, and electrical distribution for logistics operations. Floor flatness, drainage, and fire-safety interfaces were inspected against the approved specifications."
  },
  {
    title: "Office Fit-out in BGC",
    tag: "Fit-out",
    image: "/images/project-bgc.svg",
    alt: "Placeholder gallery image for an office fit-out project in Bonifacio Global City",
    copy: "A corporate office interior in Bonifacio Global City covering partitions, raised access coordination, lighting, and wet pantries. Work was phased after hours where the building rules required it, with daily protection of common areas."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Projects"
        crumb="Projects"
        image="/images/inner-banner.svg"
        alt="Placeholder banner for Apex Build Philippines project portfolio"
      />
      <main id="main_area" className="page_main">
        <div className="wrapper">
          <p className="sec_intro">
            These selected works show the range of buildings we have delivered across the Philippines. Replace each graphic with licensed project photography and confirm client permission before public use. New commissions are accepted in Cebu only.
          </p>
          <div className="project_grid">
            {projects.map((item) => (
              <article className="project_card" key={item.title}>
                <figure>
                  <img src={asset(item.image)} alt={item.alt} />
                </figure>
                <div>
                  <span className="project_tag">{item.tag}</span>
                  <h2>{item.title}</h2>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <CtaBand heading="Start your Cebu project" copy="If your site is in Cebu City or a nearby municipality, send an inquiry with lot details and we will schedule a site assessment." />
    </>
  );
}
