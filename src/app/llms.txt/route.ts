export function GET() {
  return new Response(
    `# Emanuel Covasa — EMMI

> Engaging Minds, Merging Ideas

## About
Emanuel Covasa is a cybersecurity student, full-stack developer, NeuroBridgeEDU founder, EU-Green Ambassador, and AI innovator based in Ireland. This is his personal link page at emmi.engineer.

## Links
- [Portfolio & Blog](https://emmi.zone)
- [LinkedIn](https://www.linkedin.com/in/emmic/)
- [GitHub](https://github.com/EmminiX)
- [NeuroBridgeEDU](https://NeurobridgeEDU.eu)
- [X / Twitter](https://x.com/deep_endX)
- [Instagram](https://www.instagram.com/deep_endx/)
- [Threads](https://www.threads.com/@deep_endx)

## Projects
- **NeuroBridgeEDU** — Accessible AI education platform for neurodivergent learners
- **EMMI-AI** — Personal AI infrastructure and autonomous agent system
- **emmi.zone** — Portfolio and blog

## Contact
- Email: e.covasa@me.com
- Website: https://emmi.engineer
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    }
  );
}
