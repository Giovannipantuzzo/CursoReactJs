import styles from "../styles/Components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn.discordapp.com/attachments/796163490208677929/855256920804818984/unknown.png"
        alt="tiringa"
      />
      <div>
        <strong> Tiringa </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
