"use client";
import React, { useState, useEffect } from "react";
import { useGetAboutQuery } from "@/redux/api/about_us";
import styles from "./AboutUsContent.module.scss";

// Интерфейс для пропсов компонента StatItem
interface StatItemProps {
  icon: React.ReactNode; // icon может быть любым JSX-элементом (в данном случае эмодзи)
  value: number;
  label: string;
}

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString(), 10); // Преобразуем значение в число
    const duration = 2000;
    const increment = end / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setDisplayValue(end);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
};

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className={styles.statItem}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.value}>
      <AnimatedNumber value={value} />
    </div>
    <div className={styles.label}>{label}</div>
  </div>
);

const AboutUsContent: React.FC = () => {
  const { data, error, isLoading } = useGetAboutQuery();
  console.log(data, "Loading");

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading data</div>;

  // Убедитесь, что значение всегда является числом
  const stats = [
    { icon: "👦🏻👧🏻", value: data?.[0]?.students ?? 6395, label: "Учеников" },
    {
      icon: "🎓",
      value: data?.[0]?.graduates_per_year ?? 13283,
      label: "Выпускников",
    },
    {
      icon: "👨‍💼",
      value: data?.[0]?.years_for_school ?? 0,
      label: "Сотрудники",
    },
    {
      icon: "📖",
      value: data?.[0]?.count_books ?? 85,
      label: "Количество книг",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
