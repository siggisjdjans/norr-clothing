import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="border-b-2 border-[#111]">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff2d78]">
            the story
          </span>
          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-tighter sm:text-8xl">
            BUILT IN THE
            <br />
            <span className="outline-text">NORTH.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-snug text-[#333] sm:text-xl">
            Norr started with one hoodie and a refusal to make it cheap. We
            make fewer, better things — heavyweight fabrics, real stitching,
            fits that don&apos;t fall apart after three washes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="brutal-static bg-white p-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Why we exist
            </h2>
            <p className="mt-3 leading-relaxed text-[#333]">
              Fast fashion is a race to the bottom. We&apos;re not racing. We
              release small, considered drops and keep making the same staples
              better instead of chasing trends every week.
            </p>
          </div>
          <div className="brutal-static bg-[#c8ff00] p-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#111]">
              What we stand on
            </h2>
            <ul className="mt-3 space-y-2 text-sm font-medium text-[#111]">
              <li>✦ organic &amp; recycled fabrics</li>
              <li>✦ fair, transparent manufacturing</li>
              <li>✦ carbon-neutral shipping</li>
              <li>✦ free repairs, for life</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="brutal inline-block bg-[#111] px-10 py-5 text-sm font-black uppercase tracking-widest text-[#f4f1ea]"
          >
            Shop the collection →
          </Link>
        </div>
      </section>
    </div>
  );
}
