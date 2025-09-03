import React from 'react';

// Example CSS-in-JS styles
const styles = {
  container: {
    padding: '2rem',
    background: '#f8fafc',
    fontFamily: 'sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subheading: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: '2rem',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '230px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.11rem',
    marginBottom: '0.5rem',
  },
  desc: {
    color: '#555',
    flexGrow: 1,
    fontSize: '0.98rem',
    marginBottom: '1.5rem',
  },
  button: {
    background: '#1966d2',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    transition: 'background 0.2s',
  }
};

const services = [
  {
    title: "Web Development",
    desc: "We build beautiful, responsive, and high-performance websites. From corporate sites and portfolios to complex e-commerce platforms and custom web applications, we create digital storefronts that engage users and drive conversions.",
  },
  {
    title: "Mobile App Development",
    desc: "We specialize in creating intuitive and powerful native (iOS, Android) and hybrid mobile applications. Our focus is on seamless user experience (UI/UX) and robust functionality to keep your audience connected on the go.",
  },
  {
    title: "Custom Software Development",
    desc: "We engineer tailor-made software solutions, including SaaS products, enterprise applications, and automation tools, designed to streamline your operations, improve productivity, and provide a competitive edge.",
  },
  {
    title: "Graphics & UI/UX Design",
    desc: "Our creative team crafts compelling visual identities, including logos, branding, and marketing collateral. We specialize in UI/UX design that ensures your digital products are not only stunning but also user-friendly and effective.",
  },
  {
    title: "Digital Marketing",
    desc: "We help you grow your online presence and reach your target audience through data-driven digital marketing strategies, including Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay-Per-Click (PPC) campaigns, and content strategy.",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "We implement, customize, and integrate Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems to help you manage your resources, optimize workflows, and build stronger customer relationships.",
  },
  {
    title: "Domain & Hosting",
    desc: "We provide reliable, secure, and scalable domain registration and web hosting solutions, ensuring your digital assets are always online and performing at their peak.",
  },
];

const Services = () => (
  <div style={styles.container}>
    <div style={styles.heading}>Our Services</div>
    <div style={styles.subheading}>
      We offer a comprehensive suite of services designed to cover every aspect of your digital journey from concept to launch and beyond.
    </div>
    <div style={styles.grid}>
      {/* Render the first cards individually in the grid */}
      {services.slice(0, services.length - 3).map((service, idx) => (
        <div style={styles.card} key={idx}>
          <div style={styles.title}>{service.title}</div>
          <div style={styles.desc}>{service.desc}</div>
          <button style={styles.button}>Explore Service &rarr;</button>
        </div>
      ))}
      {/* Responsive wrapper for the last 3 cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          gridColumn: '1 / -1',
          marginTop: '1rem',
          flexWrap: 'wrap', // allows wrap on small screens
        }}
      >
        {services.slice(services.length - 3).map((service, idx) => (
          <div style={{
            ...styles.card,
            minWidth: 250,    // shrink cards on small devices
            flex: '1 1 250px' // responsive basis
          }} key={services.length - 3 + idx}>
            <div style={styles.title}>{service.title}</div>
            <div style={styles.desc}>{service.desc}</div>
            <button style={styles.button}>Explore Service &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
