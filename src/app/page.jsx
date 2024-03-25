import Featured from "./components/featured/Featured";
import categoryList from "./components/categoryList/categoryList";
import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";
import Menu from "./components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <categoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}