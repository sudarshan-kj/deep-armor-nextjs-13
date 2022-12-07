import { ReactElement } from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import SecurityEventCard from "src/components/aboutUs/SecurityEventCard";
import hardware from "src/assets/images/hardware.jpg";
import { SecurityEventType } from "src/types";

const securityEvents: SecurityEventType[] = [
  {
    id: 0,
    name: "Black Hat Conference",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "Las Vegas",
    date: "2019",
    image: hardware,
  },
  {
    id: 1,
    name: "Javascript Conference",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "Bengaluru",
    date: "2022",
    image: hardware,
  },
  {
    id: 2,
    name: "Python Conference",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "New Delhi",
    date: "2021",
    image: hardware,
  },
];

const SecurityEvents = () => {
  return (
    <div>
      {securityEvents.map((event) => (
        <SecurityEventCard {...event} />
      ))}
    </div>
  );
};

SecurityEvents.getLayout = (page: ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Security Events">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default SecurityEvents;
