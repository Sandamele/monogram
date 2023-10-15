import React, { useEffect, useRef, useState } from "react";
import GettingStartedCard from "./gettingStartedCard";
import imageA from "../../assets/kickstarter-images-a.webp";
import imageB from "../../assets/kickstarter-images-b.webp";
import imageF from "../../assets/kickstarter-images-f.webp";
import Button from "../button/button";
import { BsWindows, BsApple } from "react-icons/bs";
export default function GettingStarted() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;
  const resetTimeout = () => { if (timeoutRef.current) {clearInterval(timeoutRef.current); }};
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 3 - 1 ? 0 : prevIndex + 1)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleSlideShow = (id) => {
    setIndex(id);
  };
  const boxIcons = { color: '#1A2456',size: '100px'}
  return (
    <div className="gettingStared">
        <div className="header">
        <h1>Get started in 3 easy steps</h1>
        <p>Creative Console provide a fast and simple set up with magnetically connecting modules and a user-friendly app.</p>
        </div>
      <div>
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            <div className="slide">
              <GettingStartedCard image={imageA}>
                <div className="cardA">
                  <h3>Download monogram creator</h3>
                  <div className="row">
                    <div className="col-md-6">
                        <span className="operating">
                            <BsApple />
                        </span>
                    <p>macOs 11+</p>
                    <Button name="Mac Download" />
                    </div>
                    <div className="col-md-6">
                        <span className="operating"><BsWindows /></span>
                      <p>Windows 10, 64 bit</p>
                      <Button name="Widnows download" />
                    </div>
                  </div>
                  <br />
                  <p className="testMonogram">Want to try the latest and help improve app performance? Sign up for the Monogram Creator Beta program.</p>
                </div>
              </GettingStartedCard>
            </div>
            <div className="slide">
              <GettingStartedCard image={imageB}>
                <div className="cardB">
                  <h3>Start Connecting</h3>
                  <p>
                    Simply plug in the Core and magnetically snap modules
                    together, pin to pad. The LED halos light up when connected
                    properly. Keep the layout simple or get creative and wrap it
                    around your keyboard or graphics tablet!
                  </p>
                </div>
              </GettingStartedCard>
            </div>
            <div className="slide">
              <GettingStartedCard image={imageF}>
                <div className="cardF">
                  <h3>Start Creating</h3>
                  <p>
                    Launch Monogram Creator and say hello to productivity.
                    Select your app to start creating. Click on a module to
                    customize it. It’s that simple!
                  </p>
                  <Button name="See complete user guide" />
                </div>
              </GettingStartedCard>
            </div>
          </div>
          <div className="slideshowDots">
            <div
              className={`slideshowDot${index === 0 ? " active" : ""}`}
              onClick={() => handleSlideShow(0)}
            ></div>
            <div
              className={`slideshowDot${index === 1 ? " active" : ""}`}
              onClick={() => handleSlideShow(1)}
            ></div>
            <div
              className={`slideshowDot${index === 2 ? " active" : ""}`}
              onClick={() => handleSlideShow(2)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
