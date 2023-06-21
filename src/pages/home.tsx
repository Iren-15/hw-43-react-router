import { Users } from "./users";
import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <div>
      <h1 className={styles["header"]}>GitHub Users</h1>
      <Users />
    </div>
  );
};
