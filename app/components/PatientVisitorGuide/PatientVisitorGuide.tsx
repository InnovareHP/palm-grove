"use client";

import { useState } from "react";
import Image from "next/image";
import img9 from "@/public/PatientVisitorPage/SecondSection/Rectangle 9.png";
import img10 from "@/public/PatientVisitorPage/SecondSection/Rectangle 10.png";
import img11 from "@/public/PatientVisitorPage/SecondSection/Rectangle 11.png";
import imgCard1 from "@/public/PatientVisitorPage/Card1Section/Rectangle 15.png";
import imgCard2 from "@/public/PatientVisitorPage/Card2Section/Rectangle 15.png";
import imgCard3 from "@/public/PatientVisitorPage/Card3Section/Rectangle 15.png";
import imgCard4 from "@/public/PatientVisitorPage/Card4Section/Rectangle 16.png";
import classes from "./PatientVisitorGuide.module.css";

const GUIDE_ITEMS = [
  {
    id: "preparing",
    title: "Preparing for Your Stay",
    description:
      "Learn what to bring, what to leave at home, and what to expect before arriving at Palm Grove.",
  },
  {
    id: "during",
    title: "During Your Stay",
    description:
      "Learn about daily routines, therapy sessions, meals, activities, and the care you'll receive.",
  },
  {
    id: "visitation",
    title: "Visitation",
    description:
      "Find visiting hours, visitor guidelines, and ways to stay connected with your loved one.",
  },
  {
    id: "discharge",
    title: "Discharge & Follow-Up",
    description:
      "Understand the discharge process, follow-up care, and resources to support continued recovery.",
  },
  {
    id: "faqs",
    title: "Frequently Asked Questions (FAQs)",
    description:
      "Find answers to common questions about admissions, treatment, visitation, and ongoing care.",
  },
];

const PREPARING_CHECKLIST = [
  "3 changes of comfortable clothing",
  "1 sweater",
  "2 pairs of pajamas",
  "1 pair of shoes",
  "(Note: toiletries are provided)",
  "Labeling your clothing is helpful for staff",
];

