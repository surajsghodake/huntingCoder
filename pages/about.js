import React from "react";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <div className={styles.my}>
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia
          quam laborum dignissimos neque cupiditate, officia aliquam quaerat
          voluptate repudiandae est, ducimus ipsa earum aperiam deleniti
          temporibus similique cumque at dolorem quo ab minus enim. Laborum
          nulla in vitae tempore unde harum veritatis modi vero libero,
          similique doloribus, repellendus quam temporibus esse, facere dicta
          totam ab! Sapiente necessitatibus delectus, accusantium, voluptates
          veritatis blanditiis praesentium quos vel culpa iure repudiandae
          tempore assumenda, omnis id saepe nam. Facere, unde ad nobis corrupti
          quo natus dolorem error esse ullam maxime quasi voluptas sint a
          eligendi fugit iusto voluptates quidem aliquid blanditiis obcaecati
          nostrum voluptatibus voluptatum.
        </p>
      </div>
      <div className={styles.my}>
        <h2>Services Offered</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iste
          ipsam optio nostrum, quidem corrupti provident beatae, veniam tempore
          nam ipsa recusandae, quae debitis eligendi deserunt quisquam quos quo
          reprehenderit! Nulla saepe impedit quasi optio numquam voluptas? Quasi
          optio expedita ut, laborum accusantium ad.
        </p>
        <p>We offer following services</p>
        <ul className={styles.mx}>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
          <li>Service 5</li>
          <li>Service 6</li>
          <li>Service 7</li>
          <li>Service 8</li>
        </ul>
      </div>
      <div className={styles.my}>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          consequatur perferendis, alias obcaecati aliquid odit pariatur
          accusamus rem qui dolor excepturi! Esse, voluptatem unde eius
          consectetur distinctio ducimus exercitationem harum delectus officiis
          possimus aperiam sed praesentium eaque fugiat reiciendis molestias
          voluptatibus adipisci quis! Quis sint omnis rerum consequuntur
          delectus recusandae nisi debitis blanditiis doloremque eos.
        </p>
      </div>
    </div>
  );
};

export default About;
