import styles from "../styles/void.module.scss";
import NoteOperations from "../components/NoteOperations";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <NoteOperations />
        </div>
        <div className={styles.right}>Right</div>
      </div>
    </main>
  );
}
