import { asset } from "@/lib/asset";

type PageBannerProps = {
  title: string;
  crumb: string;
  image: string;
  alt: string;
};

export default function PageBanner({ title, crumb, image, alt }: PageBannerProps) {
  return (
    <section className="page_banner">
      <div className="page_banner_bg">
        <figure>
          <img src={asset(image)} alt={alt} />
        </figure>
      </div>
      <div className="wrapper page_banner_con">
        <p className="eyebrow">Apex Build Philippines</p>
        <h1>{title}</h1>
        <p className="crumbs">Home / {crumb}</p>
      </div>
    </section>
  );
}
