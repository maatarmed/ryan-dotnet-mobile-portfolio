import { motion } from 'framer-motion'
import { FaMoneyBillWave, FaHospital, FaCloud, FaBitcoin, FaGamepad } from 'react-icons/fa'
import './About.css'

const domains = [
  { label: 'Gaming', icon: <FaGamepad /> },
  { label: 'Fintech', icon: <FaMoneyBillWave /> },
  { label: 'Healthcare', icon: <FaHospital /> },
  { label: 'SaaS', icon: <FaCloud /> },
  { label: 'Blockchain', icon: <FaBitcoin /> }
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="floating-icons" />

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>

        <div className="about-wrapper">
          <motion.div className="about-content">
            <motion.div
              className="about-domains"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {domains.map((d) => (
                <span key={d.label} className="about-domain-pill">
                  <span className="about-domain-pill-icon">{d.icon}</span>
                  {d.label}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong>Senior Full Stack Engineer</strong> with <strong>7+ years</strong> of experience designing and
              modernizing scalable enterprise applications using <strong>C#</strong>, <strong>ASP.NET Core</strong> (
              <strong>.NET 6/7/8</strong>), <strong>SQL Server</strong>, <strong>React</strong>,               <strong>Next.js</strong>, and <strong>TypeScript</strong>, with strong expertise in cloud-native and API-driven architectures.
              Experienced in transforming legacy monolithic systems into modern, scalable, cloud-based solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Strong experience in building cross-platform mobile applications using <strong>Flutter</strong> and{' '}
              <strong>React Native</strong>, delivering production-grade features such as real-time updates, push
              notifications, messaging systems, scoring engines, and user engagement workflows across{' '}
              <strong>iOS</strong> and <strong>Android</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Experienced in building backend systems using <strong>ASP.NET Core</strong>, <strong>Web APIs</strong>, and{' '}
              <strong>microservices</strong>, with authentication (<strong>JWT</strong>, <strong>OAuth2</strong>) and
              event-driven architecture. Strong knowledge of <strong>SQL Server</strong>, <strong>PostgreSQL</strong>, and{' '}
              <strong>Azure SQL</strong>, including database design and performance optimization for scalable applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hands-on experience with <strong>Azure</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and{' '}
              <strong>CI/CD</strong> pipelines, delivering and deploying cloud-based applications. Built real-time features
              like notifications, messaging, and dashboards, working across full-stack and mobile systems in fast-paced
              environments.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
