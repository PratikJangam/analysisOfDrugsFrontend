import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import "./drugDetails.css";
import MiddleSection from "./MiddleSection";

const userData = [
  {
    id: "/cymbalta",
    name: "Cymbalta",
    data: [
      { name: "Major Depresive Disorder", value: 40 },
      { name: "Neuropathic Pain", value: 15 },
      { name: "Repeated Episodes of Anxiety", value: 13 },
      { name: "Other", value: 11 },
      {
        name: "Disorder characterized by Stiff, Tender & Painful Muscles",
        value: 9,
      },
      { name: "Chronic Muscle or Bone Pain", value: 9 },
      {
        name: "Diabetic Complication causing Injury to some Body Nerves",
        value: 1,
      },
      { name: "Anxiousness associated with Depression", value: 1 },
    ],

    COLORS: [
      "#4D575C",
      "#83949C",
      "#B9D1DB",
      "#C3DDE8",
      "#A3B8C2",
      "#D0D3DB",
      "#DCDFE8",
      "#BDBFC6",
    ],
    data1: [
      { name: "No side effects", value: 34 },
      { name: "Mild side effects", value: 27 },
      { name: "Moderate side effect", value: 19 },
      { name: "Extreme severe side effects", value: 13 },
      { name: "Severe side effect", value: 7 },
    ],
    COLORS_1: ["#4D575C", "#83949C", "#B9D1DB", "#C3DDE8", "#A3B8C2"],
    barGraphData: [
      {
        name: "3-6",

        male: 28,
        female: 90,
      },
      {
        name: "45-54",

        male: 391,
        female: 900,
      },
      {
        name: "35-44",

        male: 274,
        female: 600,
      },
      {
        name: "55-64",

        male: 208,
        female: 800,
      },
      {
        name: "75 or above",

        male: 22,
        female: 80,
      },
      {
        name: "65-74",

        male: 100,
        female: 300,
      },
      {
        name: "19-24",

        male: 50,
        female: 175,
      },
      {
        name: "13-18",

        male: 14,
        female: 20,
      },
      {
        name: "25-34",

        male: 194,
        female: 400,
      },
    ],
    info1:
      "Different conditions are shown in people for  using Cymbalta drug like major Depressive Order is seen in 1510 people which is around 40.1% comapre to other, Neuropathic pain is seen in 573 people which is around 15.2% comapre to other, Chronic muscle or bone pain is seen in 336 people which is around 8.9% comapre to other ,Repeated Episodes of Anxiety is seen in 503 people which is around 13.3% comapre to other , Disorder characterized by Stiff ,Tender & Painful Muscles is seen in 343 people which is around 9.1% comapre to other, Diabetic Complication causing Injury to some Body Nerves is seen in 47 people which is around 1.2% comapre to other, Anxiousness associated with Depression is seen in 44 people which is around 1,2% comapre to other.",
    info2:
      "effect of cymbalta drug specific on 45-54 ags is like People having Different side effects like Mild side effects is 27%, Moderate side effect is 19%, Extreme severe side effects 13%, Severe side effect is 7% and people with no side effects are 34% in age group 45-54 are shown in pie chart",
  },
  {
    id: "/lisinopril",
    name: "Lisinopril",
    data: [
      { name: "High blood pressure", value: 90 },
      { name: "Other", value: 3 },
      { name: "Kidney Disease From diabetes", value: 2 },
      { name: "Heart Attack", value: 1 },
    ],
    COLORS: [
      "#4D575C",
      "#83949C",
      "#B9D1DB",
      "#C3DDE8",
      "#A3B8C2",
      "#D0D3DB",
      "#DCDFE8",
      "#BDBFC6",
    ],
    data1: [
      { name: "No side effects", value: 26 },
      { name: "Mild side effects", value: 26 },
      { name: "Moderate side effect", value: 22 },
      { name: "Extreme severe side effects", value: 16 },
      { name: "Severe side effect", value: 10 },
    ],
    COLORS_1: ["#4D575C", "#83949C", "#B9D1DB", "#C3DDE8", "#A3B8C2"],
    barGraphData: [
      {
        name: "3-6",

        male: 30,
        female: 20,
      },
      {
        name: "65-74",

        male: 320,
        female: 400,
      },
      {
        name: "45-54",

        male: 390,
        female: 690,
      },
      {
        name: "35-44",

        male: 200,
        female: 320,
      },
      {
        name: "55-64",

        male: 490,
        female: 690,
      },
      {
        name: "75 or above",

        male: 180,
        female: 160,
      },

      {
        name: "19-24",

        male: 30,
        female: 30,
      },
      {
        name: "13-18",

        male: 14,
        female: 18,
      },
      {
        name: "25-34",

        male: 50,
        female: 110,
      },
    ],
    info1:
      "Different conditions are shown in people for  using lisinopril drug like High Blood Pressure seen in 3834 people which is around 89% comapre to other, Other percentage is around 2.6 with 111 people, Kidney Disease from Diabetes	seen in 103 people which is around 2.4% comapre to other, Heart Attack seen in 88 people which is around 2.1% comapre to other, Chronic Heart Failure seen in 42 people which is around 1% comapre to other, Prevention of Recurrent Atrial Fibrillation seen in 23 people which is around 0.5% comapre to other, Failure of the Left Ventricle of the Heart seen in 18 people which is around 0.5% comapre to other, Migraine Prevention seen in 18 people which is around 0.5% comapre to other, Kidney Problem caused by Body Tissue Disease-Scleroderma seen in 15 people which is around 0.5% comapre to other, Nondiabetic Proteinuric Nephropathy	seen in 9 people which is around 0.4% comapre to other, Retinal Changes of Eye in a Patient with Diabetes seen in 4 people which is around 0.3% comapre to other, Diastolic Heart Failure seen in 3 people which is around 0.2% comapre to other,",

    info2:
      "Effect of lisinopril drug specific on 45-54 ags is like People having Different side effects like Mild side effects is 26%, Moderate side effect is 22%, Extreme severe side effects 16%, Severe side effect is 10% and people with no side effects are 26% in age group 45-54 are shown in pie chart",
  },
  {
    id: "/lexapro",
    name: "Lexapro",
    data: [
      { name: "Depression", value: 46 },
      { name: "Repeated Episodes of Anxity", value: 22 },
      { name: "Panic disorder", value: 7 },
      { name: "Other", value: 6 },
      { name: "Major Depresive disorder", value: 5 },
      { name: "Bipolar Depression", value: 4 },
      { name: "Change of life Sign", value: 3 },
      { name: "Posttraumatic Stress syndrome", value: 2 },
      { name: "Obsesive Compulsive Disorder", value: 2 },
    ],
    COLORS: [
      "#4D575C",
      "#83949C",
      "#B9D1DB",
      "#C3DDE8",
      "#A3B8C2",
      "#D0D3DB",
      "#DCDFE8",
      "#BDBFC6",
    ],
    data1: [
      { name: "No side effects", value: 41 },
      { name: "Mild side effects", value: 25 },
      { name: "Moderate side effect", value: 15 },
      { name: "Extreme severe side effects", value: 12 },
      { name: "Severe side effect", value: 7 },
    ],
    COLORS_1: ["#4D575C", "#83949C", "#B9D1DB", "#C3DDE8", "#A3B8C2"],
    barGraphData: [
      {
        name: "3-6",

        male: 10,
        female: 60,
      },
      {
        name: "65-74",

        male: 60,
        female: 160,
      },
      {
        name: "45-54",

        male: 200,
        female: 630,
      },
      {
        name: "35-44",

        male: 170,
        female: 630,
      },
      {
        name: "55-64",

        male: 420,
        female: 130,
      },
      {
        name: "75 or above",

        male: 20,
        female: 40,
      },

      {
        name: "19-24",

        male: 180,
        female: 310,
      },
      {
        name: "13-18",

        male: 20,
        female: 120,
      },
      {
        name: "25-34",

        male: 150,
        female: 690,
      },
    ],
    info1:
      "Different conditions are shown in people for  using LEXAPRO drug like Depression seen in 1920 people which is around 46% comapre to other, Repeated Episodes of Anxiety seen in 921 people which is around 22% comapre to other, Panic Disorder seen in 311 people which is around 7.5% comapre to other, Major Depressive Disorder seen in 194 people which is around 4.7% comapre to other, Bipolar Depression seen in 192 people which is around 4.6% comapre to other, Posttraumatic Stress Syndrome seen in 89 people which is around 2.2% comapre to other, Obsessive Compulsive Disorder seen in 69 people which is around 1.7% comapre to other, Anxiousness associated with Depression seen in 47 people which is around 1.1% comapre to other",
    info2:
      "Effect of lexapro drug specific on 45-54 ags is like People having Different side effects like Mild side effects is 25%, Moderate side effect is 15%, Extreme severe side effects 12%, Severe side effect is 7% and people with no side effects are 41% in age group 45-54 are shown in pie chart",
  },
  {
    id: "/effexor",
    name: "Effexor",
    data: [
      { name: "Depression", value: 53 },
      { name: "Repeated Episodes of Anxity", value: 22 },
      { name: "Panic disorder", value: 7 },
      { name: "Other", value: 6 },
      { name: "Major Depresive disorder", value: 5 },
      { name: "Bipolar Depression", value: 4 },
      { name: "Change of life Sign", value: 3 },
      { name: "Posttraumatic Stress syndrome", value: 2 },
      { name: "Obsesive Compulsive Disorder", value: 2 },
    ],
    COLORS: [
      "#4D575C",
      "#83949C",
      "#B9D1DB",
      "#C3DDE8",
      "#A3B8C2",
      "#D0D3DB",
      "#DCDFE8",
      "#BDBFC6",
    ],
    data1: [
      { name: "No side effects", value: 37 },
      { name: "Mild side effects", value: 28 },
      { name: "Moderate side effect", value: 17 },
      { name: "Extreme severe side effects", value: 11 },
      { name: "Severe side effect", value: 7 },
    ],
    COLORS_1: ["#4D575C", "#83949C", "#B9D1DB", "#C3DDE8", "#A3B8C2"],
    barGraphData: [
      {
        name: "3-6",

        male: 10,
        female: 50,
      },
      {
        name: "65-74",

        male: 30,
        female: 130,
      },
      {
        name: "45-54",

        male: 120,
        female: 720,
      },
      {
        name: "35-44",

        male: 110,
        female: 570,
      },
      {
        name: "55-64",

        male: 100,
        female: 490,
      },
      {
        name: "75 or above",

        male: 10,
        female: 18,
      },

      {
        name: "19-24",

        male: 30,
        female: 220,
      },
      {
        name: "13-18",

        male: 13,
        female: 30,
      },
      {
        name: "25-34",

        male: 100,
        female: 580,
      },
    ],
    info1:
      "Different conditions are shown in people for  using effexor xr drug like Depression seen in 1920 people which is around 46% comapre to other, Repeated Episodes of Anxiety seen in 921 people which is around 22% comapre to other, Panic Disorder seen in 311 people which is around 7.5% comapre to other, Major Depressive Disorder seen in 194 people which is around 4.7% comapre to other, Bipolar Depression seen in 192 people which is around 4.6% comapre to other, Posttraumatic Stress Syndrome seen in 89 people which is around 2.2% comapre to other, Obsessive Compulsive Disorder seen in 69 people which is around 1.7% comapre to other, Anxiousness associated with Depression seen in 47 people which is around 1.1% comapre to other",
    info2:
      "Effect of effexor xr drug specific on 45-54 ags is like People having Different side effects like Mild side effects is 28%, Moderate side effect is 17%, Extreme severe side effects 11%, Severe side effect is 7% and people with no side effects are 37% in age group 45-54 are shown in pie chart",
  },
  {
    id: "/lyrica",
    name: "Lyrica",
    data: [
      { name: "Neuropathic Pain", value: 42 },
      {
        name: "Disorder characterised by Stiff, Tender and Painful muscle",
        value: 24,
      },
      { name: "Other", value: 23 },
      {
        name: "Diabetic complication causing enjury to some body nerves",
        value: 4,
      },
      { name: "Nerve pain from spinal cord enjury", value: 3 },
      { name: "Nerve pain after Herpes", value: 2 },
    ],
    COLORS: [
      "#4D575C",
      "#83949C",
      "#B9D1DB",
      "#C3DDE8",
      "#A3B8C2",
      "#D0D3DB",
      "#DCDFE8",
      "#BDBFC6",
    ],
    data1: [
      { name: "No side effects", value: 28 },
      { name: "Mild side effects", value: 24 },
      { name: "Moderate side effect", value: 20 },
      { name: "Extreme severe side effects", value: 19 },
      { name: "Severe side effect", value: 10 },
    ],
    COLORS_1: ["#4D575C", "#83949C", "#B9D1DB", "#C3DDE8", "#A3B8C2"],
    barGraphData: [
      {
        name: "3-6",

        male: 10,
        female: 40,
      },
      {
        name: "65-74",

        male: 110,
        female: 210,
      },
      {
        name: "45-54",

        male: 190,
        female: 680,
      },
      {
        name: "35-44",

        male: 100,
        female: 450,
      },
      {
        name: "55-64",

        male: 200,
        female: 600,
      },
      {
        name: "75 or above",

        male: 60,
        female: 70,
      },

      {
        name: "19-24",

        male: 20,
        female: 70,
      },
      {
        name: "13-18",

        male: 13,
        female: 18,
      },
      {
        name: "25-34",

        male: 30,
        female: 190,
      },
    ],
    info1:
      "Different conditions are shown in people for  using effexor xr drug like Neuropathic Pain seen in 1283 people which is around 41% comapre to other, Disorder characterized by Stiff, Tender & Painful Muscles seen in 732 people which is around 23% comapre to other, Diabetic Complication causing Injury to some Body Nervesr seen in 125 people which is around 4.1% comapre to other, Nerve Pain from Spinal Cord Injury seen in 91 people which is around 3% comapre to other, Nerve Pain after Herpes seen in 64 people which is around 2% comapre to other, Additional Medication to Treat Partial Seizures seen in 56 people which is around 1.8% comapre to other, Repeated Episodes of Anxiety seen in 3 people which is around 0.1% comapre to other, Acute Pain Following an Operation seen in 2 people which is around 0.1% comapre to other,",
    info2:
      "Effect of lyrica drug specific on 45-54 ags is like People having Different side effects like Mild side effects is 24%, Moderate side effect is 19%, Extreme severe side effects 20%, Severe side effect is 10% and people with no side effects are 28% in age group 45-54 are shown in pie chart",
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DrugDetails = () => {
  const location = useLocation();
  const url1 = location.pathname;

  let newArray = userData.filter(function (el) {
    return el.id === url1;
  });

  console.log(newArray);
  return (
    <>
      <div className="drug_details">
        <Link to="..">Analysis of Drugs using machine learning</Link>
        <MiddleSection />
        <div className="chart_main_container">
          <h1>
            Pie Chart of Percentage of different conditions of People for{" "}
            {newArray[0].name} Drug
          </h1>
          <div className="pie_chart1" style={{ height: "70vh" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={newArray[0].data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={200}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {newArray[0].data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        newArray[0].COLORS[index % newArray[0].COLORS.length]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart_description">
              {newArray[0].info1}
              <br />
            </div>
          </div>
        </div>

        <div className="chart_main_container">
          <h1>Effect of Drug on Age group 45-54 (most commonly used by)</h1>
          <div className="pie_chart1" style={{ height: "70vh" }}>
            <div className="chart_description">
              {newArray[0].info2}
              <br />
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={newArray[0].data1}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={200}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {newArray[0].data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        newArray[0].COLORS_1[
                          index % newArray[0].COLORS_1.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bargraph_main" style={{ height: "50vh" }}>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "2rem",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Plot of various Age groups taken for this and their sex is displayed
            below.
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={500}
              data={newArray[0].barGraphData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" />

              {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
              <YAxis yAxisId="left" orientation="left" stroke="#fff" />
              <Tooltip />
              <Legend />

              <Bar yAxisId="left" dataKey="male" fill="#57585C" />
              <Bar yAxisId="left" dataKey="female" fill="#DCDFE8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="footer">
          <p>Copyright @2023</p>
        </div>
      </div>
    </>
  );
};

export default DrugDetails;
