import { useState } from "react";
import Image from "next/image";
import dashboard1 from "src/assets/images/gauntlet/dashboard-1.png";
import dashboard2 from "src/assets/images/gauntlet/dashboard-2.png";
import dashboard3 from "src/assets/images/gauntlet/dashboard-3.png";
import dashboard4 from "src/assets/images/gauntlet/dashboard-4.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "./SkewedRectangleContent.module.scss";

const SkewedRectangleContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1200);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const handleContactClick = () => {
    document?.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.navBar}>
        <h3>&lt;logo&gt; </h3>
        <h3 onClick={handleContactClick}>Contact Us</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.textContent}>
          <h1>Gauntlet</h1>
          <p>Automated cloud security & compliance monitoring by Deep Armor</p>
        </div>
        <div className={styles.imagesBox}>
          <div
            ref={sliderRef}
            style={{ height: "100%" }}
            className="keen-slider"
          >
            <div className="keen-slider__slide">
              <Image src={dashboard1} fill={true} alt={dashboard1.toString()} />
            </div>
            <div className={"keen-slider__slide"}>
              <Image src={dashboard2} fill={true} alt={dashboard2.toString()} />
            </div>
            <div className={"keen-slider__slide"}>
              <Image src={dashboard3} fill={true} alt={dashboard3.toString()} />
            </div>
            <div className={"keen-slider__slide"}>
              <Image src={dashboard4} fill={true} alt={dashboard4.toString()} />
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className={styles.dots}>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`${styles.dot} ${
                      currentSlide === idx ? styles.active : ""
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkewedRectangleContent;
