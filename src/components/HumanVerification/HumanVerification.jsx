import React from "react";
import { useState, useEffect, useCallback } from "react";
import { ReactComponent as AirplaneIcon } from "../../images/icon-human/airplane.svg";
import { ReactComponent as BicycleIcon } from "../../images/icon-human/bicycle.svg";
import { ReactComponent as BusIcon } from "../../images/icon-human/bus.svg";
import { ReactComponent as CarIcon } from "../../images/icon-human/car.svg";
import { ReactComponent as DisplayIcon } from "../../images/icon-human/display.svg";
import { ReactComponent as EarthIcon } from "../../images/icon-human/earth.svg";
import { ReactComponent as HelicopterIcon } from "../../images/icon-human/helicopter.svg";
import { ReactComponent as GasStationIcon } from "../../images/icon-human/gas-station.svg";
import { ReactComponent as HeartIcon } from "../../images/icon-human/heart.svg";
import { ReactComponent as ParkIcon } from "../../images/icon-human/park.svg";
import { ReactComponent as RiverIcon } from "../../images/icon-human/river.svg";
import { ReactComponent as TaxiIcon } from "../../images/icon-human/taxi.svg";
import { ReactComponent as ShipIcon } from "../../images/icon-human/ship.svg";
import { ReactComponent as ScooterIcon } from "../../images/icon-human/scooter.svg";
import { ReactComponent as TruckIcon } from "../../images/icon-human/truck.svg";
import { ReactComponent as UfoIcon } from "../../images/icon-human/ufo.svg";
import { ReactComponent as CompassIcon } from "../../images/icon-human/compass.svg";
import { ReactComponent as RocketIcon } from "../../images/icon-human/rocket.svg";
import { ReactComponent as ForkliftIcon } from "../../images/icon-human/forklift.svg";
import { ReactComponent as ElectricCarIcon } from "../../images/icon-human/electric-car.svg";
import { ReactComponent as PoliceCarIcon } from "../../images/icon-human/police-car.svg";
import { ReactComponent as Route66Icon } from "../../images/icon-human/route-66.svg";
import { ReactComponent as ChainIcon } from "../../images/icon-human/chain.svg";
import { ReactComponent as SpaceShuttleIcon } from "../../images/icon-human/space-shuttle.svg";
import { ReactComponent as CanoeIcon } from "../../images/icon-human/canoe.svg";
import { ReactComponent as EscalatorIcon } from "../../images/icon-human/escalator.svg";
import { ReactComponent as VeniceIcon } from "../../images/icon-human/venice.svg";
import { WithTransLate } from "../helpers/translating/index";
import s from "./HumanVerification.module.scss";

const icons = [
  { name: "airplane", component: AirplaneIcon },
  { name: "bicycle", component: BicycleIcon },
  { name: "bus", component: BusIcon },
  { name: "car", component: CarIcon },
  { name: "display", component: DisplayIcon },
  { name: "earth", component: EarthIcon },
  { name: "helicopter", component: HelicopterIcon },
  { name: "gas-station", component: GasStationIcon },
  { name: "heart", component: HeartIcon },
  { name: "park", component: ParkIcon },
  { name: "river", component: RiverIcon },
  { name: "taxi", component: TaxiIcon },
  { name: "ship", component: ShipIcon },
  { name: "scooter", component: ScooterIcon },
  { name: "truck", component: TruckIcon },
  { name: "ufo", component: UfoIcon },
  { name: "compass", component: CompassIcon },
  { name: "rocket", component: RocketIcon },
  { name: "forklift", component: ForkliftIcon },
  { name: "electric-car", component: ElectricCarIcon },
  { name: "police-car", component: PoliceCarIcon },
  { name: "route 66", component: Route66Icon },
  { name: "chain", component: ChainIcon },
  { name: "space shuttle", component: SpaceShuttleIcon },
  { name: "canoe", component: CanoeIcon },
  { name: "escalator", component: EscalatorIcon },
  { name: "venice", component: VeniceIcon },
];

const HumanVerification = ({ onVerify }) => {
  const [images, setImages] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [verifiedName, setVerifiedName] = useState("");
  const [targetIcon, setTargetIcon] = useState(null);

  const getRandomIcons = () => {
    const randomIcons = new Set();
    while (randomIcons.size < 5) {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      randomIcons.add(randomIcon);
    }
    return Array.from(randomIcons);
  };

  const resetImages = useCallback(() => {
    const newIcons = getRandomIcons();
    setImages(newIcons);
    setTargetIcon(newIcons[Math.floor(Math.random() * newIcons.length)]);
  }, []);

  useEffect(() => {
    resetImages();
    setVerifiedName("");
  }, [resetImages]);

  const handleImageClick = (iconName) => {
    const isCorrect = iconName === targetIcon?.name;
    setIsVerified(isCorrect);
    onVerify(isCorrect);
    if (!isCorrect) {
      resetImages();
      setVerifiedName("");
    } else {
      setVerifiedName(iconName);
    }
  };

  return (
    <div className={s.human}>
      <div className={s.human__content}>
        <div className={s.human__text}>
          <WithTransLate text="Please prove you are human by selecting the" />{" "}
          <span className={s.human__textCorrect}>
            <WithTransLate text={`${targetIcon?.name}.`} />
          </span>
        </div>
        <div className={s.human__iconContent}>
          {images.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <div
                key={index}
                onClick={() => handleImageClick(icon.name)}
                style={{
                  cursor: "pointer",
                  border:
                    isVerified && verifiedName === icon.name
                      ? "1px solid #1D3967"
                      : "1px solid #d8dfe7",
                  color:
                    isVerified && verifiedName === icon.name
                      ? "#1D3967"
                      : "black",
                }}
                className={s.human__iconWrapper}
              >
                <IconComponent width={30} height={30} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HumanVerification;
