import React from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import CommunityEventCard from "src/components/aboutUs/CommunityEventCard";
import hardware from "src/assets/images/hardware.jpg";
import { CommunityEventType } from "src/types";

const communityEvents: CommunityEventType[] = [
  {
    id: 0,
    name: "Hill cleaning",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut.",
    location: "Nandi Hills",
    date: "2019",
    image: hardware,
  },
  {
    id: 1,
    name: "Orphanage Visit",
    description:
      "Minim sunt velit officia do voluptate ad aliqua nulla fugiat ut do in tempor. Ipsum quis occaecat reprehenderit Lorem tempor culpa aliqua consectetur non commodo. Mollit est duis mollit consectetur non consequat Lorem. Dolor Lorem ut cupidatat anim ipsum ut. ",
    location: "Bengaluru",
    date: "2022",
    image: hardware,
  },
];

const CommunityEvents = () => {
  return (
    <div>
      {communityEvents.map((event) => (
        <CommunityEventCard {...event} />
      ))}
    </div>
  );
};

CommunityEvents.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Community Events">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default CommunityEvents;
