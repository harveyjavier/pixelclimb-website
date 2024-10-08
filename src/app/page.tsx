import Image from "next/image";
import pcmbLogo from "./images/pcmb-logo.png";

export default function Home() {
  return (
    <div className="h-screen bg-[url('./images/preview.gif')] bg-cover bg-center grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <Image
          src={pcmbLogo}
          alt="PCMB Logo"
          width={150}
          priority
        />
        <p className="text-4xl pcmb-text-indigo">PIXEL CLIMB</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[var(--red)] text-background gap-2 hover:bg-[var(--gray)] dark:hover:bg-[var(--yellow)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.google.com/store/apps/details?id=com.harvz.pixelclimb"
            target="_blank"
            rel="noopener noreferrer"
          >
            PLAY NOW
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[var(--blue)] text-background gap-2 hover:bg-[var(--gray)] dark:hover:bg-[var(--yellow)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://explorer.solana.com/address/DuZq6LWkvRwLw5t2GqbSx3BeAtSeikDVf1VKraxbMLcs?cluster=devnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCMB TOKEN
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="pcmb-text-orange flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.google.com/presentation/d/16RyBghsvNW822D_68EvWE-_b2ZL5Y8TkQRFif1F48lc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEARN MORE
        </a>
        <a
          className="pcmb-text-gray flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/pixelclimb"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOLLOW ON X
        </a>
        <a
          className="pcmb-text-green flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:support@pixelclimb.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </footer>
    </div>
  );
}
