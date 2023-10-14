import React from "react";
import EmailSubscribe from "./emailSubscribe";
import SocialMedia from "./socialMedia";

export default function FooterSubscribe() {
  const boxIconsStyle = {color: "#1A2456", size: '20px'}
  const socialMediaLinks = [
    {
      id: 1,
      icon: <box-icon type="logo" name="instagram" color={boxIconsStyle.color} size={boxIconsStyle.size} />,
      link: "#",
    },
    {
      id: 2,
      icon: <box-icon type="logo" name="twitter" color={boxIconsStyle.color} size={boxIconsStyle.size} />,
      link: "#",
    },
    {
      id: 3,
      icon: <box-icon type="logo" name="facebook" color={boxIconsStyle.color} size={boxIconsStyle.size} />,
      link: "#",
    },
    {
      id: 4,
      icon: <box-icon type="logo" name="youtube" color={boxIconsStyle.color} size={boxIconsStyle.size} />,
      link: "#",
    },
  ];
  const date = new Date();
  return (
    <>
      <p>
        Master productivity with Creative Console and get all the latest
        Monogram news.
      </p>
      <EmailSubscribe />
      <ul className="socialMedia">
        {socialMediaLinks.map((socialMediaLink) => (
          <li key={socialMediaLink.id}>
            <SocialMedia
              icon={socialMediaLink.icon}
              link={socialMediaLink.link}
            />
          </li>
        ))}
      </ul>
      <p>&copy; Monogram {date.getFullYear()}</p>
    </>
  );
}
