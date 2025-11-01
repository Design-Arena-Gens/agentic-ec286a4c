import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Agency SEO";
  const subtitle =
    searchParams.get("subtitle") ??
    "Стратегии, основанные на данных, для роста органического трафика";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0F172A 0%, #6366F1 50%, #A855F7 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            fontWeight: 600,
            opacity: 0.9
          }}
        >
          <div
            style={{
              display: "inline-flex",
              height: "64px",
              width: "64px",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.16)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px"
            }}
          >
            SEO
          </div>
          Agency SEO
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "800px"
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "28px",
            fontWeight: 400,
            maxWidth: "720px",
            opacity: 0.88
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "24px",
            opacity: 0.85
          }}
        >
          <span>Рост органического трафика</span>
          <span>•</span>
          <span>Core Web Vitals</span>
          <span>•</span>
          <span>E-E-A-T</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
