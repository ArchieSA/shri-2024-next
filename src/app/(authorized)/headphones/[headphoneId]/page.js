import { Clicker } from "@/components/clicker";
import { Counter } from "@/components/counter";
import { HeadphoneDetails } from "@/components/headphonesDetails";
import { getHeadphoneById, getTopHeadphones } from "@/services/api";

export async function generateStaticParams() {
  const headphones = await getTopHeadphones();

  return headphones.map(({ id }) => ({ headphoneId: id }));
}

export default async function Headphone({ params }) {
  const headphone = await getHeadphoneById(params.headphoneId);

  return (
    <div>
      <HeadphoneDetails headphone={headphone} />
      <Counter />
      <Clicker title="ClickMe!!!" />
    </div>
  );
}
