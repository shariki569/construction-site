import Link from "next/link";

type CtaBandProps = {
  heading?: string;
  copy?: string;
};

export default function CtaBand({
  heading = "Ready to Build in Cebu?",
  copy = "Request a project quotation from Apex Build Philippines. Our estimators will review your plans, site conditions, and PCAB-aligned scope before we schedule a site visit."
}: CtaBandProps) {
  return (
    <div id="bottom3" className="cta_band">
      <div className="wrapper btm3_con">
        <div className="btm3_info">
          <h2>{heading}</h2>
          <p>{copy}</p>
          <Link className="btn" href="/contact">Request a Project Quote</Link>
        </div>
      </div>
    </div>
  );
}
