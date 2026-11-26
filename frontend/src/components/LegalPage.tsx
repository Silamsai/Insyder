import Link from "next/link";

export type LegalSection = { heading: string; body: (string | string[])[] };

/** Shared layout for the Privacy policy and Terms pages. */
export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
          <p className="crumb">
            <Link href="/">Home</Link>
            {` / ${title}`}
          </p>
          <h1 className="h1" id="pg-h" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            {title}
          </h1>
          <p className="sub">{intro}</p>
          <p className="crumb" style={{ marginTop: "24px" }}>
            Last updated: {updated}
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "72px" }}>
        <div className="w legal">
          <nav className="legal-toc" data-reveal aria-label="On this page">
            <span className="kick">On this page</span>
            <ol>
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`}>{s.heading}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="legal-body">
            {sections.map((s, i) => (
              <section key={s.heading} id={`s${i + 1}`} aria-labelledby={`s${i + 1}-h`} data-reveal>
                <h2 id={`s${i + 1}-h`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j}>
                      {b.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{b}</p>
                  ),
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
