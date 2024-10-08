import Image from "next/image";
import bluePixel1 from "./images/blue-pixel-1.png";
import pcmbLogo from "./images/pcmb-logo.png";
import gamePreview from "./images/game-preview.gif";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Image
            src={bluePixel1}
            alt="Blue Pixel"
            width={180}
            height={38}
            priority
          />
          <Image
            src={gamePreview}
            alt="Game Preview"
            width={70}
            priority
          />
        </div>
        <div className="text-center pcmb-text-indigo font-[family-name:var(--font-geist-mono)]">
          <p>A HYPER CASUAL GAME POWERED BY SOLANA</p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[var(--red)] text-background gap-2 hover:bg-[var(--gray)] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://play.google.com/store/apps/details?id=com.harvz.pixelclimb"
            target="_blank"
            rel="noopener noreferrer"
          >
            PLAY NOW
          </a>
          <Image
            src={pcmbLogo}
            alt="PCMB Logo"
            width={80}
            priority
          />
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[var(--blue)] text-background gap-2 hover:bg-[var(--gray)] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
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
