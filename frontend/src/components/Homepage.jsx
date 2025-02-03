import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FitnessCenter,
  People,
  EventAvailable,
  Analytics,
  Security,
  Language,
  DarkMode,
  MonetizationOn,
  Notifications,
  Speed,
  SportsGymnastics,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import styles from './Homepage.module.css';
import WaveCanvas from './ui/WaveCanvas';
import Navbar from './ui/Navbar';

const Homepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <People />,
      title: 'Member Management',
      description: 'Efficiently manage gym memberships, profiles, and access controls.'
    },
    {
      icon: <EventAvailable />,
      title: 'Class Scheduling',
      description: 'Easy class booking system with capacity management and notifications.'
    },
    {
      icon: <Analytics />,
      title: 'Attendance Analytics',
      description: 'Track and analyze member attendance patterns with detailed insights.'
    },
    {
      icon: <Security />,
      title: 'Privacy Controls',
      description: 'Secure member data with advanced privacy settings and controls.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Gyms Using GymPal' },
    { number: '50K+', label: 'Active Members' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const testimonials = [
    {
      quote: "GymPal has revolutionized how we manage our gym. The automation and analytics have saved us countless hours.",
      author: "Sarah Johnson",
      role: "Gym Owner, FitLife NYC",
      avatar: "/testimonials/sarah.jpg"
    },
    {
      quote: "The member engagement features are incredible. Our class attendance has increased by 40% since implementing GymPal.",
      author: "Mike Chen",
      role: "Director, PowerFit LA",
      avatar: "/testimonials/mike.jpg"
    },
    {
      quote: "Best investment we've made for our gym. The customer support is outstanding, and our members love the mobile app.",
      author: "Emma Williams",
      role: "Manager, Elite Fitness",
      avatar: "/testimonials/emma.jpg"
    }
  ];

  const brands = [
    { name: 'Nike', logo: '/brands/nike.png' },
    { name: 'Adidas', logo: '/brands/adidas.png' },
    { name: 'Under Armour', logo: '/brands/under-armour.png' },
    { name: 'Reebok', logo: '/brands/reebok.png' },
    { name: 'Puma', logo: '/brands/puma.png' },
    { name: 'New Balance', logo: '/brands/new-balance.png' }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>
        <section className={styles.leftSection}>
          <h1 className={styles.heading}>
            Transform Your Gym Management
          </h1>
          <p className={styles.subheading}>
            A comprehensive SaaS solution designed for modern gyms. Streamline operations, 
            boost member engagement, and grow your fitness business with our all-in-one platform.
          </p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryButton}
              onClick={() => navigate('/register')}
            >
              Start Free Trial
            </button>
            <button className={styles.secondaryButton}>
              Watch Demo
            </button>
          </div>

          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.rightSection}>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className={styles.wavyContainer}>
        <WaveCanvas />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
            Transform Your Fitness Journey
          </h1>
          <p className={styles.bannerText}>
            Leverage the power of smart management to create a better gym experience
          </p>
          <div className={styles.bannerStats}>
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNumber}>98%</span>
              <span className={styles.bannerStatLabel}>Customer Satisfaction</span>
            </div>
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNumber}>2M+</span>
              <span className={styles.bannerStatLabel}>Members Managed</span>
            </div>
            <div className={styles.bannerStat}>
              <span className={styles.bannerStatNumber}>45%</span>
              <span className={styles.bannerStatLabel}>Revenue Growth</span>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.featureShowcase}>
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseImage}>
            <img src="/dashboard-preview.jpg" alt="GymPal Dashboard Interface" />
          </div>
          <div className={styles.showcaseContent}>
            <h2 className={styles.showcaseTitle}>
              Powerful Dashboard for Complete Control
            </h2>
            <p className={styles.showcaseText}>
              Our intuitive dashboard gives you a comprehensive view of your gym's performance.
              Monitor member activity, track revenue, and make data-driven decisions with ease.
            </p>
            <div className={styles.showcaseFeatures}>
              <div className={styles.showcaseFeature}>
                <span className={styles.showcaseFeatureIcon}>
                  <Analytics />
                </span>
                <span>Real-time Analytics</span>
              </div>
              <div className={styles.showcaseFeature}>
                <span className={styles.showcaseFeatureIcon}>
                  <EventAvailable />
                </span>
                <span>Class Management</span>
              </div>
              <div className={styles.showcaseFeature}>
                <span className={styles.showcaseFeatureIcon}>
                  <People />
                </span>
                <span>Member Insights</span>
              </div>
              <div className={styles.showcaseFeature}>
                <span className={styles.showcaseFeatureIcon}>
                  <MonetizationOn />
                </span>
                <span>Revenue Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Join hundreds of satisfied gym owners who have transformed their business with GymPal
        </p>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.brandSection}>
        <h2 className={styles.sectionTitle}>Trusted by Leading Brands</h2>
        <p className={styles.sectionSubtitle}>
          We partner with the best in the fitness industry to provide you with top-notch solutions
        </p>
        <div className={styles.brandGrid}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.brandLogo}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <h2 className={styles.newsletterTitle}>Stay Ahead in Fitness Management</h2>
        <p className={styles.newsletterSubtitle}>
          Join our newsletter and get exclusive insights, industry trends, and early access to new features.
        </p>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className={styles.newsletterInput}
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe Now
          </button>
        </form>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>
              <Speed />
            </span>
            <span>Weekly Updates</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>
              <Notifications />
            </span>
            <span>Feature Previews</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>
              <MonetizationOn />
            </span>
            <span>Exclusive Offers</span>
          </div>
        </div>

        <p className={styles.privacyNote}>
          By subscribing, you agree to receive GymPal marketing emails. 
          You can unsubscribe at any time.
        </p>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <a href="/" className={styles.footerLogo}>
              <FitnessCenter /> GymPal
            </a>
            <p className={styles.footerDescription}>
              Empowering gyms with smart management solutions. Join the future of fitness business.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><Facebook /></a>
              <a href="#" className={styles.socialIcon}><Twitter /></a>
              <a href="#" className={styles.socialIcon}><Instagram /></a>
              <a href="#" className={styles.socialIcon}><LinkedIn /></a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Product</h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Features</a>
              <a href="#" className={styles.footerLink}>Pricing</a>
              <a href="#" className={styles.footerLink}>Integrations</a>
              <a href="#" className={styles.footerLink}>Updates</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>About</a>
              <a href="#" className={styles.footerLink}>Careers</a>
              <a href="#" className={styles.footerLink}>Blog</a>
              <a href="#" className={styles.footerLink}>Press</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact</h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>
                <Email /> support@gympal.com
              </a>
              <a href="#" className={styles.footerLink}>
                <Phone /> +1 (555) 123-4567
              </a>
              <a href="#" className={styles.footerLink}>
                <LocationOn /> New York, NY
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} GymPal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
