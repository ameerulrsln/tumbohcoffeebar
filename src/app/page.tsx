import Sprout from "@/components/Sprout";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const menu = {
  espresso: [
    { name: "Espresso", note: "Single or double. Where it all begins.", price: "7" },
    { name: "Cortado", note: "Espresso cut with warm milk.", price: "10" },
    { name: "Flat White", note: "Velvet microfoam, bold base.", price: "12" },
    { name: "Cappuccino", note: "Equal parts brew, milk, foam.", price: "12" },
  ],
  slow: [
    { name: "Tuang-Lalu", note: "Our pour-over. Bright, clean, patient.", price: "14" },
    { name: "Cold Brew", note: "Steeped slow, poured over ice.", price: "13" },
    { name: "Iced Latte", note: "Espresso, cold milk, no rush.", price: "12" },
  ],
  beyond: [
    { name: "Matcha Latte", note: "Stone-ground green, gentle sweetness.", price: "13" },
    { name: "Signature Chocolate", note: "Deep, dark, comforting.", price: "12" },
    { name: "Citrus Soda", note: "House soda, bright and fizzy.", price: "10" },
  ],
};

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
            <span className={styles.brandMark}>Tumboh</span>
            <span className={styles.brandSub}>Coffee Bar</span>
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#menu">Menu</a>
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
              Tumboh is a coffee bar in Bukit Besar — espresso, slow pour-overs,
              matcha and soda, served under open sky. Brewed to grow. Designed to
              flow.
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
                Espresso &nbsp;•&nbsp; Tuang-Lalu &nbsp;•&nbsp; Matcha
                &nbsp;•&nbsp; Chocolate &nbsp;•&nbsp; Soda &nbsp;•&nbsp; Brewed to
                grow &nbsp;•&nbsp;{" "}
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

      {/* MENU */}
      <section id="menu" className={styles.menu}>
        <div className="wrap">
          <Reveal className={styles.menuHead}>
            <div>
              <p className="eyebrow">The menu</p>
              <h2 className={styles.menuTitle}>What we pour</h2>
            </div>
            <p className={styles.menuNote}>
              Prices in MYR. Beans rotated with the season — ask the bar what&apos;s
              on today.
            </p>
          </Reveal>

          <div className={styles.menuCols}>
            <MenuColumn label="Espresso" items={menu.espresso} />
            <MenuColumn label="Slow & Cold" items={menu.slow} />
            <MenuColumn label="Beyond Coffee" items={menu.beyond} />
          </div>
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
                <li><span>Mon – Thu</span><span>10:00 – 23:00</span></li>
                <li><span>Fri</span><span>15:00 – 23:00</span></li>
                <li><span>Sat – Sun</span><span>10:00 – 23:30</span></li>
              </ul>
              <p className={styles.hoursNote}>
                Hours can shift on public holidays — a quick call never hurts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`wrap ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <span className={styles.brandMark}>Tumboh</span>
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

function MenuColumn({
  label,
  items,
}: {
  label: string;
  items: { name: string; note: string; price: string }[];
}) {
  return (
    <Reveal className={styles.menuCol}>
      <h3 className={styles.menuColTitle}>{label}</h3>
      <ul>
        {items.map((it) => (
          <li key={it.name} className={styles.menuItem}>
            <div className={styles.menuItemHead}>
              <span className={styles.menuItemName}>{it.name}</span>
              <span className={styles.menuDots} aria-hidden="true" />
              <span className={styles.menuPrice}>RM {it.price}</span>
            </div>
            <p className={styles.menuItemNote}>{it.note}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
