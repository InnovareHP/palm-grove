import Image from "next/image";
import checkIcon from "@/public/figma/shared/check.svg";
import classes from "./PatientGuideCards.module.css";

const cards = [
  {
    title: "What to Bring",
    items: [
      "A list of current medications and dosages",
      "Insurance information and photo ID",
      "Comfortable, weather-appropriate clothing",
      "Eyeglasses, hearing aids, and needed assistive devices",
      "Contact information for family and providers",
    ],
  },
  {
    title: "Please Leave at Home",
    items: [
      "Sharp objects and glass containers",
      "Valuables and large amounts of cash",
      "Alcohol, drugs, or unapproved medications",
      "Cords, belts, and drawstrings",
      "Aerosols and items containing alcohol",
    ],
  },
  {
    title: "Amenities & Comfort",
    items: [
      "Private and shared room options",
      "Nutritious meals with dietary accommodations",
      "Comfortable common and activity spaces",
      "Nursing available around the clock",
      "Coordination of personal care needs",
    ],
  },
];

export function PatientGuideCards() {
  return (
    <section className="pgSection">
      <div className="pgContainer">
        <div className={classes.grid}>
          {cards.map((card) => (
            <div key={card.title} className={classes.card}>
              <h2 className={classes.title}>{card.title}</h2>
              <ul className={classes.list}>
                {card.items.map((item) => (
                  <li key={item} className={classes.item}>
                    <Image
                      src={checkIcon}
                      alt=""
                      width={20}
                      height={20}
                      className={classes.icon}
                    />
                    <p className={classes.text}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
