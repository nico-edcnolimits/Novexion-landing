import Image from "next/image";

export function GuinnessSection() {
  return (
    <section
      className="w-full flex flex-col items-center"
      style={{
        background: "#000000",
        minHeight: "70vh",
      }}
    >
      {/* Text block */}
      <div
        className="flex flex-col items-center text-center"
        style={{ paddingTop: "80px", paddingLeft: "32px", paddingRight: "32px" }}
      >
        <h2
          className="text-white"
          style={{
            fontSize: "48px",
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            lineHeight: "1.2",
            marginBottom: "16px",
            maxWidth: "800px",
          }}
        >
          The World&apos;s Clearest Earbuds for Calls
        </h2>
        <p
          style={{
            color: "#767880",
            fontSize: "18px",
            fontFamily: "var(--font-montserrat)",
            marginBottom: "32px",
          }}
        >
          Certified by Guinness World Records
        </p>
        <button
          type="button"
          className="cursor-pointer transition-opacity hover:opacity-90"
          style={{
            background: "#ffffff",
            color: "#000000",
            borderRadius: "24px",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "var(--font-montserrat)",
            border: "none",
            marginBottom: "48px",
          }}
        >
          Discover How We Set the Record
        </button>
      </div>

      {/* Product image */}
      <div
        className="relative w-full"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <Image
          src="/images/20260521-224257.png"
          alt="Liberty 5 Pro earbuds with Guinness World Records certificate"
          width={900}
          height={600}
          className="w-full h-auto"
          style={{ display: "block" }}
          priority
        />
      </div>
    </section>
  );
}
