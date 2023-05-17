import React from "react";
import MetaLayout from "@/components/Layout/MetaLayout";
import { GetServerSideProps } from "next";
import styles from "./posts.module.scss";
import { IPostData } from "@/types/InterfacePost";
import { Base_Url } from "@/config/Base_Url";
import { API_Parameters } from "@/config/Api_Parameters";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(Base_Url + API_Parameters.posts);
  const data = await response.data;

  return {
    props: {
      postsData: data,
    },
  };
};

interface IPostProps {
  postsData: IPostData;
}

export default function Posts({ postsData }: IPostProps) {
  const { posts } = postsData;

  return (
    <MetaLayout title="Posts | Project">
      <section className={styles.postsSection}>
        <div className={styles.posts}>
          {posts.map((post) => {
            return (
              <div key={post.id} className={styles.post}>
                <p className={styles.post__id}>{post.id}</p>
                <h3 className={styles.post__author}>{post.title}</h3>
                <p className={styles.post__text}>{post.body}</p>
                <p className={styles.post__tags}>
                  {post.tags.map((tag) => (
                    <strong className={styles.post__tag} key={tag}>
                      #{tag}{" "}
                    </strong>
                  ))}
                </p>
                <span className={styles.post__reactions}>
                  👍 {post.reactions}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </MetaLayout>
  );
}
