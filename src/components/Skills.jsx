import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiBootstrap,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJest,
  SiWebpack,
  SiVite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiRedis,
  SiNestjs,
  SiDotnet,
  SiAmazon,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiLinux,
  SiStorybook,
  SiGithubactions,
  SiFlutter,
  SiNextdotjs
} from 'react-icons/si'
import {
  FaDatabase,
  FaServer,
  FaCode,
  FaPalette,
  FaCog,
  FaComments,
  FaLightbulb,
  FaCrown,
  FaRocket,
  FaUsers,
  FaHeart,
  FaCloud,
  FaExchangeAlt,
  FaLayerGroup,
  FaCodeBranch,
  FaMobileAlt
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> }
  ]

  const technicalSkillsTop = [
    {
      title: '.NET & C#',
      icon: <FaServer />,
      skills: [
        { name: 'ASP.NET Core', icon: <SiDotnet /> },
        { name: '.NET 6 / 7 / 8', icon: <SiDotnet /> },
        { name: 'Web API', icon: <FaServer /> },
        { name: 'C#', icon: <SiDotnet /> },
        { name: 'Entity Framework', icon: <SiDotnet /> },
        { name: 'Legacy C# / SQL', icon: <FaDatabase /> },
        { name: 'REST APIs', icon: <FaServer /> },
        { name: 'JWT / OAuth2 / SSO', icon: <FaLayerGroup /> },
        { name: 'SignalR', icon: <FaServer /> },
        { name: 'Microservices', icon: <FaCodeBranch /> }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FaMobileAlt />,
      skills: [
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Expo', icon: <SiReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: '.NET MAUI', icon: <SiDotnet /> },
        { name: 'iOS & Android', icon: <FaMobileAlt /> },
        { name: 'Push notifications', icon: <FaMobileAlt /> },
        { name: 'Real-time updates', icon: <FaExchangeAlt /> },
        { name: 'In-app messaging', icon: <FaComments /> },
        { name: 'App Store / Play Store', icon: <FaMobileAlt /> },
        { name: 'Mobile-first SaaS', icon: <FaRocket /> }
      ]
    },
    {
      title: 'Full Stack / Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'GraphQL', icon: <SiGraphql /> }
      ]
    }
  ]

  const technicalSkillsBottom = [
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'SQL Server', icon: <FaDatabase /> },
        { name: 'T-SQL & stored procs', icon: <FaDatabase /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Azure SQL', icon: <FaCloud /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'EF Core', icon: <SiDotnet /> },
        { name: 'Schema design', icon: <FaDatabase /> },
        { name: 'Query optimization', icon: <FaDatabase /> }
      ]
    },
    {
      title: 'Node.js & APIs',
      icon: <SiNodedotjs />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'REST APIs', icon: <FaServer /> },
        { name: 'BFF & integration', icon: <FaLayerGroup /> },
        { name: 'Webhooks', icon: <FaServer /> },
        { name: 'Event-driven APIs', icon: <FaExchangeAlt /> }
      ]
    },
    {
      title: 'Cloud & messaging',
      icon: <FaCloud />,
      skills: [
        { name: 'Azure', icon: <FaCloud /> },
        { name: 'AWS', icon: <SiAmazon /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Kafka', icon: <FaExchangeAlt /> },
        { name: 'RabbitMQ', icon: <FaExchangeAlt /> },
        { name: 'Azure DevOps', icon: <FaCog /> },
        { name: 'GitHub Actions', icon: <SiGithubactions /> },
        { name: 'GitLab CI/CD', icon: <SiGitlab /> },
        { name: 'Linux', icon: <SiLinux /> }
      ]
    }
  ]

  const softSkills = [
    {
      title: 'Communication',
      icon: <FaComments />,
      description: 'Effective verbal and written communication with stakeholders, team members, and clients.'
    },
    {
      title: 'Problem Solving',
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.'
    },
    {
      title: 'Leadership',
      icon: <FaCrown />,
      description: 'Experience leading teams, mentoring junior developers, and driving project success.'
    },
    {
      title: 'Adaptability',
      icon: <FaRocket />,
      description: 'Quick learner with ability to adapt to new technologies and changing project requirements.'
    },
    {
      title: 'Team Collaboration',
      icon: <FaUsers />,
      description: 'Strong team player with experience in agile methodologies and cross-functional collaboration.'
    },
    {
      title: 'Attention to Detail',
      icon: <FaHeart />,
      description: 'Meticulous approach to code quality, testing, and delivering polished user experiences.'
    }
  ]

  const tools = [
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'Visual Studio / VS Code', icon: <FaCode /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'GitLab', icon: <SiGitlab /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'npm', icon: <FaCode /> },
        { name: 'yarn', icon: <FaCode /> },
        { name: 'Docker', icon: <SiDocker /> }
      ]
    },
    {
      title: 'Design Tools',
      icon: <FaPalette />,
      tools: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Storybook', icon: <SiStorybook /> }
      ]
    },
    {
      title: 'Testing & Deployment',
      icon: <FaCog />,
      tools: [
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Jenkins', icon: <SiJenkins /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          .NET and mobile-first delivery — React Native, Flutter, and .NET MAUI alongside ASP.NET Core, React, and
          cloud-native full stack systems
        </motion.p>

        <motion.div
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`skill-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {technicalSkillsTop.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={`${skill.name}-${skillIndex}`} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="technical-grid-3 technical-grid-bottom">
                {technicalSkillsBottom.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={`${skill.name}-${skillIndex}`} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    className="soft-skill-card-compact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="soft-skill-icon-compact">{skill.icon}</div>
                    <h3 className="soft-skill-title-compact">{skill.title}</h3>
                    <p className="soft-skill-description-compact">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {tools.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={`${tool.name}-${toolIndex}`} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{tool.icon}</span>
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
