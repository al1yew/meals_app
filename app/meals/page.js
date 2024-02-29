import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our wide community",
};

const FetchMeals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your lovely recipe and cook it by yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite recipe!</Link>
        </p>
      </header>
      <main className={styles.header}>
        {/* suspense wraps into loading spinner, and the same does loading.js, but it is for the whole component. we do it manually with suspense */}
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};
export default Meals;
