"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import IconCloud from "@/components/magicui/icon-cloud";
import { MagicCard } from "@/components/magicui/magic-card";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-16 pt-24 max-w-7xl my-auto">
      <Dialog>
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex -z-10">
          <Image
            className="fixed left-5 top-0 flex justify-center -z-50"
            src="/[LAMBERT] Orpheus Top Flag 1.png"
            alt="lambert orpheus top flag"
            width={150}
            height={150}
          ></Image>

          <Image
            className="fixed right-5 top-3 flex justify-center -z-50"
            src="/lhclogo.png"
            alt="lambert hack club logo"
            width={60}
            height={60}
          ></Image>
        </div>

        <div className="gap-6 flex flex-col py-20 md:py-0">
          <div className="flex flex-row gap-6 flex-wrap min-[1070px]:flex-nowrap items-stretch self-stretch">
            <div className="rounded-[29px] md:min-w-[660px] self-stretch ">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#FFF9F9]"
                gradientColor="#FFE9E9"
              >
                <TypingAnimation
                  className="text-4xl lg:text-5xl text-[#EC3750] font-bold text-left"
                  text="We are teen hackers from Lambert High School"
                  duration={50}
                />

                <p className="py-4 mr-12 text-lg">
                  Whether you’re a beginner programmer or have years of
                  experience, there’s a place for you at Hack Club.
                </p>
                <div className="flex justify-end w-full items-center space-x-4 pt-8 xl:pt-0">
                  <AnimatedShinyText className="text-[#EC3750] w-full flex justify-end ">
                    <span>Are you ready?</span>
                  </AnimatedShinyText>
                  <a
                    href="https://groupme.com/join_group/62533963/Wc2Gk9nD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-4 py-3 bg-[#EC3750] text-white text-lg font-semibold rounded-2xl">
                      Join the GroupMe
                    </Button>
                  </a>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch flex grow ">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#F5F8FF]"
                gradientColor="#E7EEFF"
              >
                <h1 className="text-3xl lg:text-4xl text-[#224597] font-bold text-left">
                  Volunteer through code
                </h1>

                <p className="py-4 xl:mr-12 text-lg">
                  Earn the PVSA while coding open source projects that benefit
                  our community with hack club.
                </p>
                <div className="flex justify-between w-full items-end space-x-4">
                  <DialogTrigger className="px-4 py-3 bg-white hover:bg-slate-50 hover:text-black text-[#224094] border-[0.5px] border-[#D8DEEF] text-lg font-semibold rounded-2xl">
                    Learn How
                  </DialogTrigger>

                  <Image
                    alt="pvsa logo"
                    src="/PVSA Logo.png"
                    width={100}
                    height={100}
                  />
                </div>
              </MagicCard>
            </div>
          </div>

          <div className="flex flex-row gap-6 flex-wrap min-[1070px]:flex-nowrap items-stretch self-stretch max-h-96">
            <div className="rounded-[29px] md:min-w-[300px] self-stretch grow flex">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#ffffff]"
                gradientColor="#F5F5F5"
              >
                <h1 className="text-3xl lg:text-4xl text-[#000000] font-bold text-left">
                  Code in any platform
                </h1>
                <div className="w-full flex items-center justify-center">
                  <div className=" max-h-80 max-w-80 flex">
                    <IconCloud iconSlugs={slugs} />
                  </div>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch grow flex">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#ffffff]"
                gradientColor="#F5F5F5"
              >
                <h1 className="text-3xl lg:text-4xl text-[#000000] font-bold text-left">
                  Upcoming Hacker Fun
                </h1>

                <div
                  className={cn(
                    "relative flex h-[500px] w-full flex-col pt-6 items-center"
                  )}
                >
                  <AnimatedList delay={1500}>
                    {notifications.map((item, idx) => (
                      <Notification {...item} key={idx} />
                    ))}
                  </AnimatedList>
                </div>
              </MagicCard>
            </div>

            <div className="rounded-[29px] md:min-w-[300px] self-stretch flex grow">
              <MagicCard
                className="flex justify-between rounded-[29px] flex-col p-7 gap-4 bg-[#FCF4FD] mb-20 md:mb-0"
                gradientColor="#FCE4FF"
              >
                <h1 className="text-3xl lg:text-4xl text-[#742294] font-bold text-left">
                  Come to our first meeting
                </h1>

                <p className="py-4 xl:mr-12 text-lg">
                  August 28th at 7:45 am in Mr. Fuqua’s Room in 1236
                </p>

                <div className="flex justify-between w-full items-end space-x-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://lu.ma/wa1983u9"
                  >
                    <Button className="px-4 py-3 bg-white hover:bg-slate-50 hover:text-black text-[#742294] border-[0.5px] border-[#D8DEEF] text-lg font-semibold rounded-2xl">
                      RSVP
                    </Button>
                  </a>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-3xl lg:text-4xl text-[#224597] font-bold text-left">
              Volunteer through code
            </DialogTitle>
            <DialogDescription>
              Earn the PVSA while coding open source projects that benefit our
              community with hack club. Join a community project working on
              helping local businesses, clubs, organizations, etc, or lead your
              own project with your own idea. Gain leadership experience, learn
              new skills, and make a difference in your community all while
              earning hours that count towards a PVSA. Volunteer through your
              passion uniquely with code. More information to come soon, come to
              our informational meeting to learn more.
            </DialogDescription>
            <div className="flex justify-between w-full items-end space-x-4">
              <Button className="px-4 py-3 bg-white hover:bg-slate-50 hover:text-black text-[#224094] border-[0.5px] border-[#D8DEEF] text-lg font-semibold rounded-2xl">
                Interest Form Coming Soon
              </Button>

              <Image
                alt="pvsa logo"
                src="/PVSA Logo.png"
                width={100}
                height={100}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    name: "Lambert Hacks",
    description: "Lambert's very own hackathon. Returning in Spring 2025.",
    icon: "🍕",
    color: "red",
  },
  {
    name: "Hack the Aquarium",
    description:
      "Hack under the sea at the Georgia Aquarium during a 48 hour hackathon in Spring 2025.",
    icon: "🐠",
    color: "blue",
  },
  {
    name: "Make Hacker NFC Cards",
    description:
      "Build your own custom PCB NFC cards that act as your hack club membership card.",
    icon: "💳",
    color: "purple",
  },
  {
    name: "Boba Drops",
    description: "Build a website get free boba.",
    icon: "🧋",
    color: "brown",
  },
  {
    name: "Arcade",
    description: "Build projects and enter a raffle for free stuff.",
    icon: "🆓",
    color: "pink",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={`flex size-10 items-center justify-center rounded-2xl bg-${color}-500`}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
