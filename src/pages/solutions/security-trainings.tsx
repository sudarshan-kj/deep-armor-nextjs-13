import ServicesNavigationLayout from "src/layouts/ServicesNavigationLayout";
import training from "src/assets/images/training.jpg";
import SolutionItemLayout from "src/layouts/SolutionItemLayout";
import ListItemWithTopMargin from "src/components/ListItemWithTopMargin/ListItemWithTopMargin";

const SecurityTrainings = () => {
  return (
    <div>
      <p>
        Deep Armor offers security training programs for the following topics:
        <ol>
          <ListItemWithTopMargin>
            Security Development Life Cycle (SDLC): This course is relevant to
            all facets of product development and beneficial to executives,
            architects, developers, QA engineers and program managers. We cover
            the essentials of a 5-Step SDLC framework, the inputs and outputs at
            each stage, and have the attendees implement the learnings on sample
            projects. Students learn how to design and implement an SDLC
            framework for their own products and platforms. This course is
            beneficial for professionals whose employers do not have a mature
            internal SDLC process.
          </ListItemWithTopMargin>
          <ListItemWithTopMargin>
            Cloud & Web Application Security: The purpose of this training is to
            increase awareness among software developers, architects and
            validation engineers about cybersecurity pitfalls while developing,
            testing and deploying web applications on public/third-party cloud
            environments. They will understand how vulnerabilities manifest and
            may be exploited, and how to design secure systems to avoid such
            weaknesses. The training program includes plenty of hands-on
            activities, including lab exercises to learn practical exploitation
            of OWASP Top 10 vulnerabilities. We conclude with a Capture The Flag
            (CTF) competition. Attendees are required to “hack” a web
            application hosted by Deep Armor and gain points when they exploit a
            vulnerability.
          </ListItemWithTopMargin>
          <ListItemWithTopMargin>
            Securing Internet of Things (IoT): This is one of our highly rated
            training programs, which has been accepted at Black Hat USA three
            times, as well as at numerous international events. A hands-on
            course for recon, pentesting and hardening Internet of Things (IoT).
            It’s not just the hardware. IoT security should encompass device,
            mobile, cloud, endpoint, AND wireless protocol security. Students
            will learn to use low-cost hardware & software tools to perform
            packet capture, manipulation and injection in a variety of wireless
            networks. The training also includes malware app code walkthroughs
            and live debugging sessions. We teach how information theft is
            scarily easy, and what steps can be taken to harden these systems.
            Students will be provided with USB-based transceivers and IoT
            simulators to work on two activities pertaining to IEEE
            802.15.4/Zigbee style security work as well as security for
            Bluetooth/BLE. Cloud is an essential part of any IoT program, so we
            conclude the training program with a 1.5 hour Capture The Flag
            (CTF). This training program requires the use of IoT hardware kits
            and transceivers which will be provided by Deep Armor.
          </ListItemWithTopMargin>
        </ol>
      </p>
      <p>
        Our team has conducted training programs and workshops at numerous
        global events, such as Black Hat USA, FIRST, Intel iSecCon, SACON,
        Breach & Attack Summit, and for several corporate customers.
      </p>
    </div>
  );
};

SecurityTrainings.getLayout = (page: React.ReactElement) => (
  <ServicesNavigationLayout>
    <SolutionItemLayout heading="Security Trainings" image={training}>
      {page}
    </SolutionItemLayout>
  </ServicesNavigationLayout>
);

export default SecurityTrainings;
