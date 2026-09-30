import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Apex Build Philippines in Cebu City for project quotations. Phone, email, business hours, inquiry form, and Cebu-only service area details.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        crumb="Contact Us"
        image="/images/inner-banner.svg"
        alt="Placeholder banner for Apex Build Philippines contact page"
      />
      <main id="main_area" className="page_main">
        <div className="wrapper">
          <p className="sec_intro">
            Use the form for a written quotation. For urgent site issues on an active Cebu project, call the office during business hours. We do not accept new work outside Cebu.
          </p>
          <div className="contact_flex">
            <InquiryForm />
            <aside className="contact_aside">
              <div className="info_card">
                <h2>Office</h2>
                <p>[Street Address], Cebu City</p>
                <p>Cebu, Philippines 6000</p>
                <a href="tel:+6332XXXXXXX">+63 32 XXX XXXX</a>
                <a href="mailto:info@apexbuild.ph">info@apexbuild.ph</a>
              </div>
              <div className="info_card">
                <h2>Business Hours</h2>
                <p>Monday – Saturday</p>
                <p>8:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
                <p>Site visits by appointment</p>
              </div>
              <div className="info_card">
                <h2>Service Areas</h2>
                <p>Cebu only.</p>
                <p>Cebu City, Mandaue, Lapu-Lapu, Talisay, Naga, and nearby municipalities within Cebu province.</p>
                <p>We do not mobilize to Luzon, Mindanao, or other Visayan provinces for new contracts.</p>
              </div>
              <div className="map_ph" role="img" aria-label="Map placeholder for Cebu City office location">
                <div>
                  <strong>Map placeholder</strong>
                  <p>Embed Google Maps for [Street Address], Cebu City when the live office pin is confirmed.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
