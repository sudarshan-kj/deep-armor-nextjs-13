import AboutUsNavigationLayout from "src/layouts/AboutUsNavigationLayout";
import AboutUsItemLayout from "src/layouts/AboutUsItemLayout";
import PressCard from "src/components/aboutUs/PressCard";
import { PressType } from "src/types";

const pressItems: PressType[] = [
  {
    id: 0,
    name: "The Times of India",
    description:
      "Tesla prides itself on its cybersecurity protections, particularly the elaborate challenge system that protects its cars from conventional methods for attacking the remote unlock system. But now, one researcher has discovered a sophisticated relay attack that would allow someone with physical access to a Tesla Model Y to unlock and steal it in a matter of seconds.",
    date: "Sep 21, 2022",
    link: "https://deeparmor.com",
  },
  {
    id: 1,
    name: "The Verge",
    description:
      "Tesla prides itself on its cybersecurity protections, particularly the elaborate challenge system that protects its cars from conventional methods for attacking the remote unlock system. But now, one researcher has discovered a sophisticated relay attack that would allow someone with physical access to a Tesla Model Y to unlock and steal it in a matter of seconds.",
    date: "Aug 20, 2022",
    link: "https://deeparmor.com",
  },
];

const Press = () => {
  return (
    <div>
      {pressItems.map((press) => (
        <PressCard key={press.id} {...press} />
      ))}
    </div>
  );
};

Press.getLayout = (page: React.ReactElement) => (
  <AboutUsNavigationLayout>
    <AboutUsItemLayout header="Press">{page}</AboutUsItemLayout>
  </AboutUsNavigationLayout>
);

export default Press;
