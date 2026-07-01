import Image from "next/image";

export function AwardsStrip() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: "#000000", padding: "32px 64px" }}
    >
      <Image
        src="/images/Group_2147238894.png"
        alt="Award logos: ANKER Thus 150X, Guinness World Record, SoundGuys Recommended, iF Design Award 2026, Tom's Guide Recommended, The Verge, CNET, Red Dot Winner 2026"
        width={900}
        height={64}
        className="h-16 w-auto object-contain"
        quality={90}
      />
    </section>
  );
}
