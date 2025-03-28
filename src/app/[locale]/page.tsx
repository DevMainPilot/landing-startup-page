
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

interface ExplanationItemProps { icon: React.ReactNode; title: string; description: string; }

import { Locale } from '@/i18n';
import { getTranslation } from '@/lib/i18n/getTranslation';

type Props = {
  params: {
    locale: Locale;
  };
};

export default async function Home({ params: { locale } }: Props) {

  const translation = await getTranslation(locale);

  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center">
          <div className=" mx-auto flex flex-col md:flex-row items-center p-10 ">
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
               {translation('views.home.title')}
                Launching Soon: Your Custom Software Innovators
              </h1>
              <p className="text-xl md:text-2xl">
                Turning your ideas into tailor-made digital solutions. As a
                software development startup, we specialize in creating
                innovative and customized applications that perfectly fit your
                needs.
              </p>
            </div>
            <div className="flex-1 p-10">
              <Image
                src="/image_landing_page_startup.png"
                alt="Placeholder Image"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sd:basis-1/3 md:basis-1/3 lg:basis-1/3 py-2"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square  items-center justify-center">
                        <div className="flex justify-center">
                          <Image
                            src={`/carousel_${index + 1}.png`}
                            alt="Placeholder Image"
                            width={200}
                            height={400}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="text-center mb-4">
                          {index === 0 ? (
                            <span className="text-l font-semibold">
                              {"AI coding"}
                            </span>
                          ) : index === 1 ? (
                            <span className="text-l font-semibold">
                              {"Secure auth"}
                            </span>
                          ) : index === 2 ? (
                            <span className="text-l font-semibold">
                              {"Application development"}
                            </span>
                          ) : index === 3 ? (
                            <span className="text-l font-semibold">
                              {"Business Analytics"}
                            </span>
                          ) : (
                            <span className="text-l font-semibold">
                              {"Chatbot helper Assistance"}
                            </span>
                          )
                        }
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={38}
          priority
        />

        <section className="bg-gradient-to-r from-green-700 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-8 text-center">
              Revolutionizing the Future
            </h2>

            <div className="space-y-12">
              <ExplanationItem
                icon={<Zap className="w-8 h-8" />}
                title="Disruptive Innovation"
                description="We create solutions that challenge the conventional and open up new possibilities in the market."
              />

              <ExplanationItem
                icon={<Target className="w-8 h-8" />}
                title="Precise Focus"
                description="We concentrate on solving real problems with cutting-edge technology and a passionate team."
              />

              <ExplanationItem
                icon={<Rocket className="w-8 h-8" />}
                title="Exponential Growth"
                description="Our vision is to scale rapidly and transform entire industries with our innovations."
              />
            </div>

            <div className="mt-16 text-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
              >
                Discover More
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
        <div className="mt-16 text-center p-10">
          <ol className="p-15">
            <li>
              {" "}
              We are an entrepreneurial team specializing in both backend and
              frontend software development. Our focus areas include:{" "}
            </li>
            <li>
              {" "}
              Artificial Intelligence (AI): Implementing intelligent solutions
              to optimize processes and enhance decision-making.{" "}
            </li>
            <li>
              {" "}
              Predictive Solutions: Developing algorithms to forecast trends and
              market needs.{" "}
            </li>
            <li>
              {" "}
              ERP (Enterprise Resource Planning): Creating comprehensive systems
              tailored to your business requirements.{" "}
            </li>
            <li>
              {" "}
              Company Management: Providing management tools that adapt to the
              specific needs of your enterprise.{" "}
            </li>
            <li>
              {" "}
              Our mission is to develop innovative and customized applications
              to drive the success of our clients.{" "}
            </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ol>
        </div>

        <div className=" text-center p-5 ">
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://github.com/DevMainPilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Home
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Blog
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Team
        </a>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact → newbotsforall@gmail.com
        </a>
        <div> v0.2.0</div>
      </footer>
    </div>
  );
}

function ExplanationItem({ icon, title, description }: ExplanationItemProps) {

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mt-2 text-base text-indigo-100">{description}</p>
      </div>
    </div>
  );
}
