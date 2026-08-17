export type Language = "en" | "ar";

export const LANGUAGES: {
  code: Language;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
];

export const translations = {
  en: {
    // Header
    header: {
      logo: "Dr. Baraa Abdulhakim Khalil",
      freeConsultation: "Legal Consultation",
      home: "Home",
      about: "About Us",
      practiceAreas: "Practice Areas",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "Get a Legal Consultation",
      name: "Dr. Baraa Abdulhakim Khalil",
      subtitles: [
        "Criminal Justice Attorney",
        "Trusted Legal Advisor",
        "Your Advocate in Court",
      ],
      descriptions: [
        "Committed to providing dependable legal representation that protects your rights in every case.",
        "More than 12 years of experience serving clients with care, integrity, and professional dedication.",
        "When you need legal support, we stand beside you with clarity and experience to safeguard your rights.",
      ],
      contactUs: "Contact Us",
      callFree: "Get Legal Advice",
    },
    // Emergency Banner
    emergency: {
      title: "Emergency Legal Service Around the Clock",
      callFree: "Get Legal Advice",
    },
    // Counter Stats
    counter: {
      casesWon: "Cases Won",
      yearsExperience: "Years Experience",
      successRate: "Success Rate",
      expertLawyers: "Expert Lawyers",
    },
    // Practice Areas
    practiceAreas: {
      subtitle: "Practice Areas",
      title: "Our Practice Areas",
      intro:
        "We combine legal knowledge with an understanding of the Iraqi market, business environment, and relevant regulatory frameworks to give our clients clear insight and practical solutions that help them make sound decisions and manage their business and investments efficiently. We draw on experience, insight, and innovation in addressing legal requirements and the most complex matters.",
      viewAll: "View All Sections",
      showMore: "Show More",
      showLess: "Show Less",
      items: [
        {
          title: "Legal Consultations",
          desc: "Accurate legal advice for a wide range of matters and disputes.",
          fullDescription:
            "Our legal advisory services provide comprehensive guidance for individuals and businesses facing complex legal challenges. With decades of combined experience, our attorneys offer strategic counsel that helps clients navigate intricate legal landscapes with confidence and clarity. Whether you are dealing with a personal matter or a corporate dispute, our team ensures that your rights are protected at every stage of the process. We take pride in delivering personalized attention to each case, ensuring that no detail is overlooked and every legal avenue is thoroughly explored.",
          services: [
            "Personal legal consultations",
            "Corporate legal strategy",
            "Legal document review",
            "Regulatory compliance guidance",
            "Pre-litigation risk assessment",
          ],
        },
        {
          title: "Foreign Company Registration",
          desc: "Professional handling of foreign company registration procedures.",
          fullDescription:
            "Our litigation team has successfully represented thousands of clients in state and federal courts. We combine aggressive advocacy with meticulous preparation to achieve the best possible outcomes for our clients. From pre-trial negotiations to courtroom arguments, our attorneys bring unparalleled dedication and expertise to every case. We understand that litigation can be stressful and overwhelming, which is why we maintain open communication with our clients throughout the entire process, ensuring they are informed and empowered at every step.",
          services: [
            "Civil and commercial litigation",
            "Class action lawsuits",
            "Appellate advocacy",
            "Alternative dispute resolution",
            "Trial preparation and strategy",
          ],
        },
        {
          title: "Litigation",
          desc: "Legal representation before all courts and judicial authorities.",
          fullDescription:
            "When legal disputes escalate to formal lawsuits, having experienced representation is crucial. Our firm has a proven track record of success in managing complex lawsuits from filing through resolution. We employ a strategic approach that considers both the legal merits and the practical implications of each case. Our attorneys work closely with clients to develop tailored strategies that align with their goals, whether that means pursuing a favorable settlement or taking a case to trial to protect their interests.",
          services: [
            "Personal injury lawsuits",
            "Breach of contract claims",
            "Property dispute litigation",
            "Employment lawsuits",
            "Medical malpractice claims",
          ],
        },
        {
          title: "Labor and Social Security Law",
          desc: "Legal solutions for labor, employment, and social security matters.",
          fullDescription:
            "In today's complex business environment, having trusted legal counsel is essential for success. Our business law practice provides comprehensive legal services to companies of all sizes, from startups to established corporations. We assist with entity formation, contract drafting and negotiation, mergers and acquisitions, and ongoing corporate governance matters. Our attorneys understand the unique challenges that businesses face and provide practical, solution-oriented advice that helps our clients achieve their commercial objectives while minimizing legal risk.",
          services: [
            "Business formation and structuring",
            "Contract drafting and negotiation",
            "Mergers and acquisitions",
            "Corporate compliance and governance",
            "Intellectual property protection",
          ],
        },
        {
          title: "Foreign and Local Organization Registration",
          desc: "Efficient establishment and registration of organizations.",
          fullDescription:
            "Facing criminal charges is one of the most stressful experiences a person can endure. Our criminal defense attorneys are dedicated to protecting the rights, freedom, and reputation of every client we represent. We provide aggressive defense strategies backed by thorough investigation and deep knowledge of criminal law. From minor infractions to serious felony charges, we approach every case with the same level of commitment and determination. Our team has secured favorable outcomes in thousands of criminal cases, including acquittals, reduced charges, and alternative sentencing arrangements.",
          services: [
            "Felony and misdemeanor defense",
            "DUI/DWI representation",
            "White-collar crime defense",
            "Drug offense defense",
            "Expungement and record sealing",
          ],
        },
        {
          title: "Disputes",
          desc: "Effective resolution of legal and commercial disputes.",
          fullDescription:
            "Legal disputes can arise in any area of life, from business disagreements to neighborhood conflicts. Our dispute resolution team is skilled in both negotiation and litigation, helping clients find efficient and effective solutions to their conflicts. We prioritize resolving disputes through mediation and negotiation when possible, saving clients time and expense. However, when litigation is necessary, our attorneys are formidable advocates who will fight tirelessly to protect your interests in court.",
          services: [
            "Mediation and arbitration",
            "Contract dispute resolution",
            "Neighbor and property disputes",
            "Consumer disputes",
            "Employment conflict resolution",
          ],
        },
        {
          title: "Investment Affairs",
          desc: "Completion of transactions and investment approvals at the National Investment Commission.",
          fullDescription:
            "Protecting your intellectual property is vital in today's knowledge-based economy. Our copyright practice helps creators, artists, writers, and businesses secure and defend their creative works. We assist with copyright registration, licensing agreements, and enforcement actions against infringement. Our attorneys stay at the forefront of evolving copyright law, including digital and online issues, to provide cutting-edge counsel. Whether you need to protect a single work or manage an extensive portfolio, we deliver strategic advice that safeguards your creative assets.",
          services: [
            "Copyright registration and filing",
            "Licensing and transfer agreements",
            "Infringement litigation",
            "Fair use analysis",
            "Digital rights management",
          ],
        },
        {
          title: "Commercial Contract Drafting",
          desc: "Precise drafting and review of commercial contracts.",
          fullDescription:
            "Our criminal law practice encompasses a wide range of criminal matters, providing comprehensive defense for individuals charged with offenses at both the state and federal levels. We understand the profound impact that criminal charges can have on your life, career, and family, which is why we approach every case with compassion and determination. Our attorneys have extensive courtroom experience and deep knowledge of criminal statutes, precedents, and procedural rules. We conduct thorough investigations, challenge evidence, and build strong defense strategies designed to achieve the best possible outcome.",
          services: [
            "State and federal criminal defense",
            "Appeals and post-conviction relief",
            "Juvenile defense",
            "Bail and bond hearings",
            "Criminal investigation representation",
          ],
        },
        {
          title: "Legal Partnerships",
          desc: "Local and international legal partnerships.",
          fullDescription:
            "Our legal partnership services provide coordinated, reliable counsel for clients managing cross-border transactions, regulatory requirements, and complex legal matters. We work closely with trusted legal professionals to deliver clear guidance and practical representation tailored to each client's needs.",
          services: [
            "Legal representation coordination",
            "Cross-border transaction support",
            "Regulatory and compliance guidance",
            "Contract and document review",
            "Ongoing legal counsel",
          ],
        },
      ],
      learnMore: "Learn More",
    },
    // How It Works
    howItWorks: {
      subtitle: "How It Works",
      title: "3 Easy Steps to Get Legal Help",
      intro: "",
      items: [
        {
          title: "Request a Consultation",
          subtitle: "Send us the details of your case",
          btnText: "Send Request",
        },
        {
          title: "Book an Appointment",
          subtitle: "We will review your case",
          btnText: "Learn More",
        },
        {
          title: "Receive a Fee Quote",
          subtitle: "We will represent your case in court",
          btnText: "See Results",
        },
      ],
    },
    // Case Types
    cases: {
      subtitle: "Case Studies",
      title: "Case Like Yours",
      items: [
        { title: "Money Laundering", category: "Criminal Law" },
        { title: "Property Disputes", category: "Civil Law" },
        { title: "Criminal Lawsuit", category: "Criminal Cases" },
        { title: "Integrity Cases", category: "Integrity Law" },
        {
          title: "Legal Representation of Companies Before Courts",
          category: "Corporate Law",
        },
      ],
      viewCase: "View Case",
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: "Get Legal Advice",
      title: "Submit Your Request and Get a Consultation",
      description:
        "We will review your case and get back to you within 24 hours with a comprehensive legal assessment.",
      submitRequest: "Submit Your Request",
    },
    // Attorney Quote
    attorneyQuote: {
      quote:
        "Justice is not a passive concept — it requires dedicated advocates who are willing to fight tirelessly for the rights of every individual, regardless of the circumstances.",
      name: "Dr. Baraa Abdulhakim Khalil",
      title: "Senior Partner, Criminal Justice Attorney",
    },
    // Testimonials
    testimonials: {
      subtitle: "Testimonials",
      title: "What Our Clients Say",
      viewAll: "View All Reviews",
      clientReviews: "Client Reviews",
      reviewsVerified: "Reviews verified on Google",
      onGoogle: "on Google Reviews",
    },
    // Practice List
    practiceList: {
      title: "Practice Areas",
      subtitle: "Our Expertise",
      items: [
        "Commercial Organizations Law",
        "Civil and Common Law",
        "Telecommunications Law",
        "Constitutional law",
        "Cultural Property Law",
        "Mergers and Acquisitions Law",
        "Native American Law",
        "Product Liability Litigation",
        "Real Estate Law",
        "Obscenity Law",
        "Nationality Law",
        "Procedural Law",
        "International Human Rights Law",
        "Health Law",
        "Immigration Law",
        "Environmental Law",
        "Cyber Law",
        "Consumer Protection Law",
      ],
    },
    // Immigration Section
    immigration: {
      title: "Immigration Law",
      description:
        "Our immigration attorneys assist with visa applications, green cards, citizenship, deportation defense, asylum claims, and family-based petitions. We provide personalized guidance through every step of the immigration process.",
      learnMore: "Learn More",
    },
    // Verdicts
    verdicts: {
      subtitle: "Our Results",
      title: "Verdicts & Settlements",
      items: [
        {
          caseType: "Personal Injury",
          amount: "$2.5M",
          description:
            "Multi-vehicle collision resulting in permanent disability. Secured maximum compensation for medical expenses and lost wages.",
          outcome: "Settlement",
        },
        {
          caseType: "Medical Malpractice",
          amount: "$4.8M",
          description:
            "Surgical error causing severe complications. Achieved one of the largest verdicts in the county for medical negligence.",
          outcome: "Verdict",
        },
        {
          caseType: "Workplace Accident",
          amount: "$1.9M",
          description:
            "Construction site fall due to safety violations. Recovered full damages including future medical care and rehabilitation.",
          outcome: "Settlement",
        },
        {
          caseType: "Wrongful Death",
          amount: "$6.2M",
          description:
            "Fatal trucking accident caused by driver negligence. Obtained justice for the family with substantial wrongful death damages.",
          outcome: "Verdict",
        },
        {
          caseType: "Product Liability",
          amount: "$3.1M",
          description:
            "Defective product causing serious injury. Held manufacturer accountable with a significant product liability settlement.",
          outcome: "Settlement",
        },
        {
          caseType: "Business Dispute",
          amount: "$5.5M",
          description:
            "Breach of contract threatening company survival. Successfully recovered damages and protected business interests.",
          outcome: "Verdict",
        },
      ],
      settlement: "Settlement",
      verdict: "Verdict",
    },
    // Trust Badges
    trustBadges: {
      title: "Why Trust Us",
      subtitle: "Our Credentials",
      items: [
        {
          title: "Licensed and Insured",
          desc: "Fully licensed to practice law with comprehensive professional liability insurance for your protection.",
        },
        {
          title: "Award-Winning",
          desc: "Recognized by national legal organizations for excellence in client advocacy and courtroom results.",
        },
        {
          title: "24/7 Availability",
          desc: "Our attorneys are available around the clock for emergencies and urgent legal matters.",
        },
        {
          title: "Legal Consultation",
          desc: "Start with a no-obligation consultation. We review your case and explain your options at no cost.",
        },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: "Related Questions",
      subtitle: "Legal Answers",
      items: [
        {
          title: "When should I request legal advice?",
          description:
            "Request legal advice before signing contracts, answering official notices, filing a lawsuit, giving statements, or making decisions that may affect your rights or business obligations.",
        },
        {
          title: "Can the office represent me before court?",
          description:
            "Yes. The office handles litigation, lawsuits, criminal defense, company disputes, property matters, and representation before courts and official authorities.",
        },
        {
          title: "Do companies need ongoing legal support?",
          description:
            "Ongoing legal support helps companies review contracts, manage compliance, handle disputes early, prepare official documents, and reduce risks before problems reach court.",
        },
        {
          title: "What documents help in a property or contract dispute?",
          description:
            "Useful documents include contracts, title deeds, receipts, correspondence, notices, court papers, company records, photographs, and any proof showing each party's rights and obligations.",
        },
        {
          title: "Can disputes be resolved without a lawsuit?",
          description:
            "Many disputes can be handled through negotiation, formal legal notices, settlement discussions, or mediation. If these options are not effective, litigation may be recommended.",
        },
      ],
    },
    // Client Logos
    clientLogos: {
      title: "Trusted By Leading Organizations",
      items: [
        "Apex Holdings",
        "Sterling Corp",
        "Guardian Group",
        "Meridian Trust",
        "Pacific Ventures",
        "Atlas Capital",
        "Summit Partners",
        "Vanguard Legal",
        "Pinnacle Finance",
        "Ironclad Inc",
      ],
    },
    // CTA Section
    cta: {
      title: "Need Legal Assistance?",
      description: "Contact us today for a legal consultation.",
      contactUs: "Contact Us Now",
      callUs: "Call Us",
    },
    // About Page
    about: {
      hero: {
        title: "About Us",
        breadcrumb: { home: "Home", current: "About Us" },
      },
      vision: {
        subtitle: "Our Vision",
        title: "Our Vision for Justice",
        description:
          "We believe that every person deserves access to quality legal representation, regardless of their background or circumstances. Our vision is to create a more just society where the law serves as a shield for the vulnerable, not a weapon for the powerful.",
        stats: [
          { label: "Client Satisfaction", value: 95 },
          { label: "Case Success Rate", value: 98 },
          { label: "Years of Experience", value: 25 },
        ],
      },
      quote: {
        text: "The law is not merely a set of rules — it is the foundation upon which we build a fair and equitable society.",
        author: "Dr. Baraa Abdulhakim Khalil, Founding Partner",
      },
      mission: {
        subtitle: "Our Mission",
        title: "What We Stand For",
        description:
          "Our mission is to provide exceptional legal representation that makes a real difference in the lives of our clients. We are committed to upholding the highest standards of professional ethics while delivering results that exceed expectations.",
        services: [
          "Personal Injury",
          "Family Law",
          "Criminal Defense",
          "Business Law",
          "Immigration",
          "Real Estate",
        ],
      },
      history: {
        subtitle: "Milestones",
        title: "Our History",
        items: [
          {
            year: "1998",
            title: "Founded",
            description:
              "D.Baraa A. Khaleel was established with a commitment to justice and client advocacy, starting with a small office and a team of three dedicated attorneys.",
          },
          {
            year: "2003",
            title: "First Major Verdict",
            description:
              "Secured a landmark $3.2M verdict in a medical malpractice case, establishing our reputation for aggressive and effective courtroom representation.",
          },
          {
            year: "2008",
            title: "Expanded to 3 Offices",
            description:
              "Grew our practice to serve clients across three major metropolitan areas, expanding our team and capabilities to meet growing demand.",
          },
          {
            year: "2013",
            title: "500th Case Won",
            description:
              "Reached the milestone of 500 successful case outcomes, a testament to our unwavering dedication to achieving justice for our clients.",
          },
          {
            year: "2018",
            title: "Named Top Law Firm",
            description:
              "Recognized by the National Law Journal as one of the top 50 law firms in the country, a prestigious honor reflecting our commitment to excellence.",
          },
          {
            year: "2023",
            title: "25th Anniversary",
            description:
              "Celebrated 25 years of legal excellence, having served over 10,000 clients and recovered more than $100M in verdicts and settlements.",
          },
        ],
      },
      clients: {
        subtitle: "Our Clients",
        title: "Trusted by Leading Institutions",
        items: [
          "Apex Holdings",
          "Sterling Corp",
          "Guardian Group",
          "Meridian Trust",
          "Pacific Ventures",
          "Atlas Capital",
        ],
      },
      team: {
        subtitle: "Our Team",
        title: "Expert Team Members",
        members: [
          {
            name: "Alex Thomson",
            role: "Senior Partner",
            specialties: "Criminal Law, Litigation",
            bio: "Alex has over 20 years of experience in criminal defense and has successfully represented thousands of clients in state and federal courts.",
          },
          {
            name: "Sarah Mitchell",
            role: "Family Law Attorney",
            specialties: "Family Law, Mediation",
            bio: "Sarah specializes in complex family law matters, including high-asset divorces and contentious custody disputes.",
          },
          {
            name: "David Chen",
            role: "Corporate Counsel",
            specialties: "Business Law, M&A",
            bio: "David advises businesses of all sizes on corporate governance, mergers and acquisitions, and regulatory compliance.",
          },
        ],
        viewProfile: "View Profile",
        closeProfile: "Close Profile",
        education: "Education",
        credentials: "Credentials",
        practiceAreasLabel: "Practice Areas",
        contactInfo: "Contact Info",
      },
      legalAdvice: {
        subtitle: "Get Advice",
        title: "Get Your Legal Consultation",
        items: [
          {
            title: "Legal Consultation",
            desc: "Schedule a one-on-one consultation with our experienced attorneys.",
          },
          {
            title: "Case Evaluation",
            desc: "Get a thorough evaluation of your case with clear next steps.",
          },
          {
            title: "Document Review",
            desc: "Have your legal documents reviewed by our expert team.",
          },
          {
            title: "Court Representation",
            desc: "Trust our attorneys to represent you effectively in court.",
          },
          {
            title: "Settlement Negotiation",
            desc: "Let us negotiate the best possible settlement for your case.",
          },
          {
            title: "Appeal Assistance",
            desc: "Get help with filing and pursuing legal appeals effectively.",
          },
        ],
      },
      freeEvaluation: {
        title: "Get Legal Advice",
        description:
          "Get expert legal advice at no cost. Our attorneys will review your case and provide a comprehensive assessment.",
        contactUs: "Contact Us",
        callFree: "Get Legal Advice",
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: {
        title: "Practice Areas",
        breadcrumb: { home: "Home", current: "Practice Areas" },
      },
      intro:
        "With more than 25 years of experience, our attorneys handle a broad range of legal practice areas. We provide dedicated and assertive representation to protect your rights and pursue the best possible outcome.",
      subtitle: "What We Do",
      title: "Our Practice Areas",
      viewMore: "Learn More",
      whyChoose: {
        subtitle: "Why Choose Us",
        title: "Why Choose Our Firm",
        items: [
          {
            title: "Experienced Team",
            desc: "Over 25 years of combined legal experience across multiple practice areas.",
          },
          {
            title: "Proven Results",
            desc: "A 98% success rate and millions recovered for our clients.",
          },
          {
            title: "Personal Attention",
            desc: "Every case receives dedicated attention from a senior attorney.",
          },
          {
            title: "No Fee Unless We Win",
            desc: "You pay nothing unless we win your case. Your initial consultation is free.",
          },
        ],
      },
      moreAreas: {
        title: "More Practice Areas",
        description:
          "In addition to our core practice areas, we also provide legal services in the following fields:",
        items: [
          "Employment Law",
          "Real Estate Law",
          "Tax Law",
          "Immigration Law",
          "Environmental Law",
          "Intellectual Property",
          "Bankruptcy Law",
          "Estate Planning",
          "Civil Rights",
        ],
      },
      cta: {
        title: "Need Legal Help?",
        description:
          "Schedule a Legal Consultation with one of our experienced attorneys.",
        button: "Contact Us Now",
      },
      hours: {
        title: "Working Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      contact: {
        title: "Contact Info",
        address: "Baghdad, Al-Mansour, Clock Restaurant Street",
        phone: "07802233000",
        email: "info@baraa-alsamraie.com",
      },
    },
    // FAQ Page
    faqPage: {
      hero: {
        title: "Frequently Asked Questions",
        breadcrumb: { home: "Home", current: "FAQ" },
      },
      askForm: {
        title: "Ask Us a Question",
        subtitle:
          "Get answers to your legal questions from our experienced attorneys.",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email",
        departmentLabel: "Section",
        departmentPlaceholder: "Select a section",
        questionLabel: "Your Question",
        questionPlaceholder: "Type your question here...",
        submit: "Submit Question",
        departments: [
          "General",
          "Legal Consultation",
          "Litigation",
          "Company Registration",
          "Contracts",
          "Criminal Cases",
          "Property Disputes",
        ],
      },
      general: {
        subtitle: "General",
        title: "General Questions",
        items: [
          {
            q: "What legal services does Dr. Baraa A. Khaleel provide?",
            a: "The office provides legal consultations, litigation, representation for companies and individuals before the courts, commercial law services, criminal defense, dispute resolution, intellectual property matters, company registration, contract review, and property disputes.",
          },
          {
            q: "How can I book an appointment?",
            a: "You can book an appointment through the appointment form on the home page or contact the office by phone. Please include your name, contact information, preferred date and time, and a short description of the legal matter.",
          },
          {
            q: "What should I bring to my first meeting?",
            a: "Bring your identification and any documents related to the matter, such as court papers, contracts, company documents, correspondence, property records, official notices, police reports, or prior legal decisions.",
          },
          {
            q: "Can the office review my documents before starting a case?",
            a: "Yes. Document review is an important first step. The lawyer can examine contracts, notices, court papers, company files, and evidence to explain your legal position and recommend the next procedure.",
          },
          {
            q: "Do you represent companies and organizations?",
            a: "Yes. The office assists companies and organizations with registration, legal compliance, contracts, disputes, court representation, investment licensing matters, and ongoing legal advisory work.",
          },
          {
            q: "Where is the office located and when is it open?",
            a: "The main office is in Baghdad, Al-Mansour. Regular working hours are Monday to Friday from 9:00 to 16:30 and Saturday from 9:00 to 15:30. Emergency calls are available on Sunday.",
          },
        ],
      },
      legal: {
        subtitle: "Legal",
        title: "Legal Questions",
        items: [
          {
            q: "What should I do if I receive a court notice or lawsuit?",
            a: "Do not ignore the notice. Contact a lawyer quickly, keep the original papers, write down the date you received them, and avoid signing or submitting any response before the documents are reviewed.",
          },
          {
            q: "Can the office represent me in criminal complaints or investigations?",
            a: "Yes. The office handles criminal defense and criminal law matters, including legal advice before giving statements, review of investigation papers, preparation of a defense strategy, and representation before the competent authorities and the courts.",
          },
          {
            q: "How can a property dispute be handled?",
            a: "Property disputes usually begin with reviewing title deeds, contracts, notices, maps, payment records, and possession documents. The lawyer can then advise whether negotiation, official complaints, or court action is the proper path.",
          },
          {
            q: "Can you draft or review commercial contracts?",
            a: "Yes. The office reviews and drafts commercial contracts, partnership agreements, service agreements, settlement documents, and related legal correspondence to reduce risk and clarify obligations before signing.",
          },
          {
            q: "Do you help with company or NGO registration?",
            a: "Yes. The office assists with local and foreign company registration, organization registration, required paperwork, legal procedures, and follow-up with the relevant official authorities.",
          },
          {
            q: "What is the first step in a dispute between partners or businesses?",
            a: "The first step is to review the agreement, correspondence, financial records, and evidence of each party's obligations. After that, the lawyer can recommend negotiation, formal notice, mediation, or litigation.",
          },
        ],
      },
      search: {
        placeholder: "Search questions...",
        noResults: "No results found",
        clearSearch: "Clear",
      },
      stillHaveQuestions: {
        title: "Still Have Questions?",
        description:
          "Our team is ready to help. Contact us for a consultation.",
        contactUs: "Contact Us for Help",
        callFree: "Get Legal Advice",
      },
      feedback: {
        helpful: "Helpful",
        notHelpful: "Not helpful",
        thanksPositive: "Thank you for your feedback!",
        thanksNegative: "We'll work on improving this answer.",
      },
    },
    // Blog Page
    blogPage: {
      hero: {
        title: "Blog and News",
        breadcrumb: { home: "Home", current: "Blog" },
      },
      featured: "Featured",
      search: {
        placeholder: "Search articles...",
        noResults: "No articles found matching your search.",
        clearSearch: "Clear",
      },
      recentPosts: "Recent Posts",
      categories: "Categories",
      tags: "Tags",
      workingHours: "Working Hours",
      posts: [
        {
          title: "Understanding Your Rights: A Guide to Criminal Defense",
          excerpt:
            "Learn about your constitutional rights when facing criminal charges and how an experienced attorney can help protect them.",
          category: "Criminal Law",
          date: "January 15, 2026",
          author: "Dr. Baraa Abdulhakim Khalil",
          readTime: "5 min read",
          content:
            "When facing criminal charges, understanding your constitutional rights is the first and most important step in protecting yourself. The United States Constitution provides several core safeguards that apply to every person accused of a crime.\n\n## Your Right to Remain Silent\nThe Fifth Amendment protects you from being compelled to testify against yourself. Exercise this right politely but firmly by stating that you want to speak with an attorney before answering any questions.\n\n## Your Right to Legal Representation\nThe Sixth Amendment guarantees your right to have a lawyer present during questioning. If you cannot afford one, counsel will be appointed for you.\n\n## Protecting Your Rights\nIf you or someone close to you is facing criminal charges, speak with an experienced criminal defense attorney as early as possible.",
        },
        {
          title: "The Impact of Recent Legislation on Business Owners",
          excerpt:
            "New regulatory changes are affecting businesses across the country. Here is what you need to know.",
          category: "Business Law",
          date: "January 10, 2026",
          author: "David Chen",
          readTime: "7 min read",
          content:
            "Recent legislative changes have introduced new compliance requirements that affect businesses of every size. Understanding these changes is essential to avoid penalties and maintain smooth operations.\n\n## Key Compliance Changes\nThe new regulations require companies to implement stronger compliance programs.\n\n## Employment Law Updates\nMajor labor law changes include new workplace safety requirements.\n\n## Take Action\nDo not wait for a notice of non-compliance. A proactive review of your business practices now can save significant time and expense later.",
        },
        {
          title: "Family Law: Navigating Child Custody Disputes",
          excerpt:
            "Child custody can be one of the most emotionally challenging aspects of family law.",
          category: "Family Law",
          date: "January 5, 2026",
          author: "Sarah Mitchell",
          readTime: "6 min read",
          content:
            'Child custody disputes are among the most emotionally difficult legal matters families face. Understanding the legal framework and the process can help you navigate this period more effectively.\n\n## Types of Custody\nCourts distinguish between legal custody and physical custody.\n\n## The Best Interest Standard\nFamily courts make custody decisions based on the "best interests of the child."\n\n## Getting Help\nIf you are facing a custody dispute, having an experienced family law attorney by your side can make a meaningful difference.',
        },
        {
          title: "Personal Injury: What to Do After an Accident",
          excerpt:
            "Knowing the right steps to take immediately after an accident can significantly affect your ability to recover compensation.",
          category: "Personal Injury",
          date: "December 28, 2025",
          author: "Alex Thomson",
          readTime: "4 min read",
          content:
            "The moments and days after an accident are critical to protecting both your health and your legal right to compensation.\n\n## Step 1: Seek Medical Care\nYour health comes first. Even if you think your injuries are minor, get medical attention immediately.\n\n## Step 2: Document Everything\nTake photographs of the accident scene, your injuries, and any property damage.\n\n## Step 3: Contact a Lawyer\nBefore accepting any settlement offer or signing documents from an insurance company, consult a personal injury attorney.",
        },
      ],
      categoriesList: [
        { name: "Criminal Law", count: 12 },
        { name: "Business Law", count: 8 },
        { name: "Family Law", count: 6 },
        { name: "Personal Injury", count: 10 },
        { name: "Immigration", count: 4 },
      ],
      tagsList: [
        "Criminal",
        "Business",
        "Family",
        "Injury",
        "Defense",
        "Rights",
        "Legal",
        "Court",
        "Compensation",
      ],
      shareArticle: "Share this article",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
    // Contact Page
    contactPage: {
      hero: {
        title: "Contact Us",
        breadcrumb: { home: "Home", current: "Contact Us" },
      },
      info: {
        phone: { title: "Phone", number: "07802233000" },
        email: { title: "Email", address: "info@baraa-alsamraie.com" },
        address: {
          title: "Address",
          full: "Baghdad, Al-Mansour, Clock Restaurant Street",
        },
      },
      form: {
        title: "Send Us a Message",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email address",
        phoneLabel: "Your Phone",
        phonePlaceholder: "Enter your phone number",
        subjectLabel: "Subject",
        subjectPlaceholder: "What is this regarding?",
        messageLabel: "Your Message",
        messagePlaceholder: "Tell us about your case...",
        send: "Send Message",
        sending: "Sending...",
      },
      hours: {
        title: "Office Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      emergency: {
        title: "Emergency Contact",
        description: "Available 24/7 for urgent legal matters",
        callFree: "Get Legal Advice",
      },
      addressCard: {
        title: "Our Offices",
        main: "Main Office",
        mainAddress: "Baghdad, Al-Mansour, Clock Restaurant Street",
        branch: "Branch Office",
        branchAddress: "Baghdad, Al-Mansour, Clock Restaurant Street",
      },
      appointment: {
        title: "Book an Appointment",
        subtitle: "Schedule a consultation with one of our attorneys.",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email Address",
        emailPlaceholder: "Enter your email",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        areaLabel: "Practice Area",
        areaPlaceholder: "Select practice area",
        messageLabel: "Additional Notes",
        messagePlaceholder: "Any additional information...",
        submit: "Book Appointment",
        submitting: "Booking...",
        times: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
        ],
        areas: [
          "Criminal Defense",
          "Personal Injury",
          "Family Law",
          "Business Law",
          "Immigration",
          "Real Estate",
        ],
      },
    },
    // Footer
    footer: {
      hereToHelp: "We Are Here to Help",
      freeConsultation: "Legal Consultation • Available 24/7",
      newsletter: {
        title: "Subscribe to Our Newsletter",
        description:
          "Stay updated with the latest legal news, insights, and firm updates.",
        placeholder: "Enter your email",
        subscribe: "Subscribe",
        go: "Go",
      },
      workingHours: {
        title: "Working Hours",
        weekdays: "Monday to Friday",
        weekdayHours: "9:00 to 16:30",
        saturday: "Saturday",
        saturdayHours: "9:00 to 15:30",
        sunday: "Sunday",
        sundayHours: "Only Emergency Calls",
      },
      contact: {
        title: "Contact",
        addressLabel: "Address:",
        address: "Baghdad, Al-Mansour, Clock Restaurant Street",
        telLabel: "Tel:",
        phone: "07802233000",
        emailLabel: "Email:",
        email: "info@baraa-alsamraie.com",
      },
      quickLinks: {
        title: "Quick Links",
        about: "About Us",
        faq: "FAQ",
        practiceArea: "Practice Areas",
        contact: "Contact",
      },
      copyright: "© 2026 E2NEXT. All rights reserved.",
      backToTop: "Back to Top",
    },
    // Cookie Banner
    cookie: {
      title: "We Value Your Privacy",
      description:
        'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: "Accept All",
      decline: "Decline",
    },
    // Live Chat
    chat: {
      title: "Live Chat",
      openChat: "Open chat",
      closeChat: "Close chat",
      header: "Legal Support Chat",
      subtitle: "How can we help you today?",
      placeholder: "Type your message...",
      send: "Send",
      offlineTitle: "We're Offline",
      offlineMessage: "Leave us a message and we'll get back to you soon.",
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: "Free Case Evaluation",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      caseLabel: "Case Type",
      submit: "Get Evaluation",
      success: "Thank you! We'll review your case and contact you shortly.",
    },
    // Common
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      home: "Home",
      phone: "Phone",
      email: "Email",
      address: "Address",
      send: "Send",
      submit: "Submit",
      close: "Close",
      loading: "Loading...",
      search: "Search",
      share: "Share",
      shareThis: "Share this practice area:",
      copyLink: "Copy Link",
      copied: "Copied!",
    },
  },

  ar: {
    // Header
    header: {
      logo: "شركة الرماح لخدمات المحاماة",
      freeConsultation: "استشارة قانونية",
      home: "الرئيسية",
      about: "من نحن",
      practiceAreas: "مجالات الممارسة",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    // Hero
    hero: {
      badge: "احصل على استشارة قانونية",
      name: "شركة الرماح لخدمات المحاماة",
      subtitles: [
        "محامي العدالة الجنائية",
        "مستشار قانوني موثوق",
        "مدافعك في المحكمة",
      ],
      descriptions: [
        "ملتزم بتقديم تمثيل قانوني موثوق يحفظ حقوقك في كل قضية.",
        "أكثر من 12 عامًا من الخبرة في خدمة العملاء باهتمام ونزاهة والتزام مهني.",
        "عندما تحتاج إلى دعم قانوني، نكون إلى جانبك بخبرة ووضوح لحماية حقوقك.",
      ],
      contactUs: "اتصل بنا",
      callFree: "احصل عل استشارة قانونية",
    },
    // Emergency Banner
    emergency: {
      title: "خدمة قانونية طارئة على مدار الساعة",
      callFree: "احصل عل استشارة قانونية",
    },
    // Counter Stats
    counter: {
      casesWon: "شركة ومؤسسة محلية وأجنبية",
      yearsExperience: "عاماً من الخبرة",
      successRate: "شركة ومؤسسة محلية وأجنبية",
      expertLawyers: "محامون خبراء",
    },
    // Practice Areas
    practiceAreas: {
      subtitle: "مجالات الممارسة",
      title: "خبرة قانونية تفهم اعمالك",
      intro:
        "نجمع بين المعرفة القانونية وفهم السوق العراقي وبيئة الأعمال والأطر التنظيمية ذات الصلة لنقدم لعملائنا رؤية واضحة وحلولاً عملية تساعدهم على اتخاذ قرارات مدروسة وإدارة أعمالهم واستثماراتهم بكفاءة. ونعتمد في ذلك على الخبرة والبصيرة والابتكار في التعامل مع المتطلبات القانونية والمسائل الأكثر تعقيداً.",
      viewAll: "عرض جميع الأقسام",
      showMore: "عرض المزيد",
      showLess: "عرض أقل",
      items: [
        {
          title: "الاستشارات القانونية",
          desc: "استشارات قانونية متخصصة تستند إلى دراسة دقيقة للوقائع والأطر القانونية.",
          fullDescription:
            "نقدم استشارات قانونية متخصصة للأفراد والشركات والمؤسسات تستند إلى دراسة دقيقة للوقائع وفهم الأطر القانونية والتنظيمية وبيئة الأعمال بما يساعد عملاءنا على اتخاذ قرارات مدروسة واستباق المخاطر ومعالجة المسائل القانونية بكفاءة ووضوح.",
        },
        {
          title: "الشركات والأعمال التجارية",
          desc: "تأسيس الشركات وتنظيم هياكلها القانونية ودعم نموها المستمر.",
          fullDescription:
            "نتولى تأسيس وتسجيل الشركات الوطنية وتنظيم هياكلها القانونية وشؤون الشركاء والمساهمين وإعداد القرارات والتعديلات وتقديم المشورة القانونية المستمرة بما يدعم أعمالها ونموها ويحمي مصالحها.",
        },
        {
          title: "الاستثمار الأجنبي والأعمال عبر الحدود",
          desc: "مرافقة الشركات والمستثمرين الأجانب في دخول السوق العراقي بثقة.",
          fullDescription:
            "نرافق الشركات والمستثمرين الأجانب في دخول السوق العراقي ونوفر لهم المعرفة القانونية والتنظيمية اللازمة لفهم بيئة الأعمال وممارسة نشاطهم بثقة بدءاً من فتح وتسجيل فروع ومكاتب الشركات الأجنبية وهيكلة الاستثمارات وصولاً إلى التراخيص والموافقات والمتطلبات التنظيمية ودعم المعاملات والاستثمارات العابرة للحدود.",
        },
        {
          title: "النفط والغاز والطاقة",
          desc: "دعم قانوني متخصص لقطاعات النفط والغاز والطاقة وعقودها.",
          fullDescription:
            "نقدم الدعم القانوني للشركات والمستثمرين العاملين في قطاعات النفط والغاز والطاقة من خلال فهم البيئة القانونية والتنظيمية التي تحكم هذه القطاعات ومراجعة وصياغة العقود والاتفاقيات ودعم المشاريع والمعاملات التجارية والتعامل مع المتطلبات والتراخيص والجهات ذات العلاقة بما يسهم في حماية المصالح وإدارة المخاطر القانونية.",
        },
        {
          title: "العقود والصفقات التجارية",
          desc: "صياغة ومراجعة والتفاوض بشأن العقود والصفقات التجارية والاستثمارية.",
          fullDescription:
            "نقدم الدعم القانوني في إعداد وصياغة ومراجعة والتفاوض بشأن العقود والاتفاقيات المدنية والتجارية والاستثمارية ونحرص على فهم طبيعة الصفقة وأهدافها قبل صياغة إطارها القانوني بما يحقق التوازن بين حماية المصالح واستمرارية الأعمال والحد من المخاطر المحتملة.",
        },
        {
          title: "المشاريع والاستثمارات",
          desc: "مرافقة المشاريع من مراحلها الأولى وحتى استكمال تراخيصها وموافقاتها.",
          fullDescription:
            "نرافق المشاريع منذ مراحلها الأولى ونقدم المشورة بشأن هيكلتها القانونية والتعاقدية واستكمال الموافقات والتراخيص وتنظيم العلاقات بين المستثمرين والشركاء والمطورين والمتعاقدين بما يوفر أساساً قانونياً واضحاً يدعم تنفيذ المشروع واستدامته.",
        },
        {
          title: "التقاضي وتسوية المنازعات",
          desc: "تمثيل قانوني في المنازعات المدنية والتجارية والإدارية أمام المحاكم.",
          fullDescription:
            "نمثل عملاءنا في المنازعات المدنية والتجارية والإدارية والعمالية والجزائية أمام المحاكم والجهات القضائية والتحقيقية المختصة ونعتمد في إدارة النزاع على بناء استراتيجية قانونية تستند إلى دراسة الوقائع وتحليل الأدلة وتقييم المخاطر وتحديد المسار القانوني الأكثر ملاءمة لحماية حقوق ومصالح العميل.",
        },
        {
          title: "العقارات والتطوير العقاري",
          desc: "مشورة قانونية في المعاملات والمشاريع العقارية والسكنية والتجارية.",
          fullDescription:
            "نقدم المشورة القانونية في المعاملات والمشاريع العقارية والسكنية والتجارية والاستثمارية بما يشمل دراسة الملكية والتصرفات العقارية وإعداد ومراجعة عقود البيع والإيجار والاستثمار والتطوير وتنظيم العلاقات القانونية بين المستثمرين والمطورين والمتعاقدين ومتابعة الإجراءات ذات الصلة أمام الجهات المختصة.",
        },
        {
          title: "العمل والضمان الاجتماعي",
          desc: "تنظيم علاقات العمل والامتثال لمتطلبات العمل والضمان الاجتماعي.",
          fullDescription:
            "ندعم الشركات وأصحاب الأعمال في تنظيم علاقاتهم مع العاملين وإعداد ومراجعة عقود وسياسات العمل وتقديم المشورة بشأن الالتزامات القانونية والامتثال لمتطلبات العمل والضمان الاجتماعي وتمثيلهم في المنازعات والإجراءات المرتبطة بها.",
        },
        {
          title: "الإقامة وإجازات العمل وسمات الدخول",
          desc: "دعم قانوني للإقامة وإجازات العمل وسمات الدخول للكوادر الأجنبية.",
          fullDescription:
            "نقدم الدعم القانوني للشركات والمستثمرين والعاملين الأجانب في العراق بشأن متطلبات الإقامة وإجازات العمل وسمات الدخول ومتابعة الإجراءات والموافقات اللازمة أمام الجهات المختصة بما يضمن تنظيم وجود وممارسة عمل الكوادر الأجنبية وفقاً للأطر القانونية والتنظيمية النافذة.",
        },
        {
          title: "التراخيص والامتثال التنظيمي",
          desc: "استكمال التراخيص والموافقات والامتثال للأطر التنظيمية النافذة.",
          fullDescription:
            "نساعد الشركات والمستثمرين على فهم الأطر القانونية والتنظيمية التي تحكم أنشطتهم واستكمال التراخيص والموافقات والإجازات اللازمة ومتابعة الإجراءات أمام الوزارات والهيئات والجهات المختصة بما يدعم استمرارية أعمالهم ويحد من المخاطر القانونية والتنظيمية.",
        },
        {
          title: "الشؤون الضريبية والمالية",
          desc: "دعم قانوني في الشؤون الضريبية والمالية والامتثال الضريبي.",
          fullDescription:
            "نقدم الدعم القانوني في الشؤون الضريبية والمالية المرتبطة بأعمال الشركات والمستثمرين بما يشمل إجراءات التحاسب الضريبي وتنظيم الموقف الضريبي ومتابعة المعاملات والاعتراضات والمتطلبات ذات الصلة أمام الهيئة العامة للضرائب والجهات المختصة بما يعزز الامتثال ويحمي مصالح العميل.",
        },
        {
          title: "القطاع الصحي والمكاتب العلمية",
          desc: "دعم قانوني للمكاتب العلمية وشركات الأدوية والمستلزمات الطبية.",
          fullDescription:
            "نقدم الدعم القانوني للشركات والمكاتب العلمية العاملة في قطاعات الأدوية والمستلزمات والأجهزة الطبية بما يشمل إجراءات التأسيس والتسجيل والتراخيص والموافقات وتنظيم العلاقات التعاقدية والامتثال للمتطلبات القانونية والتنظيمية ومتابعة الإجراءات أمام الجهات والنقابات والمؤسسات المختصة.",
        },
        {
          title: "الملكية الفكرية وحماية العلامات التجارية",
          desc: "حماية العلامات التجارية والحقوق الفكرية وتسجيلها ومتابعة الاعتراضات.",
          fullDescription:
            "نقدم الدعم القانوني لحماية الحقوق والأصول الفكرية والتجارية لعملائنا بما يشمل تسجيل العلامات التجارية وتجديدها ومتابعة الاعتراضات والإجراءات القانونية المرتبطة بها والتصدي لحالات التعدي بما يسهم في حماية الهوية التجارية والقيمة المعنوية للأعمال.",
        },
      ],
      learnMore: "اعرف المزيد",
    },
    // How It Works
    howItWorks: {
      subtitle: "كيف تعمل",
      title: "آلية العمل وإدارة التكليفات القانونية",
      intro:
        "تعتمد شركة الرماح آلية عمل مؤسسية ومنظمة لإدارة التكليفات القانونية للشركات والمؤسسات تجمع بين التخصص القانوني والتنظيم الإداري واستخدام الأنظمة الإلكترونية الحديثة بما يضمن دقة المتابعة واستمرارية التوثيق ووضوح التواصل مع العميل في جميع مراحل العمل.",
      items: [
        {
          title: "تقديم التكليف",
          subtitle:
            "تُرسل الطلبات والاستشارات والتكليفات القانونية عبر البريد الإلكتروني المخصص مع إرفاق المستندات والمعلومات ذات الصلة بما يضمن توثيق الطلب وإحالته إلى الفريق المختص.",
        },
        {
          title: "التسجيل والتصنيف",
          subtitle:
            "يُسجل كل تكليف ضمن النظام الإلكتروني الداخلي لشركة الرماح ويُنشأ له سجل خاص يتضمن موضوعه ومستنداته وإجراءاته ومواعيده مع تصنيفه بحسب طبيعة العمل ودرجة الأولوية.",
        },
        {
          title: "المراجعة والإسناد",
          subtitle:
            "تتم مراجعة التكليف وتحديد نطاق العمل والمتطلبات القانونية ثم إسناده إلى المحامي أو فريق العمل المختص مع تحديد المسؤول المباشر عن إدارة الملف ومتابعته.",
        },
        {
          title: "التقييم وخطة العمل",
          subtitle:
            "يدرس الفريق المختص المركز القانوني والخيارات المتاحة والمخاطر والمتطلبات ذات الصلة ويحدد مسار العمل والإجراءات اللازمة وفق طبيعة التكليف وأهداف العميل.",
        },
        {
          title: "التنفيذ والمتابعة",
          subtitle:
            "تتم المباشرة بالإجراءات القانونية والقضائية والإدارية المطلوبة مع متابعة المواعيد والمخاطبات والمستجدات وتحديث سجل الملف إلكترونيا بصورة مستمرة.",
        },
        {
          title: "التقارير والتواصل",
          subtitle:
            "تُعد تقارير دورية عن سير العمل تتضمن الإجراءات المنجزة والموقف الحالي لكل تكليف والخطوات التالية والملاحظات الجوهرية ويتم إرسالها إلى العميل عبر البريد الإلكتروني المعتمد بما يضمن وضوح سير العمل واستمرارية التواصل.",
        },
        {
          title: "التوثيق والأرشفة",
          subtitle:
            "تُحفظ المستندات والمراسلات والتقارير وسجلات الإجراءات إلكترونيا ضمن النظام الداخلي لشركة الرماح وفق تنظيم خاص بكل عميل وملف بما يضمن سهولة الرجوع إلى تاريخ التكليف ومتابعة تطوراته.",
        },
        {
          title: "استكمال التكليف",
          subtitle:
            "عند استكمال نطاق العمل يتم توثيق النتيجة والإجراءات المنجزة وإرسال التقرير أو المخرجات النهائية إلى العميل مع بيان أي إجراءات أو متطلبات لاحقة عند الاقتضاء.",
        },
      ],
    },
    // Case Types
    cases: {
      subtitle: "دراسات الحالة",
      title: "قضايا مثل قضيتك",
      items: [
        { title: "غسيل الأموال", category: "قانون جنائي" },
        { title: "نزاعات الملكية", category: "القانون المدني" },
        { title: "دعوى جنائية", category: "قضايا جنائية" },
        { title: "قضايا النزاهة", category: "قانون النزاهة" },
        {
          title: "التمثيل القانوني للشركات أمام المحاكم",
          category: "قانون الشركات",
        },
      ],
      viewCase: "عرض القضية",
    },
    // Free Case Evaluation
    freeEvaluation: {
      subtitle: "احصل على استشارة قانونية ",
      title: "أرسل طلبك واحصل على استشارة ",
      description: "سنراجع قضيتك ونعود إليك خلال 24 ساعة بتقييم قانوني شامل.",
      submitRequest: "أرسل طلبك",
    },
    // Attorney Quote
    attorneyQuote: {
      quote:
        "العدالة ليست مفهوماً سلبياً — بل تتطلب مناصرين متفانين على استعداد للقتال بلا كلل من أجل حقوق كل فرد، بغض النظر عن الظروف.",
      name: "شركة الرماح لخدمات المحاماة والاستشارات القانونية ",
      title: "شريك أول، محامي العدالة الجنائية",
    },
    // Testimonials
    testimonials: {
      subtitle: "شهادات العملاء",
      title: "ماذا يقول عملاؤنا",
      viewAll: "عرض جميع التقييمات",
      clientReviews: "تقييمات العملاء",
      reviewsVerified: "تقييمات موثقة على جوجل",
      onGoogle: "على تقييمات جوجل",
    },
    // Practice List
    practiceList: {
      title: "مجالات الممارسة",
      subtitle: "خبراتنا",
      items: [
        "قانون المنظمات التجارية",
        "القانون المدني أو العام",
        "قانون الاتصالات",
        "القانون الدستوري",
        "قانون الممتلكات الثقافية",
        "قانون الاندماج والاستحواذ",
        "قانون الأمريكيين الأصليين",
        "دعاوى مسؤولية المنتج",
        "قانون العقارات",
        "قانون الفحش",
        "قانون الجنسية",
        "القانون الإجرائي",
        "قانون حقوق الإنسان الدولي",
        "قانون الصحة",
        "قانون الهجرة",
        "قانون البيئة",
        "القانون الإلكتروني",
        "قانون حماية المستهلك",
      ],
    },
    // Immigration Section
    immigration: {
      title: "قانون الهجرة",
      description:
        "يساعد محامو الهجرة لدينا في طلبات التأشيرات والبطاقات الخضراء والجنسية والدفاع عن الترحيل وطلبات اللجوء والالتماسات القائمة على الأسرة. نقدم إرشادات شخصية في كل خطوة من عملية الهجرة.",
      learnMore: "اعرف المزيد",
    },
    // Verdicts
    verdicts: {
      subtitle: "نتائجنا",
      title: "الأحكام والتسويات",
      items: [
        {
          caseType: "إصابة شخصية",
          amount: "2.5 مليون $",
          description:
            "حادث متعدد المركبات أدى إلى إعاقة دائمة. حصلنا على تعويض أقصى عن النفقات الطاسية والأجور المفقودة.",
          outcome: "تسوية",
        },
        {
          caseType: "إهمال طبي",
          amount: "4.8 مليون $",
          description:
            "خطأ جراحي تسبب في مضاعفات شديدة. حققنا أحد أكبر الأحكام في المحافظة للإهمال الطبي.",
          outcome: "حكم",
        },
        {
          caseType: "حادث عمل",
          amount: "1.9 مليون $",
          description:
            "سقوط في موقع بناء بسبب انتهاكات السلامة. استردنا التعويضات الكاملة بما في ذلك الرعاية الطبية المستقبلية.",
          outcome: "تسوية",
        },
        {
          caseType: "وفاة خطأ",
          amount: "6.2 مليون $",
          description:
            "حادث شحن مميت بسبب إهمال السائق. حصلنا على العدالة للعائلة مع تعويضات وفاة خطأ كبيرة.",
          outcome: "حكم",
        },
        {
          caseType: "مسؤولية المنتج",
          amount: "3.1 مليون $",
          description:
            "منتج معيب تسبب في إصابة خطيرة. حملنا الشركة المصنعة المسؤولية بتسوية كبيرة.",
          outcome: "تسوية",
        },
        {
          caseType: "نزاع تجاري",
          amount: "5.5 مليون $",
          description:
            "خرق عقد يهدد بقاء الشركة. استعدنا بنجاح التعويضات وحماية المصالح التجارية.",
          outcome: "حكم",
        },
      ],
      settlement: "تسوية",
      verdict: "حكم",
    },
    // Trust Badges
    trustBadges: {
      title: "لماذا تثق بنا",
      subtitle: "مؤهلاتنا",
      items: [
        {
          title: "مرخص ومؤمن",
          desc: "مرخص بالكامل لممارسة القانون مع تأمين شامل للمسؤولية المهنية لحمايتك.",
        },
        {
          title: "حائز على جوائز",
          desc: "معترف به من قبل المنظمات القانونية الوطنية للتميز في الدفاع عن العملاء ونتائج المحكمة.",
        },
        {
          title: "متاح على مدار الساعة",
          desc: "محامونا متاحون على مدار الساعة لحالات الطوارئ والمسائل القانونية العاجلة.",
        },
        {
          title: "استشارة قانونية",
          desc: "ابدأ باستشارة بدون التزام. نراجع قضيتك ونشرح خياراتك بدون تكلفة.",
        },
      ],
    },
    // How We Can Help
    howWeCanHelp: {
      title: "أسئلة ذات صلة",
      subtitle: "إجابات قانونية",
      items: [
        {
          title:
            "متى تكون الفرصة الاستثمارية في العراق فرصة تستحق الدخول، ومتى يكون عدم الدخول هو القرار الأفضل؟",
          description:
            "ليس كل مشروع متاح فرصة مناسبة لكل مستثمر. قيمة القرار تبدأ من معرفة ما إذا كان النشاط والهيكل القانوني والمتطلبات التنظيمية والعقود والالتزامات والمخاطر تتوافق فعلاً مع أهداف المستثمر وقدرته على إدارتها.\n\nدور شركة الرماح ليس دفع العميل نحو الاستثمار، بل مساعدته على رؤية الصورة القانونية بوضوح كافٍ لاتخاذ قراره بثقة.",
        },
        {
          title: "هل تعرف ما الذي تشتريه فعلاً عندما تشتري شركة؟",
          description:
            "شراء الأسهم لا يعني شراء الأصول والفرص فقط، بل قد يعني الدخول في تاريخ قانوني كامل من العقود والالتزامات والديون والضمانات والنزاعات والمخاطر التي نشأت قبل وصول المستثمر.\n\nلذلك لا تسأل شركة الرماح فقط عن قيمة ما سيملكه العميل بعد الصفقة، بل تبحث أيضاً عمّا قد ينتقل إليه معها من مسؤوليات.\n\nأحياناً أخطر ما تشتريه في الصفقة هو الشيء الذي لم يظهر في سعرها.",
        },
        {
          title:
            "إذا كان القرار يحتاج توقيع شخص واحد، فلماذا قد يحتاج حماية شركة كاملة؟",
          description:
            "لأن توقيع المدير قد يرتب التزاماً على الشركة يمتد سنوات ويتجاوز مدة وجوده في منصبه.\n\nلهذا يجب أن تتناسب صلاحية اتخاذ القرار مع حجمه وآثاره، وأن تُحاط القرارات الجوهرية بمستويات مناسبة من الاعتماد والتوثيق.\n\nقد يستغرق التوقيع ثانية، لكن أثره قد يعيش أطول ممن وقّعه.",
        },
        {
          title:
            "إذا وجدت فرصة استثمارية ممتازة في العراق، فكيف تعرف أن الوقت المناسب لدخولها هو الآن؟",
          description:
            "الفرصة لا تتحدد بجاذبية القطاع وحدها. توقيت الدخول يرتبط بجاهزية المستثمر والهيكل القانوني والتراخيص والعقود والتمويل والشركاء والقدرة على بدء التشغيل ضمن المسار المطلوب.\n\nتساعد شركة الرماح المستثمر على فهم المتطلبات القانونية والتنظيمية التي تسبق الدخول، حتى يكون توقيت القرار مبنياً على الجاهزية لا على جاذبية الفرصة وحدها.\n\nفالفرصة الجيدة في التوقيت الخطأ قد تصبح قراراً مكلفاً.",
        },
        {
          title:
            "هل تعرف ما الذي سيجعل المستثمر القادم يثق بشركتك قبل أن يلتقي بك؟",
          description:
            "وضوح الملكية، وانتظام السجلات والعقود والتراخيص والحوكمة والبيانات القانونية، يعطي المستثمر صورة عن مستوى المؤسسة قبل أن تبدأ المفاوضات الجدية.\n\nالثقة في الأعمال لا تُبنى بالكلام وحده، بل بما تستطيع الشركة إثباته عندما تُفحص.",
        },
      ],
    },
    // Client Logos
    clientLogos: {
      title: "موثوق من قبل المؤسسات الرائدة",
      items: [
        "أبيكس القابضة",
        "سترلينغ كورب",
        "مجموعة الحارس",
        "ميريديان تراست",
        "باسيفيك فينشرز",
        "أطلس كابيتال",
        "شركاء القمة",
        "فانغارد القانونية",
        "بيناكيل للمالية",
        "آيرونكلاد",
      ],
    },
    // CTA Section
    cta: {
      title: "هل تحتاج مساعدة قانونية؟",
      description: "اتصل بنا اليوم للحصول على استشارة قانونية.",
      contactUs: "اتصل بنا الآن",
      callUs: "اتصل بنا",
    },
    // About Page
    about: {
      hero: {
        title: "من نحن",
        breadcrumb: { home: "الرئيسية", current: "من نحن" },
      },
      vision: {
        subtitle: "شراكات تتجاوز الحدود",
        title: "",
        description:
          "نؤمن أن كل شخص يستحق الوصول إلى تمثيل قانوني عالي الجودة، بغض النظر عن خلفيته أو ظروفه. رؤيتنا هي خلق مجتمع أكثر عدالة حيث يعمل القانون كدرع للضعفاء، وليس سلاحاً للأقوياء.",
        stats: [
          { label: "رضا العملاء", value: 95 },
          { label: "نسبة نجاح القضايا", value: 98 },
          { label: "سنوات الخبرة", value: 25 },
        ],
      },
      quote: {
        text: "القانون ليس مجرد مجموعة من القواعد — إنه الأساس الذي نبني عليه مجتمعاً عادلاً ومنصفاً.",
        author: "شركة الرماح لخدمات المحاماة والاستشارات القانونية ، الشريك المؤسس",
      },
      mission: {
        subtitle: "مهمتنا",
        title: "",
        description:
          "مهمتنا هي تقديم تمثيل قانوني استثنائي يحدث فرقاً حقيقياً في حياة عملائنا. نحن ملتزمون بالتمسك بأعلى معايير الأخلاقيات المهنية مع تحقيق نتائج تفوق التوقعات.",
        services: [
          "إصابة شخصية",
          "قانون الأسرة",
          "الدفاع الجنائي",
          "قانون الأعمال",
          "الهجرة",
          "العقارات",
        ],
      },
      clients: {
        subtitle: "عملاؤنا",
        title: "موثوق من قبل المؤسسات الرائدة",
        items: [
          "أبيكس القابضة",
          "سترلينغ كورب",
          "مجموعة الحارس",
          "ميريديان تراست",
          "باسيفيك فينشرز",
          "أطلس كابيتال",
        ],
      },
      team: {
        subtitle: "فريقنا",
        title: "أعضاء الفريق الخبراء",
        members: [
          {
            name: "أليكس تومسون",
            role: "شريك أول",
            specialties: "القانون الجنائي، المحاكمات",
            bio: "أليكس لديه أكثر من 20 عاماً من الخبرة في الدفاع الجنائي ومثل بنجاح آلاف العملاء في المحاكم الفيدرالية والولائية.",
          },
          {
            name: "سارة ميتشل",
            role: "محامية قانون الأسرة",
            specialties: "قانون الأسرة، الوساطة",
            bio: "سارة متخصصة في مسائل قانون الأسرة المعقدة، بما في ذلك حالات الطلاق عالية الأصول ونزاعات الحضانة.",
          },
          {
            name: "ديفيد تشن",
            role: "مستشار الشركات",
            specialties: "قانون الأعمال، الاندماج والاستحواذ",
            bio: "ديفيد يستشير الشركات من جميع الأحجام حول الحوكمة المؤسسية والاندماجات والاستحواذ والامتثال التنظيمي.",
          },
        ],
        viewProfile: "عرض الملف",
        closeProfile: "إغلاق الملف",
        education: "التعليم",
        credentials: "الشهادات",
        practiceAreasLabel: "مجالات الممارسة",
        contactInfo: "معلومات الاتصال",
      },
      legalAdvice: {
        subtitle: "احصل على مشورة",
        title: "احصل على مشورتك القانونية",
        items: [
          {
            title: "استشارة قانونية",
            desc: "حدد موعداً لاستشارة فردية مع محامينا ذوي الخبرة.",
          },
          {
            title: "تقييم القضية",
            desc: "احصل على تقييم شامل لقضيتك مع خطوات واضحة تالية.",
          },
          {
            title: "مراجعة المستندات",
            desc: "دع فريقنا الخبير يراجع مستنداتك القانونية.",
          },
          {
            title: "التمثيل في المحكمة",
            desc: "ثق بمحامينا لتمثيلك بفعالية في المحكمة.",
          },
          {
            title: "تفاوض التسوية",
            desc: "دعنا نتفاوض على أفضل تسوية ممكنة لقضيتك.",
          },
          {
            title: "مساعدة الاستئناف",
            desc: "احصل على مساعدة في تقديم ومتابعة الاستئنافات القانونية بفعالية.",
          },
        ],
      },
      freeEvaluation: {
        title: "احصل على استشارة قانونية ",
        description:
          "احصل على مشورة قانونية متخصصة بدون تكلفة. سيقوم محامونا بمراجعة قضيتك وتقديم تقييم شامل.",
        contactUs: "اتصل بنا",
        callFree: "احصل عل استشارة قانونية",
      },
    },
    // Practice Areas Page
    practiceAreasPage: {
      hero: {
        title: "مجالات الممارسة",
        breadcrumb: { home: "الرئيسية", current: "مجالات الممارسة" },
      },
      intro:
        "مع أكثر من 25 عاماً من الخبرة، يتخصص محامونا في مجموعة واسعة من مجالات الممارسة القانونية. نقدم تمثيلاً عدوانياً ومتفانياً لحماية حقوقك وتحقيق أفضل النتائج الممكنة.",
      subtitle: "ماذا نفعل",
      title: "مجالات ممارستنا",
      viewMore: "اعرف المزيد",
      whyChoose: {
        subtitle: "لماذا تختارنا",
        title: "لماذا تختار شركتنا",
        items: [
          {
            title: "فريق ذو خبرة",
            desc: "أكثر من 25 عاماً من الخبرة القانونية المشتركة عبر مجالات ممارسة متعددة.",
          },
          {
            title: "نتائج مثبتة",
            desc: "نسبة نجاح 98% مع ملايين المستردة لعملائنا.",
          },
          {
            title: "اهتمام شخصي",
            desc: "كل قضية تحظى باهتمام مخصص من محامٍ أول.",
          },
          {
            title: "بدون رسوم بدون فوز",
            desc: "لا تدفع شيئاً ما لم نفز بقضيتك. استشارة أولية مجانية.",
          },
        ],
      },
      moreAreas: {
        title: "مجالات ممارسة إضافية",
        description:
          "بالإضافة إلى مجالات ممارستنا الأساسية، نقدم أيضاً خدمات قانونية في المجالات التالية:",
        items: [
          "قانون العمل",
          "قانون العقارات",
          "القانون الضريبي",
          "قانون الهجرة",
          "قانون البيئة",
          "الملكية الفكرية",
          "قانون الإفلاس",
          "تخطيط التركة",
          "الحقوق المدنية",
        ],
      },
      cta: {
        title: "هل تحتاج مساعدة قانونية؟",
        description: "حدد موعداً لاستشارة قانونية مع أحد محامينا ذوي الخبرة.",
        button: "اتصل بنا الآن",
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      contact: {
        title: "معلومات الاتصال",
        address: "بغداد, المنصور, شارع مطعم الساعة",
        phone: "07802233000",
        email: "info@baraa-alsamraie.com",
      },
    },
    // FAQ Page
    faqPage: {
      hero: {
        title: "الأسئلة الشائعة",
        breadcrumb: { home: "الرئيسية", current: "الأسئلة الشائعة" },
      },
      askForm: {
        title: "اسألنا سؤالاً",
        subtitle: "احصل على إجابات لأسئلتك القانونية من محامينا ذوي الخبرة.",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        departmentLabel: "القسم",
        departmentPlaceholder: "اختر القسم",
        questionLabel: "سؤالك",
        questionPlaceholder: "اكتب سؤالك هنا...",
        submit: "أرسل السؤال",
        departments: [
          "عام",
          "استشارة قانونية",
          "الدعاوى القضائية",
          "تسجيل الشركات",
          "العقود",
          "القضايا الجنائية",
          "النزاعات العقارية",
        ],
      },
      general: {
        subtitle: "عام",
        title: "أسئلة عامة",
        items: [
          {
            q: "ما هي الخدمات القانونية التي يقدمها مكتب الدكتور براء عبد الحكيم خليل؟",
            a: "يقدم المكتب الاستشارات القانونية، والدعاوى القضائية، وتمثيل الشركات والأفراد أمام المحاكم، وقضايا القانون التجاري، والدفاع الجنائي، وتسوية النزاعات، وحقوق الملكية الفكرية، وتسجيل الشركات، ومراجعة العقود، والنزاعات العقارية.",
          },
          {
            q: "كيف يمكنني حجز موعد مع المحامي؟",
            a: "يمكنك حجز موعد من خلال نموذج المواعيد في الصفحة الرئيسية أو التواصل مع المكتب هاتفياً. يرجى ذكر الاسم ومعلومات الاتصال والوقت المناسب وشرح مختصر للموضوع القانوني.",
          },
          {
            q: "ماذا يجب أن أحضر لاجتماعي الأول؟",
            a: "يفضل إحضار الهوية وأي مستندات مرتبطة بالموضوع، مثل أوراق المحكمة، العقود، مستندات الشركة، المراسلات، قيود العقار، التبليغات الرسمية، محاضر الشرطة، أو القرارات السابقة.",
          },
          {
            q: "هل يمكن مراجعة المستندات قبل البدء بالقضية؟",
            a: "نعم. مراجعة المستندات خطوة أساسية قبل اتخاذ أي إجراء. يمكن للمحامي فحص العقود، والتبليغات، وأوراق الدعوى، وملفات الشركات، والأدلة لتوضيح الموقف القانوني واقتراح الإجراء المناسب.",
          },
          {
            q: "هل يمثل المكتب الشركات والمنظمات؟",
            a: "نعم. يساعد المكتب الشركات والمنظمات في التسجيل، والامتثال القانوني، والعقود، والنزاعات، والتمثيل أمام المحاكم، وإجراءات إجازات الاستثمار، والاستشارات القانونية المستمرة.",
          },
          {
            q: "أين يقع المكتب وما هي أوقات العمل؟",
            a: "يقع المكتب الرئيسي في بغداد، المنصور. أوقات العمل من الاثنين إلى الجمعة من 9:00 إلى 16:30، ويوم السبت من 9:00 إلى 15:30. أما يوم الأحد فهو مخصص للاتصالات الطارئة.",
          },
        ],
      },
      legal: {
        subtitle: "قانوني",
        title: "أسئلة قانونية",
        items: [
          {
            q: "ماذا أفعل إذا وصلتني دعوى أو تبليغ من المحكمة؟",
            a: "لا تهمل التبليغ. تواصل مع محامٍ بسرعة، واحتفظ بالأوراق الأصلية، وسجل تاريخ الاستلام، ولا توقع أو تقدم أي جواب قبل مراجعة المستندات قانونياً.",
          },
          {
            q: "هل يتولى المكتب القضايا الجنائية والتحقيقات؟",
            a: "نعم. يتعامل المكتب مع قضايا الدفاع الجنائي والقانون الجنائي، بما في ذلك المشورة قبل الإدلاء بالأقوال، ومراجعة أوراق التحقيق، وإعداد خطة الدفاع، والتمثيل أمام الجهات المختصة والمحاكم.",
          },
          {
            q: "كيف يتم التعامل مع النزاعات العقارية؟",
            a: "تبدأ النزاعات العقارية عادة بمراجعة سندات الملكية، والعقود، والتبليغات، والخرائط، وسجلات الدفع، ووثائق الحيازة. بعد ذلك يحدد المحامي هل الأنسب التفاوض أو الشكوى الرسمية أو إقامة الدعوى.",
          },
          {
            q: "هل يمكن صياغة أو مراجعة العقود التجارية؟",
            a: "نعم. يقوم المكتب بمراجعة وصياغة العقود التجارية، واتفاقيات الشراكة، وعقود الخدمات، ومحاضر التسوية، والمراسلات القانونية المرتبطة بها لتقليل المخاطر وتوضيح الالتزامات قبل التوقيع.",
          },
          {
            q: "هل يساعد المكتب في تسجيل الشركات أو المنظمات؟",
            a: "نعم. يساعد المكتب في تسجيل الشركات المحلية والأجنبية، وتسجيل المنظمات، وتجهيز المتطلبات القانونية، ومتابعة الإجراءات لدى الجهات الرسمية المختصة.",
          },
          {
            q: "ما هي الخطوة الأولى في نزاع بين شركاء أو شركات؟",
            a: "الخطوة الأولى هي مراجعة الاتفاق، والمراسلات، والسجلات المالية، والأدلة التي تثبت التزامات كل طرف. بعد ذلك يمكن للمحامي اقتراح التفاوض، أو الإنذار الرسمي، أو الوساطة، أو التقاضي.",
          },
        ],
      },
      search: {
        placeholder: "ابحث في الأسئلة...",
        noResults: "لم يتم العثور على نتائج",
        clearSearch: "مسح",
      },
      stillHaveQuestions: {
        title: "لا تزال لديك أسئلة؟",
        description: "فريقنا مستعد للمساعدة. اتصل بنا للحصول على استشارة.",
        contactUs: "اتصل بنا للمساعدة",
        callFree: "احصل عل استشارة قانونية",
      },
      feedback: {
        helpful: "مفيد",
        notHelpful: "غير مفيد",
        thanksPositive: "شكراً لملاحظاتك!",
        thanksNegative: "سنعمل على تحسين هذه الإجابة.",
      },
    },
    // Blog Page
    blogPage: {
      hero: {
        title: "المدونة والأخبار",
        breadcrumb: { home: "الرئيسية", current: "المدونة" },
      },
      featured: "مميز",
      search: {
        placeholder: "ابحث في المقالات...",
        noResults: "لم يتم العثور على مقالات تطابق بحثك.",
        clearSearch: "مسح",
      },
      recentPosts: "المقالات الأخيرة",
      categories: "التصنيفات",
      tags: "الوسوم",
      workingHours: "ساعات العمل",
      posts: [
        {
          title: "فهم حقوقك: دليل الدفاع الجنائي",
          excerpt:
            "تعرف على حقوقك الدستورية عند مواجهة تهم جنائية وكيف يمكن للمحامي ذوي الخبرة المساعدة في حمايتها.",
          category: "القانون الجنائي",
          date: "15 يناير 2026",
          author: "شركة الرماح لخدمات المحاماة والاستشارات القانونية ",
          readTime: "5 دقائق قراءة",
          content:
            "عند مواجهة تهم جنائية، فهم حقوقك الدستورية هو الخطوة الأولى والأكثر أهمية في حماية نفسك. يوفر دستور الولايات المتحدة عدة حمايات أساسية تنطبق على كل شخص متهم بجريمة.\n\n## حقك في الصمت\nيحميك التعديل الخامس من الإجبار على أن تكون شاهداً ضد نفسك. مارس هذا الحق بأدب ولكن بحزم — ببساطة اذكر أنك ترغب في التحدث مع محامٍ قبل الإجابة على أي أسئلة.\n\n## حقك في التمثيل القانوني\nيضمن التعديل السادس حقك في وجود محامٍ أثناء أي استجواب. إذا لم تستطع تحمل تكاليف محامٍ، سيتم تعيين واحد لك.\n\n## حماية حقوقك\nإذا كنت أو أحد أحبائك يواجه تهم جنائية، من الضروري استشارة محامي دفاع جنائي ذي خبرة في أقرب وقت ممكن.",
        },
        {
          title: "تأثير التشريعات الأخيرة على أصحاب الأعمال",
          excerpt:
            "التغييرات التنظيمية الجديدة تؤثر على الشركات في جميع أنحاء البلاد. إليك ما تحتاج لمعرفته.",
          category: "قانون الأعمال",
          date: "10 يناير 2026",
          author: "ديفيد تشن",
          readTime: "7 دقائق قراءة",
          content:
            "أدخلت التغييرات التشريعية الأخيرة متطلبات امتثال جديدة تؤثر على الشركات من جميع الأحجام. فهم هذه التغييرات أمر بالغ الأهمية لتجنب العقوبات والحفاظ على عمليات سلسة.\n\n## تغييرات رئيسية في الامتثال المؤسسي\nتتطلب اللوائح الجديدة من الشركات تنفيذ برامج امتثال أكثر قوة.\n\n## تحديثات قانون العمل\nتشمل التغييرات الكبيرة في قانون العمل متطلبات جديدة لسلامة مكان العمل.\n\n## اتخاذ إجراء\nلا تنتظر حتى تتلقى إشعار عدم الامتثال. المراجعة الاستباقية لممارساتك التجارية الآن يمكن أن توفر وقتاً ونفقات كبيرة.",
        },
        {
          title: "قانون الأسرة: التنقل في نزاعات حضانة الأطفال",
          excerpt:
            "حضانة الأطفال يمكن أن تكون واحدة من أكثر جوانب قانون الأسرة تحدياً عاطفياً.",
          category: "قانون الأسرة",
          date: "5 يناير 2026",
          author: "سارة ميتشل",
          readTime: "6 دقائق قراءة",
          content:
            'نزاعات حضانة الأطفال هي من أصعب المسائل القانونية عاطفياً التي تواجهها الأسر. فهم الإطار القانوني والعملية يمكن أن يساعدك على التنقل في هذا الوقت الصعب بشكل أكثر فعالية.\n\n## أنواع الحضانة\nتميز المحاكم بين الحضانة القانونية والحضانة الجسدية.\n\n## معيار المصلحة الفضلى\nتتخذ محاكم الأسرة قرارات الحضانة بناءً على معيار "مصلحة الطفل الفضلى".\n\n## الحصول على المساعدة\nإذا كنت تواجه نزاع حضانة، وجود محامي قانون أسرة ذي خبرة بجانبك يمكن أن يحدث فرقاً كبيراً.',
        },
        {
          title: "إصابة شخصية: ماذا تفعل بعد حادث",
          excerpt:
            "معرفة الخطوات الصحيحة فوراً بعد الحادث يمكن أن تؤثر بشكل كبير على قدرتك على استرداد التعويض.",
          category: "إصابة شخصية",
          date: "28 ديسمبر 2025",
          author: "أليكس تومسون",
          readTime: "4 دقائق قراءة",
          content:
            "اللحظات والأيام التي تلي الحادث حاسمة لحماية صحتك وحقك القانوني في التعويض.\n\n## الخطوة 1: اطلب الرعاية الطبية\nصحتك هي الأولوية القصوى. حتى لو تعتقد أن إصاباتك طفيفة، اطلب تقييماً طبياً فوراً.\n\n## الخطوة 2: وثق كل شيء\nالتقط صوراً لموقع الحادث وإصاباتك وأي أضرار في الممتلكات.\n\n## الخطوة 3: اتصل بمحامٍ\nقبل قبول أي عرض تسوية أو توقيع أي مستندات من شركة التأمين، استشر محامي إصابة شخصية.",
        },
      ],
      categoriesList: [
        { name: "القانون الجنائي", count: 12 },
        { name: "قانون الأعمال", count: 8 },
        { name: "قانون الأسرة", count: 6 },
        { name: "إصابة شخصية", count: 10 },
        { name: "الهجرة", count: 4 },
      ],
      tagsList: [
        "جنائي",
        "أعمال",
        "أسرة",
        "إصابة",
        "دفاع",
        "حقوق",
        "قانوني",
        "محكمة",
        "تعويض",
      ],
      shareArticle: "شارك هذا المقال",
      copyLink: "نسخ الرابط",
      copied: "تم النسخ!",
    },
    // Contact Page
    contactPage: {
      hero: {
        title: "اتصل بنا",
        breadcrumb: { home: "الرئيسية", current: "اتصل بنا" },
      },
      info: {
        phone: { title: "الهاتف", number: "07802233000" },
        email: { title: "البريد الإلكتروني", address: "info@yoursite.com" },
        address: { title: "العنوان", full: "بغداد, المنصور, شارع مطعم الساعة" },
      },
      form: {
        title: "أرسل لنا رسالة",
        nameLabel: "اسمك",
        namePlaceholder: "أدخل اسمك الكامل",
        emailLabel: "بريدك الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "رقم هاتفك",
        phonePlaceholder: "أدخل رقم هاتفك",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "بخصوص ماذا؟",
        messageLabel: "رسالتك",
        messagePlaceholder: "أخبرنا عن قضيتك...",
        send: "أرسل الرسالة",
        sending: "جاري الإرسال...",
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      emergency: {
        title: "اتصال الطوارئ",
        description: "متاح على مدار الساعة للمسائل القانونية العاجلة",
        callFree: "احصل عل استشارة قانونية",
      },
      addressCard: {
        title: "مكاتبنا",
        main: "المكتب الرئيسي",
        mainAddress: "بغداد, المنصور, شارع مطعم الساعة",
        branch: "المكتب الفرعي",
        branchAddress: "بغداد, المنصور, شارع مطعم الساعة",
      },
      appointment: {
        title: "احجز موعداً",
        subtitle: "حدد موعداً لاستشارة مع أحد محامينا.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "أدخل اسمك",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "أدخل رقم هاتفك",
        dateLabel: "التاريخ المفضل",
        timeLabel: "الوقت المفضل",
        areaLabel: "مجال الممارسة",
        areaPlaceholder: "اختر مجال الممارسة",
        messageLabel: "ملاحظات إضافية",
        messagePlaceholder: "أي معلومات إضافية...",
        submit: "احجز الموعد",
        submitting: "جاري الحجز...",
        times: [
          "9:00 صباحاً",
          "10:00 صباحاً",
          "11:00 صباحاً",
          "1:00 مساءً",
          "2:00 مساءً",
          "3:00 مساءً",
          "4:00 مساءً",
        ],
        areas: [
          "الدفاع الجنائي",
          "إصابة شخصية",
          "قانون الأسرة",
          "قانون الأعمال",
          "الهجرة",
          "العقارات",
        ],
      },
    },
    // Footer
    footer: {
      hereToHelp: "نحن هنا للمساعدة",
      freeConsultation: "استشارة قانونية • متاح على مدار الساعة",
      newsletter: {
        title: "اشترك في نشرتنا الإخبارية",
        description:
          "ابق على اطلاع بأحدث الأخبار القانونية والرؤى وتحديثات الشركة.",
        placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        go: "اذهب",
      },
      workingHours: {
        title: "ساعات العمل",
        weekdays: "الاثنين إلى الجمعة",
        weekdayHours: "9:00 إلى 16:30",
        saturday: "السبت",
        saturdayHours: "9:00 إلى 15:30",
        sunday: "الأحد",
        sundayHours: "مكالمات الطوارئ فقط",
      },
      contact: {
        title: "اتصل",
        addressLabel: "العنوان:",
        address: "بغداد, المنصور, شارع مطعم الساعة",
        telLabel: "هاتف:",
        phone: "07802233000",
        emailLabel: "بريد إلكتروني:",
        email: "info@baraa-alsamraie.com",
      },
      quickLinks: {
        title: "روابط سريعة",
        about: "من نحن",
        faq: "الأسئلة الشائعة",
        practiceArea: "مجال الممارسة",
        contact: "اتصل بنا",
      },
      copyright: "حقوق النشر 2026 موضوع القانون. جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
    // Cookie Banner
    cookie: {
      title: "نحن نقدر خصوصيتك",
      description:
        'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح لديك وتقديم محتوى مخصص وتحليل حركة المرور لدينا. بالنقر على "قبول الكل"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
      acceptAll: "قبول الكل",
      decline: "رفض",
    },
    // Live Chat
    chat: {
      title: "دردشة مباشرة",
      openChat: "فتح الدردشة",
      closeChat: "إغلاق الدردشة",
      header: "دردشة الدعم القانوني",
      subtitle: "كيف يمكننا مساعدتك اليوم؟",
      placeholder: "اكتب رسالتك...",
      send: "أرسل",
      offlineTitle: "نحن غير متصلين",
      offlineMessage: "اترك لنا رسالة وسنعود إليك قريباً.",
    },
    // Case Evaluation Tab
    caseEvaluation: {
      title: "تقييم مجاني للقضية",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      caseLabel: "نوع القضية",
      submit: "احصل على التقييم",
      success: "شكراً لك! سنراجع قضيتك ونتواصل معك قريباً.",
    },
    // Common
    common: {
      readMore: "اقرأ المزيد",
      learnMore: "اعرف المزيد",
      contactUs: "اتصل بنا",
      home: "الرئيسية",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      send: "أرسل",
      submit: "أرسل",
      close: "إغلاق",
      loading: "جاري التحميل...",
      search: "بحث",
      share: "شارك",
      shareThis: "شارك هذا المجال:",
      copyLink: "نسخ الرابط",
      copied: "تم النسخ!",
    },
  },
} as const;

type WidenTranslationValues<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly WidenTranslationValues<U>[]
    : T extends object
      ? { [K in keyof T]: WidenTranslationValues<T[K]> }
      : T;

export type TranslationKeys = WidenTranslationValues<typeof translations.en>;
