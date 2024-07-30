import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Overview of Compulab.",
};

export default function Home() {
  return (
    <main className="flex flex-col h-[calc(100vh_-_theme(spacing.16))]">
      <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Welcome to Compulab</h1>
        <p>
          Compulab is a fictional company that specializes in computer hardware
          and software solutions. With a team of dedicated professionals, we
          strive to provide high-quality products and services to meet the needs
          of our customers.
        </p>
        <p>
          Our product offerings include a wide range of computer components,
          peripherals, and accessories. Whether you are looking to upgrade your
          existing system or build a new one from scratch, we have the tools and
          expertise to help you achieve your goals.
        </p>
        <p>
          In addition to our hardware offerings, we also provide software
          solutions to enhance the functionality and performance of your
          computer. From operating systems to productivity tools, we have the
          software you need to get the most out of your system.
        </p>
        <p>
          At Compulab, we are committed to delivering exceptional customer
          service and support. Our knowledgeable staff is here to assist you
          with any questions or issues you may have, ensuring that you have a
          positive experience every step of the way.
        </p>
        <p>
          Thank you for choosing Compulab. We look forward to serving you and
          helping you achieve your technology goals.
        </p>
      </div>
    </main>
  );
}
