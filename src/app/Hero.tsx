import Link from "next/link";

export default function Hero(){
  return (
    <section
      className="hero min-h-screen"
      style={{backgroundImage: 'url(/SunRise.jpg)'}}
      id={`hero`}
    >
      <div className={`hero-overlay`}></div>
      <div className={`hero-content text-center text-neutral-content`}>
        <div className={`max-w-md`}>
          <h1 className={`mb-4 text-5xl font-bold uppercase font-title`}>marx wang</h1>
          <p className={`mb-5 text-2xl italic font-handwrite`}>Challenge is in the moment, the time is always now.</p>
          <div className="group">
            <Link className={`btn btn-secondary btn-outline font-mono m-2`} href="/#about" >Journey Start</Link>
            <Link className={`btn btn-primary btn-outline font-mono m-2`} href={`/contacts`}>Contacts</Link>
          </div>
        </div>
      </div>
    </section>
  )
}