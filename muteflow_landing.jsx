import React, { useState, useEffect } from 'react';

export default function MuteflowLanding() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Keep the wordmark unbroken at all times (no spaces/hyphenation/case changes).
    const sequence = ['m', 'mu', 'mut', 'mute', 'mutef', 'mutefl', 'muteflo', 'muteflow'];
    sequence.forEach((text, i) => {
      setTimeout(() => setTypedText(text), i * 70);
    });
    setTimeout(() => setLoaded(true), 800);
  }, []);

  const services = [
    {
      num: '01',
      title: 'AI Voice Agents',
      body: 'Production-grade voice agents for inbound qualification, outbound lead gen, and 24/7 support.',
      stack: 'ElevenLabs · Vapi · Retell · Twilio'
    },
    {
      num: '02',
      title: 'Workflow Automation',
      body: 'End-to-end automations with error handling, retry logic, and live monitoring. Not toy demos.',
      stack: 'Make · n8n · Zapier'
    },
    {
      num: '03',
      title: 'GPT & Claude Integrations',
      body: 'Custom LLM integrations wired into your client stack. RAG pipelines, function calling, guardrails.',
      stack: 'OpenAI · Anthropic · Pinecone · Supabase'
    },
    {
      num: '04',
      title: 'Client Onboarding Systems',
      body: 'Automated flows from first sale to first delivered outcome. Document collection, provisioning, handoffs.',
      stack: 'Notion · Airtable · Stripe · HubSpot'
    },
    {
      num: '05',
      title: 'GoHighLevel Builds',
      body: 'Complete GHL snapshots, sub-accounts, white-label configs, SaaS mode, conversational AI bots.',
      stack: 'GoHighLevel · Twilio · OpenAI'
    },
    {
      num: '06',
      title: 'Custom API & Backend',
      body: 'When Make hits its ceiling, we write the code. For the 20% of builds that need real engineering.',
      stack: 'Node · Python · Supabase · Vercel · Fly'
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0A0A0B',
      minHeight: '100vh',
      color: '#F4F4F5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }}>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.03,
        zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />

      {/* Ambient gradient mesh */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        left: '-10%',
        width: '70%',
        height: '70%',
        background: 'radial-gradient(ellipse at center, rgba(196, 245, 71, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(40px)'
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(10, 10, 11, 0.7)',
        borderBottom: '1px solid #1F1F23',
        padding: '18px 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="#" aria-label="muteflow" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              src="./muteflow-logo-primary.svg"
              alt="muteflow"
              style={{ width: '168px', height: 'auto', display: 'block' }}
            />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            <a href="#work" style={navLink}>Work</a>
            <a href="#process" style={navLink}>Process</a>
            <button style={ctaButtonSmall}>Scope a Build →</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '140px 32px 160px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 800ms ease, transform 800ms ease'
        }}>
          <div style={eyebrow}>
            <span style={{ 
              width: '6px', 
              height: '6px', 
              backgroundColor: '#C4F547',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '10px',
              boxShadow: 'none'
            }} />
            THE SILENT BUILD TEAM FOR AI AGENCIES
          </div>

          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 700,
            lineHeight: 0.98,
            letterSpacing: '-0.045em',
            margin: '32px 0 0 0',
            maxWidth: '900px'
          }}>
            You sold it.<br/>
            <span style={{ color: '#8A8A93' }}>We'll build it.</span>
          </h1>

          <p style={{
            fontSize: '19px',
            lineHeight: 1.55,
            color: '#A8A8B3',
            maxWidth: '620px',
            marginTop: '32px',
            fontWeight: 400
          }}>
            muteflow is the technical fulfilment team behind AI agencies who close faster than they can ship. We build the automations, voice agents, and AI workflows your clients bought — under your brand, inside your timelines, without your clients ever knowing we exist.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '44px', flexWrap: 'wrap' }}>
            <button style={ctaButtonPrimary}>
              Scope a Build →
            </button>
            <button style={ctaButtonGhost}>
              See how it works
            </button>
          </div>

          <div style={{ 
            marginTop: '72px',
            paddingTop: '32px',
            borderTop: '1px solid #1F1F23',
            display: 'flex',
            gap: '48px',
            flexWrap: 'wrap',
            fontSize: '13px',
            color: '#6A6A73',
            fontFamily: '"JetBrains Mono", "Menlo", monospace',
            letterSpacing: '0.02em'
          }}>
            <span>Operating quietly behind agencies in the UK · US · EU</span>
          </div>
        </div>
      </section>

      {/* SERVICE STACK */}
      <section style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 32px 160px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ marginBottom: '80px', maxWidth: '720px' }}>
          <div style={eyebrow}>THE STACK</div>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            marginTop: '24px',
            marginBottom: '20px'
          }}>
            Everything you promised<br/>on the sales call.
          </h2>
          <p style={{ color: '#8A8A93', fontSize: '17px', lineHeight: 1.6 }}>
            Named tools, named capabilities, named outcomes. No generic "solutions."
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1px',
          backgroundColor: '#1F1F23',
          border: '1px solid #1F1F23',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: '40px 36px',
                backgroundColor: hoveredCard === i ? '#131315' : '#0D0D0F',
                transition: 'background-color 300ms ease',
                cursor: 'default',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{
                  fontSize: '11px',
                  fontFamily: '"JetBrains Mono", "Menlo", monospace',
                  color: hoveredCard === i ? '#A8A8B3' : '#6A6A73',
                  letterSpacing: '0.1em',
                  marginBottom: '24px',
                  transition: 'color 300ms ease'
                }}>
                  / {service.num}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  marginBottom: '14px',
                  color: '#F4F4F5'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#8A8A93',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}>
                  {service.body}
                </p>
              </div>
              <div style={{
                fontSize: '12px',
                fontFamily: '"JetBrains Mono", "Menlo", monospace',
                color: '#5A5A63',
                letterSpacing: '0.02em',
                paddingTop: '20px',
                borderTop: '1px solid #1F1F23'
              }}>
                {service.stack}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          color: '#6A6A73',
          fontSize: '14px'
        }}>
          Don't see it? <a href="#scope" style={{ color: '#A8A8B3', textDecoration: 'none', borderBottom: '1px solid #1F1F23' }}>Scope a build</a> and ask. We've probably built it.
        </div>
      </section>
    </div>
  );
}

