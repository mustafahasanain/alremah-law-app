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
      logo: "Alremah Company for Legal Services and Consultancy",
      freeConsultation: "Legal Consultation",
      home: "Home",
      about: "About Us",
      practiceAreas: "Practice Areas",
      foreignEntities: "Foreign Entities Registration",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "Get a Legal Consultation",
      name: "Alremah Company for Legal Services and Consultancy",
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
      successRate: "Local & Foreign Companies and Institutions",
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
      title: "Workflow & Legal Assignment Management",
      intro:
        "Alremah follows an institutional and organized workflow for managing corporate and institutional legal assignments, combining legal expertise, administrative organization, and modern electronic systems to ensure accurate follow-up, continuous documentation, and clear communication with the client at every stage of the work.",
      items: [
        {
          title: "Submission of the Assignment",
          subtitle:
            "Requests, consultations, and legal assignments are submitted through the company's designated email, together with the relevant documents and information, ensuring the request is documented and referred to the specialized team.",
        },
        {
          title: "Registration & Classification",
          subtitle:
            "Every assignment is registered within Alremah's internal electronic system, where a dedicated file is created covering its subject, documents, procedures, and deadlines, and classified according to the nature of the work and its priority.",
        },
        {
          title: "Review & Assignment",
          subtitle:
            "The assignment is reviewed, the scope of work and legal requirements are determined, and the file is then assigned to the responsible lawyer or specialized team, with a direct person in charge designated to manage and follow up the file.",
        },
        {
          title: "Assessment & Work Plan",
          subtitle:
            "The specialized team studies the legal position, the available options, the risks, and the relevant requirements, and determines the course of action and the procedures required according to the nature of the assignment and the client's objectives.",
        },
        {
          title: "Execution & Follow-up",
          subtitle:
            "The required legal, judicial, and administrative procedures are carried out, with continuous follow-up of deadlines, correspondence, and developments, and the file's electronic record is updated on an ongoing basis.",
        },
        {
          title: "Reports & Communication",
          subtitle:
            "Periodic reports on the progress of the work are prepared, covering the procedures completed, the current status of each assignment, the next steps, and any material observations, and are sent to the client via the approved email to ensure clarity of progress and continuity of communication.",
        },
        {
          title: "Documentation & Archiving",
          subtitle:
            "Documents, correspondence, reports, and procedural records are stored electronically within Alremah's internal system, organized separately for each client and file, making it easy to trace the assignment's history and follow its developments.",
        },
        {
          title: "Completion of the Assignment",
          subtitle:
            "Upon completion of the scope of work, the outcome and the procedures carried out are documented, and the report or final deliverables are sent to the client, together with a statement of any subsequent procedures or requirements, where applicable.",
        },
      ],
    },
    // Case Types
    cases: {
      subtitle: "Case Studies",
      title: "Case Like Yours",
      items: [
        { title: "Foreign Branch Registration", category: "Corporate Registration" },
        { title: "Cross-Border Investment Structuring", category: "Foreign Investment" },
        { title: "Commercial Contract Dispute", category: "Dispute Resolution" },
        { title: "Trademark Protection", category: "Intellectual Property" },
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
      name: "Alremah Company for Legal Services and Consultancy",
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
    // Legal Vision & FAQ
    legalVision: {
      subtitle: "Our Legal Vision",
      title: "Legal Vision & Frequently Asked Questions",
      strategicLabel: "Strategic & Intellectual Questions",
      practicalLabel: "Practical & Procedural Questions",
      strategic: [
        {
          question:
            "When is an investment opportunity in Iraq worth entering, and when is not entering the better decision?",
          answer:
            "Not every available project is a suitable opportunity for every investor. The value of the decision begins with knowing whether the activity, the legal structure, the regulatory requirements, the contracts, the obligations, and the risks truly align with the investor's objectives and capacity to manage them.\n\nAlremah's role is not to push the client toward investing, but to help them see the legal picture clearly enough to make their decision with confidence.",
        },
        {
          question: "If you win the dispute, can you actually collect what you won?",
          answer:
            "A successful judgment does not always equal a successful commercial outcome. The value of legal protection begins before the dispute, with a study of the guarantees, the assets, the opposing party, the dispute resolution mechanism, and the possibility of enforcement.\n\nThat is why we do not ask only how to win the case, but how the legal outcome turns into a right that can actually be enforced.",
        },
        {
          question:
            "If the same contract were offered to you today, but you knew how the relationship would end five years from now, what would you change in it?",
          answer:
            "This is the question we try to answer before signing. We cannot know the future, but we can test the contract against scenarios of delay, breach, change of ownership, financing default, dispute, and exit.\n\nIntelligent legal drafting does not predict the future, but it prepares for its possibilities and sets out clear mechanisms for managing any shift that may arise in the partnership.",
        },
        {
          question: "Do you know what you are actually buying when you buy a company?",
          answer:
            "Buying shares does not only mean buying assets and opportunities — it may mean entering an entire legal history of contracts, obligations, debts, guarantees, disputes, and risks that arose before the investor's arrival.\n\nThat is why Alremah does not only ask about the value of what the client will own after the deal, but also looks into what liabilities may transfer with it.\n\nSometimes the most dangerous thing you buy in a deal is the thing that never appeared in its price.",
        },
        {
          question:
            "If a decision only needs one person's signature, why might it need the protection of the entire company?",
          answer:
            "Because a manager's signature may create an obligation on the company that extends for years and outlasts their time in the position.\n\nThat is why the authority to make a decision must match its scale and its consequences, and material decisions must be surrounded by appropriate levels of approval and documentation.\n\nA signature may take a second, but its effect may outlive the person who signed it.",
        },
        {
          question:
            "Can you lose an excellent opportunity because your company was not legally ready quickly enough?",
          answer:
            "Yes, absolutely. Some opportunities require a fast decision, a fast due-diligence review, documents, authorities, and an organized structure that allows the deal to be completed without having to start fixing the company and correcting its legal standing while negotiations are underway.\n\nPrior legal readiness is what protects opportunities and keeps them within reach of those who deserve them.",
        },
        {
          question:
            "If you find an excellent investment opportunity in Iraq, how do you know that now is the right time to enter it?",
          answer:
            "An opportunity is not defined by the attractiveness of the sector alone. The timing of entry depends on the investor's readiness, the legal structure, the licenses, the contracts, the financing, the partners, and the ability to begin operations within the required track.\n\nAlremah helps the investor understand the legal and regulatory requirements that precede entry, so that the timing of the decision is based on readiness rather than on the attractiveness of the opportunity alone.\n\nA good opportunity at the wrong time can become a costly decision.",
        },
        {
          question:
            "Do you know what will make the next investor trust your company before they even meet you?",
          answer:
            "Clarity of ownership, and the orderliness of records, contracts, licenses, governance, and legal data, gives the investor a picture of the institution's standing before serious negotiations even begin.\n\nTrust in business is not built by words alone, but by what the company can prove when it is examined legally, administratively, and financially.",
        },
      ],
      practical: [
        {
          question:
            "How long does it take to register a foreign company's branch in Iraq, and what are the basic requirements?",
          answer:
            "Registration procedures usually take between 4 to 8 weeks, depending on the completeness of the parent company's documents and their certification by the Iraqi embassy, the Ministry of Foreign Affairs, and certified official translation.\n\nThe basic requirements include: the parent company's memorandum and articles of association, the official certificate of registration, the financial statements for the last fiscal year, and a board resolution to open the branch in Iraq, naming the authorized manager and granting them the powers needed to deal with the Companies Registration Department and official authorities.",
        },
        {
          question:
            "Does Iraqi law require foreign companies to have a local Iraqi partner in order to do business?",
          answer:
            "The Iraqi Companies Law and the Investment Law allow foreign companies to open branches and representative offices that are 100% owned by the parent company, without the need for an Iraqi partner.\n\nIn the case of establishing local joint-stock or limited liability companies outside the framework of the Investment Law, however, some sectors may require specific national participation percentages.\n\nAlremah's team guides the investor toward the legal structure that ensures them full control and flexibility according to the nature of their activity.",
        },
        {
          question:
            "How do you protect your company from the risk of sudden estimated tax assessments in Iraq?",
          answer:
            "Tax protection begins from the moment commercial contracts are drafted, by determining who bears the tax retentions and withholdings, followed by the regular keeping of official accounting books, opening the tax file, and filing returns by their legally set deadlines.\n\nFollowing up on periodic tax settlement and obtaining annual tax clearance certificates protects the company from financial accumulations, late-payment fines, and arbitrary estimated-assessment decisions that are issued in the absence of regular documentation.",
        },
        {
          question:
            "What is the legally required percentage of local labor when employing foreign staff in Iraq?",
          answer:
            "Iraqi Labor Law No. 37 of 2015 and the effective ministerial instructions set a minimum of 50% national workforce in projects operating within Iraq, rising to higher percentages in certain oil-sector and special-license activities.\n\nWe help our clients manage the file of employing foreign staff and obtaining their official work permits, with full compliance with national labor percentages, to avoid any regulatory violations or penalties.",
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
          { label: "Client Satisfaction", value: 80 },
          { label: "Case Success Rate", value: 98 },
          { label: "Years of Experience", value: 25 },
        ],
      },
      quote: {
        text: "The law is not merely a set of rules — it is the foundation upon which we build a fair and equitable society.",
        author: "Alremah Company for Legal Services and Consultancy, Founding Partner",
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
              "Alremah Company for Legal Services and Consultancy was established with a commitment to justice and client advocacy, starting with a small office and a team of three dedicated attorneys.",
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
      content: {
        eyebrow: "Specialized Legal Expertise",
        title: "Legal Expertise That Understands Your Business",
        intro:
          "We combine legal knowledge with an understanding of the Iraqi market, business environment, and relevant regulatory frameworks to provide our clients with clear insight and practical solutions. This enables them to make informed decisions and manage their businesses and investments efficiently. We draw on experience, insight, and innovation to address legal requirements and the most complex issues.",
        items: [
          {
            title: "Legal Advisory",
            description:
              "We provide specialized legal advice to individuals, companies, and institutions, based on a careful study of the facts and a thorough understanding of legal and regulatory frameworks and the business environment. Our advice helps clients make informed decisions, anticipate risk, and address legal matters efficiently and clearly.",
          },
          {
            title: "Companies and Commercial Business",
            description:
              "We handle the establishment and registration of Iraqi companies, organize their legal structures and partner and shareholder affairs, prepare resolutions and amendments, and provide ongoing legal advice that supports their business, growth, and interests.",
          },
          {
            title: "Foreign Investment and Cross-Border Business",
            description:
              "We support foreign companies and investors entering the Iraqi market, providing the legal and regulatory knowledge they need to understand the business environment and operate with confidence. Our work spans opening and registering branches and offices of foreign companies, structuring investments, obtaining licenses and approvals, meeting regulatory requirements, and supporting cross-border transactions and investments.",
          },
          {
            title: "Oil, Gas and Energy",
            description:
              "We provide legal support to companies and investors operating in the oil, gas, and energy sectors. Our services include understanding the legal and regulatory environment governing these sectors, drafting and reviewing contracts and agreements, supporting projects and commercial transactions, and dealing with relevant requirements, licenses, and authorities to protect interests and manage legal risk.",
          },
          {
            title: "Contracts and Commercial Transactions",
            description:
              "We provide legal support in drafting, preparing, reviewing, and negotiating civil, commercial, and investment contracts and agreements. We seek to understand the nature and objectives of each transaction before establishing its legal framework, balancing the protection of interests, business continuity, and the mitigation of potential risks.",
          },
          {
            title: "Projects and Investments",
            description:
              "We support projects from their earliest stages, advising on their legal and contractual structuring, securing the required approvals and licenses, and organizing relationships between investors, partners, developers, and contractors to establish a clear legal foundation for implementation and sustainability.",
          },
          {
            title: "Litigation and Dispute Resolution",
            description:
              "We represent clients in civil, commercial, administrative, employment, and criminal disputes before competent courts and judicial and investigative authorities. Our dispute management is guided by a legal strategy built on studying the facts, analyzing evidence, assessing risks, and identifying the most suitable legal route to protect the client's rights and interests.",
          },
          {
            title: "Real Estate and Property Development",
            description:
              "We provide legal advice on real estate, residential, commercial, and investment transactions and projects, including title review and property dispositions; drafting and reviewing sale, lease, investment, and development agreements; organizing legal relationships between investors, developers, and contractors; and following related procedures before the competent authorities.",
          },
          {
            title: "Employment and Social Security",
            description:
              "We support companies and employers in managing their relationships with employees, drafting and reviewing employment contracts and policies, advising on legal obligations and compliance with employment and social security requirements, and representing them in related disputes and proceedings.",
          },
          {
            title: "Residency, Work Permits and Entry Visas",
            description:
              "We provide legal support to companies, investors, and foreign employees in Iraq regarding residency requirements, work permits, and entry visas. We follow the necessary procedures and approvals before competent authorities to ensure the lawful presence and work of foreign personnel under applicable legal and regulatory frameworks.",
          },
          {
            title: "Licensing and Regulatory Compliance",
            description:
              "We help companies and investors understand the legal and regulatory frameworks governing their activities, obtain the required licenses, approvals, and permits, and follow procedures before ministries, authorities, and competent bodies. This supports business continuity and reduces legal and regulatory risk.",
          },
          {
            title: "Tax and Financial Affairs",
            description:
              "We provide legal support in tax and financial matters related to the business of companies and investors, including tax assessment procedures, organizing tax positions, and following transactions, objections, and related requirements before the General Commission for Taxes and other competent authorities, strengthening compliance and protecting client interests.",
          },
          {
            title: "Healthcare Sector and Scientific Offices",
            description:
              "We provide legal support to companies and scientific offices operating in the pharmaceuticals, medical supplies, and medical devices sectors. Our work includes establishment, registration, licensing and approvals, contractual arrangements, compliance with legal and regulatory requirements, and follow-up before competent authorities, unions, and institutions.",
          },
          {
            title: "Intellectual Property and Trademark Protection",
            description:
              "We provide legal support to protect our clients' intellectual and commercial rights and assets, including trademark registration and renewal, handling objections and related legal procedures, and addressing infringement to protect business identity and goodwill.",
          },
        ],
      },
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
        address: "Baghdad - Karrada - Arasat Al-Hindiya",
        phone: "+964 774 646 4606",
        email: "al-remahLawfirm@outlook.com",
      },
    },
    // Services Hub (Home service cards + Practice Areas detailed hub)
    servicesHub: {
      eyebrow: "Our Services",
      title: "Complete Legal Services",
      intro:
        "A full picture of our practice — 17 specialized legal services covering the needs of individuals, companies, and investors in Iraq. Select any service to view its full details.",
      viewFullDetails: "View Full Details →",
      sidebarTitle: "All Services",
      sidebarAriaLabel: "Services navigation",
      mobileSelectorLabel: "Browse Services",
      mobileSelectorHint: "Tap to choose a different service",
      ctaTitle: "Need Legal Assistance?",
      ctaDescription:
        "Speak with our team for a consultation tailored to this service.",
      ctaButton: "Request a Legal Consultation",
    },
    // Foreign Entities Registration Page
    foreignEntitiesPage: {
      hero: {
        title: "Foreign Entities Registration",
        subtitle:
          "A dedicated legal practice for foreign companies, investors, and non-governmental organizations entering the Iraqi market.",
        breadcrumb: { home: "Home", current: "Foreign Entities Registration" },
      },
      sections: [
        {
          title: "Registering and Managing Foreign Company Branches in Iraq",
          imageAlt: "International corporate office towers representing foreign company branches in Iraq",
          paragraphs: [
            "We serve as a legal partner to foreign companies seeking to establish their presence and conduct business in Iraq, providing comprehensive legal management that begins at the market-entry planning stage and extends through branch registration, commencement of activity, and management of its legal and regulatory requirements throughout its operation.",
            "We begin by understanding the nature of the company's business, its activities, and the sector it targets, and determine the legal and regulatory requirements necessary for its presence in Iraq. We then prepare and review the branch registration file, examine the parent company's documents, complete authentication, translation, and deposit requirements, and follow up the registration procedures before the Companies Registrar and the competent authorities until the branch's legal existence is established and it commences its operations.",
            "Our role extends to building the legal environment necessary for operating the branch after registration, through completing tax registrations, labor and social security requirements, sector licenses and approvals, organizing the affairs of employees and foreign staff, and following up residency, work permits, entry visas, and other requirements linked to the nature of the company's activity.",
            "We also organize the legal and administrative relationship between the branch and the parent company, prepare the powers of attorney, delegations, authorizations, resolutions, and correspondence required, and provide legal support to local management in its daily business, decisions, transactions, and relationships with government authorities, clients, contractors, suppliers, and service providers.",
            "For companies operating in regulated sectors and government and investment projects, we handle their registration and qualification and follow up their requirements before ministries, authorities, state companies, and the competent sectoral bodies, and complete the approvals, classifications, and registrations required by the nature of their activity to participate in projects and tenders and conduct business in Iraq.",
            "Our relationship with the company does not end upon issuance of the branch's registration documents. We continue to manage its legal and regulatory affairs, follow up renewals, changes, licenses, and periodic obligations, represent it before official, regulatory, and judicial authorities, and address the legal matters that accompany its activity and growth in the market.",
          ],
        },
        {
          title: "Establishment and Registration of Foreign and Local Non-Governmental Organizations (NGOs)",
          imageAlt: "International team in an organizational meeting representing NGO establishment and governance",
          paragraphs: [
            "We provide national and foreign non-governmental organizations with a comprehensive legal framework for establishing their presence and managing their operations in Iraq, beginning with the registration stage and building their organizational structure, through to providing ongoing legal management that keeps pace with their activities, programs, and relationships with official authorities and related parties.",
            "We prepare and complete the organization's registration file and draft its bylaws to reflect the nature of its objectives and scope of work, organizing its administrative structure, the powers of its bodies, and its decision-making, management, and representation mechanisms, while preparing the required documents and legal requirements and following up registration procedures before the NGO Directorate and the competent authorities until the legal status necessary to commence activity is established.",
            "We also provide solutions related to the organization's legal headquarters requirements and organize the contractual and procedural basis for it in line with registration requirements and the conduct of activity.",
            "For foreign and international non-governmental organizations, we provide dedicated legal support to organize their presence in Iraq and complete their registration procedures, approvals, and regulatory requirements, and follow up their dealings with government authorities in a way that helps them carry out their programs and activities within a clear legal framework.",
            "Our role extends beyond registration through providing comprehensive legal management for the organization, including governance of its operations, organizing the decisions and minutes of its administrative bodies, drafting and reviewing contracts, agreements, and memoranda of understanding, managing employment relations and staff affairs, reviewing legal and regulatory obligations, and following up tax and social security requirements, in addition to residency, work permits, and entry visas for foreign staff.",
          ],
        },
        {
          title: "Foreign Commercial Agencies and Entry into the Iraqi Market",
          imageAlt: "International shipping and trade port representing foreign commercial agencies",
          paragraphs: [
            "We serve as a legal partner to foreign companies wishing to enter the Iraqi market and market their products or provide their services through commercial agencies, providing them with the legal and regulatory framework necessary to build an organized and stable commercial presence in Iraq.",
            "We begin by studying the nature of the company's business and the products or services it intends to introduce to the Iraqi market, determine the legal and regulatory requirements related to its activity, and organize the relationship between it and its Iraqi commercial agent in a manner consistent with its business and market strategy.",
            "We draft and review commercial agency contracts and organize their scope, term, and the resulting rights and obligations, marketing, distribution, and service-provision mechanisms, trademark and confidentiality protection, guarantees, and cases of breach and termination, providing the foreign company with a clear contractual framework that protects its interests and organizes its relationship with its agent in Iraq.",
            "We also complete the commercial agency registration procedures, prepare and review foreign documents, follow up authentication, translation, and registration requirements, and obtain the necessary approvals before the Companies Registration Directorate and the competent authorities, up to completing the legal requirements for conducting agency business in Iraq.",
            "We also protect the foreign company's commercial interests and its rights related to trademarks, products, and distribution and representation rights, and review changes to the agency relationship, addressing cases of amendment, renewal, or termination and the legal and commercial effects that follow.",
          ],
        },
        {
          title: "Residency, Work Permits, and Entry Visas for Foreign Personnel",
          imageAlt: "Traveler waiting at an airport representing residency and work-visa services for foreign personnel",
          paragraphs: [
            "We provide companies, investors, and foreign personnel in Iraq with comprehensive legal management of residency, work, and entry-visa requirements, ensuring that the presence of foreign employees and the conduct of their work are organized in accordance with the legal frameworks and procedures adopted by the competent authorities.",
            "We manage the file from the stage of the foreign staff member's entry into Iraq, determining the requirements and procedures appropriate to the nature of the visit or work, following up on obtaining entry visas and the necessary approvals, completing residency procedures and their renewal, and organizing the legal status of foreign nationals throughout their presence in Iraq.",
            "We also handle procedures for obtaining and renewing work permits for foreign employees, following up the requirements, approvals, and correspondence related to them before the Ministry of Labor and Social Affairs and the relevant sectoral and regulatory bodies, and addressing the legal and procedural matters that may arise during the term of employment.",
            "For foreign companies and projects that rely on international personnel, we provide ongoing management of foreign employees' files, including organizing and following up residency and work-permit dates, entry visas, renewals, and legal requirements for each employee, helping companies ensure the continuity of their staff's work and avoid delays or violations related to their legal status.",
          ],
        },
      ],
      cta: {
        title: "Considering Entering the Iraqi Market?",
        description:
          "Speak with our legal team about registering your branch, organization, or commercial agency in Iraq.",
        button: "Request Legal Consultation",
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
            q: "When is an investment opportunity in Iraq worth entering, and when is staying out the better decision?",
            a: "Not every available project is a suitable opportunity for every investor. The value of the decision starts with knowing whether the activity, legal structure, regulatory requirements, contracts, obligations, and risks actually align with the investor's goals and ability to manage them.\n\nAlremah's role is not to push the client toward investing, but to help them see the legal picture clearly enough to make their decision with confidence.",
          },
          {
            q: "If you win the dispute, can you actually collect what you won?",
            a: "A successful ruling does not always equal a successful commercial outcome. Legal protection begins before the dispute, with a study of guarantees, assets, the opposing party, the dispute resolution mechanism, and the possibility of enforcement.\n\nThat is why we do not only ask how to win the case, but how to turn the legal outcome into a right that can actually be enforced.",
          },
          {
            q: "If you were offered the same contract today, but you knew how the relationship would end five years from now, what would you change in it?",
            a: "This is the question we try to answer before signing. We cannot know the future, but we can test the contract against scenarios of delay, breach, change of ownership, financing difficulties, disputes, and exit.\n\nSmart legal drafting does not predict the future, but it prepares for its possibilities.",
          },
          {
            q: "Do you know what you are actually buying when you buy a company?",
            a: "Buying shares does not only mean acquiring assets and opportunities; it may mean entering an entire legal history of contracts, obligations, debts, guarantees, disputes, and risks that existed before the investor arrived.\n\nThat is why Alremah does not only ask about the value of what the client will own after the deal, but also examines what liabilities may transfer with it.\n\nSometimes the most dangerous thing you buy in a deal is the thing that never appeared in its price.",
          },
          {
            q: "If a decision only needs one person's signature, why might it need the protection of an entire company?",
            a: "Because a manager's signature can create an obligation for the company that lasts for years and outlasts their time in the position.\n\nThat is why decision-making authority must match its scale and consequences, and material decisions should be surrounded by appropriate levels of approval and documentation.\n\nA signature may take a second, but its effect may outlive the person who signed it.",
          },
          {
            q: "Can you lose an excellent opportunity because your company was not legally ready quickly enough?",
            a: "Yes. Some opportunities require a fast decision, fast due diligence, and documents, authorizations, and an organized structure that allow the deal to close without having to fix the company mid-negotiation.",
          },
          {
            q: "If you find an excellent investment opportunity in Iraq, how do you know the right time to enter it is now?",
            a: "The opportunity is not defined by the attractiveness of the sector alone. The timing of entry is tied to the investor's readiness, the legal structure, licenses, contracts, financing, partners, and the ability to begin operating within the required track.\n\nAlremah helps the investor understand the legal and regulatory requirements that precede entry, so that the timing of the decision is based on readiness, not just on the appeal of the opportunity.\n\nA good opportunity at the wrong time can become a costly decision.",
          },
          {
            q: "Do you know what will make the next investor trust your company before they even meet you?",
            a: "Clarity of ownership, and orderly records, contracts, licenses, governance, and legal data give the investor a picture of the institution's level before serious negotiations even begin.\n\nTrust in business is not built by words alone, but by what the company can prove when it is examined.",
          },
        ],
      },
      legal: {
        subtitle: "Legal",
        title: "Legal Questions",
        items: [
          {
            q: "How long does it take to register a foreign company's branch in Iraq, and what are the basic requirements?",
            a: "Registration procedures typically take between 4 to 8 weeks, depending on how complete the parent company's documents are and whether they have been certified by the Iraqi embassy, the Ministry of Foreign Affairs, and an accredited official translation.\n\nThe basic requirements include: the parent company's articles of incorporation and bylaws, its official certificate of registration, the financial statements for the last fiscal year, and a board resolution to open the branch in Iraq naming the authorized manager and granting them the powers needed to deal with the companies registration department and other official authorities.",
          },
          {
            q: "Does Iraqi law require foreign companies to have a local Iraqi partner to do business?",
            a: "The Iraqi Companies Law and the Investment Law allow foreign companies to open branches and representative offices that are 100% owned by the parent company, with no need for an Iraqi partner.\n\nHowever, when establishing a local joint-stock or limited liability company outside the framework of the Investment Law, some sectors may require a specific percentage of national ownership.\n\nAlremah's team guides the investor toward the legal structure that secures full control and flexibility according to the nature of their activity.",
          },
          {
            q: "How do you protect your company from the risk of estimated tax assessments and sudden tax reckonings in Iraq?",
            a: "Tax protection begins from the moment commercial contracts are drafted, by clearly determining who bears the withholding and tax deductions, followed by keeping official accounting books in order, opening a tax file, and filing returns by their legally prescribed deadlines.\n\nFollowing up on the periodic tax reckoning and obtaining annual tax clearance certificates protects the company from financial arrears, late penalties, and arbitrary estimated-assessment decisions that arise in the absence of regular documentation.",
          },
          {
            q: "What is the legal percentage of local labor required when employing foreign staff in Iraq?",
            a: "Iraqi Labor Law No. 37 of 2015 and the applicable ministerial instructions set a minimum of 50% national workforce for projects operating in Iraq, rising to higher percentages in some oil-sector and special-license activities.\n\nWe help our clients manage the file for employing foreign staff and obtain their official work permits while fully complying with national workforce percentages, to avoid any regulatory violations or penalties.",
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
          author: "Alremah Company for Legal Services and Consultancy",
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
        phone: { title: "Phone", number: "+964 774 646 4606" },
        email: { title: "Email", address: "al-remahLawfirm@outlook.com" },
        address: {
          title: "Address",
          full: "Baghdad - Karrada - Arasat Al-Hindiya",
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
        mainAddress: "Baghdad - Karrada - Arasat Al-Hindiya",
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
          "Legal Consultations",
          "Companies and Commercial Business",
          "Foreign Investment and Cross-Border Business",
          "Contracts and Commercial Deals",
          "Litigation and Dispute Resolution",
          "Foreign Entities Registration",
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
        address: "Baghdad - Karrada - Arasat Al-Hindiya",
        telLabel: "Tel:",
        phone: "+964 774 646 4606",
        emailLabel: "Email:",
        email: "al-remahLawfirm@outlook.com",
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
      logo: "شركة الرماح لخدمات المحاماة والاستشارات القانونية",
      freeConsultation: "استشارة قانونية",
      home: "الرئيسية",
      about: "من نحن",
      practiceAreas: "مجالات الممارسة",
      foreignEntities: "تسجيل الشركات والمنظمات الأجنبية",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    // Hero
    hero: {
      badge: "احصل على استشارة قانونية",
      name: "شركة الرماح لخدمات المحاماة والاستشارات القانونية",
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
            "تتم المباشرة بالإجراءات القانونية والقضائية والإدارية المطلوبة مع متابعة المواعيد والمخاطبات والمستجدات وتحديث سجل الملف إلكترونياً بصورة مستمرة.",
        },
        {
          title: "التقارير والتواصل",
          subtitle:
            "تُعد تقارير دورية عن سير العمل تتضمن الإجراءات المنجزة والموقف الحالي لكل تكليف والخطوات التالية والملاحظات الجوهرية ويتم إرسالها إلى العميل عبر البريد الإلكتروني المعتمد بما يضمن وضوح سير العمل واستمرارية التواصل.",
        },
        {
          title: "التوثيق والأرشفة",
          subtitle:
            "تُحفظ المستندات والمراسلات والتقارير وسجلات الإجراءات إلكترونياً ضمن النظام الداخلي لشركة الرماح وفق تنظيم خاص بكل عميل وملف بما يضمن سهولة الرجوع إلى تاريخ التكليف ومتابعة تطوراته.",
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
        { title: "تسجيل فرع شركة أجنبية", category: "تسجيل الشركات" },
        { title: "هيكلة استثمار عابر للحدود", category: "الاستثمار الأجنبي" },
        { title: "نزاع عقد تجاري", category: "تسوية المنازعات" },
        { title: "حماية العلامة التجارية", category: "الملكية الفكرية" },
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
    legalVision: {
      subtitle: "رؤيتنا القانونية",
      title: "الرؤية القانونية والأسئلة الشائعة",
      strategicLabel: "أسئلة استراتيجية وفكرية",
      practicalLabel: "أسئلة عملية وإجرائية",
      strategic: [
        {
          question:
            "متى تكون الفرصة الاستثمارية في العراق فرصة تستحق الدخول ومتى يكون عدم الدخول هو القرار الأفضل؟",
          answer:
            "ليس كل مشروع متاح فرصة مناسبة لكل مستثمر. قيمة القرار تبدأ من معرفة ما إذا كان النشاط والهيكل القانوني والمتطلبات التنظيمية والعقود والالتزامات والمخاطر تتوافق فعلاً مع أهداف المستثمر وقدرته على إدارتها.\n\nدور شركة الرماح ليس دفع العميل نحو الاستثمار بل مساعدته على رؤية الصورة القانونية بوضوح كافٍ لاتخاذ قراره بثقة.",
        },
        {
          question: "إذا ربحت النزاع فهل تستطيع تحصيل ما ربحت؟",
          answer:
            "الحكم الناجح لا يساوي دائماً نتيجة تجارية ناجحة. قيمة الحماية القانونية تبدأ قبل النزاع من دراسة الضمانات والأصول والطرف المقابل وآلية تسوية النزاع وإمكانية التنفيذ.\n\nلهذا لا نسأل فقط كيف نربح القضية بل كيف تتحول النتيجة القانونية إلى حق يمكن تنفيذه فعلاً.",
        },
        {
          question:
            "لو عُرض عليك العقد نفسه اليوم ولكنك تعرف كيف ستنتهي العلاقة بعد خمس سنوات فماذا كنت ستغير فيه؟",
          answer:
            "هذا هو السؤال الذي نحاول الإجابة عنه قبل التوقيع. لا نستطيع معرفة المستقبل لكن يمكننا اختبار العقد أمام سيناريوهات التأخير والإخلال وتغير الملكية وتعثر التمويل والنزاع والخروج.\n\nالصياغة القانونية الذكية لا تتنبأ بالمستقبل لكنها تستعد لاحتمالاته وتضع آليات واضحة لإدارة أي تحول يطرأ على الشراكة.",
        },
        {
          question: "هل تعرف ما الذي تشتريه فعلاً عندما تشتري شركة؟",
          answer:
            "شراء الأسهم لا يعني شراء الأصول والفرص فقط بل قد يعني الدخول في تاريخ قانوني كامل من العقود والالتزامات والديون والضمانات والنزاعات والمخاطر التي نشأت قبل وصول المستثمر.\n\nلذلك لا تسأل شركة الرماح فقط عن قيمة ما سيملكه العميل بعد الصفقة بل تبحث أيضاً عما قد ينتقل إليه معها من مسؤوليات.\n\nأحياناً أخطر ما تشتريه في الصفقة هو الشيء الذي لم يظهر في سعرها.",
        },
        {
          question:
            "إذا كان القرار يحتاج توقيع شخص واحد فلماذا قد يحتاج حماية شركة كاملة؟",
          answer:
            "لأن توقيع المدير قد يرتب التزاماً على الشركة يمتد سنوات ويتجاوز مدة وجوده في منصبه.\n\nلهذا يجب أن تتناسب صلاحية اتخاذ القرار مع حجمه وآثاره وأن تحيط القرارات الجوهرية بمستويات مناسبة من الاعتماد والتوثيق.\n\nقد يستغرق التوقيع ثانية لكن أثره قد يعيش أطول ممن وقّعه.",
        },
        {
          question:
            "هل يمكن أن تخسر فرصة ممتازة لأن شركتك لم تكن جاهزة قانونياً بالسرعة الكافية؟",
          answer:
            "نعم وبكل تأكيد. بعض الفرص تحتاج قراراً سريعاً وفحصاً سريعاً ومستندات وصلاحيات وهيكلاً منظماً يسمح بإتمام الصفقة دون البدء بإصلاح الشركة وتعديل أوضاعها القانونية أثناء التفاوض.\n\nالجاهزية القانونية المسبقة هي التي تحمي الفرص وتجعلها في متناول من يستحقها.",
        },
        {
          question:
            "إذا وجدت فرصة استثمارية ممتازة في العراق فكيف تعرف أن الوقت المناسب لدخولها هو الآن؟",
          answer:
            "الفرصة لا تتحدد بجاذبية القطاع وحدها. توقيت الدخول يرتبط بجاهزية المستثمر والهيكل القانوني والتراخيص والعقود والتمويل والشركاء والقدرة على بدء التشغيل ضمن المسار المطلوب.\n\nتساعد شركة الرماح المستثمر على فهم المتطلبات القانونية والتنظيمية التي تسبق الدخول حتى يكون توقيت القرار مبنياً على الجاهزية لا على جاذبية الفرصة وحدها.\n\nفالفرصة الجيدة في التوقيت الخطأ قد تصبح قراراً مكلفاً.",
        },
        {
          question:
            "هل تعرف ما الذي سيجعل المستثمر القادم يثق بشركتك قبل أن يلتقي بك؟",
          answer:
            "وضوح الملكية وانتظام السجلات والعقود والتراخيص والحوكمة والبيانات القانونية يعطي المستثمر صورة عن مستوى المؤسسة قبل أن تبدأ المفاوضات الجدية.\n\nالثقة في الأعمال لا تُبنى بالكلام وحده بل بما تستطيع الشركة إثباته عندما تُفحص قانونياً وإدارياً ومالياً.",
        },
      ],
      practical: [
        {
          question:
            "كم يستغرق تسجيل فرع شركة أجنبية في العراق وما هي المتطلبات الأساسية؟",
          answer:
            "تستغرق إجراءات التسجيل عادة ما بين 4 إلى 8 أسابيع، اعتماداً على اكتمال وثائق الشركة الأم وتصديقها من السفارة العراقية ووزارة الخارجية والترجمة الرسمية المعتمدة.\n\nتتضمن المتطلبات الأساسية: عقد تأسيس الشركة الأم ونظامها الداخلي، شهادة التسجيل الرسمية، الحسابات الختامية لآخر سنة مالية، وقرار مجلس الإدارة بفتح الفرع في العراق وتسمية المدير المفوض ومنحه الصلاحيات اللازمة لمراجعة دائرة تسجيل الشركات والجهات الرسمية.",
        },
        {
          question:
            "هل يُلزم القانون العراقي الشركات الأجنبية بوجود شريك محلي عراقي لممارسة الأعمال؟",
          answer:
            "يتيح قانون الشركات العراقي وقانون الاستثمار للشركات الأجنبية فتح فروع ومكاتب تمثيل مملوكة بالكامل 100% للشركة الأم دون الحاجة لشريك عراقي.\n\nأما في حالة تأسيس شركات مساهمة أو محدودة محلية خارج إطار قانون الاستثمار، فقد تشترط بعض القطاعات نسب مساهمة وطنية محددة.\n\nيتولى فريق الرماح توجيه المستثمر نحو الهيكل القانوني الذي يضمن له السيطرة والمرونة الكاملة وفقاً لطبيعة نشاطه.",
        },
        {
          question:
            "كيف تحمي شركتك من مخاطر التقديرات والتحاسب الضريبي المفاجئ في العراق؟",
          answer:
            "تبدأ الحماية الضريبية من لحظة صياغة العقود التجارية بتحديد من يتحمل الأمانات والاستقطاعات الضريبية، يتبعها انتظام مسك الدفاتر المحاسبية الرسمية وفتح الملف الضريبي وتقديم الإقرارات في مواعيدها المقررة قانوناً.\n\nمتابعة التحاسب الدوري واستخراج براءات الذمة سنوياً تحمي الشركة من التراكمات المالية والغرامات التأخيرية وقرارات التحاسب التقديري الجزافي التي تصدر في غياب توثيق منتظم.",
        },
        {
          question:
            "ما هي النسبة القانونية للعمالة المحلية المطلوبة عند تشغيل كوادر أجنبية في العراق؟",
          answer:
            "يحدد قانون العمل العراقي رقم 37 لسنة 2015 والتعليمات الوزارية النافذة نسبة لا تقل عن 50% من الأيدي العاملة الوطنية في المشاريع العاملة داخل العراق، وتصل في بعض قطاعات النفط والتراخيص الخاصة إلى نسب أعلى.\n\nنساعد عملاءنا على إدارة ملف تشغيل الكوادر الأجنبية واستحصال إجازات العمل الرسمية لهم مع الامتثال التام لنسب العمالة الوطنية لتفادي أي مخالفات أو عقوبات تنظيمية.",
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
        subtitle: "",
        title: "",
        description:
          "نؤمن أن كل شخص يستحق الوصول إلى تمثيل قانوني عالي الجودة، بغض النظر عن خلفيته أو ظروفه. رؤيتنا هي خلق مجتمع أكثر عدالة حيث يعمل القانون كدرع للضعفاء، وليس سلاحاً للأقوياء.",
        stats: [
          { label: "رضا العملاء", value: 80 },
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
      content: {
        eyebrow: "خبرة قانونية متخصصة",
        title: "خبرة قانونية تفهم أعمالك",
        intro:
          "نجمع بين المعرفة القانونية وفهم السوق العراقي وبيئة الأعمال والأطر التنظيمية ذات الصلة لنقدم لعملائنا رؤية واضحة وحلولاً عملية تساعدهم على اتخاذ قرارات مدروسة وإدارة أعمالهم واستثماراتهم بكفاءة. ونعتمد في ذلك على الخبرة والبصيرة والابتكار في التعامل مع المتطلبات القانونية والمسائل الأكثر تعقيداً.",
        items: [
          {
            title: "الاستشارات القانونية",
            description:
              "نقدم استشارات قانونية متخصصة للأفراد والشركات والمؤسسات تستند إلى دراسة دقيقة للوقائع وفهم الأطر القانونية والتنظيمية وبيئة الأعمال بما يساعد عملاءنا على اتخاذ قرارات مدروسة واستباق المخاطر ومعالجة المسائل القانونية بكفاءة ووضوح.",
          },
          {
            title: "الشركات والأعمال التجارية",
            description:
              "نتولى تأسيس وتسجيل الشركات الوطنية وتنظيم هياكلها القانونية وشؤون الشركاء والمساهمين وإعداد القرارات والتعديلات وتقديم المشورة القانونية المستمرة بما يدعم أعمالها ونموها ويحمي مصالحها.",
          },
          {
            title: "الاستثمار الأجنبي والأعمال عبر الحدود",
            description:
              "نرافق الشركات والمستثمرين الأجانب في دخول السوق العراقي ونوفر لهم المعرفة القانونية والتنظيمية اللازمة لفهم بيئة الأعمال وممارسة نشاطهم بثقة بدءاً من فتح وتسجيل فروع ومكاتب الشركات الأجنبية وهيكلة الاستثمارات وصولاً إلى التراخيص والموافقات والمتطلبات التنظيمية ودعم المعاملات والاستثمارات العابرة للحدود.",
          },
          {
            title: "النفط والغاز والطاقة",
            description:
              "نقدم الدعم القانوني للشركات والمستثمرين العاملين في قطاعات النفط والغاز والطاقة من خلال فهم البيئة القانونية والتنظيمية التي تحكم هذه القطاعات ومراجعة وصياغة العقود والاتفاقيات ودعم المشاريع والمعاملات التجارية والتعامل مع المتطلبات والتراخيص والجهات ذات العلاقة بما يسهم في حماية المصالح وإدارة المخاطر القانونية.",
          },
          {
            title: "العقود والصفقات التجارية",
            description:
              "نقدم الدعم القانوني في إعداد وصياغة ومراجعة والتفاوض بشأن العقود والاتفاقيات المدنية والتجارية والاستثمارية ونحرص على فهم طبيعة الصفقة وأهدافها قبل صياغة إطارها القانوني بما يحقق التوازن بين حماية المصالح واستمرارية الأعمال والحد من المخاطر المحتملة.",
          },
          {
            title: "المشاريع والاستثمارات",
            description:
              "نرافق المشاريع منذ مراحلها الأولى ونقدم المشورة بشأن هيكلتها القانونية والتعاقدية واستكمال الموافقات والتراخيص وتنظيم العلاقات بين المستثمرين والشركاء والمطورين والمتعاقدين بما يوفر أساساً قانونياً واضحاً يدعم تنفيذ المشروع واستدامته.",
          },
          {
            title: "التقاضي وتسوية المنازعات",
            description:
              "نمثل عملاءنا في المنازعات المدنية والتجارية والإدارية والعمالية والجزائية أمام المحاكم والجهات القضائية والتحقيقية المختصة ونعتمد في إدارة النزاع على بناء استراتيجية قانونية تستند إلى دراسة الوقائع وتحليل الأدلة وتقييم المخاطر وتحديد المسار القانوني الأكثر ملاءمة لحماية حقوق ومصالح العميل.",
          },
          {
            title: "العقارات والتطوير العقاري",
            description:
              "نقدم المشورة القانونية في المعاملات والمشاريع العقارية والسكنية والتجارية والاستثمارية بما يشمل دراسة الملكية والتصرفات العقارية وإعداد ومراجعة عقود البيع والإيجار والاستثمار والتطوير وتنظيم العلاقات القانونية بين المستثمرين والمطورين والمتعاقدين ومتابعة الإجراءات ذات الصلة أمام الجهات المختصة.",
          },
          {
            title: "العمل والضمان الاجتماعي",
            description:
              "ندعم الشركات وأصحاب الأعمال في تنظيم علاقاتهم مع العاملين وإعداد ومراجعة عقود وسياسات العمل وتقديم المشورة بشأن الالتزامات القانونية والامتثال لمتطلبات العمل والضمان الاجتماعي وتمثيلهم في المنازعات والإجراءات المرتبطة بها.",
          },
          {
            title: "الإقامة وإجازات العمل وسمات الدخول",
            description:
              "نقدم الدعم القانوني للشركات والمستثمرين والعاملين الأجانب في العراق بشأن متطلبات الإقامة وإجازات العمل وسمات الدخول ومتابعة الإجراءات والموافقات اللازمة أمام الجهات المختصة بما يضمن تنظيم وجود وممارسة عمل الكوادر الأجنبية وفقاً للأطر القانونية والتنظيمية النافذة.",
          },
          {
            title: "التراخيص والامتثال التنظيمي",
            description:
              "نساعد الشركات والمستثمرين على فهم الأطر القانونية والتنظيمية التي تحكم أنشطتهم واستكمال التراخيص والموافقات والإجازات اللازمة ومتابعة الإجراءات أمام الوزارات والهيئات والجهات المختصة بما يدعم استمرارية أعمالهم ويحد من المخاطر القانونية والتنظيمية.",
          },
          {
            title: "الشؤون الضريبية والمالية",
            description:
              "نقدم الدعم القانوني في الشؤون الضريبية والمالية المرتبطة بأعمال الشركات والمستثمرين بما يشمل إجراءات التحاسب الضريبي وتنظيم الموقف الضريبي ومتابعة المعاملات والاعتراضات والمتطلبات ذات الصلة أمام الهيئة العامة للضرائب والجهات المختصة بما يعزز الامتثال ويحمي مصالح العميل.",
          },
          {
            title: "القطاع الصحي والمكاتب العلمية",
            description:
              "نقدم الدعم القانوني للشركات والمكاتب العلمية العاملة في قطاعات الأدوية والمستلزمات والأجهزة الطبية بما يشمل إجراءات التأسيس والتسجيل والتراخيص والموافقات وتنظيم العلاقات التعاقدية والامتثال للمتطلبات القانونية والتنظيمية ومتابعة الإجراءات أمام الجهات والنقابات والمؤسسات المختصة.",
          },
          {
            title: "الملكية الفكرية وحماية العلامات التجارية",
            description:
              "نقدم الدعم القانوني لحماية الحقوق والأصول الفكرية والتجارية لعملائنا بما يشمل تسجيل العلامات التجارية وتجديدها ومتابعة الاعتراضات والإجراءات القانونية المرتبطة بها والتصدي لحالات التعدي بما يسهم في حماية الهوية التجارية والقيمة المعنوية للأعمال.",
          },
        ],
      },
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
        address: "بغداد - الكرادة - عرصات الهندية",
        phone: "+964 774 646 4606",
        email: "al-remahLawfirm@outlook.com",
      },
    },
    // مركز الخدمات القانونية (بطاقات الرئيسية + صفحة مجالات الممارسة التفصيلية)
    servicesHub: {
      eyebrow: "خدماتنا",
      title: "خدماتنا القانونية الكاملة",
      intro:
        "صورة كاملة عن ممارستنا القانونية - 17 خدمة قانونية متخصصة تغطي احتياجات الأفراد والشركات والمستثمرين في العراق. اختر أي خدمة لعرض تفاصيلها الكاملة.",
      viewFullDetails: "عرض التفاصيل الكاملة ←",
      sidebarTitle: "جميع الخدمات",
      sidebarAriaLabel: "التنقل بين الخدمات",
      mobileSelectorLabel: "تصفح الخدمات",
      mobileSelectorHint: "اضغط لاختيار خدمة أخرى",
      ctaTitle: "هل تحتاج إلى مساعدة قانونية؟",
      ctaDescription: "تواصل مع فريقنا للحصول على استشارة تتناسب مع هذه الخدمة.",
      ctaButton: "طلب استشارة قانونية",
    },
    // صفحة تسجيل الشركات والمنظمات الأجنبية
    foreignEntitiesPage: {
      hero: {
        title: "تسجيل الشركات والمنظمات الأجنبية",
        subtitle:
          "ممارسة قانونية متخصصة للشركات والمستثمرين والمنظمات غير الحكومية الأجنبية الراغبة بدخول السوق العراقي.",
        breadcrumb: { home: "الرئيسية", current: "تسجيل الشركات والمنظمات الأجنبية" },
      },
      sections: [
        {
          title: "تسجيل وإدارة فروع الشركات الأجنبية في العراق",
          imageAlt: "أبراج مكاتب تجارية دولية ترمز إلى فروع الشركات الأجنبية في العراق",
          paragraphs: [
            "نعمل كشريك قانوني للشركات الأجنبية الراغبة في تأسيس حضورها وممارسة أعمالها في العراق ونوفر لها إدارة قانونية متكاملة تبدأ منذ مرحلة التخطيط لدخول السوق وتمتد إلى تسجيل الفرع ومباشرة نشاطه وإدارة متطلباته القانونية والتنظيمية طوال فترة عمله.",
            "نبدأ بفهم طبيعة أعمال الشركة ونشاطها والقطاع الذي تستهدفه ونحدد المتطلبات القانونية والتنظيمية اللازمة لوجودها في العراق ثم نتولى إعداد وتدقيق ملف تسجيل الفرع ومراجعة وثائق الشركة الأم واستكمال متطلبات التصديق والترجمة والإيداع ومتابعة إجراءات التسجيل أمام مسجل الشركات والجهات المختصة حتى استكمال الوجود القانوني للفرع ومباشرة أعماله.",
            "ويمتد دورنا إلى بناء البيئة القانونية اللازمة لتشغيل الفرع بعد التسجيل من خلال استكمال التسجيلات الضريبية ومتطلبات العمل والضمان الاجتماعي والتراخيص والموافقات القطاعية وتنظيم شؤون العاملين والكوادر الأجنبية ومتابعة الإقامة وإجازات العمل وسمات الدخول وغيرها من المتطلبات المرتبطة بطبيعة نشاط الشركة.",
            "كما نتولى تنظيم العلاقة القانونية والإدارية بين الفرع والشركة الأم وإعداد الوكالات والتفويضات والصلاحيات والقرارات والمخاطبات اللازمة ونقدم الدعم القانوني للإدارة المحلية في أعمالها اليومية وقراراتها ومعاملاتها وعلاقاتها مع الجهات الحكومية والعملاء والمقاولين والمجهزين ومقدمي الخدمات.",
            "وبالنسبة إلى الشركات العاملة في القطاعات المنظمة والمشاريع الحكومية والاستثمارية نتولى تسجيلها وتأهيلها ومتابعة متطلباتها أمام الوزارات والهيئات والشركات العامة والجهات القطاعية المختصة واستكمال ما تتطلبه طبيعة نشاطها من موافقات وتصنيفات وتسجيلات لازمة للمشاركة في المشاريع والمناقصات وممارسة الأعمال في العراق.",
            "ولا تنتهي علاقتنا بالشركة عند إصدار وثائق تسجيل الفرع بل نستمر في إدارة شؤونه القانونية والتنظيمية ومتابعة التجديدات والتغييرات والتراخيص والالتزامات الدورية وتمثيله أمام الجهات الرسمية والتنظيمية والقضائية ومعالجة المسائل القانونية التي ترافق نشاطه وتطوره في السوق.",
          ],
        },
        {
          title: "تأسيس وتسجيل المنظمات غير الحكومية (NGOs) الأجنبية والمحلية",
          imageAlt: "فريق دولي في اجتماع تنظيمي يرمز إلى تأسيس وحوكمة المنظمات غير الحكومية",
          paragraphs: [
            "نقدم للمنظمات غير الحكومية الوطنية والأجنبية إطاراً قانونياً متكاملاً لتأسيس وجودها وإدارة أعمالها في العراق بدءاً من مرحلة التسجيل وبناء هيكلها التنظيمي وصولاً إلى توفير إدارة قانونية مستمرة تواكب نشاطها وبرامجها وعلاقاتها مع الجهات الرسمية والأطراف ذات العلاقة.",
            "نتولى إعداد واستكمال ملف تسجيل المنظمة وصياغة نظامها الداخلي بما يعكس طبيعة أهدافها ونطاق عملها وينظم هيكلها الإداري وصلاحيات هيئاتها وآليات اتخاذ القرار والإدارة والتمثيل مع إعداد الوثائق والمتطلبات القانونية ومتابعة إجراءات التسجيل أمام دائرة المنظمات غير الحكومية والجهات المختصة حتى استكمال المركز القانوني اللازم لمباشرة النشاط.",
            "كما نوفر الحلول المتعلقة بمتطلبات المقر القانوني للمنظمة وننظم الأساس التعاقدي والإجرائي الخاص به بما يتوافق مع متطلبات التسجيل وممارسة النشاط.",
            "وبالنسبة إلى المنظمات غير الحكومية الأجنبية والدولية نوفر دعماً قانونياً مخصصاً لتنظيم وجودها في العراق واستكمال إجراءات تسجيلها وموافقاتها ومتطلباتها التنظيمية ومتابعة تعاملاتها مع الجهات الحكومية بما يساعدها على ممارسة برامجها وأنشطتها ضمن إطار قانوني واضح.",
            "ويمتد دورنا إلى ما بعد التسجيل من خلال تولي الإدارة القانونية الكاملة للمنظمة بما يشمل حوكمة أعمالها وتنظيم قرارات ومحاضر هيئاتها الإدارية وصياغة ومراجعة العقود والاتفاقيات ومذكرات التفاهم وإدارة علاقات العمل وشؤون الموظفين ومراجعة الالتزامات القانونية والتنظيمية ومتابعة متطلبات الضرائب والضمان الاجتماعي إلى جانب الإقامة وإجازات العمل وسمات الدخول للكوادر الأجنبية.",
          ],
        },
        {
          title: "الوكالات التجارية الأجنبية ودخول السوق العراقي",
          imageAlt: "ميناء شحن وتجارة دولية يرمز إلى الوكالات التجارية الأجنبية",
          paragraphs: [
            "نعمل كشريك قانوني للشركات الأجنبية الراغبة في دخول السوق العراقي وتسويق منتجاتها أو تقديم خدماتها من خلال الوكالات التجارية ونوفر لها الإطار القانوني والتنظيمي اللازم لبناء حضور تجاري منظم ومستقر في العراق.",
            "نبدأ بدراسة طبيعة أعمال الشركة والمنتجات أو الخدمات التي تعتزم طرحها في السوق العراقي ونحدد المتطلبات القانونية والتنظيمية المرتبطة بنشاطها وننظم العلاقة بينها وبين الوكيل التجاري العراقي بما يتلاءم مع طبيعة أعمالها واستراتيجيتها في السوق.",
            "ونتولى صياغة ومراجعة عقود الوكالة التجارية وتنظيم نطاقها ومدتها والحقوق والالتزامات المترتبة عليها وآليات التسويق والتوزيع وتقديم الخدمات وحماية العلامة التجارية والسرية والضمانات وحالات الإخلال والإنهاء بما يوفر للشركة الأجنبية إطاراً تعاقدياً واضحاً يحمي مصالحها وينظم علاقتها مع وكيلها في العراق.",
            "كما نتولى استكمال إجراءات تسجيل الوكالة التجارية وإعداد وتدقيق الوثائق والمستندات الأجنبية ومتابعة متطلبات التصديق والترجمة والتسجيل والحصول على الموافقات اللازمة أمام دائرة تسجيل الشركات والجهات المختصة وصولاً إلى استكمال المتطلبات القانونية لممارسة أعمال الوكالة في العراق.",
            "كما نتولى حماية المصالح التجارية للشركة الأجنبية وحقوقها المتعلقة بالعلامات التجارية والمنتجات وحقوق التوزيع والتمثيل ومراجعة التغييرات التي تطرأ على علاقة الوكالة ومعالجة حالات تعديلها أو تجديدها أو إنهائها وما يترتب عليها من آثار قانونية وتجارية.",
          ],
        },
        {
          title: "الإقامة وإجازات العمل وسمات الدخول للكوادر الأجنبية",
          imageAlt: "مسافر ينتظر في مطار يرمز إلى خدمات الإقامة وإجازات العمل للكوادر الأجنبية",
          paragraphs: [
            "نقدم للشركات والمستثمرين والكوادر الأجنبية في العراق إدارة قانونية متكاملة لمتطلبات الإقامة والعمل وسمات الدخول بما يضمن تنظيم وجود العاملين الأجانب وممارسة أعمالهم وفق الأطر القانونية والإجراءات المعتمدة لدى الجهات المختصة.",
            "نتولى إدارة الملف منذ مرحلة دخول الكادر الأجنبي إلى العراق من خلال تحديد المتطلبات والإجراءات المناسبة لطبيعة الزيارة أو العمل ومتابعة استحصال سمات الدخول والموافقات اللازمة واستكمال إجراءات الإقامة وتجديدها وتنظيم الوضع القانوني للأجانب طوال مدة وجودهم في العراق.",
            "كما نتولى إجراءات استحصال وتجديد إجازات العمل للعاملين الأجانب ومتابعة المتطلبات والموافقات والمخاطبات المرتبطة بها أمام وزارة العمل والشؤون الاجتماعية والجهات القطاعية والتنظيمية ذات العلاقة مع معالجة المسائل القانونية والإجرائية التي قد تطرأ خلال مدة العمل.",
            "وبالنسبة إلى الشركات الأجنبية والمشاريع التي تعتمد على كوادر دولية نوفر إدارة مستمرة لملفات العاملين الأجانب تشمل تنظيم ومتابعة مواعيد الإقامات وإجازات العمل وسمات الدخول والتجديدات والمتطلبات القانونية لكل موظف بما يساعد الشركات على ضمان استمرارية عمل كوادرها وتجنب التأخير أو المخالفات المرتبطة بوضعهم القانوني.",
          ],
        },
      ],
      cta: {
        title: "هل تخطط لدخول السوق العراقي؟",
        description:
          "تواصل مع فريقنا القانوني بخصوص تسجيل فرعك أو منظمتك أو وكالتك التجارية في العراق.",
        button: "طلب استشارة قانونية",
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
            q: "متى تكون الفرصة الاستثمارية في العراق فرصة تستحق الدخول ومتى يكون عدم الدخول هو القرار الأفضل؟",
            a: "ليس كل مشروع متاح فرصة مناسبة لكل مستثمر. قيمة القرار تبدأ من معرفة ما إذا كان النشاط والهيكل القانوني والمتطلبات التنظيمية والعقود والالتزامات والمخاطر تتوافق فعلاً مع أهداف المستثمر وقدرته على إدارتها.\n\nدور شركة الرماح ليس دفع العميل نحو الاستثمار، بل مساعدته على رؤية الصورة القانونية بوضوح كافٍ لاتخاذ قراره بثقة.",
          },
          {
            q: "إذا ربحت النزاع فهل تستطيع تحصيل ما ربحت؟",
            a: "الحكم الناجح لا يساوي دائماً نتيجة تجارية ناجحة. قيمة الحماية القانونية تبدأ قبل النزاع من دراسة الضمانات والأصول والطرف المقابل وآلية تسوية النزاع وإمكانية التنفيذ.\n\nلهذا لا نسأل فقط كيف نربح القضية، بل كيف تتحول النتيجة القانونية إلى حق يمكن تنفيذه فعلاً.",
          },
          {
            q: "لو عُرض عليك العقد نفسه اليوم ولكنك تعرف كيف ستنتهي العلاقة بعد خمس سنوات، فماذا كنت ستغير فيه؟",
            a: "هذا هو السؤال الذي نحاول الإجابة عنه قبل التوقيع. لا نستطيع معرفة المستقبل، لكن يمكننا اختبار العقد أمام سيناريوهات التأخير والإخلال وتغير الملكية وتعثر التمويل والنزاع والخروج.\n\nالصياغة القانونية الذكية لا تتنبأ بالمستقبل، لكنها تستعد لاحتمالاته.",
          },
          {
            q: "هل تعرف ما الذي تشتريه فعلاً عندما تشتري شركة؟",
            a: "شراء الأسهم لا يعني شراء الأصول والفرص فقط، بل قد يعني الدخول في تاريخ قانوني كامل من العقود والالتزامات والديون والضمانات والنزاعات والمخاطر التي نشأت قبل وصول المستثمر.\n\nلذلك لا تسأل شركة الرماح فقط عن قيمة ما سيملكه العميل بعد الصفقة، بل تبحث أيضاً عما قد ينتقل إليه معها من مسؤوليات.\n\nأحياناً أخطر ما تشتريه في الصفقة هو الشيء الذي لم يظهر في سعرها.",
          },
          {
            q: "إذا كان القرار يحتاج توقيع شخص واحد فلماذا قد يحتاج حماية شركة كاملة؟",
            a: "لأن توقيع المدير قد يرتب التزاماً على الشركة يمتد سنوات ويتجاوز مدة وجوده في منصبه.\n\nلهذا يجب أن تتناسب صلاحية اتخاذ القرار مع حجمه وآثاره، وأن تحيط القرارات الجوهرية بمستويات مناسبة من الاعتماد والتوثيق.\n\nقد يستغرق التوقيع ثانية، لكن أثره قد يعيش أطول ممن وقّعه.",
          },
          {
            q: "هل يمكن أن تخسر فرصة ممتازة لأن شركتك لم تكن جاهزة قانونياً بالسرعة الكافية؟",
            a: "نعم. بعض الفرص تحتاج قراراً سريعاً وفحصاً سريعاً ومستندات وصلاحيات وهيكلاً منظماً يسمح بإتمام الصفقة دون البدء بإصلاح الشركة أثناء التفاوض.",
          },
          {
            q: "إذا وجدت فرصة استثمارية ممتازة في العراق فكيف تعرف أن الوقت المناسب لدخولها هو الآن؟",
            a: "الفرصة لا تتحدد بجاذبية القطاع وحدها. توقيت الدخول يرتبط بجاهزية المستثمر والهيكل القانوني والتراخيص والعقود والتمويل والشركاء والقدرة على بدء التشغيل ضمن المسار المطلوب.\n\nتساعد شركة الرماح المستثمر على فهم المتطلبات القانونية والتنظيمية التي تسبق الدخول حتى يكون توقيت القرار مبنياً على الجاهزية لا على جاذبية الفرصة وحدها.\n\nفالفرصة الجيدة في التوقيت الخطأ قد تصبح قراراً مكلفاً.",
          },
          {
            q: "هل تعرف ما الذي سيجعل المستثمر القادم يثق بشركتك قبل أن يلتقي بك؟",
            a: "وضوح الملكية وانتظام السجلات والعقود والتراخيص والحوكمة والبيانات القانونية يعطي المستثمر صورة عن مستوى المؤسسة قبل أن تبدأ المفاوضات الجدية.\n\nالثقة في الأعمال لا تُبنى بالكلام وحده، بل بما تستطيع الشركة إثباته عندما تُفحص.",
          },
        ],
      },
      legal: {
        subtitle: "قانوني",
        title: "أسئلة قانونية",
        items: [
          {
            q: "كم يستغرق تسجيل فرع شركة أجنبية في العراق وما هي المتطلبات الأساسية؟",
            a: "تستغرق إجراءات التسجيل عادة ما بين 4 إلى 8 أسابيع، اعتماداً على اكتمال وثائق الشركة الأم وتصديقها من السفارة العراقية ووزارة الخارجية والترجمة الرسمية المعتمدة.\n\nتتضمن المتطلبات الأساسية: عقد تأسيس الشركة الأم ونظامها الداخلي، شهادة التسجيل الرسمية، الحسابات الختامية لآخر سنة مالية، وقرار مجلس الإدارة بفتح الفرع في العراق وتسمية المدير المفوض ومنحه الصلاحيات اللازمة لمراجعة دائرة تسجيل الشركات والجهات الرسمية.",
          },
          {
            q: "هل يُلزم القانون العراقي الشركات الأجنبية بوجود شريك محلي عراقي لممارسة الأعمال؟",
            a: "يتيح قانون الشركات العراقي وقانون الاستثمار للشركات الأجنبية فتح فروع ومكاتب تمثيل مملوكة بالكامل 100% للشركة الأم دون الحاجة لشريك عراقي.\n\nأما في حالة تأسيس شركات مساهمة أو محدودة محلية خارج إطار قانون الاستثمار، فقد تشترط بعض القطاعات نسب مساهمة وطنية محددة.\n\nيتولى فريق الرماح توجيه المستثمر نحو الهيكل القانوني الذي يضمن له السيطرة والمرونة الكاملة وفقاً لطبيعة نشاطه.",
          },
          {
            q: "كيف تحمي شركتك من مخاطر التقديرات والتحاسب الضريبي المفاجئ في العراق؟",
            a: "تبدأ الحماية الضريبية من لحظة صياغة العقود التجارية بتحديد من يتحمل الأمانات والاستقطاعات الضريبية، يتبعها انتظام مسك الدفاتر المحاسبية الرسمية وفتح الملف الضريبي وتقديم الإقرارات في مواعيدها المقررة قانوناً.\n\nمتابعة التحاسب الدوري واستخراج براءات الذمة سنوياً تحمي الشركة من التراكمات المالية والغرامات التأخيرية وقرارات التحاسب التقديري الجزافي التي تصدر في غياب توثيق منتظم.",
          },
          {
            q: "ما هي النسبة القانونية للعمالة المحلية المطلوبة عند تشغيل كوادر أجنبية في العراق؟",
            a: "يحدد قانون العمل العراقي رقم 37 لسنة 2015 والتعليمات الوزارية النافذة نسبة لا تقل عن 50% من الأيدي العاملة الوطنية في المشاريع العاملة داخل العراق، وتصل في بعض قطاعات النفط والتراخيص الخاصة إلى نسب أعلى.\n\nنساعد عملاءنا على إدارة ملف تشغيل الكوادر الأجنبية واستحصال إجازات العمل الرسمية لهم مع الامتثال التام لنسب العمالة الوطنية لتفادي أي مخالفات أو عقوبات تنظيمية.",
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
        phone: { title: "الهاتف", number: "+964 774 646 4606" },
        email: { title: "البريد الإلكتروني", address: "al-remahLawfirm@outlook.com" },
        address: { title: "العنوان", full: "بغداد - الكرادة - عرصات الهندية" },
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
        mainAddress: "بغداد - الكرادة - عرصات الهندية",
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
          "الاستشارات القانونية",
          "الشركات والأعمال التجارية",
          "الاستثمار الأجنبي والأعمال عبر الحدود",
          "العقود والصفقات التجارية",
          "التقاضي وتسوية المنازعات",
          "تسجيل الكيانات الأجنبية",
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
        address: "بغداد - الكرادة - عرصات الهندية",
        telLabel: "هاتف:",
        phone: "+964 774 646 4606",
        emailLabel: "بريد إلكتروني:",
        email: "al-remahLawfirm@outlook.com",
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
