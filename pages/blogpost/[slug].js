import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs";

// Step 1: Find the file corresponding the slug.
// Step 2: Populate them inside the page.
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <br />
        <p>{blog && blog.content}</p>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "how-to-learn-flask",
        },
        params: {
          slug: "how-to-learn-javascript",
        },
        params: {
          slug: "how-to-learn-nextjs",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
