import React, { useEffect } from "react";
import MetaLayout from "@/components/Layout/MetaLayout";
import axios from "axios";
import { API_Parameters } from "@/config/Api_Parameters";
import { Base_Url } from "@/config/Base_Url";
import { IQuoteData } from "@/types/InterfaceQuote";
import { GetStaticProps } from "next";

import styles from "./quotes.module.scss";

interface IQuotesProps {
  quotesData: IQuoteData;
}

export default function Quotes({ quotesData }: IQuotesProps) {
  const { quotes } = quotesData;

  return (
    <MetaLayout title="Quotes | Project">
      <section className={styles.quotesSection}>
        {quotes.map((quote) => {
          return (
            <div key={quote.id} className={styles.quote}>
              <p className={styles.quote__id}>{quote.id}</p>
              <p className={styles.quote__text}>{quote.quote}</p>
              <h3 className={styles.quote__author}>{quote.author}</h3>
            </div>
          );
        })}
      </section>
    </MetaLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(Base_Url + API_Parameters.quotes);
  const data = response.data;
  return {
    props: {
      quotesData: data,
    },
  };
};
