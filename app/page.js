import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>React Challenges</h2>
      <Link href="/progressbar">Progress Bar</Link>
      <Link href="/submitformdata">Submit Form Data</Link>
    </>
  );
}
