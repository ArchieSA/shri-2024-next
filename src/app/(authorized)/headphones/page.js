import { getHeadphones } from "@/services/api";
import Link from "next/link";

export default async function Headphones() {
  const headphones = await getHeadphones();

  return (
    <div>
      {headphones.map((headphone) => (
        <Link key={headphone.key} href={`/headphones/${headphone.id}`}>
          {headphone.name}
        </Link>
      ))}
    </div>
  );
}
