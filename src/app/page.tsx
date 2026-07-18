import Sprout from "@/components/Sprout";
import Logo, { LeafMark } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";
import {
  espresso,
  slow,
  beyond,
  curate,
  tea,
  kitchenDaily,
  fridayBreakfast,
  type Item,
} from "@/data/menu";

const values = [
  {
    title: "Brewed to grow",
    body: "Tumboh means to grow. Every cup is a small beginning — a seed of a good morning, a slow afternoon, a plan that finally clicks.",
  },
  {
    title: "Designed to flow",
    body: "Outdoor seating, unhurried pace, room to breathe. Bring a book, a laptop, or a friend. Stay as long as the coffee lasts.",
  },
  {
    title: "Rooted in Terengganu",
    body: "A Bukit Besar corner of Kuala Terengganu. Local at heart, careful with the craft, open to anyone who wanders in.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className={styles.nav}>
        <div className={`wrap ${styles.navInner}`}>
          <a href="#top" className={styles.brand} aria-label="Tumboh Coffee Bar home">
            <Logo size={34} />
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#menu">Drinks</a>
            <a href="#kitchen">Kitchen</a>
            <a href="#story">Story</a>
            <a href="#visit">Visit</a>
          </nav>
          <a href="#visit" className={styles.navCta}>
            Find us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={`eyebrow ${styles.heroEyebrow}`}>Kuala Terengganu</p>
            <h1 className={styles.heroTitle}>
              A cup, and
              <br />
              a little room
              <br />
              <span className={styles.heroTitleAccent}>to grow.</span>
            </h1>
            <p className={styles.heroLede}>
              Tumboh is a coffee bar and kitchen in Bukit Besar — espresso, slow
              pour-overs, curated mocktails and a full plate from 1pm, served
              under open sky. Brewed to grow. Designed to flow.
            </p>
            <div className={styles.heroActions}>
              <a href="#menu" className={styles.btnPrimary}>
                See the menu
              </a>
              <a href="#visit" className={styles.btnGhost}>
                Plan a visit
              </a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="false">
            <Sprout size={260} className={styles.heroSprout} />
            <div className={styles.heroArtRing} />
          </div>
        </div>
        <div className={styles.heroMarquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                Espresso &nbsp;•&nbsp; Tuang-Lalu &nbsp;•&nbsp; Coco Jade
                &nbsp;•&nbsp; Steak &amp; Frites &nbsp;•&nbsp; Barley Whisper
                &nbsp;•&nbsp; Friday Breakfast &nbsp;•&nbsp; Brewed to grow
                &nbsp;•&nbsp;{" "}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / VALUES */}
      <section id="story" className={styles.story}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">What Tumboh means</p>
            <h2 className={styles.storyHeading}>
              In Terengganu, <em>tumboh</em> means to grow. We took that
              literally.
            </h2>
          </Reveal>
          <div className={styles.valueGrid}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className={styles.valueCard}>
                <span className={styles.valueIndex}>0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section id="menu" className={styles.menu}>
        <div className="wrap">
          <Reveal className={styles.menuHead}>
            <div>
              <p className="eyebrow">From the bar</p>
              <h2 className={styles.menuTitle}>What we pour</h2>
            </div>
            <p className={styles.menuNote}>
              Prices in MYR. Beans rotated with the season — ask the bar
              what&apos;s on today.
            </p>
          </Reveal>

          <div className={styles.menuCols}>
            <MenuColumn label="Espresso" items={espresso} />
            <MenuColumn label="Slow & Cold" items={slow} />
            <MenuColumn label="Beyond Coffee" items={beyond} />
          </div>

          {/* CURATE */}
          <Reveal className={styles.subhead}>
            <h3 className={styles.subheadTitle}>Curate</h3>
            <p className={styles.subheadNote}>
              Signature drinks built with our neighbours — each one dreamed up in
              a corner of the shop.
            </p>
          </Reveal>
          <div className={styles.curateGrid}>
            {curate.map((it, i) => (
              <Reveal key={it.name} delay={(i % 2) * 0.06} className={styles.curateItem}>
                <div className={styles.menuItemHead}>
                  <span className={styles.menuItemName}>{it.name}</span>
                  <span className={styles.menuDots} aria-hidden="true" />
                  <span className={styles.menuPrice}>RM {it.price}</span>
                </div>
                {it.credit && <p className={styles.curateCredit}>{it.credit}</p>}
                <p className={styles.menuItemNote}>{it.note}</p>
              </Reveal>
            ))}
          </div>

          {/* TEA */}
          <Reveal className={styles.subhead}>
            <h3 className={styles.subheadTitle}>Tea</h3>
            <p className={styles.subheadNote}>Pots and cups, steeped to order.</p>
          </Reveal>
          <ul className={styles.teaList}>
            {tea.map((t) => (
              <li key={t.name} className={styles.teaItem}>
                <div className={styles.menuItemHead}>
                  <span className={styles.menuItemName}>{t.name}</span>
                  <span className={styles.menuDots} aria-hidden="true" />
                  <span className={styles.menuPrice}>RM {t.price}</span>
                </div>
                {t.note && <p className={styles.menuItemNote}>{t.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KITCHEN */}
      <section id="kitchen" className={styles.kitchen}>
        <div className="wrap">
          <Reveal className={styles.menuHead}>
            <div>
              <p className="eyebrow">Dapor Tumboh</p>
              <h2 className={styles.menuTitle}>From the kitchen</h2>
            </div>
            <p className={styles.serviceTag}>
              <LeafMark size={22} />
              <span>
                <strong>Kitchen opens 1:00pm</strong>
                <br />
                Daily menu, served until close.
              </span>
            </p>
          </Reveal>

          <div className={styles.kitchenGroups}>
            {kitchenDaily.map((g, i) => (
              <Reveal key={g.label} delay={(i % 2) * 0.06} className={styles.menuCol}>
                <h3 className={styles.menuColTitle}>{g.label}</h3>
                <ul>
                  {g.items.map((it) => (
                    <MenuRow key={it.name} item={it} />
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          {/* FRIDAY BREAKFAST */}
          <Reveal className={styles.fridayCard}>
            <div className={styles.fridayHead}>
              <div>
                <p className={styles.fridayTag}>Fridays only · 8:00 – 12:00</p>
                <h3 className={styles.fridayTitle}>Friday Breakfast</h3>
                <p className={styles.fridayLede}>
                  One morning a week the kitchen starts early. Big plates, soft
                  eggs, and no reason to rush off.
                </p>
              </div>
              <LeafMark size={54} className={styles.fridayMark} />
            </div>
            <ul className={styles.fridayList}>
              {fridayBreakfast.map((it) => (
                <li key={it.name} className={styles.fridayItem}>
                  <div className={styles.menuItemHead}>
                    <span className={styles.fridayItemName}>{it.name}</span>
                    <span className={styles.fridayDots} aria-hidden="true" />
                    <span className={styles.fridayPrice}>RM {it.price}</span>
                  </div>
                  <p className={styles.fridayNote}>{it.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className={styles.visit}>
        <div className={`wrap ${styles.visitInner}`}>
          <Reveal className={styles.visitText}>
            <p className="eyebrow">Come sit with us</p>
            <h2 className={styles.visitTitle}>Find Tumboh</h2>
            <p className={styles.visitLede}>
              Tucked into Bukit Besar, with outdoor seating and the kind of quiet
              that makes coffee taste better. Walk in, or reach out before you do.
            </p>

            <dl className={styles.details}>
              <div>
                <dt>Where</dt>
                <dd>
                  Jalan Ibrahim, Bukit Besar
                  <br />
                  Kuala Terengganu, Terengganu
                </dd>
              </div>
              <div>
                <dt>Call</dt>
                <dd>
                  <a href="tel:+60129843228">+60 12-984 3228</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:tumboh.cb@gmail.com">tumboh.cb@gmail.com</a>
                </dd>
              </div>
              <div>
                <dt>Seating</dt>
                <dd>Outdoor · Walk-ins welcome</dd>
              </div>
            </dl>

            <div className={styles.visitActions}>
              <a
                className={styles.btnPrimary}
                href="https://www.google.com/maps/search/?api=1&query=Tumboh+Coffee+Bar+Bukit+Besar+Kuala+Terengganu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
              <a
                className={styles.btnGhost}
                href="https://www.facebook.com/p/Tumboh-Coffee-Joint-100083148581329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={styles.visitCard}>
            <div className={styles.hoursCard}>
              <Sprout size={64} className={styles.hoursSprout} />
              <h3>Opening hours</h3>
              <ul className={styles.hoursList}>
                <li><span>Tue – Sun </span><span>08:00 – 22:00</span></li>
                <li><span>Monday </span><span>Closed</span></li>
              </ul>
              <ul className={styles.hoursList} style={{ marginTop: "1.3rem" }}>
                <li><span>Kitchen, daily </span><span>from 13:00</span></li>
                <li><span>Friday breakfast </span><span>08:00 – 12:00</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <Logo size={44} tone="cream" />
            <p>Brewed to grow. Designed to flow.</p>
          </div>
          <div className={styles.footerMeta}>
            <p>Jalan Ibrahim, Bukit Besar, Kuala Terengganu</p>
            <p>© {new Date().getFullYear()} Tumboh Coffee Bar</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MenuRow({ item }: { item: Item }) {
  return (
    <li className={styles.menuItem}>
      <div className={styles.menuItemHead}>
        <span className={styles.menuItemName}>{item.name}</span>
        <span className={styles.menuDots} aria-hidden="true" />
        <span className={styles.menuPrice}>RM {item.price}</span>
      </div>
      <p className={styles.menuItemNote}>{item.note}</p>
    </li>
  );
}

function MenuColumn({ label, items }: { label: string; items: Item[] }) {
  return (
    <Reveal className={styles.menuCol}>
      <h3 className={styles.menuColTitle}>{label}</h3>
      <ul>
        {items.map((it) => (
          <MenuRow key={it.name} item={it} />
        ))}
      </ul>
    </Reveal>
  );
}
