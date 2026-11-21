import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Play, Youtube, Instagram, Mail, MapPin, Mic2, Camera, BookOpen, ShieldCheck, Globe2, ChevronDown } from 'lucide-react'
import { siteConfig } from './siteConfig'
import './style.css'

const A = '/images/'
const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22,1,0.36,1] } } }
const rise = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: .15 }, variants: fade }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faq, setFaq] = useState(0)
  const nav = [['About','about'],['Stories','stories'],['The Work','work'],['UP Election','up-election'],['Contact','contact']]
  const close = () => setMenuOpen(false)
  const videos = siteConfig.featuredVideoIds || []

  return <div className="site">
    <div className="topline"><span>INDEPENDENT STORYTELLING • INDIA</span><span>BIHAR / THE WORLD</span></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="Bihar Charitra home">
        <img src={A+'bihar-charitra-logo.png'} alt="Bihar Charitra logo"/>
        <span><b>BIHAR CHARITRA</b><small>Stories. People. Perspective.</small></span>
      </a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {nav.map(([label,id])=><a key={id} href={'#'+id} onClick={close}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={close}>Get in touch <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image"></div><div className="hero-shade"></div>
        <div className="hero-content">
          <motion.p className="eyebrow light" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.15}}>A DOCUMENTARY & STORYTELLING PLATFORM</motion.p>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}}>Every place has a story.<br/><em>Every story has a voice.</em></motion.h1>
          <motion.p className="hero-copy" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}>We look beyond the headlines to document the people, histories and ideas shaping Bihar — and the world around it.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}>
            <a className="button button-light" href="#stories">Explore our stories <ArrowRight size={16}/></a>
            <a className="text-link light-link" href={siteConfig.youtubeChannel} target="_blank" rel="noreferrer"><Play size={14} fill="currentColor"/> Watch on YouTube</a>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>ROOTED IN BIHAR. OPEN TO THE WORLD.</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
        <div className="hero-index">01 <i>/</i> 05</div>
      </section>

      <section className="intro section" id="about">
        <motion.div {...rise} className="intro-label"><span className="eyebrow">01 / WHO WE ARE</span><span className="vertical-rule"></span><span className="muted">An independent voice</span></motion.div>
        <motion.div {...rise} className="intro-main">
          <p className="kicker">A place to understand. A space to listen.</p>
          <h2>Not just what happened.<br/><em>Why it matters.</em></h2>
          <div className="intro-bottom"><p>Bihar Charitra is a media and documentary storytelling initiative built around curiosity, context and conversations. We bring forward stories of people, places, heritage, public life and the ideas shaping tomorrow.</p><a className="round-link" href="#work" aria-label="Explore our work"><ArrowDown/></a></div>
        </motion.div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image"><img src={A+'bihar-hero.png'} alt="Cinematic Bihar landscape with heritage ruins and river"/></div>
        <div className="manifesto-copy">
          <span className="eyebrow light">OUR POINT OF VIEW</span>
          <h2>History gives us roots.<br/><em>Stories give us direction.</em></h2>
          <p>From forgotten chapters of the past to the questions defining the present, our purpose is to make meaningful stories accessible, thoughtful and impossible to ignore.</p>
          <a className="text-link light-link" href="#stories">Discover the stories <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="section story-section" id="stories">
        <motion.div {...rise} className="section-heading">
          <div><span className="eyebrow">02 / WHAT WE EXPLORE</span><h2>Stories with <em>substance.</em></h2></div>
          <p>Every story begins with a question. We follow it with research, conversations and a commitment to context.</p>
        </motion.div>
        <div className="story-grid">
          <motion.article {...rise} className="story-card story-large"><img src={A+'interview-police-officer.jpg'} alt="An on-camera conversation with a uniformed public servant"/><div className="story-overlay"><span>01 — CONVERSATIONS</span><h3>People behind<br/>public life.</h3><p>Listening to experiences, institutions and the people who shape our communities.</p></div></motion.article>
          <motion.article {...rise} className="story-card"><img src={A+'founder-with-guest.jpg'} alt="Bihar Charitra host with a guest"/><div className="story-overlay"><span>02 — PERSPECTIVES</span><h3>Ideas worth<br/>understanding.</h3><p>Thoughtful conversations that go beyond the soundbite.</p></div></motion.article>
          <motion.article {...rise} className="story-card"><img src={A+'public-representative-meeting.jpg'} alt="A meeting with a public representative"/><div className="story-overlay"><span>03 — PUBLIC LIFE</span><h3>Where decisions<br/>meet people.</h3><p>Exploring civic questions, leadership and the lived realities behind policy.</p></div></motion.article>
        </div>
      </section>

      <section className="host-section section" id="work">
        <div className="host-photo"><img src={A+'founder-portrait.jpg'} alt="Bihar Charitra host portrait"/><div className="photo-caption">THE PERSON BEHIND THE QUESTIONS</div></div>
        <motion.div {...rise} className="host-copy">
          <span className="eyebrow">03 / THE VOICE</span><h2>Curiosity is where<br/><em>every journey begins.</em></h2>
          <p className="host-name">{siteConfig.founderName}</p>
          <p>Bihar Charitra is driven by a belief that meaningful journalism starts with listening. Through conversations, field visits and documentary work, the platform aims to create room for voices, histories and perspectives that deserve a wider audience.</p>
          <p className="small-note">Founder profile and biography can be expanded here once the official name and approved bio are provided.</p>
          <a className="text-link" href={siteConfig.youtubeChannel} target="_blank" rel="noreferrer">Explore the channel <ArrowUpRight size={16}/></a>
        </motion.div>
      </section>

      <section className="work-band">
        <div className="band-inner"><span className="eyebrow light">THE WAY WE WORK</span><h2>Research deeply.<br/><em>Listen closely. Tell honestly.</em></h2>
          <div className="process-grid">
            <div><BookOpen/><b>01 / RESEARCH</b><p>Begin with facts, sources and the context behind the subject.</p></div>
            <div><Mic2/><b>02 / CONVERSATION</b><p>Make space for lived experience and different points of view.</p></div>
            <div><Camera/><b>03 / DOCUMENT</b><p>Bring stories to life through considered visual storytelling.</p></div>
            <div><ShieldCheck/><b>04 / RESPONSIBILITY</b><p>Be transparent about what is known, what is not, and why it matters.</p></div>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <motion.div {...rise} className="section-heading"><div><span className="eyebrow">04 / ON THE GROUND</span><h2>Work happens <em>out there.</em></h2></div><p>Conversations, visits, collaborations and moments from the journey so far.</p></motion.div>
        <div className="gallery">
          <figure className="gallery-tall"><img src={A+'team-recognition.jpg'} alt="Bihar Charitra team at an event"/><figcaption>Recognition & milestones</figcaption></figure>
          <figure><img src={A+'founder-meeting.jpg'} alt="A meeting and exchange with a guest"/><figcaption>Meetings & conversations</figcaption></figure>
          <figure><img src={A+'public-representative-meeting.jpg'} alt="A public life conversation"/><figcaption>Public life & perspectives</figcaption></figure>
        </div>
      </section>

      <section className="election" id="up-election">
        <div className="election-bg"></div><div className="election-content">
          <span className="eyebrow light">THE NEXT CHAPTER / UPCOMING FLAGSHIP PROJECT</span>
          <p className="election-overline">BIHAR CHARITRA PRESENTS</p>
          <h2>UP ELECTION<br/><em>2027</em></h2>
          <div className="election-rule"></div>
          <h3>Beyond the campaign.<br/>Closer to the people.</h3>
          <p className="election-copy">An independent, non-partisan journalistic project exploring Uttar Pradesh through ground reports, constituency stories, public conversations and evidence-led explainers.</p>
          <div className="election-pillars">
            <span><MapPin/> Ground reports</span><span><Globe2/> Constituency context</span><span><Mic2/> People's voices</span><span><ShieldCheck/> Verified information</span>
          </div>
          <p className="election-disclaimer">Editorial independence is central to this project. Coverage will distinguish verified facts, attributed claims, interviews and opinion.</p>
          <a className="button button-light" href="#contact">Collaborate on the project <ArrowUpRight size={16}/></a>
        </div>
        <div className="election-side">INDEPENDENT • NON-PARTISAN • ON THE GROUND</div>
      </section>

      <section className="section video-section">
        <motion.div {...rise} className="section-heading"><div><span className="eyebrow">05 / WATCH & LISTEN</span><h2>Stories in <em>motion.</em></h2></div><a className="text-link" href={siteConfig.youtubeChannel} target="_blank" rel="noreferrer">Visit YouTube channel <ArrowUpRight size={16}/></a></motion.div>
        {videos.length ? <div className="video-grid">{videos.slice(0,3).map((id,i)=><div className="video-frame" key={id}><iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={`Bihar Charitra featured video ${i+1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></div>)}</div> :
          <a className="youtube-feature" href={siteConfig.youtubeChannel} target="_blank" rel="noreferrer"><div className="youtube-mark"><Youtube size={48}/></div><div><span className="eyebrow">BIHAR CHARITRA ON YOUTUBE</span><h3>Watch the conversations.<br/><em>Follow the stories.</em></h3><p>Open the channel to explore published episodes and the latest work.</p></div><ArrowUpRight className="youtube-arrow"/></a>}
      </section>

      <section className="faq-section section">
        <div className="faq-intro"><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Questions, <em>answered.</em></h2></div>
        <div className="faqs">
          {[
            ['What is Bihar Charitra?','Bihar Charitra is a documentary and storytelling platform focused on people, history, public life and ideas, with Bihar as a starting point and a wider world in view.'],
            ['Is Bihar Charitra politically affiliated?','The platform’s editorial approach is independent. The upcoming UP Election project is intended to be non-partisan and grounded in verified information, transparent sourcing and multiple perspectives.'],
            ['Can I collaborate or share a story?','Yes. Researchers, storytellers, guests, institutions and members of the public can reach out through the contact section with a clear proposal or story lead.'],
            ['Where can I watch the videos?','Published videos and conversations are available through the official Bihar Charitra YouTube channel.']
          ].map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>0{i+1}</span><b>{q}</b><ChevronDown className={faq===i?'turned':''}/></button>{faq===i&&<p>{a}</p>}</div>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-top"><span className="eyebrow light">LET'S START A CONVERSATION</span><h2>Have a story<br/><em>worth telling?</em></h2><p>For collaborations, interviews, research, story ideas and the UP Election project, connect with Bihar Charitra.</p><a className="button button-light" href={siteConfig.email ? `mailto:${siteConfig.email}` : 'mailto:hello@yourdomain.com'}>Contact the team <ArrowUpRight size={16}/></a></div>
        <div className="contact-bottom"><div className="contact-brand"><img src={A+'bihar-charitra-logo.png'} alt="Bihar Charitra logo"/><span>Stories. People. Perspective.</span></div><div className="contact-links"><a href={siteConfig.youtubeChannel} target="_blank" rel="noreferrer"><Youtube/> YouTube <ArrowUpRight/></a>{siteConfig.instagram&&<a href={siteConfig.instagram}><Instagram/> Instagram <ArrowUpRight/></a>}<a href={siteConfig.email?`mailto:${siteConfig.email}`:'mailto:hello@yourdomain.com'}><Mail/> Email <ArrowUpRight/></a></div></div>
      </section>
    </main>
    <footer><span>© {new Date().getFullYear()} BIHAR CHARITRA. ALL RIGHTS RESERVED.</span><span>INDEPENDENT STORIES. THOUGHTFUL PERSPECTIVES.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
