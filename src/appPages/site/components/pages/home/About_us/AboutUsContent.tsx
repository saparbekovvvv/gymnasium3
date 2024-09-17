"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useGetAboutQuery } from "@/redux/api/about_us";
import styles from "./AboutUsContent.module.scss";

// Компонент для анимированного отображения числа
const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString());
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

// Описание типов для StatItemProps
interface StatItemProps {
  icon: ReactNode;
  value: number | undefined;
  label: string;
}

// Компонент для отображения отдельного элемента статистики
const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className={styles.statItem}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.value}>
      {value !== undefined ? (
        <AnimatedNumber value={value} />
      ) : (
        <span>N/A</span>
      )}
    </div>
    <div className={styles.label}>{label}</div>
  </div>
);

const AboutUsContent = () => {
  const { data, error, isLoading } = useGetAboutQuery();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading data</div>;

  const stats = [
    { icon: "👧🏻👦🏻", value: data?.[0]?.students || 6395, label: "Учеников" },
    {
      icon: "👨‍🎓",
      value: data?.[0]?.graduates_per_year || 13283,
      label: "Выпускников",
    },
    {
      icon: "🏫",
      value: data?.[0]?.years_for_school,
      label: "Год работы школы",
    },
    {
      icon: "📖",
      value: data?.[0]?.count_books || 85,
      label: "Количество книг",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
