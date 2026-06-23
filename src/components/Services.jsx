import { motion } from 'framer-motion'
import {
  SiDotnet,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiFlutter
} from 'react-icons/si'
import { FaDatabase, FaCloud, FaCogs, FaGlobe, FaExchangeAlt, FaMobileAlt, FaLayerGroup } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaLayerGroup />,
      title: 'Full Stack Development',
      description:
        'End-to-end enterprise applications with ASP.NET Core and .NET 6 / 7 / 8 backends, React and Next.js frontends, SQL Server and PostgreSQL data layers, authentication, and cloud-native API-driven architecture — from legacy modernization to production deployment.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description:
        'Cross-platform iOS and Android apps with React Native (Expo), Flutter, and .NET MAUI — real-time updates, push notifications, scoring systems, in-app messaging, subscription flows, and production-grade mobile experiences integrated with backend APIs.',
    },
    {
      icon: <SiDotnet />,
      title: 'ASP.NET Core & .NET APIs',
      description:
        'Enterprise RESTful Web APIs on .NET 6 / 7 / 8: Entity Framework, clean architecture, JWT/OAuth2 auth, background jobs, microservices, and legacy C#/SQL modernization into scalable cloud-based systems.',
    },
    {
      icon: <SiNodedotjs />,
      title: 'Node.js backend services',
      description:
        'Node.js / Express (and NestJS-style structure when needed) for BFFs, webhooks, integration layers, and event-driven services alongside .NET stacks.',
    },
    {
      icon: <FaCloud />,
      title: 'Data, messaging & cloud',
      description:
        'SQL Server, PostgreSQL, MongoDB, Redis, Kafka, and RabbitMQ; Azure deployments; Docker and Kubernetes; CI/CD on Azure DevOps or GitHub Actions; production debugging and release discipline.',
    },
  ]

  const fullStackExperience = [
    { icon: <SiDotnet />, name: 'ASP.NET Core' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiReact />, name: 'React Native' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiDotnet />, name: '.NET MAUI' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaDatabase />, name: 'SQL Server' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <FaExchangeAlt />, name: 'Kafka / RabbitMQ' },
    { icon: <FaCogs />, name: 'Microservices' },
    { icon: <FaGlobe />, name: 'REST APIs' },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full stack and mobile-first products — .NET and React web systems, cross-platform iOS & Android apps, and
          cloud-native APIs from schema and auth to messaging and deployment.
        </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">{service.icon}</div>
              <h3 className="service-title-professional">{service.title}</h3>
              <p className="service-description-professional">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="fullstack-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 className="fullstack-title">Full stack depth</h3>
          <p className="fullstack-description">
            Core strengths across .NET, React, React Native, Flutter, .NET MAUI, SQL Server, and Node.js — delivering
            full stack web systems and cross-platform mobile apps for enterprise, gaming, and startup environments.
          </p>
          <div className="fullstack-icons-row">
            {fullStackExperience.map((item) => (
              <div key={item.name} className="fullstack-icon-group">
                <span className="fullstack-icon">{item.icon}</span>
                <span className="fullstack-name">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
