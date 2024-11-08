import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <p className="text-3xl text-center uppercase font-[family-name:var(--font-geist-mono)] w-full">
          Experticket
        </p>

        <div className="w-full">
        <Image
          className="dark:invert w-1/2 mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={190}
          height={38}
          priority
        />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