function CheckIcon() {
  return (
    <svg
      className={classes.checkIcon}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="10" fill="var(--pg-green-dark)" />
      <path
        d="M5.5 10.5l3 3 6-6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PreparingForYourStay() {
  return (
    <div className={classes.detail} id="guide-detail-preparing">
      <h2 className={classes.detailTitle}>Preparing for Your Stay</h2>
      <div className={classes.detailGrid}>
        <div className={classes.detailContent}>
          <h3 className={classes.detailSubtitle}>Personal Items</h3>
          <p className={classes.detailText}>
            You will only need casual clothing during your hospital stay.
            Please bring no more than three changes of clothing, as laundry
            services are available. We encourage you to wear your own
            comfortable attire. Consider a sweater if you tend to feel cold.
            Your days will be active, so avoid bringing expensive clothing or
            jewelry as it is prohibited and we cannot accept responsibility for
            loss or damage.
          </p>
          <p className={classes.detailText}>
            Upon admission, our staff will inventory your personal belongings,
            including any items brought throughout the duration of your stay.
            Please consult the Contraband List in your patient handbook for
            guidance.
          </p>
          <p className={classes.detailListIntro}>In summary, you will need:</p>
          <Checklist items={PREPARING_CHECKLIST} />
        </div>
        <div className={classes.detailImageWrapper}>
          <Image
            src={imgCard1}
            alt="Mother and daughter smiling and embracing at home"
            className={classes.img}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
}

const VISITOR_GUIDELINES = [
  "Visits take place in designated supervised areas.",
  "Personal belongings may be inspected before entering.",
  "Outside items are subject to staff approval.",
  "Visitors are expected to maintain a respectful, supportive environment.",
  "Up to two visitors are permitted at one time and must be at least 18 years old.",
  "Clergy, attorneys, and court representatives may visit outside regular hours when appropriate.",
];

const RECREATION_GUIDELINES = [
  "Television and approved movies are available during designated hours.",
  "Only facility-approved entertainment is permitted.",
  "Personal electronic devices may be restricted during treatment.",
];

const DISCHARGE_PLANNING = [
  "Individualized discharge planning",
  "Family and caregiver education",
  "Coordination with physicians and community providers",
  "Follow-up appointments",
  "Referrals to additional services and community resources",
  "Transition planning for home or another level of care",
];

function ClockIcon() {
  return (
    <svg
      className={classes.hoursIcon}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="20" fill="var(--pg-green-dark)" />
      <circle
        cx="19"
        cy="19"
        r="7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
      />
      <path
        d="M19 14.8V19l-3 1.8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4 29s-3.4-2.2-3.4-4.4a1.9 1.9 0 013.4-1.2 1.9 1.9 0 013.4 1.2c0 2.2-3.4 4.4-3.4 4.4z"
        fill="#ffffff"
        stroke="var(--pg-green-dark)"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function RuleHeading({ children }: { children: React.ReactNode }) {
  return <h3 className={classes.ruleHeading}>{children}</h3>;
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className={classes.checklist}>
      {items.map((item) => (
        <li key={item} className={classes.checklistItem}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DuringYourStay() {
  return (
    <div className={classes.detail} id="guide-detail-during">
      <h2 className={classes.detailTitle}>During Your Stay</h2>
      <div className={classes.detailGrid}>
        <div className={classes.detailContent}>
          <h3 className={classes.detailSubtitle}>Orientation</h3>
          <p className={classes.detailText}>
            At Palm Grove, we understand that seeking psychiatric care can feel
            overwhelming—for both patients and their families. From the moment
            you arrive, our goal is to provide a safe, welcoming environment
            where you feel respected, supported, and cared for throughout your
            recovery.
          </p>
          <p className={classes.detailText}>
            Our specialized inpatient program is designed exclusively for older
            adults. Every patient receives individualized care from a
            multidisciplinary team that includes psychiatrists, nurses,
            therapists, social workers, and other behavioral health
            professionals working together to create a personalized treatment
            plan.
          </p>
        </div>
        <div className={classes.detailImageWrapper}>
          <Image
            src={imgCard2}
            alt="Caregiver sitting with an older adult, smiling together"
            className={classes.img}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
      <div className={classes.detailFullWidth}>
        <p className={classes.detailText}>
          Your comfort and dignity are important to us. We encourage patients
          to wear comfortable personal clothing whenever appropriate,
          participate in therapeutic activities and shared meals, and remain
          actively involved in their treatment decisions. Our secure
          environment helps ensure the safety and well-being of every patient
          while promoting healing and recovery.
        </p>
        <p className={classes.detailText}>
          Most patient rooms are semi-private and thoughtfully designed to
          provide a comfortable, supportive setting during your stay.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Visitation Guidelines</RuleHeading>
        <p className={classes.detailText}>
          We recognize the important role family and loved ones play in the
          healing process.
        </p>
        <p className={classes.detailText}>
          Visitors must be approved by the patient or their legal
          representative before visiting. To protect patient privacy, we cannot
          confirm whether an individual is receiving care without prior
          authorization.
        </p>

        <h4 className={classes.subHeading}>Visitation Hours</h4>
        <div className={classes.hoursRow}>
          <ClockIcon />
          <div>
            <p className={classes.hoursText}>
              Tuesday &amp; Thursday: 2:00 PM – 4:00 PM
            </p>
            <p className={classes.hoursText}>
              Saturday, Sunday &amp; Holidays: 1:00 PM – 3:00 PM
            </p>
          </div>
        </div>

        <h4 className={classes.subHeading}>Visitor Guidelines</h4>
        <Checklist items={VISITOR_GUIDELINES} />
        <p className={classes.note}>
          Visitation hours may be adjusted based on patient care needs and
          safety requirements.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Phone Calls</RuleHeading>
        <p className={classes.detailText}>
          Patients may make and receive phone calls during designated hours.
          Legal representatives, clergy, and guardians may contact patients at
          any time. Staff may limit calls if necessary to support patient
          safety or treatment.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Mail Services</RuleHeading>
        <p className={classes.detailText}>
          Incoming and outgoing mail is handled daily. For safety, incoming
          mail may be opened in the presence of staff before delivery to the
          patient.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Laundry Services</RuleHeading>
        <p className={classes.detailText}>
          Laundry assistance is available throughout your stay. Please speak
          with a member of our nursing team if you need assistance.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Daily Comfort &amp; Recreation</RuleHeading>
        <p className={classes.detailText}>
          Patients are encouraged to participate in therapeutic activities and
          enjoy appropriate recreational opportunities during leisure time.
        </p>
        <p className={classes.detailListIntro}>
          To maintain a safe and supportive environment:
        </p>
        <Checklist items={RECREATION_GUIDELINES} />
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Discharge Planning</RuleHeading>
        <p className={classes.detailText}>
          Planning for a successful transition begins early in each
          patient&apos;s stay. Our care team works closely with patients,
          families, caregivers, and community providers to ensure continued
          support after discharge.
        </p>
        <p className={classes.detailListIntro}>
          Discharge planning may include:
        </p>
        <Checklist items={DISCHARGE_PLANNING} />
      </div>
    </div>
  );
}

const VISITING_HOLIDAYS = [
  "New Year's Day",
  "Memorial Day",
  "Independence Day",
  "Labor Day",
  "Thanksgiving Day",
  "Christmas Day",
];

const VISITATION_PROCEDURE = [
  "All visits must take place in designated visiting areas where they can be supervised by staff.",
  "Visitors are required to empty their pockets and lock up all belongings prior to entering the unit, including purses, bags, cell phones, wallets, keys, smart watches, etc.",
  "Any item brought by visitors must be searched and inventoried before they are given to the patient.",
  "Any visitor bringing or providing contraband on the unit may be restricted from future visits.",
  "Patients and visitors must demonstrate appropriate boundaries and be respectful of others.",
  "Palm Grove values the care partners of our clients. Visitors are asked to arrive 15 minutes prior to the visitation to check in. Only visitors listed on the patient's visitor/phone list may be allowed in.",
  "Patient safety is our primary concern. Please do not give patients: medication, cigarettes, lighting materials, sharp objects, glass items, plastic bags, or safety razors.",
  "The number of visitors allowed is two but may be subject to change based on any illness status of unit milieu.",
  "Visitors must be at least 18 years old.",
  "Clergy, court representatives, and attorneys have unrestricted visiting hours and may visit at any time.",
];

function Visitation() {
  return (
    <div className={classes.detail} id="guide-detail-visitation">
      <h2 className={classes.detailTitle}>Visitation</h2>
      <div className={classes.detailGrid}>
        <div className={classes.detailContent}>
          <h3 className={classes.detailSubtitle}>Visitation Guidelines</h3>
          <p className={classes.detailText}>
            Visitors must be approved by you or your POA/Guardian in order to
            be added to your visitor list. Without prior approval, we will not
            confirm your status as a patient, even over the phone. Visitors are
            expected to uphold the patient confidentiality of those they see or
            meet.
          </p>

          <h3 className={classes.detailSubtitle}>Visitation Hours</h3>
          <div className={classes.hoursRow}>
            <ClockIcon />
            <div>
              <p className={classes.hoursText}>
                Tuesday &amp; Thursday: 2:00 PM – 4:00 PM
              </p>
              <p className={classes.hoursText}>
                Saturday, Sunday &amp; Holidays: 1:00 PM – 3:00 PM
              </p>
            </div>
          </div>
          <p className={classes.noteGreen}>
            Additional arrangements may be made upon request.
          </p>
        </div>
        <div
          className={`${classes.detailImageWrapper} ${classes.detailImageWrapperCompact}`}
        >
          <Image
            src={imgCard3}
            alt="Family sitting close together outdoors"
            className={classes.img}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>

      <div className={classes.detailFullWidth}>
        <p className={classes.detailText}>
          Note: Visiting hours are subject to change in relation to safety
          precautions related to illness. Please see postings on unit for the
          most up-to-date information.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Visiting Holidays Include</RuleHeading>
        <Checklist items={VISITING_HOLIDAYS} />
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Visitation Procedure</RuleHeading>
        <Checklist items={VISITATION_PROCEDURE} />
      </div>
    </div>
  );
}

const DISCHARGE_PLAN_INCLUDES = [
  "Evaluation of the patient by trained personnel",
  "Consultation with the patient or their representative",
  "Preparation for returning home or transfer of care to another facility",
  "Assessment of the need for caretaker training or other support",
  "Referrals to relevant community support organizations or home care agencies",
  "Coordination of follow-up appointments or tests",
];

const FOLLOW_UP_REVIEWS = [
  "The patient's current health status",
  "Medication details",
  "Scheduled appointments",
  "Home care services",
  "Plans for managing any potential issues that may arise",
];

function DischargeFollowUp() {
  return (
    <div className={classes.detail} id="guide-detail-discharge">
      <h2 className={classes.detailTitle}>Discharge and Follow Up</h2>
      <div className={classes.detailGrid}>
        <div className={classes.detailContent}>
          <h3 className={classes.detailSubtitle}>Post-Discharge Care</h3>
          <p className={classes.detailText}>
            A hospital visit can be overwhelming and intimidating for patients
            and their families. As a caretaker, your primary focus is on your
            family member&apos;s medical care, and the hospital staff shares
            this commitment. While it may not be top-of-mind now, it is
            important to consider what happens after you or your relative is
            discharged. Patients, family caretakers, and healthcare providers
            all have roles in ensuring the patient&apos;s ongoing health
            post-discharge.
          </p>
        </div>
        <div
          className={`${classes.detailImageWrapper} ${classes.detailImageWrapperNatural}`}
        >
          <Image
            src={imgCard4}
            alt="Nurse discussing medication with an older adult patient"
            className={classes.img}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Discharge Planning</RuleHeading>
        <p className={classes.detailText}>
          According to Medicare, discharge planning is &ldquo;a process used
          to determine what a patient needs for a smooth transition from one
          level of care to another.&rdquo; While only a doctor can authorize a
          patient&apos;s release from the hospital, discharge planning itself
          can be carried out by a social worker, case manager, nurse, or
          another qualified individual. Especially for complex medical
          conditions, an ideal approach to discharge planning involves a team
          effort.
        </p>
        <p className={classes.detailListIntro}>
          In essence, a discharge plan typically includes:
        </p>
        <Checklist items={DISCHARGE_PLAN_INCLUDES} />
        <p className={classes.detailTextAfterList}>
          The discussion should cover the patient&apos;s health status and
          physical condition both before and after hospitalization, specifics
          regarding required care, and whether discharge will be to home or
          another facility.
        </p>
      </div>

      <div className={classes.subSection}>
        <RuleHeading>Palm Grove Post-Discharge Follow-Up</RuleHeading>
        <p className={classes.detailText}>
          Our two-week post-discharge follow-up is crucial for the overall
          success of patient treatment. It aims to identify and address the
          patient&apos;s actions, misunderstandings, questions, and any
          discrepancies in the discharge plan, as well as any concerns from
          caretakers or family members. The post-discharge follow-up is
          conducted roughly two weeks after discharge by a Palm Grove nurse or
          social worker.
        </p>
        <p className={classes.detailText}>
          The follow-up serves two main functions. Firstly, it ensures that
          the progress made during the patient&apos;s stay at Palm Grove
          transitions effectively to the home environment. Secondly, the nurse
          or social worker is available to answer questions, provide
          resources, and offer recommendations if the patient or their loved
          ones encounter challenges.
        </p>
        <p className={classes.detailListIntro}>
          During the follow-up call, the nurse or social worker reviews:
        </p>
        <Checklist items={FOLLOW_UP_REVIEWS} />
      </div>
    </div>
  );
}

const FAQ_INPATIENT = [
  {
    question: "Why is someone admitted?",
    answer:
      "Admission typically occurs when a person poses an imminent risk to themselves or others, cannot perform daily activities, or needs immediate crisis care.",
  },
  {
    question: "How is admission decided?",
    answer:
      "A mental health professional evaluates the individual's condition. Involuntary admission may occur if safety is a concern.",
  },
  {
    question: "How long is the average stay?",
    answer:
      "Most inpatient stays last 14–21 days, depending on severity and treatment response.",
  },
  {
    question: "What happens during the stay?",
    answer:
      "Patients receive psychiatric evaluation, medication management, group therapy, and discharge planning.",
  },
  {
    question: "What's the daily routine like?",
    answer:
      "Days include meals, therapy, recreation, and rest. Staff monitor and adjust treatment. A registered nurse is on-site 24/7.",
  },
  {
    question: "Are personal items allowed?",
    answer:
      "Days include meals, therapy, recreation, and rest. Staff monitor and adjust treatment. A registered nurse is on-site 24/7.",
  },
  {
    question: "Can patients bring food?",
    answer: "Only if permitted by a provider for dietary reasons.",
  },
];

const FAQ_TREATMENT = [
  {
    question: "What kind of treatment is provided?",
    answer:
      "Treatment includes medication, cognitive behavioral therapy (CBT), family counseling, and crisis intervention.",
  },
  {
    question: "Is recovery possible?",
    answer:
      "Yes. Inpatient care stabilizes symptoms and prepares individuals for long-term recovery.",
  },
  {
    question: "What happens after discharge?",
    answer:
      "Patients receive a discharge plan with follow-up appointments, referrals, medication instructions, and support group recommendations.",
  },
];

const FAQ_IOP = [
  {
    question: "What is an IOP?",
    answer:
      "A non-residential treatment program offering structured therapy 3 days per week for 4 hours per day.",
  },
  {
    question: "Who is it for?",
    answer:
      "Adults 18+ with moderate to severe symptoms, often transitioning from inpatient care.",
  },
  {
    question: "What services are included?",
    answer: "Group therapy, individual therapy, and medication management.",
  },
  {
    question: "What's a typical day like?",
    answer:
      "Sessions include psychoeducation, mindfulness, skill-building, and goal-setting.",
  },
  {
    question: "Can I still work?",
    answer:
      "Yes. IOPs are flexible to accommodate work, school, or family obligations.",
  },
  {
    question: "What happens after IOP?",
    answer:
      "Discharge planning includes referrals to therapy, support groups, or continued care.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Start with a mental health assessment or a referral from a provider.",
  },
];

const FAQ_GROUPS = [
  { heading: "Inpatient Hospitalization", items: FAQ_INPATIENT },
  { heading: "Treatment & Recovery", items: FAQ_TREATMENT },
  { heading: "Intensive Outpatient Program (IOP)", items: FAQ_IOP },
];

function QuestionIcon() {
  return (
    <svg
      className={classes.checkIcon}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="10" fill="var(--pg-green-dark)" />
      <text
        x="10"
        y="14.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#ffffff"
      >
        ?
      </text>
    </svg>
  );
}

function Faqs() {
  return (
    <div className={classes.detail} id="guide-detail-faqs">
      <h2 className={classes.detailTitle}>Frequently Asked Questions</h2>
      {FAQ_GROUPS.map((group, index) => (
        <div
          key={group.heading}
          className={index > 0 ? classes.subSection : undefined}
        >
          <RuleHeading>{group.heading}</RuleHeading>
          <div className={classes.faqList}>
            {group.items.map((item) => (
              <details key={item.question} className={classes.faqItem} open>
                <summary className={classes.faqSummary}>
                  <QuestionIcon />
                  <span className={classes.faqQuestion}>{item.question}</span>
                  <svg
                    className={classes.faqChevron}
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className={classes.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const DETAIL_SECTIONS: Record<string, () => React.ReactNode> = {
  preparing: PreparingForYourStay,
  during: DuringYourStay,
  visitation: Visitation,
  discharge: DischargeFollowUp,
  faqs: Faqs,
};

export function PatientVisitorGuide() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ActiveDetail = activeId ? DETAIL_SECTIONS[activeId] : undefined;

  const showSection = (id: string | null) => {
    setActiveId(id);
    window.scrollTo(0, 0);
  };

  if (ActiveDetail) {
    return (
      <section className={`${classes.section} ${classes.sectionDetail}`}>
        <button
          type="button"
          className={classes.backButton}
          onClick={() => showSection(null)}
        >
          ← Back to Patient &amp; Visitor Guide
        </button>
        <ActiveDetail />
      </section>
    );
  }

  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        {/* Image mosaic */}
        <div className={classes.mosaic}>
          <div className={classes.imgTopWrapper}>
            <Image
              src={img9}
              alt="Family walking together outdoors"
              className={classes.img}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className={classes.imgBottomRow}>
            <div className={classes.imgSmallWrapper}>
              <Image
                src={img10}
                alt="Grandfather embracing a family member"
                className={classes.img}
                placeholder="blur"
                sizes="(max-width: 768px) 50vw, 22vw"
              />
            </div>
            <div className={classes.imgSmallWrapper}>
              <Image
                src={img11}
                alt="Caregiver providing hands-on support"
                className={classes.img}
                placeholder="blur"
                sizes="(max-width: 768px) 50vw, 22vw"
              />
            </div>
          </div>
        </div>

        {/* Guide cards */}
        <div className={classes.cards}>
          {GUIDE_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={classes.card}
              onClick={() => showSection(item.id)}
            >
              <h3 className={classes.cardTitle}>{item.title}</h3>
              <p className={classes.cardDesc}>{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
