import React from "react";
import "./chart.css";
import { Link } from "react-router-dom";

const drugsName = [
  {
    id: "cymbalta",
    name: "Cymbalta",
    info: "Duloxetine, sold under the brand name Cymbalta among others, is a medication used to treat major depressive disorder, generalized anxiety disorder, fibromyalgia, neuropathic pain and central sensitization. It is taken by mouth. Duloxetine is a serotonin–norepinephrine reuptake inhibitor (SNRI). Similarly to SSRIs and other SNRIs, the precise mechanism for its antidepressant and anxiolytic effects is not known.",
    img: "Images/cymbalta.jpg",
  },
  {
    id: "lisinopril",
    name: "Lisinopril",
    info: "Lisinopril is a medication belonging to the drug class of angiotensin-converting enzyme (ACE) inhibitors and is used to treat high blood pressure, heart failure, and heart attacks. For high blood pressure it is usually a first-line treatment. It is also used to prevent kidney problems in people with diabetes mellitus. Lisinopril is taken by mouth. Full effect may take up to four weeks to occur.",
    img: "Images/lisinopril.jpeg",
  },
  {
    id: "effexor",
    name: "Effexor",
    info: "Venlafaxine, sold under the brand name Effexor among others, is an antidepressant medication of the serotonin-norepinephrine reuptake inhibitor (SNRI) class. It is used to treat major depressive disorder, generalized anxiety disorder, panic disorder, and social anxiety disorder. It may also be used for chronic pain. It is taken by mouth. It is also available as the salt venlafaxine besylate in an extended-release formulation (Venbysi XR).",
    img: "Images/Effexor.jpeg",
  },
  {
    id: "lexapro",
    name: "Lexapro",
    info: "Escitalopram, sold under the brand names Lexapro and Cipralex, among others, is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class. Escitalopram is mainly used to treat major depressive disorder and generalized anxiety disorder. It is taken by mouth, available commercially as an oxalate salt exclusively.",
    img: "Images/Lexapro.jpeg",
  },
  {
    id: "lyrica",
    name: "Lyrica",
    info: "Pregabalin, sold under the brand name Lyrica among others, is an anticonvulsant, analgesic and anxiolytic medication used to treat epilepsy, neuropathic pain, fibromyalgia, restless leg syndrome, opioid withdrawal and generalized anxiety disorder (GAD). Pregabalin also has antiallodynic properties. Its use in epilepsy is as an add-on therapy for partial seizures. It is a gabapentinoid medication and acts by inhibiting certain calcium channels. When used before surgery, it reduces pain but results in greater sedation and visual disturbances. It is taken by mouth.",
    img: "Images/Lyrica.jpeg",
  },
];

const Chart = () => {
  return (
    <>
      <div className="chart_section">
        <h1>Analysis of Medicines</h1>
        <p>
          This application is meant to help researchers with their research. In
          our study, we are not advising anyone to use this medication; instead,
          we are just displaying the results of our analysis of the data.
        </p>
        <div className="cards">
          {drugsName.map((e) => {
            return (
              <div className="card">
                <h1>{e.name}</h1>
                <img src={e.img} alt="cymbalta" />
                <p>{e.info}</p>
                <button>
                  <Link to={`/${e.id}`}>Explore</Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Chart;
