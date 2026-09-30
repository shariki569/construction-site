import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer_top">
        <div className="wrapper footer_top_con">
          <div className="ft_col">
            <h3>Apex Build Philippines</h3>
            <p>PCAB-licensed general contractor delivering residential, commercial, and industrial projects across Cebu in line with DPWH and National Building Code standards.</p>
          </div>
          <div className="ft_col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="ft_col">
            <h3>Service Area</h3>
            <p>Cebu only — Cebu City, Mandaue, Lapu-Lapu, Talisay, and nearby municipalities.</p>
            <p>Mon–Sat · 8:00 AM – 5:00 PM</p>
          </div>
          <div className="ft_col">
            <h3>Contact</h3>
            <p><a href="tel:+6332XXXXXXX">+63 32 XXX XXXX</a></p>
            <p><a href="mailto:info@apexbuild.ph">info@apexbuild.ph</a></p>
            <p>[Street Address], Cebu City, Cebu, Philippines</p>
          </div>
        </div>
      </div>
      <div className="footer_btm">
        <div className="wrapper">
          <p>© 2026 Apex Build Philippines. All rights reserved. PCAB License No. [XXXXX].</p>
        </div>
      </div>
    </footer>
  );
}
