import MetaLayout from "@/components/Layout/MetaLayout";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <MetaLayout title="Home | Project">
        <section className={styles.home}>
          <h1 className={styles.home__title}>
            I'm excited to share my first Next.js project with you all! 🚀
          </h1>
          <p className={styles.home__text}>
            After spending time learning and exploring the wonders of Next.js,
            I've finally brought my own project to life. Next.js is a React
            framework that has allowed me to create web applications quickly and
            efficiently. My project focuses on building a modern and dynamic
            website that meets my goals and needs. With Next.js, I've been able
            to leverage server-side rendering and static page generation,
            significantly improving the loading speed and performance of my
            site. I've used reusable components to structure my code in an
            organized manner and keep it easily maintainable in the future. I've
            also taken advantage of Next.js's routing capabilities to create
            smooth navigation and an intuitive user experience. Additionally,
            Next.js has seamlessly integrated with popular tools like
            TypeScript, enhancing the quality and security of my code. I've also
            utilized Next.js's built-in SEO optimization capabilities to ensure
            that my project is easily discoverable by search engines. But it's
            not just about the technology. My first Next.js project has been a
            journey of learning and personal growth. It has challenged me to
            think about designing and creating engaging user experiences,
            effectively structuring my project, and efficiently solving
            problems. I'm excited to share my project with the world and receive
            feedback and suggestions to further improve it. With Next.js, I have
            the confidence that my project is scalable and ready to grow as new
            features are added and its scope expands. Thanks to Next.js, my
            first project has been a rewarding and stimulating experience. I'm
            thrilled to continue exploring and creating more amazing
            applications with this powerful development tool! 💪
          </p>
        </section>
      </MetaLayout>
    </>
  );
}
