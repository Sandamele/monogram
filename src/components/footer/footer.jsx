import "./style.scss";
import "../../scss/__global.scss";
import FooterSubscribe from "./subscribe";
import FooterHeading from "./footerHeading";
import { address, helpLinks, informationLinks, quickLinks } from "./footerData";
import FooterLinks from "./footerLinks";
import FooterAddress from "./footerAddress";
export default function Footer() {
  return (
    <div className="footer">
      <div className="__container">
        <div className="row">
          <div className="col-md-2">
            <FooterHeading header="Monogram" />
            <FooterAddress address={address} />
          </div>
          <div className="col-md-2">
            <FooterHeading header="Quick Links" />
            <FooterLinks links={quickLinks} />
          </div>
          <div className="col-md-2">
            <FooterHeading header="Help" />
            <FooterLinks links={helpLinks} />
          </div>
          <div className="col-md-2">
            <FooterHeading header="Information" />
            <FooterLinks links={informationLinks} />
          </div>
          <div className="col-md-4">
            <FooterHeading header="Subscribe to Monogram" />
            <FooterSubscribe />
          </div>
        </div>
      </div>
    </div>
  );
}
