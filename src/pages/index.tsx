import Head from "next/Head";
import React from "react";
import { CompletedChallenges } from "../Components/CompletedChallenges";
import { CountDown } from "../Components/CountDown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { ChallengeBox } from "../Components/ChallengeBox";
import styles from "../styles/pages/Home.module.css";
import { CountDownProvider } from "../Contexts/CountDownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../Contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
