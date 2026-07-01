import Image from "next/image";
import { cn } from "@/lib/utils";

interface ColorSwatch {
  name: string;
  color: string;
  selected?: boolean;
}

interface ProductCardProps {
  productName: string;
  imageSrc: string;
  imageAlt: string;
  selectedColor: string;
  swatches: ColorSwatch[];
}

function ColorDot({ swatch }: { swatch: ColorSwatch }) {
  return (
    <div
      title={swatch.name}
      className={cn(
        "rounded-full flex-shrink-0",
        swatch.selected && "ring-2 ring-white ring-offset-2 ring-offset-black"
      )}
      style={{
        width: "20px",
        height: "20px",
        background: swatch.color,
        cursor: "pointer",
      }}
    />
  );
}

function ProductCard({
  productName,
  imageSrc,
  imageAlt,
  selectedColor,
  swatches,
}: ProductCardProps) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ flex: "1 1 0", minWidth: 0 }}
    >
      {/* Product image */}
      <div
        className="relative w-full mb-6"
        style={{ maxWidth: "380px", margin: "0 auto 24px" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={380}
          height={380}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Color label */}
      <p
        style={{
          color: "#767880",
          fontSize: "14px",
          fontFamily: "var(--font-montserrat)",
          marginBottom: "10px",
        }}
      >
        {selectedColor}
      </p>

      {/* Color swatches */}
      <div className="flex items-center gap-3 mb-4">
        {swatches.map((swatch) => (
          <ColorDot key={swatch.name} swatch={swatch} />
        ))}
      </div>

      {/* Product name */}
      <h3
        className="text-white"
        style={{
          fontSize: "24px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        {productName}
      </h3>

      {/* CTA */}
      <button
        type="button"
        className="cursor-pointer transition-opacity hover:opacity-90"
        style={{
          background: "#ffffff",
          color: "#000000",
          borderRadius: "24px",
          padding: "12px 28px",
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: "var(--font-montserrat)",
          border: "none",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export function ProductExplorerSection() {
  const pro5Swatches: ColorSwatch[] = [
    { name: "Pearl Blue", color: "#9fc8e8", selected: true },
    { name: "Rose Pink", color: "#e8b4b8" },
    { name: "Midnight Black", color: "#1a1a1a" },
    { name: "Gray", color: "#9a9a9a" },
  ];

  const pro5MaxSwatches: ColorSwatch[] = [
    { name: "Titanium Gold", color: "#c8a96e", selected: true },
    { name: "White", color: "#f5f5f5" },
  ];

  return (
    <section
      className="w-full"
      style={{
        background: "#000000",
        padding: "80px 64px",
      }}
    >
      {/* Section heading */}
      <h2
        className="text-white text-center"
        style={{
          fontSize: "40px",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 800,
          marginBottom: "48px",
        }}
      >
        Exploring the Liberty 5 Pro Series
      </h2>

      {/* Product cards */}
      <div
        className="flex items-start mx-auto"
        style={{ maxWidth: "1200px", gap: "40px" }}
      >
        <ProductCard
          productName="Liberty 5 Pro"
          imageSrc="/images/d0ac6567f3b38273f997dcfdf5da7ef1.png"
          imageAlt="Liberty 5 Pro Pearl Blue earbuds open case"
          selectedColor="Pearl Blue"
          swatches={pro5Swatches}
        />

        {/* Divider */}
        <div
          className="self-stretch flex-shrink-0"
          style={{
            width: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        <ProductCard
          productName="Liberty 5 Pro Max"
          imageSrc="/images/02-KSP_3b712b6a-cb42-447a-84ea-5a194e5eda6b.png"
          imageAlt="Liberty 5 Pro Max Titanium Gold earbuds case"
          selectedColor="Titanium Gold"
          swatches={pro5MaxSwatches}
        />
      </div>
    </section>
  );
}
