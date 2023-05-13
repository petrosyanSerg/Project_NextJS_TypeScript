import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
