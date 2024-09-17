import type { Metadata } from "next";
import  HomePage  from "./components/counter/HomePage";

export default function IndexPage() {
  return <HomePage />;
}

export const metadata: Metadata = {
  title: "Advera Commerce",
};
