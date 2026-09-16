import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import flaskCore from '../../assets/erlenmeyer/flask-core.png'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef(null)

  const contentRef = useRef(null)
  const flaskRef = useRef(null)

  const automationRef = useRef(null)
  const webRef = useRef(null)
  const aiRef = useRef(null)

  const automationCopyRef = useRef(null)

  useLayoutEffect(() => {
    let mm

    const ctx = gsap.context(() => {
      mm = gsap.matchMedia()

      /*
       * =====================================================
       * DESKTOP SCROLLYTELLING
       * =====================================================
       */

      mm.add('(min-width: 1024px)', () => {
        /*
         * Estado inicial do conteúdo da etapa Automation.
         */
        gsap.set(automationCopyRef.current, {
          autoAlpha: 0,
          y: 40,
        })

        /*
         * Timeline principal do Hero.
         *
         * Neste primeiro teste:
         *
         * Hero normal
         *      ↓
         * Automation vem para frente
         *      ↓
         * texto Automation aparece
         */
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,

            start: 'top top',
            end: '+=1400',

            scrub: 1,

            pin: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,
          },
        })

        /*
         * =====================================================
         * 01 — HERO CONTENT OUT
         * =====================================================
         */

        timeline.to(
          contentRef.current,
          {
            autoAlpha: 0,

            y: -60,

            duration: 1,

            ease: 'none',
          },
          0,
        )

        /*
         * =====================================================
         * 02 — AUTOMATION ORB FORWARD
         * =====================================================
         */

        timeline.to(
          automationRef.current,
          {
            x: -120,
            y: -40,

            z: 240,

            scale: 2.1,

            duration: 1,

            ease: 'none',
          },
          0,
        )

        /*
         * =====================================================
         * 03 — WEB + AI GO TO BACKGROUND
         * =====================================================
         */

        timeline.to(
          [webRef.current, aiRef.current],
          {
            opacity: 0.2,

            scale: 0.8,

            duration: 0.8,

            ease: 'none',
          },
          0,
        )

        /*
         * =====================================================
         * 04 — CORE REACTS
         * =====================================================
         */

        timeline.to(
          flaskRef.current,
          {
            scale: 1.06,

            filter:
              'brightness(1.15) drop-shadow(0 0 55px rgba(126, 87, 194, 0.28))',

            duration: 1,

            ease: 'none',
          },
          0,
        )

        /*
         * =====================================================
         * 05 — AUTOMATION COPY ENTERS
         * =====================================================
         */

        timeline.to(
          automationCopyRef.current,
          {
            autoAlpha: 1,

            y: 0,

            duration: 0.55,

            ease: 'power3.out',
          },
          0.48,
        )
      })
    }, heroRef)

    /*
     * Cleanup importante para o HMR do Vite
     * e desmontagem do componente.
     */
    return () => {
      mm?.revert()
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero"
    >
      <div className="hero__container">

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          ref={contentRef}
          className="hero__content"
        >
          <p className="hero__eyebrow">
            Creative Developer · Automation · AI
          </p>

          <h1 className="hero__headline">
            I build digital
            <br className="hero__desktop-break" />

            experiences and
            <br className="hero__desktop-break" />

            intelligent systems.
          </h1>

          <p className="hero__description">
            Web experiences, automation and applied AI designed around
            real-world systems.
          </p>
        </div>


        {/* ===================================================
            VISUAL SYSTEM
        =================================================== */}

        <div className="hero__visual">
          <div className="hero__system">

            {/* ===============================================
                ORBITS — BACK
            =============================================== */}

            <svg
              className="hero__orbits hero__orbits--back"
              viewBox="0 0 1000 1000"
              aria-hidden="true"
            >
              <ellipse
                className="hero__orbit hero__orbit--automation"
                cx="500"
                cy="500"
                rx="410"
                ry="185"
                pathLength="100"
                transform="rotate(-16 500 500)"
              />

              <ellipse
                className="hero__orbit hero__orbit--web"
                cx="500"
                cy="500"
                rx="430"
                ry="205"
                pathLength="100"
                transform="rotate(18 500 500)"
              />

              <ellipse
                className="hero__orbit hero__orbit--ai"
                cx="500"
                cy="500"
                rx="330"
                ry="245"
                pathLength="100"
                transform="rotate(62 500 500)"
              />
            </svg>


            {/* ===============================================
                BRX CORE
            =============================================== */}

            <img
              ref={flaskRef}
              src={flaskCore}
              alt="Erlenmeyer representando o núcleo do sistema BRX Labs"
              className="hero__flask"
            />


            {/* ===============================================
                ORBITS — FRONT
            =============================================== */}

            <svg
              className="hero__orbits hero__orbits--front"
              viewBox="0 0 1000 1000"
              aria-hidden="true"
            >
              <ellipse
                className="
                  hero__orbit
                  hero__orbit--automation
                  hero__orbit-front
                  hero__orbit-front--automation
                "
                cx="500"
                cy="500"
                rx="410"
                ry="185"
                pathLength="100"
                transform="rotate(-16 500 500)"
              />

              <ellipse
                className="
                  hero__orbit
                  hero__orbit--web
                  hero__orbit-front
                  hero__orbit-front--web
                "
                cx="500"
                cy="500"
                rx="430"
                ry="205"
                pathLength="100"
                transform="rotate(18 500 500)"
              />

              <ellipse
                className="
                  hero__orbit
                  hero__orbit--ai
                  hero__orbit-front
                  hero__orbit-front--ai
                "
                cx="500"
                cy="500"
                rx="330"
                ry="245"
                pathLength="100"
                transform="rotate(62 500 500)"
              />
            </svg>


            {/* ===============================================
                AUTOMATION / FLOW
            =============================================== */}

            <div
              ref={automationRef}
              className="hero__orb hero__orb--automation"
            >
              <span className="hero__orb-dot" />

              <div className="hero__orb-label">
                <strong>Automation</strong>

                <span>/ Flow</span>
              </div>
            </div>


            {/* ===============================================
                WEB / EXPERIENCE
            =============================================== */}

            <div
              ref={webRef}
              className="hero__orb hero__orb--web"
            >
              <span className="hero__orb-dot" />

              <div className="hero__orb-label">
                <strong>Web</strong>

                <span>/ Experience</span>
              </div>
            </div>


            {/* ===============================================
                AI / PROCESSING
            =============================================== */}

            <div
              ref={aiRef}
              className="hero__orb hero__orb--ai"
            >
              <span className="hero__orb-dot" />

              <div className="hero__orb-label">
                <strong>AI</strong>

                <span>/ Processing</span>
              </div>
            </div>

          </div>
        </div>


        {/* ===================================================
            SCROLL STAGE — AUTOMATION
        =================================================== */}

        <div
          ref={automationCopyRef}
          className="
            hero__stage-copy
            hero__stage-copy--automation
          "
        >
          <span className="hero__stage-index">
            01 / Automation / Flow
          </span>

          <h2>
            Processes that
            <br />
            run themselves.
          </h2>

          <p>
            Intelligent workflows connecting applications, data and
            operations with less manual intervention.
          </p>
        </div>

      </div>
    </section>
  )
}