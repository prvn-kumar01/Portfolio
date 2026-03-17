import { ImageResponse } from "next/og";
import { portfolioData } from "@/data";

export const runtime = "edge";

export async function GET() {
    const { name, headline } = portfolioData.about;

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    backgroundColor: "#09090b", // zinc-950
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontFamily: "monospace",
                            color: "#0ea5e9", // primary Electric Blue
                            fontWeight: 800,
                            letterSpacing: "-0.05em",
                        }}
                    >
                        pk<span style={{ color: "white" }}>.</span>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 100,
                        fontFamily: "sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: "20px",
                    }}
                >
                    {name}
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 40,
                        fontFamily: "sans-serif",
                        color: "#a1a1aa", // zinc-400
                        lineHeight: 1.4,
                    }}
                >
                    {headline}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
