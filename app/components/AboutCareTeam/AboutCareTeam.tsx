import { InfoCards, type InfoCard } from "../ui/InfoCards/InfoCards";

const roles: InfoCard[] = [
  {
    title: "Psychiatrists",
    text: "Board-certified physicians who lead diagnosis, medication management, and the overall treatment plan.",
  },
  {
    title: "Nurses",
    text: "Skilled nursing staff providing 24-hour monitoring, medical support, and compassionate day-to-day care.",
  },
  {
    title: "Therapists & Social Workers",
    text: "Clinicians who provide individual and group therapy and coordinate discharge and community resources.",
  },
  {
    title: "Case Managers",
    text: "Coordinators who guide families through logistics, benefits, and transitions of care.",
  },
  {
    title: "Pharmacists",
    text: "Specialists who review medications carefully — critical when treating older adults with complex regimens.",
  },
  {
    title: "Activity & Support Staff",
    text: "Team members who create a safe, engaging, and dignified daily environment for every patient.",
  },
];

export function AboutCareTeam() {
  return (
    <section className="pgSection pgSectionTinted">
      <div className="pgContainer">
        <div className="pgIntro">
          <p className="pgEyebrow">Our care team</p>
          <h2 className="pgTitle">An interdisciplinary approach</h2>
          <p className="pgLead">
            Every patient is cared for by a coordinated team of specialists who
            bring different expertise to the same goal — helping older adults
            heal.
          </p>
        </div>

        <InfoCards items={roles} />
      </div>
    </section>
  );
}
