import Link from "next/link";

export default function HeadphonesLayout({ children }) {
  return (
    <div>
      <div>
        <Link href="/headphones/top">Top</Link>
        <Link href="/headphones/fhsiuefh">AirPods1</Link>
        <Link href="/headphones/dsagf76gd7612gdas">AirPods2</Link>
        <Link href="/headphones/fgauygd8agt">AirPods3</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
