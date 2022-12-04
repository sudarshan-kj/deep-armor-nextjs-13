import React from "react";
import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";

const CommunityEvents = () => {
  return <div>Community Events</div>;
};

CommunityEvents.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Community Events">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default CommunityEvents;