const navLink = {
  color: '#A8A8B3',
  fontSize: '14px',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 200ms ease',
  cursor: 'pointer'
};

const eyebrow = {
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#8A8A93',
  fontFamily: '"JetBrains Mono", "Menlo", monospace',
  display: 'flex',
  alignItems: 'center'
};

const ctaButtonPrimary = {
  backgroundColor: '#C4F547',
  color: '#0A0A0B',
  border: 'none',
  padding: '14px 24px',
  fontSize: '15px',
  fontWeight: 600,
  borderRadius: '6px',
  cursor: 'pointer',
  letterSpacing: '-0.01em',
  transition: 'all 200ms ease',
  boxShadow: '0 0 40px rgba(196, 245, 71, 0.15)'
};

const ctaButtonSmall = {
  backgroundColor: 'transparent',
  color: '#F4F4F5',
  border: '1px solid #1F1F23',
  padding: '10px 18px',
  fontSize: '13px',
  fontWeight: 600,
  borderRadius: '5px',
  cursor: 'pointer',
  letterSpacing: '-0.01em',
  transition: 'all 200ms ease'
};

const ctaButtonGhost = {
  backgroundColor: 'transparent',
  color: '#F4F4F5',
  border: '1px solid #1F1F23',
  padding: '14px 24px',
  fontSize: '15px',
  fontWeight: 500,
  borderRadius: '6px',
  cursor: 'pointer',
  letterSpacing: '-0.01em',
  transition: 'all 200ms ease'
};
