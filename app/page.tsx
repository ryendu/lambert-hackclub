import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="fixed left-5 top-0 flex justify-center"
          src="/[LAMBERT] Orpheus Top Flag 1.png"
          alt="lambert orpheus top flag"
          width={150}
          height={150}
        ></Image>
      </div>

      <BentoGrid>
        <BentoCard
          Icon={CalendarIcon}
          name="Calendar"
          description="Use the calendar to filter your files by date."
          className="col-span-3 lg:col-span-1"
          href="#"
          cta="Learn more"
          background={<div>Test</div>}
        ></BentoCard>
        <BentoCard
          Icon={CalendarIcon}
          name="Calendar"
          description="Use the calendar to filter your files by date."
          className="col-span-3 lg:col-span-1"
          href="#"
          cta="Learn more"
          background={<div>Test</div>}
        ></BentoCard>
        <BentoCard
          Icon={CalendarIcon}
          name="Calendar"
          description="Use the calendar to filter your files by date."
          className="col-span-3 lg:col-span-1"
          href="#"
          cta="Learn more"
          background={<div>Test</div>}
        ></BentoCard>
      </BentoGrid>
    </main>
  );
}
