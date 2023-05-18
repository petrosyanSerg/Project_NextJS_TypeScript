import React from "react";
import axios from "axios";
import { API_Parameters } from "@/config/Api_Parameters";
import { Base_Url } from "@/config/Base_Url";
import { GetStaticProps } from "next";
import { IUser } from "@/types/InterfaceUser";
import Image from "next/image";
interface IUserProps {
  userData: IUser;
}

export default function user({ userData }: IUserProps) {
  const {
    id,
    image,
    age,
    firstName,
    lastName,
    birthDate,
    gender,
    maidenName,
    phone,
    email,
  } = userData;
  console.log(userData);
  return (
    <div>
      <span>{id}</span>
      <div>
        <div>
          <Image src={image} alt={firstName} width={300} height={300} />
        </div>
        <div>
          {firstName} {lastName}
        </div>
      </div>
      <div>
        <h1>{maidenName}</h1>
        <div>
          <p>Email : {email}</p>
          <p>Birth Day : {birthDate}</p>
          <p>Age : {age}</p>
          <p>Gender : {gender}</p>
          <p>Phone : {phone}</p>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await axios.get(Base_Url + API_Parameters.users);
  const data = await response.data;
  return {
    paths: data.users.map((user: any) => ({
      params: {
        id: user.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get(
    Base_Url + API_Parameters.users + `/${params?.id}`
  );
  const data = response.data;
  return {
    props: {
      userData: data,
    },
  };
};
