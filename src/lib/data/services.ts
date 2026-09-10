import {
  Scale,
  Building2,
  Globe2,
  Fuel,
  FileCheck2,
  TrendingUp,
  Gavel,
  Landmark,
  UsersRound,
  Plane,
  ShieldCheck,
  BadgeDollarSign,
  HeartPulse,
  Copyright,
  HandHeart,
  Building,
  Factory,
  type LucideIcon,
} from "lucide-react";

/**
 * Canonical data source for all 17 approved Alremah legal services.
 *
 * This is the single source of truth consumed by:
 *  - Home page service cards
 *  - Services Hub sidebar
 *  - Services Hub detail view
 *
 * Do not duplicate this content elsewhere. UI components should always
 * map over `SERVICES` rather than hard-coding per-service markup.
 */

export interface ServiceLocaleContent {
  title: string;
  /** Short summary used on the Home page card. */
  summary: string;
  /** Full approved detailed content shown in the Services Hub. Paragraphs are split on "\n\n". */
  fullDescription: string;
  /** Alt text for the service image, localized. */
  imageAlt: string;
}

export interface ServiceDefinition {
  /** Stable slug id, used for routing / deep-linking. */
  id: string;
  /** Display order, "01".."17". */
  number: string;
  icon: LucideIcon;
  image: string;
  en: ServiceLocaleContent;
  ar: ServiceLocaleContent;
}

export const SERVICES: ServiceDefinition[] = [
  {
    id: "legal-consultations",
    number: "01",
    icon: Scale,
    image: "/images/services/01-legal-consultations.jpg",
    ar: {
      title: "الاستشارات القانونية",
      summary:
        "نقدم استشارات قانونية متخصصة للأفراد والشركات والمؤسسات تستند إلى دراسة دقيقة للوقائع وفهم الأطر القانونية والتنظيمية وبيئة الأعمال بما يساعد عملاءنا على اتخاذ قرارات مدروسة واستباق المخاطر ومعالجة المسائل القانونية بكفاءة ووضوح.",
      fullDescription: `نقدم استشارات قانونية متخصصة تستند إلى فهم عميق للتشريعات والبيئة التنظيمية وواقع الأعمال في العراق ونساعد عملاءنا على التعامل مع المسائل القانونية المعقدة واتخاذ قرارات مدروسة تحمي مصالحهم وتدعم أهدافهم التجارية والاستثمارية.

تنطلق منهجيتنا من فهم طبيعة أعمال العميل وأهدافه ودراسة الوقائع والمستندات ذات الصلة وتحليل المركز القانوني والخيارات المتاحة وتقييم المخاطر والآثار المحتملة لكل مسار وصولاً إلى تقديم رأي قانوني واضح وحلول عملية قابلة للتنفيذ تتناسب مع طبيعة المسألة ومتطلبات العمل.

تشمل خدماتنا تقديم الآراء والمذكرات والدراسات القانونية وتفسير التشريعات والأنظمة والتعليمات والقرارات ذات الصلة وتقييم المخاطر القانونية والتنظيمية ودعم الإدارات التنفيذية وأصحاب الأعمال والمستثمرين في القرارات والمعاملات التي تتطلب رؤية قانونية متخصصة إلى جانب تقديم الدعم والاستشارات القانونية المستمرة للشركات في أعمالها ومعاملاتها اليومية.

ولا نتعامل مع الاستشارة القانونية باعتبارها إجابة عن مسألة قانونية فحسب بل باعتبارها جزءاً من عملية اتخاذ القرار وإدارة المخاطر حيث نجمع بين المعرفة القانونية والبصيرة التجارية وفهم البيئة المحلية لتقديم حلول تساعد عملاءنا على استباق التحديات وحماية مصالحهم وممارسة أعمالهم بثقة ووضوح.`,
      imageAlt: "استشارة قانونية بين محامٍ وعميل حول طاولة مكتب",
    },
    en: {
      title: "Legal Consultations",
      summary:
        "We provide specialized legal consultations for individuals, companies, and institutions, grounded in a careful study of the facts and a clear understanding of the legal and regulatory frameworks and the business environment — helping our clients make informed decisions, anticipate risk, and handle legal matters efficiently and clearly.",
      fullDescription: `We provide specialized legal consultations grounded in a deep understanding of the legislation, the regulatory environment, and the realities of doing business in Iraq, helping our clients navigate complex legal matters and make informed decisions that protect their interests and support their commercial and investment objectives.

Our methodology begins with understanding the nature of the client's business and objectives, studying the relevant facts and documents, analyzing the legal position and the options available, and assessing the risks and likely consequences of each course of action — culminating in a clear legal opinion and practical, implementable solutions suited to the nature of the matter and the needs of the business.

Our services include legal opinions, memoranda, and studies; interpreting legislation, regulations, instructions, and decisions; assessing legal and regulatory risk; and supporting executive management, business owners, and investors in decisions and transactions that require specialized legal insight, alongside ongoing legal support and advice to companies in their day-to-day business and transactions.

We do not treat a legal consultation merely as an answer to a legal question, but as part of the decision-making and risk-management process. We combine legal knowledge, commercial insight, and an understanding of the local environment to deliver solutions that help our clients stay ahead of challenges, protect their interests, and conduct their business with confidence and clarity.`,
      imageAlt: "Legal consultation between a lawyer and a client at a desk",
    },
  },
  {
    id: "companies-commercial-business",
    number: "02",
    icon: Building2,
    image: "/images/services/02-companies-commercial.jpg",
    ar: {
      title: "الشركات والأعمال التجارية",
      summary:
        "نتولى تأسيس وتسجيل الشركات الوطنية وتنظيم هياكلها القانونية وشؤون الشركاء والمساهمين وإعداد القرارات والتعديلات وتقديم المشورة القانونية المستمرة بما يدعم أعمالها ونموها ويحمي مصالحها.",
      fullDescription: `نؤمن بأن العلاقة مع الشركات لا تبدأ بمعاملة قانونية وتنتهي بإنجازها بل تقوم على شراكة قانونية مستمرة تواكب أعمال الشركة منذ تأسيسها وتدعم إدارتها في مختلف مراحل نموها وتطورها.

نعمل كشريك قانوني لعملائنا منذ الخطوات الأولى لتأسيس الشركة من خلال اختيار الهيكل القانوني الملائم لطبيعة الأعمال وتنظيم العلاقة بين الشركاء والمساهمين وإعداد متطلبات ووثائق التأسيس واستكمال إجراءات التسجيل والموافقات اللازمة وصولاً إلى مباشرة الشركة لنشاطها على أساس قانوني وتنظيمي سليم.

وتمتد شراكتنا إلى ما بعد التأسيس من خلال تولي الإدارة القانونية المتكاملة للشركة وإدارة شؤونها القانونية والتنظيمية ومتابعة معاملاتها وتمثيلها أمام تسجيل الشركات والهيئة العامة للضرائب وغرف التجارة ودائرة التقاعد والضمان الاجتماعي للعمال والوزارات والهيئات والجهات الحكومية والتنظيمية ذات العلاقة بأعمالها.

كما نعمل إلى جانب الإدارة التنفيذية في تنظيم الشؤون القانونية الداخلية وإعداد قرارات الشركاء والمساهمين ومحاضر الاجتماعات وإدارة التغييرات التي تطرأ على هيكل الملكية والإدارة ورأس المال والأنشطة فضلاً عن صياغة ومراجعة العقود والاتفاقيات وتقديم المشورة بشأن القرارات والمعاملات والمسائل القانونية المرتبطة بالأعمال اليومية والخطط المستقبلية للشركة.

ونتابع بصورة مستمرة التزامات الشركة القانونية والتنظيمية ومتطلبات الامتثال والتراخيص والتجديدات والشؤون الضريبية والعمالية والضمان الاجتماعي بما يساعد على استباق المخاطر والمحافظة على سلامة المركز القانوني للشركة واستمرارية أعمالها.

هدفنا أن نكون جزءاً من منظومة أعمال العميل وشريكاً قانونياً طويل الأمد يوفر للإدارة رؤية قانونية واضحة ومرجعية متكاملة لاتخاذ القرارات وإدارة الالتزامات والمخاطر وحماية مصالح الشركة بما يدعم استقرارها ونموها بثقة.`,
      imageAlt: "اجتماع مجلس إدارة شركة حول طاولة اجتماعات",
    },
    en: {
      title: "Companies and Commercial Business",
      summary:
        "We handle the incorporation and registration of Iraqi companies, structure their legal frameworks and partner and shareholder affairs, prepare resolutions and amendments, and provide ongoing legal counsel that supports their business, growth, and interests.",
      fullDescription: `We believe the relationship with a company does not begin and end with a single legal transaction; it is built on an ongoing legal partnership that accompanies the company from its incorporation and supports its management through every stage of its growth and development.

We act as legal partner to our clients from the earliest steps of incorporation — selecting the legal structure suited to the nature of the business, organizing the relationship between partners and shareholders, preparing the incorporation requirements and documents, and completing registration procedures and the necessary approvals, through to the company commencing its activity on a sound legal and regulatory footing.

Our partnership extends beyond incorporation through comprehensive ongoing legal management of the company — handling its legal and regulatory affairs, following up its transactions, and representing it before the Companies Registrar, the General Commission for Taxes, chambers of commerce, the Retirement and Social Security Department for Workers, and the ministries, authorities, and government and regulatory bodies relevant to its business.

We also work alongside executive management to organize internal legal affairs, prepare partner and shareholder resolutions and meeting minutes, and manage changes to ownership structure, management, capital, and activities, in addition to drafting and reviewing contracts and agreements and advising on decisions, transactions, and legal matters connected to the company's day-to-day business and future plans.

We continuously monitor the company's legal and regulatory obligations, compliance requirements, licenses and renewals, and tax, labor, and social security matters, helping to anticipate risk and preserve the soundness of the company's legal standing and the continuity of its business.

Our goal is to become part of the client's business ecosystem and a long-term legal partner that gives management a clear legal view and an integrated reference point for decision-making, managing obligations and risk, and protecting the company's interests in support of its stability and confident growth.`,
      imageAlt: "Corporate boardroom meeting around a conference table",
    },
  },
  {
    id: "foreign-investment-cross-border",
    number: "03",
    icon: Globe2,
    image: "/images/services/03-foreign-investment.jpg",
    ar: {
      title: "الاستثمار الأجنبي والأعمال عبر الحدود",
      summary:
        "نرافق المستثمرين الأجانب في دخول السوق العراقي ونوفر المعرفة القانونية والتنظيمية اللازمة لممارسة نشاطهم بثقة، بدءاً من تسجيل الفروع وهيكلة الاستثمارات وصولاً إلى التراخيص والامتثال التنظيمي.",
      fullDescription: `نعمل كشريك قانوني للشركات والمستثمرين الأجانب الراغبين في دخول السوق العراقي وتأسيس أو توسيع أعمالهم فيه ونوفر لهم رؤية قانونية وتنظيمية متكاملة تساعدهم على فهم بيئة الاستثمار وممارسة أعمالهم ضمن إطار قانوني واضح ومستقر.

نرافق عملاءنا منذ مرحلة دراسة الدخول إلى السوق من خلال تحديد الهيكل القانوني والاستثماري الأنسب لطبيعة النشاط وتقديم المشورة بشأن خيارات تأسيس الشركات أو تسجيل فروع ومكاتب الشركات الأجنبية وتنظيم العلاقة مع الشركاء المحليين ودراسة المتطلبات والقيود التنظيمية المرتبطة بالقطاع الذي يعمل فيه المستثمر.

ونتولى استكمال إجراءات التسجيل والحصول على التراخيص والإجازات والموافقات اللازمة ومتابعة المعاملات أمام مسجل الشركات والهيئات الاستثمارية والوزارات والجهات الحكومية والتنظيمية ذات العلاقة إلى جانب تنظيم الجوانب القانونية المرتبطة بالضرائب والعمل والضمان الاجتماعي وإقامة العاملين الأجانب وإجازات العمل وسمات الدخول وغيرها من المتطلبات التي ترافق ممارسة النشاط في العراق.

كما نقدم الدعم القانوني في هيكلة الاستثمارات والصفقات والمشاريع المشتركة وصياغة ومراجعة العقود والاتفاقيات وتنظيم العلاقات مع الشركاء والموردين والمتعاقدين ودراسة الالتزامات والمخاطر القانونية والتنظيمية المرتبطة بالمعاملات والاستثمارات العابرة للحدود.

وتمتد شراكتنا إلى ما بعد دخول المستثمر إلى السوق من خلال توفير الدعم القانوني المستمر لأعماله ومتابعة التزاماته ومتطلباته التنظيمية والعمل إلى جانب إدارته المحلية والدولية لمعالجة المسائل القانونية التي تنشأ أثناء ممارسة النشاط.`,
      imageAlt: "أبراج أعمال دولية ترمز للاستثمار الأجنبي عبر الحدود",
    },
    en: {
      title: "Foreign Investment and Cross-Border Business",
      summary:
        "We accompany foreign investors entering the Iraqi market and provide the legal and regulatory knowledge needed to operate with confidence — from branch registration and investment structuring through to licensing and regulatory compliance.",
      fullDescription: `We act as legal partner to foreign companies and investors seeking to enter the Iraqi market and establish or expand their business in it, providing them with an integrated legal and regulatory view that helps them understand the investment environment and operate within a clear and stable legal framework.

We accompany our clients from the market-entry study stage by identifying the legal and investment structure best suited to the nature of the activity, advising on options for incorporating companies or registering branches and offices of foreign companies, organizing the relationship with local partners, and studying the regulatory requirements and restrictions associated with the investor's sector.

We handle registration procedures and obtaining the necessary licenses, permits, and approvals, and follow up transactions before the Companies Registrar, investment authorities, ministries, and relevant government and regulatory bodies, alongside organizing the legal aspects related to taxes, labor and social security, the residency of foreign employees, work permits, and entry visas, and other requirements that accompany doing business in Iraq.

We also provide legal support in structuring investments, transactions, and joint projects, drafting and reviewing contracts and agreements, organizing relationships with partners, suppliers, and contractors, and studying the legal obligations and risks associated with cross-border transactions and investments.

Our partnership extends beyond the investor's market entry through ongoing legal support for their business, following up their obligations and regulatory requirements, and working alongside their local and international management to address legal matters that arise while carrying out the activity.`,
      imageAlt: "International business towers symbolizing cross-border investment",
    },
  },
  {
    id: "oil-gas-energy",
    number: "04",
    icon: Fuel,
    image: "/images/services/04-oil-gas-energy.jpg",
    ar: {
      title: "النفط والغاز والطاقة",
      summary:
        "نقدم الدعم القانوني المتخصص لشركات النفط والغاز والطاقة وخدمات الحقول عبر صياغة العقود التخصصية ودعم المناقصات ومتابعة التأهيل لدى الجهات القطاعية وإدارة المطالبات والنزاعات التعاقدية.",
      fullDescription: `يمثل قطاع النفط والغاز والطاقة أحد أكثر القطاعات ارتباطاً بالأطر التنظيمية والتعاقدية المتخصصة في العراق ونقدم في الرماح دعماً قانونياً متكاملاً للشركات النفطية وشركات خدمات الحقول والمقاولين والمجهزين والمستثمرين العاملين في هذا القطاع بما يساعدهم على الدخول إلى السوق العراقي وإدارة أعمالهم ومشاريعهم وفق المتطلبات القانونية والتنظيمية المعمول بها.

نساعد الشركات المحلية والأجنبية على بناء حضورها القانوني في القطاع بدءاً من تأسيس الكيان القانوني أو تسجيل فرع الشركة الأجنبية واستكمال التسجيل والتأهيل لدى وزارة النفط والجهات والشركات التابعة لها وشركة تسويق النفط SOMO وشركات الاستخراج والتصفية والتوزيع وغيرها من الجهات القطاعية ذات العلاقة ومتابعة متطلبات التصنيف والتأهيل والتسجيل اللازمة بحسب طبيعة النشاط والخدمات التي تقدمها الشركة.

ونقدم المشورة القانونية بشأن المناقصات والعطاءات والمشاريع النفطية منذ مرحلة دراسة وثائق المناقصة ومتطلبات التأهيل والشروط القانونية والتجارية مروراً بمراجعة العطاءات والضمانات والتعهدات وصولاً إلى مرحلة التعاقد وتنفيذ المشروع وإدارة الالتزامات والمطالبات التي قد تنشأ خلال مدة العقد.

وتشمل خبرتنا صياغة ومراجعة والتفاوض بشأن عقود الخدمات النفطية وخدمات الحقول والحفر والتجهيز والمقاولات الهندسية والإنشاء والتشغيل والصيانة والنقل والخدمات اللوجستية والعقود من الباطن واتفاقيات الشراكة والمشاريع المشتركة وغيرها من الترتيبات التعاقدية المرتبطة بسلسلة أعمال النفط والغاز والطاقة.

كما ندعم عملاءنا في المسائل التنظيمية المصاحبة لتنفيذ المشاريع بما يشمل الموافقات والتراخيص والالتزامات الضريبية والكمركية والعمالية ومتطلبات تشغيل الكوادر المحلية والأجنبية وإجازات العمل والإقامة وتنظيم العلاقات مع المقاولين والمجهزين ومقدمي الخدمات والجهات المتعاقدة.

وتمتد خدماتنا إلى إدارة المطالبات والتغييرات التعاقدية وتمديد المدد والنزاعات الناشئة عن التنفيذ وتفسير الالتزامات التعاقدية وتقييم المخاطر والمسؤوليات وتمثيل مصالح العميل أمام الجهات ذات العلاقة والمحاكم والجهات المختصة.`,
      imageAlt: "منشأة طاقة وحقول تمثل قطاع النفط والغاز",
    },
    en: {
      title: "Oil, Gas and Energy",
      summary:
        "We provide specialized legal support to oil, gas, energy, and oilfield services companies through drafting specialized contracts, supporting tenders, following up qualification before sector authorities, and managing contractual claims and disputes.",
      fullDescription: `The oil, gas, and energy sector is one of the sectors most closely tied to specialized regulatory and contractual frameworks in Iraq. At Alremah, we provide integrated legal support to oil companies, oilfield services companies, contractors, suppliers, and investors operating in this sector, helping them enter the Iraqi market and manage their business and projects in line with the applicable legal and regulatory requirements.

We help local and foreign companies build their legal presence in the sector, starting from incorporating the legal entity or registering the foreign company's branch, completing registration and qualification before the Ministry of Oil and its affiliated bodies and companies, the State Oil Marketing Company (SOMO), extraction, refining, and distribution companies, and other relevant sector bodies, and following up the classification, qualification, and registration requirements needed according to the nature of the company's activity and services.

We provide legal advice on tenders, bids, and oil projects, from studying tender documents, qualification requirements, and legal and commercial conditions, through reviewing bids, guarantees, and undertakings, to the contracting stage, project execution, and managing the obligations and claims that may arise during the contract term.

Our experience includes drafting, reviewing, and negotiating oilfield services contracts, drilling and equipment services, engineering, construction, operation and maintenance contracts, transport and logistics services, subcontracts, partnership agreements, and joint ventures, along with other contractual arrangements connected to the oil, gas, and energy value chain.

We also support our clients on the regulatory matters that accompany project execution, including approvals and licenses, tax and customs and labor obligations, requirements for employing local and foreign personnel, work permits and residency, and organizing relationships with contractors, suppliers, service providers, and contracting parties.

Our services extend to managing claims and contractual changes, extensions of time, disputes arising from execution, interpreting contractual obligations, assessing risks and liabilities, and representing the client's interests before the relevant authorities, courts, and competent bodies.`,
      imageAlt: "Energy infrastructure and fields representing the oil and gas sector",
    },
  },
  {
    id: "contracts-commercial-deals",
    number: "05",
    icon: FileCheck2,
    image: "/images/services/05-contracts-deals.jpg",
    ar: {
      title: "العقود والصفقات التجارية",
      summary:
        "صياغة ومراجعة والتفاوض بشأن العقود التجارية والاستثمارية بما يحوّل التفاهمات إلى التزامات قانونية دقيقة، مع تحليل المخاطر واقتراح الشروط الضامنة لحقوق العميل قبل التوقيع.",
      fullDescription: `نقدم خدمات متخصصة في صياغة ومراجعة العقود والاتفاقيات بما يضمن تحويل التفاهمات التجارية بين الأطراف إلى التزامات قانونية واضحة ودقيقة تحمي مصالح عملائنا وتحدد حقوقهم والتزاماتهم وتحد من احتمالات النزاع مستقبلاً.

نعتمد في صياغة العقود على فهم طبيعة العلاقة والصفقة وأهداف العميل قبل بناء الإطار القانوني لها مع تحديد الالتزامات والمسؤوليات وآليات السداد والتنفيذ والضمانات وحالات الإخلال والإنهاء والفسخ وتسوية المنازعات وغيرها من الأحكام التي تضمن وضوح العلاقة التعاقدية وسلامة تنفيذها.

نتولى صياغة ومراجعة والتفاوض بشأن العقود المدنية والتجارية والاستثمارية واتفاقيات بيع وشراء الأسهم والحصص واتفاقيات الشراكة والمساهمين والمشاريع المشتركة وعقود الاستثمار والتطوير والمقاولات والتجهيز والتوزيع والوكالات والخدمات والإيجار وغيرها من العقود المرتبطة بأعمال الشركات ومشاريعها.

كما نراجع العقود المقدمة لعملائنا قبل التوقيع عليها ونحلل الالتزامات والمخاطر القانونية والمالية المترتبة عليها ونقترح التعديلات والشروط والضمانات اللازمة لتعزيز المركز التعاقدي للعميل وحماية مصالحه.

ونعمل إلى جانب عملائنا خلال مراحل التفاوض والتوقيع والتنفيذ ونقدم الدعم القانوني بشأن تعديل العقود وإعداد الملاحق وتفسير أحكامها ومعالجة حالات الإخلال والمطالبات والخلافات التي قد تنشأ أثناء تنفيذها.

نؤمن بأن العقد المصاغ بعناية لا يقتصر دوره على تنظيم العلاقة بين الأطراف بل يشكل أداة لحماية الأعمال وإدارة المخاطر وتحقيق الاستقرار في العلاقات والصفقات التجارية.`,
      imageAlt: "توقيع عقد تجاري بين طرفين",
    },
    en: {
      title: "Contracts and Commercial Deals",
      summary:
        "We draft, review, and negotiate commercial and investment contracts, turning business understandings into precise legal obligations — analyzing risk and proposing the terms that safeguard the client's rights before signature.",
      fullDescription: `We provide specialized services in drafting and reviewing contracts and agreements, ensuring that commercial understandings between parties are turned into clear and precise legal obligations that protect our clients' interests, define their rights and obligations, and reduce the likelihood of future disputes.

In drafting contracts, we rely on understanding the nature of the relationship, the transaction, and the client's objectives before building the legal framework for it, defining obligations and responsibilities, payment and performance mechanisms, guarantees, cases of breach, termination and rescission, dispute resolution, and other provisions that ensure the clarity of the contractual relationship and the soundness of its performance.

We draft, review, and negotiate civil, commercial, and investment contracts, share and equity sale and purchase agreements, partnership and shareholder agreements, joint venture agreements, investment and development contracts, construction contracts, supply, distribution, and agency agreements, service contracts, lease agreements, and other contracts connected to companies' business and projects.

We also review contracts presented to our clients before they are signed, analyze the legal and financial obligations and risks they entail, and propose the amendments, terms, and guarantees necessary to strengthen the client's contractual position and protect their interests.

We work alongside our clients through the negotiation, signature, and execution stages and provide legal support on amending contracts, preparing addenda, interpreting their provisions, and addressing breaches, claims, and disputes that may arise during their execution.

We believe that a carefully drafted contract does not merely organize the relationship between the parties, but is a tool for protecting the business, managing risk, and achieving stability in commercial relationships and deals.`,
      imageAlt: "Commercial contract signing between two parties",
    },
  },
  {
    id: "projects-investments",
    number: "06",
    icon: TrendingUp,
    image: "/images/services/06-projects-investments.jpg",
    ar: {
      title: "المشاريع والاستثمارات التجارية والعقارية",
      summary:
        "إدارة قانونية متكاملة للمشاريع الاستثمارية من مرحلة التخطيط والترخيص إلى التنفيذ والتشغيل، مع إمكانية تخصيص كادر قانوني مقيم في موقع المشروع لمواكبة احتياجاته اليومية.",
      fullDescription: `نقدم نموذجاً متكاملاً للإدارة القانونية للمشاريع والاستثمارات يقوم على مرافقة المشروع قانونياً منذ مرحلة التخطيط والتأسيس وحتى التنفيذ والتشغيل والتوسع مع إمكانية تخصيص كادر قانوني دائم ومقيم في موقع المشروع يعمل بصورة مباشرة إلى جانب الإدارة التنفيذية والفنية والمالية ويتولى إدارة الاحتياجات القانونية والتنظيمية والتعاقدية اليومية للمشروع.

نبدأ بدراسة المشروع وبناء هيكله القانوني والاستثماري وتحديد المتطلبات التنظيمية والتراخيص والموافقات اللازمة ودراسة الأراضي والأصول والحقوق المرتبطة به وتقييم المخاطر القانونية قبل الدخول في الالتزامات الرئيسية بما يوفر أساساً قانونياً واضحاً تستند إليه مراحل التنفيذ اللاحقة.

ونتولى الإدارة القانونية الكاملة للمشروع أمام الهيئة الوطنية للاستثمار وهيئات الاستثمار والوزارات والبلديات والدوائر والهيئات والجهات القطاعية والتنظيمية ذات العلاقة ومتابعة الإجازات الاستثمارية والتخصيصات والموافقات والتراخيص والمخاطبات والإجراءات القانونية التي يتطلبها المشروع خلال مختلف مراحل تنفيذه.

كما نقوم ببناء وإدارة المنظومة التعاقدية للمشروع من خلال صياغة ومراجعة والتفاوض بشأن عقود الاستثمار والتطوير والشراكة والتمويل والمقاولات والتجهيز والإدارة والتشغيل والعقود من الباطن وتنظيم العلاقات القانونية بين المستثمرين والمطورين والمقاولين والمجهزين والاستشاريين ومقدمي الخدمات.

ويتيح وجود الكادر القانوني داخل المشروع التعامل المباشر مع المسائل القانونية فور نشوئها ومراقبة تنفيذ الالتزامات التعاقدية وتوثيق الوقائع والمخاطبات وحماية المراكز القانونية ومتابعة المدد والضمانات والمطالبات والتغييرات والتأخيرات بما يساعد على استباق المخاطر قبل تحولها إلى نزاعات أو التزامات تؤثر في كلفة المشروع أو برنامجه التنفيذي.`,
      imageAlt: "موقع مشروع تطوير عقاري واستثماري قيد الإنشاء",
    },
    en: {
      title: "Commercial and Real Estate Projects and Investments",
      summary:
        "Integrated legal management for investment projects, from planning and licensing through execution and operation, with the option of dedicated on-site legal staff to keep pace with the project's day-to-day needs.",
      fullDescription: `We provide an integrated model for the legal management of projects and investments, built on accompanying the project legally from planning and incorporation through execution, operation, and expansion, with the option to assign permanent legal staff resident at the project site who work directly alongside executive, technical, and financial management and handle the project's day-to-day legal, regulatory, and contractual needs.

We begin by studying the project, building its legal and investment structure, identifying the regulatory requirements and the necessary licenses and approvals, studying the land, assets, and rights connected to it, and assessing legal risk before entering into the principal obligations — providing a clear legal foundation on which the subsequent execution stages rest.

We handle the project's complete legal management before the National Investment Commission, investment authorities, ministries, municipalities, departments, and relevant sector and regulatory bodies, and follow up the investment licenses, allocations, approvals, permits, correspondence, and legal procedures the project requires throughout its various execution stages.

We also build and manage the project's contractual framework by drafting, reviewing, and negotiating investment, development, partnership, and finance contracts, construction, supply, management, and operation contracts, and subcontracts, and by organizing the legal relationships between investors, developers, contractors, suppliers, consultants, and service providers.

Having legal staff on-site allows legal matters to be handled directly as soon as they arise, monitoring the performance of contractual obligations, documenting facts and correspondence, protecting legal positions, and following up time limits, guarantees, claims, changes, and delays — helping to anticipate risk before it turns into disputes or obligations that affect the project's cost or execution schedule.`,
      imageAlt: "Real estate and investment development project under construction",
    },
  },
  {
    id: "litigation-dispute-resolution",
    number: "07",
    icon: Gavel,
    image: "/images/services/07-litigation-disputes.jpg",
    ar: {
      title: "التقاضي وتسوية المنازعات",
      summary:
        "تمثيل قضائي رصين في المنازعات التجارية والمدنية والإدارية والعمالية والجزائية، مع التركيز على مرحلة ما بعد الحكم وتحصيل الحقوق فعلياً عبر دوائر التنفيذ.",
      fullDescription: `نتولى التوكل والتمثيل القانوني عن الشركات والمؤسسات والمستثمرين والأفراد في مختلف الدعاوى والمنازعات أمام المحاكم والجهات القضائية المختصة في العراق مستندين إلى خبرة عملية في المرافعة وإدارة الخصومات القضائية بمختلف درجاتها ومراحلها.

تغطي ممارستنا نطاقاً واسعاً من الدعاوى المدنية والجزائية والتجارية ودعاوى الأحوال الشخصية فضلاً عن منازعات الشركات والاستثمار والعقارات والعمل والملكية الفكرية وقضايا النشر والإعلام والمطالبات المالية والتعويضات وغيرها من القضايا ذات الاختصاص العام والمتخصص.

نتولى القضية منذ لحظة التكليف بها من خلال دراسة الوقائع والأدلة والمستندات وتقدير المركز القانوني للعميل وتحديد مسار الدعوى وإعداد المرافعات والدفوع واتخاذ الإجراءات التي تقتضيها حماية الحقوق مع متابعة جميع مراحل التحقيق والمحاكمة وممارسة طرق الطعن المقررة قانوناً.

كما نتولى التفاوض والتسوية والمصالحة في المنازعات التي تسمح طبيعتها بذلك ونصوغ الحلول القانونية التي تحفظ الحقوق وتنهي النزاع متى كانت التسوية تمثل المسار الأنسب لمصلحة العميل.

ويمتد تمثيلنا إلى مرحلة تنفيذ الأحكام والقرارات القضائية واستيفاء الحقوق بما يوفر للعميل مظلة قانونية متكاملة من بدء النزاع وحتى حسمه وتنفيذ نتائجه.`,
      imageAlt: "مطرقة قاضٍ ترمز إلى التقاضي وتسوية المنازعات",
    },
    en: {
      title: "Litigation and Dispute Resolution",
      summary:
        "Rigorous judicial representation in commercial, civil, administrative, labor, and criminal disputes, with particular focus on the post-judgment stage and the actual recovery of rights through execution departments.",
      fullDescription: `We act as legal counsel and representative for companies, institutions, investors, and individuals in various lawsuits and disputes before the courts and competent judicial authorities in Iraq, drawing on hands-on experience in pleading and managing judicial proceedings across their various levels and stages.

Our practice covers a wide range of civil, criminal, and commercial lawsuits and personal-status cases, as well as company, investment, real estate, labor, and intellectual property disputes, publishing and media cases, financial claims and compensation, and other matters of general and specialized jurisdiction.

We take charge of a case from the moment we are instructed, studying the facts, evidence, and documents, assessing the client's legal position, determining the course of the lawsuit, preparing pleadings and defenses, and taking the measures required to protect the client's rights, while following up all stages of investigation and trial and pursuing the legally established avenues of appeal.

We also handle negotiation, settlement, and conciliation in disputes whose nature allows for it, and formulate legal solutions that preserve rights and end the dispute where settlement represents the most suitable course for the client's interest.

Our representation extends to the enforcement of judgments and judicial decisions and the actual recovery of rights, providing the client with an integrated legal umbrella from the start of the dispute through its resolution and the execution of its outcome.`,
      imageAlt: "A judge's gavel representing litigation and dispute resolution",
    },
  },
  {
    id: "real-estate-property-development",
    number: "08",
    icon: Landmark,
    image: "/images/services/08-real-estate-development.jpg",
    ar: {
      title: "العقارات والتطوير العقاري",
      summary:
        "منظومة قانونية متكاملة للمطورين العقاريين وأصحاب المشاريع السكنية والتجارية والفندقية تشمل فحص الملكية وصياغة عقود البيع والتطوير ومتابعة إجراءات التسجيل العقاري.",
      fullDescription: `نقدم منظومة قانونية متكاملة لقطاع العقارات والتطوير العقاري تشمل إدارة الجوانب القانونية للمشاريع والأصول العقارية بمختلف أنواعها ونخدم المستثمرين والمطورين العقاريين وأصحاب الإجازات الاستثمارية ومالكي المجمعات السكنية والمباني التجارية والمشاريع الفندقية منذ مرحلة تطوير المشروع وحتى إدارته وتشغيله واستثماره.

نتولى الإدارة القانونية للمجمعات السكنية والمشاريع العقارية والاستثمارية والأبنية والمجمعات التجارية والفنادق من خلال تنظيم ومتابعة جميع العلاقات القانونية والتعاقدية المرتبطة بالمشروع وإدارة العقود والمراسلات والمطالبات والالتزامات القانونية والتعامل مع المسائل التي تنشأ بين المالك والمطور والمستثمر والمقاولين والمستفيدين والمستأجرين ومقدمي الخدمات.

ونقدم للمطورين العقاريين وأصحاب الإجازات الاستثمارية دعماً قانونياً متخصصاً في بناء المنظومة التعاقدية للمشروع وصياغة عقود التطوير والاستثمار والمشاركة وعقود بيع الوحدات السكنية والتجارية وعقود الإيجار والإدارة والتشغيل والخدمات.

كما نرافق المشاريع العقارية في إجراءاتها أمام الهيئة الوطنية للاستثمار وهيئات الاستثمار ودوائر التسجيل العقاري والبلديات والجهات الحكومية والتنظيمية ذات العلاقة ونتابع الإجازات والموافقات والتخصيصات والتسجيل ونقل الملكية والإجراءات القانونية التي تقتضيها طبيعة كل مشروع.

ونولي الفحص القانوني للعقارات والأراضي أهمية أساسية عند الاستحواذ أو الاستثمار أو التطوير من خلال التحقق من الملكية والقيود والحقوق والتصرفات والالتزامات القائمة وتقييم سلامة المركز القانوني للأصل العقاري قبل ترتيب الالتزامات الاستثمارية أو التعاقدية عليه.`,
      imageAlt: "مبنى سكني وتجاري حديث يمثل التطوير العقاري",
    },
    en: {
      title: "Real Estate and Property Development",
      summary:
        "An integrated legal framework for real estate developers and owners of residential, commercial, and hotel projects, covering title due diligence, drafting sale and development contracts, and following up real estate registration procedures.",
      fullDescription: `We provide an integrated legal framework for the real estate and property development sector, covering the legal management of projects and real estate assets of all kinds. We serve investors, real estate developers, holders of investment licenses, and owners of residential complexes, commercial buildings, and hotel projects, from the project's development stage through its management, operation, and investment.

We handle the legal management of residential complexes, real estate and investment projects, buildings, commercial complexes, and hotels by organizing and following up all the legal and contractual relationships connected to the project, managing contracts, correspondence, claims, and legal obligations, and dealing with matters that arise between the owner, developer, investor, contractors, beneficiaries, tenants, and service providers.

We provide real estate developers and holders of investment licenses with specialized legal support in building the project's contractual framework and drafting development, investment, and participation contracts, sale contracts for residential and commercial units, and lease, management, operation, and service contracts.

We also accompany real estate projects in their procedures before the National Investment Commission, investment authorities, real estate registration departments, municipalities, and relevant government and regulatory bodies, and follow up the licenses, approvals, allocations, registration, transfer of ownership, and legal procedures required by the nature of each project.

We place fundamental importance on the legal due diligence of real estate and land when acquiring, investing in, or developing it, by verifying ownership, restrictions, rights, dispositions, and existing obligations, and assessing the soundness of the real estate asset's legal position before arranging investment or contractual obligations over it.`,
      imageAlt: "Modern residential and commercial building representing real estate development",
    },
  },
  {
    id: "labor-social-security",
    number: "09",
    icon: UsersRound,
    image: "/images/services/09-labor-social-security.jpg",
    ar: {
      title: "العمل والضمان الاجتماعي",
      summary:
        "صياغة لوائح وعقود العمل وإدارة ملف الضمان الاجتماعي من تسجيل وشمول وبراءات ذمة، مع تمثيل أصحاب الأعمال في المنازعات العمالية أمام المحاكم والجهات المختصة.",
      fullDescription: `نقدم للشركات والمؤسسات وأصحاب الأعمال إدارة قانونية متكاملة لعلاقات العمل والموارد البشرية بما يضمن تنظيم العلاقة بين صاحب العمل والعامل وفق الأطر القانونية النافذة ويحد من المخاطر والمنازعات التي قد تنشأ عن إدارة القوى العاملة.

نعمل على بناء الإطار القانوني لعلاقة العمل منذ بدايتها من خلال صياغة ومراجعة عقود العمل والقرارات واللوائح والسياسات الداخلية وتنظيم الأجور وساعات العمل والإجازات والمخصصات والاستحقاقات والواجبات الوظيفية والسرية وعدم الإفصاح والمحافظة على أموال ومعلومات الشركة وغيرها من الالتزامات المرتبطة بطبيعة العمل.

ونتولى تقديم المشورة القانونية للإدارة في المسائل اليومية المتعلقة بالعاملين بما يشمل التعيين وتغيير المهام والمسؤوليات والإجراءات الانضباطية والتحقيقات الداخلية وإنهاء خدمات العاملين والاستقالات والتسويات والمخالصات مع ضمان توثيق الإجراءات والمراكز القانونية بصورة سليمة.

كما نتولى إدارة ملف الضمان الاجتماعي للشركات ومتابعة إجراءات تسجيل أصحاب العمل وشمول وتسجيل العاملين وتنظيم البيانات والأجور والاشتراكات والتسويات والمخالصات والمتطلبات الدورية ومتابعة المعاملات والتدقيقات أمام دائرة التقاعد والضمان الاجتماعي للعمال والجهات المختصة.

وتمتد خدماتنا إلى التوكل وتمثيل أصحاب الأعمال في الدعاوى والمنازعات العمالية ومطالبات الأجور والاستحقاقات وإنهاء الخدمة والضمان الاجتماعي وغيرها من النزاعات المرتبطة بعلاقة العمل أمام المحاكم والجهات المختصة.`,
      imageAlt: "فريق عمل مهني في بيئة مكتبية",
    },
    en: {
      title: "Labor and Social Security",
      summary:
        "Drafting employment policies and contracts and managing the social security file — registration, coverage, and clearance certificates — while representing employers in labor disputes before the courts and competent authorities.",
      fullDescription: `We provide companies, institutions, and employers with integrated legal management of labor relations and human resources, ensuring the relationship between employer and employee is organized in line with applicable legal frameworks and reducing the risks and disputes that may arise from managing the workforce.

We build the legal framework of the employment relationship from its outset by drafting and reviewing employment contracts, resolutions, internal regulations and policies, and organizing wages, working hours, leave, allowances, and entitlements, job duties, confidentiality and non-disclosure, and safeguarding the company's funds and information, along with other obligations related to the nature of the work.

We provide management with legal advice on day-to-day matters concerning employees, including hiring, changing duties and responsibilities, disciplinary procedures, internal investigations, terminating employees' service, resignations, settlements, and final clearances, while ensuring procedures and legal positions are properly documented.

We also manage companies' social security files and follow up the procedures for registering employers, enrolling and registering employees, organizing data, wages, contributions, settlements, and final clearances, and periodic requirements, and follow up transactions and audits before the Retirement and Social Security Department for Workers and the competent authorities.

Our services extend to representing employers as counsel in labor lawsuits and disputes, wage and entitlement claims, termination of service, social security, and other disputes connected to the employment relationship before the courts and competent authorities.`,
      imageAlt: "A professional team in an office workplace setting",
    },
  },
  {
    id: "residency-work-permits-visas",
    number: "10",
    icon: Plane,
    image: "/images/services/10-residency-work-visas.jpg",
    ar: {
      title: "الإقامة وإجازات العمل وسمات الدخول",
      summary:
        "إدارة متكاملة لحركة الكوادر الأجنبية تشمل سمات الدخول وإجازات العمل الرسمية والإقامات السنوية وتجديداتها لضمان الامتثال القانوني وتجنب الغرامات.",
      fullDescription: `نقدم للشركات والمستثمرين والكوادر الأجنبية في العراق إدارة قانونية متكاملة لمتطلبات الإقامة والعمل وسمات الدخول بما يضمن تنظيم وجود العاملين الأجانب وممارسة أعمالهم وفق الأطر القانونية والإجراءات المعتمدة لدى الجهات المختصة.

نتولى إدارة الملف منذ مرحلة دخول الكادر الأجنبي إلى العراق من خلال تحديد المتطلبات والإجراءات المناسبة لطبيعة الزيارة أو العمل ومتابعة استحصال سمات الدخول والموافقات اللازمة واستكمال إجراءات الإقامة وتجديدها وتنظيم الوضع القانوني للأجانب طوال مدة وجودهم في العراق.

كما نتولى إجراءات استحصال وتجديد إجازات العمل للعاملين الأجانب ومتابعة المتطلبات والموافقات والمخاطبات المرتبطة بها أمام وزارة العمل والشؤون الاجتماعية والجهات القطاعية والتنظيمية ذات العلاقة مع معالجة المسائل القانونية والإجرائية التي قد تطرأ خلال مدة العمل.

وبالنسبة إلى الشركات الأجنبية والمشاريع التي تعتمد على كوادر دولية نوفر إدارة مستمرة لملفات العاملين الأجانب تشمل تنظيم ومتابعة مواعيد الإقامات وإجازات العمل وسمات الدخول والتجديدات والمتطلبات القانونية لكل موظف بما يساعد الشركات على ضمان استمرارية عمل كوادرها وتجنب التأخير أو المخالفات المرتبطة بوضعهم القانوني.`,
      imageAlt: "مسافر في صالة مطار يرمز إلى الإقامة وسمات الدخول",
    },
    en: {
      title: "Residency, Work Permits and Entry Visas",
      summary:
        "Integrated management of the movement of foreign personnel, covering entry visas, official work permits, and annual residencies and their renewals, to ensure legal compliance and avoid penalties.",
      fullDescription: `We provide companies, investors, and foreign personnel in Iraq with integrated legal management of residency, work, and entry-visa requirements, ensuring that the presence of foreign employees and the conduct of their work is organized in accordance with the legal frameworks and procedures adopted by the competent authorities.

We manage the file from the stage the foreign employee enters Iraq, by identifying the requirements and procedures appropriate to the nature of the visit or work, following up the procurement of entry visas and the necessary approvals, completing residency procedures and their renewal, and organizing the legal status of foreign nationals throughout their presence in Iraq.

We also handle the procedures for obtaining and renewing work permits for foreign employees and follow up the requirements, approvals, and correspondence connected to them before the Ministry of Labour and Social Affairs and the relevant sector and regulatory bodies, while addressing the legal and procedural matters that may arise during the period of work.

For foreign companies and projects that rely on international staff, we provide ongoing management of foreign employees' files, including organizing and following up residency and work-permit dates, entry visas, renewals, and the legal requirements for each employee — helping companies ensure the continuity of their staff's work and avoid delays or violations connected to their legal status.`,
      imageAlt: "A traveler in an airport terminal representing residency and entry visas",
    },
  },
  {
    id: "licensing-regulatory-compliance",
    number: "11",
    icon: ShieldCheck,
    image: "/images/services/11-licensing-compliance.jpg",
    ar: {
      title: "التراخيص والامتثال التنظيمي",
      summary:
        "استحصال وتجديد التراخيص القطاعية التجارية والصناعية والصحية والنفطية ومراجعة الوضع التنظيمي للشركة دورياً لاستباق المخاطر وضمان الامتثال الكامل.",
      fullDescription: `نقدم للشركات والمستثمرين دعماً قانونياً متكاملاً لإدارة متطلبات التراخيص والامتثال التنظيمي بما يضمن ممارسة أعمالهم ضمن الأطر القانونية والتعليمات والضوابط المنظمة للقطاع الذي يعملون فيه ويحافظ على استمرارية نشاطهم ومراكزهم القانونية أمام الجهات المختصة.

نتولى دراسة طبيعة النشاط وتحديد الموافقات والإجازات والتراخيص والتسجيلات القطاعية المطلوبة ومتابعة استحصالها وتجديدها وتعديلها أمام الوزارات والهيئات والدوائر والجهات التنظيمية والمهنية ذات العلاقة مع إدارة المخاطبات والمتطلبات القانونية والإجرائية المرتبطة بها.

وتشمل خدماتنا متابعة التراخيص والموافقات الخاصة بالأنشطة التجارية والاستثمارية والصناعية والصحية والطبية والنفطية والخدمية وغيرها من القطاعات التي تخضع لمتطلبات تنظيمية خاصة مع التعامل مع تعدد الجهات والإجراءات التي قد يتطلبها النشاط الواحد.

كما نتولى مراجعة الوضع القانوني والتنظيمي للشركات والتحقق من توافق أعمالها وإجراءاتها الداخلية مع القوانين والأنظمة والتعليمات والضوابط النافذة وتحديد أوجه المخاطر أو عدم الامتثال والعمل على معالجتها قبل أن تؤثر في النشاط أو تعرض الشركة للمساءلة أو توقف معاملاتها وأعمالها.`,
      imageAlt: "مستندات ترخيص وامتثال تنظيمي على مكتب عمل",
    },
    en: {
      title: "Licensing and Regulatory Compliance",
      summary:
        "Obtaining and renewing commercial, industrial, health, and oil-sector licenses, and periodically reviewing the company's regulatory standing to anticipate risk and ensure full compliance.",
      fullDescription: `We provide companies and investors with integrated legal support in managing licensing and regulatory compliance requirements, ensuring their business is conducted within the legal frameworks, instructions, and controls governing their sector, and preserving the continuity of their activity and legal standing before the competent authorities.

We study the nature of the activity and identify the approvals, permits, licenses, and sector registrations required, and follow up obtaining, renewing, and amending them before the relevant ministries, authorities, departments, and regulatory and professional bodies, while managing the correspondence and legal and procedural requirements connected to them.

Our services include following up licenses and approvals for commercial, investment, industrial, health, medical, oil, and service activities, and other sectors subject to special regulatory requirements, while managing the multiple bodies and procedures that a single activity may require.

We also review companies' legal and regulatory standing and verify that their business and internal procedures are consistent with applicable laws, regulations, instructions, and controls, identifying areas of risk or non-compliance and working to address them before they affect the activity, expose the company to liability, or halt its transactions and business.`,
      imageAlt: "Licensing and regulatory compliance documents on a work desk",
    },
  },
  {
    id: "tax-financial-affairs",
    number: "12",
    icon: BadgeDollarSign,
    image: "/images/services/12-tax-financial.jpg",
    ar: {
      title: "الشؤون الضريبية والمالية",
      summary:
        "إدارة الملف الضريبي الكامل من فتح الملفات والتحاسب الدوري واستحصال براءات الذمة إلى صياغة الاعتراضات أمام لجان الاستئناف والجهات القضائية الضريبية.",
      fullDescription: `نقدم للشركات والمؤسسات والمستثمرين دعماً قانونياً متخصصاً في إدارة الشؤون الضريبية والالتزامات المالية المرتبطة بأعمالهم في العراق بما يساعد على تنظيم المركز الضريبي للعميل وضمان الامتثال للمتطلبات القانونية والإجرائية ومعالجة المسائل الضريبية التي ترافق النشاط التجاري والاستثماري.

نتولى إدارة الملف الضريبي للشركات منذ بدء نشاطها ومتابعة إجراءات التسجيل وفتح الملفات الضريبية وتنظيم الموقف الضريبي وإجراء التحاسب ومتابعة التقديرات والتسويات والحصول على براءات الذمة والموافقات الضريبية اللازمة للمعاملات والأنشطة المختلفة أمام الهيئة العامة للضرائب وفروعها والجهات ذات العلاقة.

كما تشمل خدماتنا متابعة ضريبة الدخل وضريبة الاستقطاع المباشر والأمانات والاستقطاعات الضريبية والالتزامات المرتبطة بالعقود والمعاملات التجارية وأعمال الشركات والمشاريع مع تقديم المشورة بشأن الآثار الضريبية المترتبة على القرارات والصفقات والهياكل الاستثمارية قبل تنفيذها.

ونتولى مراجعة المطالبات والتقديرات والقرارات الضريبية ودراسة أساسها القانوني والمالي وإعداد الاعتراضات ومتابعتها أمام الجهات المختصة وتمثيل عملائنا في المنازعات والإجراءات الضريبية بما يكفل حماية مركزهم القانوني والمالي وفقاً للتشريعات النافذة.`,
      imageAlt: "مستندات مالية وضريبية ومحاسبة للشركات",
    },
    en: {
      title: "Tax and Financial Affairs",
      summary:
        "Managing the complete tax file — from opening files and periodic assessments to obtaining tax clearance certificates and drafting objections before appeal committees and the tax judicial authorities.",
      fullDescription: `We provide companies, institutions, and investors with specialized legal support in managing tax matters and the financial obligations connected to their business in Iraq, helping to organize the client's tax position, ensure compliance with legal and procedural requirements, and address the tax matters that accompany commercial and investment activity.

We manage companies' tax files from the start of their activity, following up registration procedures and opening tax files, organizing the tax position, conducting assessments, following up estimates and settlements, and obtaining the tax clearance certificates and approvals required for various transactions and activities before the General Commission for Taxes, its branches, and related bodies.

Our services also include following up income tax, direct-deduction withholding tax, trust funds, and tax deductions, and the obligations connected to contracts, commercial transactions, and the business of companies and projects, along with advising on the tax implications of decisions, deals, and investment structures before they are implemented.

We review tax claims, assessments, and decisions, study their legal and financial basis, prepare objections and follow them up before the competent authorities, and represent our clients in tax disputes and proceedings, safeguarding their legal and financial position in accordance with applicable legislation.`,
      imageAlt: "Financial and tax documentation for corporate accounting",
    },
  },
  {
    id: "health-sector-scientific-offices-hospitals",
    number: "13",
    icon: HeartPulse,
    image: "/images/services/13-health-sector.jpg",
    ar: {
      title: "القطاع الصحي والمكاتب العلمية وتأسيس المستشفيات الأهلية",
      summary:
        "دعم قانوني وتنظيمي شامل لتأسيس المستشفيات الأهلية وتسجيل المكاتب العلمية وتسجيل الأدوية والمستلزمات الطبية أمام وزارة الصحة ونقابة الصيادلة وكيماديا.",
      fullDescription: `نقدم خدمات قانونية وتنظيمية متخصصة للمستثمرين وأصحاب المشاريع والمؤسسات العاملة في القطاع الصحي ونوفر دعماً متكاملاً يغطي تأسيس وترخيص المشاريع الصحية وتسجيل المكاتب العلمية ومتابعة الإجراءات التنظيمية المرتبطة بالأدوية والمستلزمات والأجهزة الطبية أمام الجهات المختصة في العراق.

نتولى الجوانب القانونية والتنظيمية المتعلقة بتأسيس المستشفيات الأهلية والمؤسسات والمشاريع الصحية الخاصة بدءاً من دراسة المتطلبات القانونية والتنظيمية للمشروع واستكمال الموافقات والإجازات والتراخيص اللازمة ومتابعة الإجراءات أمام وزارة الصحة والدوائر والجهات الصحية والمهنية ذات العلاقة وصولاً إلى استكمال المتطلبات اللازمة لمباشرة النشاط.

كما نتولى إجراءات تسجيل المكاتب العلمية لدعاية الأدوية واستكمال متطلبات فتحها ومباشرة أعمالها ومتابعة الإجازات والتجديدات والتعديلات والموافقات أمام نقابة صيادلة العراق ووزارة الصحة والجهات المختصة.

ونتابع إجراءات تسجيل المستحضرات والأصناف الدوائية والمستلزمات والأجهزة الطبية واستكمال الملفات والموافقات والمتطلبات التنظيمية المرتبطة بها أمام وزارة الصحة والجهات المختصة ومتابعة الإجراءات ذات الصلة لدى الشركة العامة لتسويق الأدوية والمستلزمات الطبية (كيماديا) بحسب طبيعة كل منتج ومتطلبات تسجيله.`,
      imageAlt: "منشأة صحية ومكتب استقبال في مستشفى",
    },
    en: {
      title: "Health Sector, Scientific Offices and Private Hospital Establishment",
      summary:
        "Comprehensive legal and regulatory support for establishing private hospitals, registering scientific offices, and registering medicines and medical supplies before the Ministry of Health, the Pharmacists Syndicate, and Kimadia.",
      fullDescription: `We provide specialized legal and regulatory services to investors, project owners, and institutions operating in the health sector, and offer integrated support covering the establishment and licensing of health projects, the registration of scientific offices, and following up the regulatory procedures connected to medicines, supplies, and medical devices before the competent authorities in Iraq.

We handle the legal and regulatory aspects connected to establishing private hospitals and private health institutions and projects, starting from studying the project's legal and regulatory requirements, completing the necessary approvals, permits, and licenses, and following up procedures before the Ministry of Health and the relevant health and professional departments and bodies, through to completing the requirements necessary to commence the activity.

We also handle the procedures for registering scientific offices for pharmaceutical promotion, completing the requirements for opening them and commencing their business, and following up licenses, renewals, amendments, and approvals before the Iraqi Pharmacists Syndicate, the Ministry of Health, and the competent authorities.

We follow up the procedures for registering pharmaceutical preparations and items, supplies, and medical devices, and completing the files, approvals, and regulatory requirements connected to them before the Ministry of Health and the competent authorities, and follow up the related procedures with the State Company for Marketing Drugs and Medical Appliances (Kimadia), according to the nature of each product and its registration requirements.`,
      imageAlt: "A healthcare facility and reception desk in a hospital",
    },
  },
  {
    id: "intellectual-property-trademarks",
    number: "14",
    icon: Copyright,
    image: "/images/services/14-intellectual-property.jpg",
    ar: {
      title: "الملكية الفكرية وحماية العلامات التجارية",
      summary:
        "تسجيل وتجديد العلامات التجارية ومراقبة السوق لمكافحة التقليد، مع اتخاذ الإجراءات القانونية والقضائية اللازمة لحماية هوية الشركة وأصولها الفكرية.",
      fullDescription: `نقدم خدمات قانونية متخصصة في حماية الملكية الفكرية والعلامات التجارية باعتبارها من الأصول الأساسية للأعمال وجزءاً مهماً من القيمة التجارية والهوية التي تبنيها الشركات والمشاريع في السوق.

نتولى تسجيل العلامات التجارية الوطنية والأجنبية ومتابعة إجراءات البحث والإيداع والفحص والنشر والتسجيل والتجديد ونقل الملكية والتنازل والترخيص وإجراء التعديلات القانونية المرتبطة بها أمام الجهات المختصة في العراق بما يضمن تنظيم حقوق أصحاب العلامات والمحافظة على حمايتها القانونية.

كما نساعد الشركات والمستثمرين وأصحاب الأعمال على بناء وإدارة محافظ علاماتهم التجارية من خلال مراجعة الوضع القانوني للعلامات وتحديد نطاق الحماية المناسب ومتابعة مواعيد التجديد والتغييرات التي تطرأ على الملكية أو الاستخدام.

وتمتد خدماتنا إلى حماية العلامات من التقليد أو الاستخدام غير المشروع أو الاعتداء على الحقوق المرتبطة بها من خلال اتخاذ الإجراءات القانونية اللازمة وتوجيه الإنذارات والاعتراض على تسجيل العلامات المتعارضة أو المشابهة ومتابعة إجراءات الإلغاء والشطب والتوكل في الدعاوى والمنازعات المتعلقة بالعلامات والحقوق الفكرية أمام الجهات والمحاكم المختصة.`,
      imageAlt: "ختم ورمز يمثل حماية العلامات التجارية والملكية الفكرية",
    },
    en: {
      title: "Intellectual Property and Trademark Protection",
      summary:
        "Registering and renewing trademarks and monitoring the market to combat counterfeiting, taking the legal and judicial measures necessary to protect the company's identity and intellectual assets.",
      fullDescription: `We provide specialized legal services to protect intellectual property and trademarks, recognizing them as fundamental business assets and an important part of the commercial value and identity that companies and projects build in the market.

We handle the registration of national and foreign trademarks and follow up the procedures for search, filing, examination, publication, registration, and renewal, transfer of ownership, assignment and licensing, and making the legal amendments connected to them before the competent authorities in Iraq, ensuring the rights of trademark owners are organized and their legal protection preserved.

We also help companies, investors, and business owners build and manage their trademark portfolios by reviewing the legal status of the marks, determining the appropriate scope of protection, and following up renewal dates and changes to ownership or use.

Our services extend to protecting marks from counterfeiting, unlawful use, or infringement of the rights connected to them, by taking the necessary legal measures, issuing warning notices, opposing the registration of conflicting or similar marks, following up cancellation and removal procedures, and acting as counsel in lawsuits and disputes relating to trademarks and intellectual property rights before the competent authorities and courts.`,
      imageAlt: "A seal and emblem representing trademark and intellectual property protection",
    },
  },
  {
    id: "ngos",
    number: "15",
    icon: HandHeart,
    image: "/images/services/15-ngos.jpg",
    ar: {
      title: "المنظمات غير الحكومية (NGOs)",
      summary:
        "إطار قانوني متكامل لتأسيس وتسجيل المنظمات الوطنية والأجنبية وإدارتها القانونية المستمرة من حوكمة القرارات إلى مذكرات التفاهم وشؤون الموظفين والامتثال.",
      fullDescription: `نقدم للمنظمات غير الحكومية الوطنية والأجنبية إطاراً قانونياً متكاملاً لتأسيس وجودها وإدارة أعمالها في العراق بدءاً من مرحلة التسجيل وبناء هيكلها التنظيمي وصولاً إلى توفير إدارة قانونية مستمرة تواكب نشاطها وبرامجها وعلاقاتها مع الجهات الرسمية والأطراف ذات العلاقة.

نتولى إعداد واستكمال ملف تسجيل المنظمة وصياغة نظامها الداخلي بما يعكس طبيعة أهدافها ونطاق عملها وينظم هيكلها الإداري وصلاحيات هيئاتها وآليات اتخاذ القرار والإدارة والتمثيل مع إعداد الوثائق والمتطلبات القانونية ومتابعة إجراءات التسجيل أمام دائرة المنظمات غير الحكومية والجهات المختصة.

ويمتد دورنا إلى ما بعد التسجيل من خلال تولي الإدارة القانونية الكاملة للمنظمة بما يشمل حوكمة أعمالها وتنظيم قرارات ومحاضر هيئاتها الإدارية وصياغة ومراجعة العقود والاتفاقيات ومذكرات التفاهم وإدارة علاقات العمل وشؤون الموظفين ومراجعة الالتزامات القانونية والتنظيمية ومتابعة متطلبات الضرائب والضمان الاجتماعي إلى جانب الإقامة وإجازات العمل وسمات الدخول للكوادر الأجنبية.

ونتولى كذلك التمثيل القانوني للمنظمة أمام دائرة المنظمات غير الحكومية والوزارات والهيئات والدوائر الرسمية والجهات ذات العلاقة ومراجعة المخاطبات والإجراءات والقرارات التي ترتب آثاراً قانونية على أعمالها.`,
      imageAlt: "متطوع يمثل العمل الإنساني والمنظمات غير الحكومية",
    },
    en: {
      title: "Non-Governmental Organizations (NGOs)",
      summary:
        "An integrated legal framework for establishing and registering national and foreign organizations and providing their ongoing legal management, from governance of decisions to memoranda of understanding, staff affairs, and compliance.",
      fullDescription: `We provide national and foreign non-governmental organizations with an integrated legal framework for establishing their presence and managing their business in Iraq, starting from the registration stage and building their organizational structure, through to providing ongoing legal management that keeps pace with their activity, programs, and relationships with official bodies and relevant parties.

We prepare and complete the organization's registration file and draft its internal bylaws to reflect the nature of its objectives and scope of work, organizing its administrative structure, the powers of its bodies, and its decision-making, management, and representation mechanisms, while preparing the documents and legal requirements and following up registration procedures before the NGO Directorate and the competent authorities.

Our role extends beyond registration through comprehensive legal management of the organization, including governance of its business, organizing the resolutions and minutes of its governing bodies, drafting and reviewing contracts, agreements, and memoranda of understanding, managing employment relationships and staff affairs, reviewing legal and regulatory obligations, and following up tax and social security requirements, alongside residency, work permits, and entry visas for foreign personnel.

We also provide legal representation for the organization before the NGO Directorate, ministries, authorities, official departments, and relevant bodies, and review the correspondence, procedures, and decisions that have legal effects on its business.`,
      imageAlt: "A volunteer representing humanitarian and non-governmental organization work",
    },
  },
  {
    id: "foreign-branch-registration-management",
    number: "16",
    icon: Building,
    image: "/images/services/16-foreign-branches.jpg",
    ar: {
      title: "تسجيل وإدارة فروع الشركات الأجنبية في العراق",
      summary:
        "شريك قانوني كامل للشركات الدولية في تصديق وثائق الشركة الأم وتسجيل الفرع أمام مسجل الشركات واستكمال جميع المتطلبات الضريبية والبنكية والتشغيلية.",
      fullDescription: `نعمل كشريك قانوني للشركات الأجنبية الراغبة في تأسيس حضورها وممارسة أعمالها في العراق ونوفر لها إدارة قانونية متكاملة تبدأ منذ مرحلة التخطيط لدخول السوق وتمتد إلى تسجيل الفرع ومباشرة نشاطه وإدارة متطلباته القانونية والتنظيمية طوال فترة عمله.

نبدأ بفهم طبيعة أعمال الشركة ونشاطها والقطاع الذي تستهدفه ونحدد المتطلبات القانونية والتنظيمية اللازمة لوجودها في العراق ثم نتولى إعداد وتدقيق ملف تسجيل الفرع ومراجعة وثائق الشركة الأم واستكمال متطلبات التصديق والترجمة والإيداع ومتابعة إجراءات التسجيل أمام مسجل الشركات والجهات المختصة.

ويمتد دورنا إلى بناء البيئة القانونية اللازمة لتشغيل الفرع بعد التسجيل من خلال استكمال التسجيلات الضريبية ومتطلبات العمل والضمان الاجتماعي والتراخيص والموافقات القطاعية وتنظيم شؤون العاملين والكوادر الأجنبية ومتابعة الإقامة وإجازات العمل وسمات الدخول وغيرها من المتطلبات المرتبطة بطبيعة نشاط الشركة.

كما نتولى تنظيم العلاقة القانونية والإدارية بين الفرع والشركة الأم وإعداد الوكالات والتفويضات والصلاحيات والقرارات والمخاطبات اللازمة ونقدم الدعم القانوني للإدارة المحلية في أعمالها اليومية وقراراتها ومعاملاتها وعلاقاتها مع الجهات الحكومية والعملاء والمقاولين والمجهزين ومقدمي الخدمات.

ولا تنتهي علاقتنا بالشركة عند إصدار وثائق تسجيل الفرع بل نستمر في إدارة شؤونه القانونية والتنظيمية ومتابعة التجديدات والتغييرات والتراخيص والالتزامات الدورية وتمثيله أمام الجهات الرسمية والتنظيمية والقضائية.`,
      imageAlt: "مبنى شركة دولية يمثل تسجيل فروع الشركات الأجنبية",
    },
    en: {
      title: "Registration and Management of Foreign Company Branches in Iraq",
      summary:
        "A complete legal partner for international companies in authenticating parent company documents, registering the branch before the Companies Registrar, and completing all tax, banking, and operational requirements.",
      fullDescription: `We act as legal partner to foreign companies wishing to establish their presence and conduct business in Iraq, providing them with integrated legal management that begins at the market-entry planning stage and extends to registering the branch, commencing its activity, and managing its legal and regulatory requirements throughout its operation.

We begin by understanding the nature of the company's business and activity and the sector it targets, and identify the legal and regulatory requirements necessary for its presence in Iraq. We then prepare and audit the branch registration file, review the parent company's documents, complete the authentication, translation, and filing requirements, and follow up registration procedures before the Companies Registrar and the competent authorities.

Our role extends to building the legal environment necessary for the branch to operate after registration, by completing tax registrations, labor and social security requirements, sector licenses and approvals, organizing the affairs of local and foreign employees, and following up residency, work permits, entry visas, and other requirements connected to the nature of the company's activity.

We also organize the legal and administrative relationship between the branch and the parent company, prepare the necessary powers of attorney, authorizations, delegations, resolutions, and correspondence, and provide legal support to local management in its day-to-day business, decisions, transactions, and relationships with government bodies, clients, contractors, suppliers, and service providers.

Our relationship with the company does not end with the issuance of the branch's registration documents; we continue managing its legal and regulatory affairs, following up renewals, changes, licenses, and periodic obligations, and representing it before official, regulatory, and judicial bodies.`,
      imageAlt: "An international corporate building representing foreign branch registration",
    },
  },
  {
    id: "factories-industrial-projects",
    number: "17",
    icon: Factory,
    image: "/images/services/17-industrial-factories.jpg",
    ar: {
      title: "تأسيس وترخيص المصانع والمشاريع الصناعية",
      summary:
        "مرافقة قانونية للمستثمر الصناعي من دراسة الفكرة وتخصيص الأرض واستحصال إجازات التنمية الصناعية والاستثمارية وصياغة عقود التوريد والتشغيل وحتى مرحلة الإنتاج.",
      fullDescription: `نعمل كشريك قانوني للمستثمرين والشركات الراغبة في تأسيس المصانع والمشاريع الصناعية في العراق ونوفر إدارة قانونية متكاملة للمشروع منذ مرحلة الفكرة واختيار الهيكل القانوني والموقع وحتى استكمال التراخيص وبدء الإنتاج والتشغيل.

نبدأ بدراسة طبيعة المشروع والنشاط الصناعي والمنتجات المزمع تصنيعها وتحديد الإطار القانوني والتنظيمي الذي يخضع له المشروع والجهات المختصة والموافقات والإجازات المطلوبة ثم نبني المسار القانوني المناسب لتأسيس المصنع بما ينسجم مع حجم الاستثمار وطبيعة الصناعة ومتطلبات المستثمر.

ونتولى تأسيس الكيان القانوني للمشروع وتنظيم هيكل الملكية والاستثمار والعلاقة بين الشركاء والمساهمين إلى جانب دراسة الوضع القانوني للأرض المخصصة للمصنع وتنظيم عقود التملك أو الإيجار أو الاستثمار والحقوق المرتبطة بها.

كما نتولى إعداد ومتابعة ملف تأسيس وترخيص المشروع الصناعي واستكمال الموافقات والإجازات والتسجيلات المطلوبة أمام وزارة الصناعة والمعادن والجهات المعنية بالتنمية الصناعية والهيئة الوطنية للاستثمار أو هيئات الاستثمار في المحافظات والبلديات والدوائر والجهات القطاعية والتنظيمية ذات العلاقة.

ونتولى كذلك بناء المنظومة التعاقدية للمصنع من خلال صياغة ومراجعة عقود إنشاء وتجهيز خطوط الإنتاج وشراء المعدات والآلات والمقاولات والتوريد والتركيب والتشغيل والصيانة ونقل التكنولوجيا والتوزيع والخدمات وتنظيم العلاقات مع المقاولين والمجهزين والمصنعين والشركاء المحليين والأجانب.

ويمتد دورنا إلى مرحلة التشغيل من خلال إدارة المتطلبات القانونية والتنظيمية للمصنع ومتابعة التراخيص والتجديدات والضرائب والعمل والضمان الاجتماعي وشؤون العاملين والكوادر الأجنبية والعقود التجارية والموافقات المرتبطة بالإنتاج والتسويق والتوسع في النشاط.`,
      imageAlt: "منشأة صناعية وخط إنتاج يمثل المصانع والمشاريع الصناعية",
    },
    en: {
      title: "Establishment and Licensing of Factories and Industrial Projects",
      summary:
        "Legal support for the industrial investor from studying the concept and land allocation to obtaining industrial development and investment licenses, and drafting supply and operation contracts through to the production stage.",
      fullDescription: `We act as legal partner to investors and companies wishing to establish factories and industrial projects in Iraq, providing integrated legal management of the project from the concept stage and choice of legal structure and location through to completing licensing and commencing production and operation.

We begin by studying the nature of the project, the industrial activity, and the products intended to be manufactured, identifying the legal and regulatory framework governing the project, the competent authorities, and the approvals and licenses required, and then build the legal pathway suited to establishing the factory in line with the scale of investment, the nature of the industry, and the investor's requirements.

We handle incorporating the project's legal entity and organizing the ownership and investment structure and the relationship between partners and shareholders, alongside studying the legal status of the land allocated for the factory and organizing the ownership, lease, or investment contracts and the rights connected to them.

We also prepare and follow up the industrial project's establishment and licensing file and complete the approvals, licenses, and registrations required before the Ministry of Industry and Minerals, the bodies concerned with industrial development, the National Investment Commission or provincial investment authorities, municipalities, departments, and relevant sector and regulatory bodies.

We further build the factory's contractual framework by drafting and reviewing contracts for constructing and equipping production lines, purchasing equipment and machinery, construction, supply, installation, operation, and maintenance contracts, technology transfer, distribution and services, and organizing relationships with contractors, suppliers, manufacturers, and local and foreign partners.

Our role extends to the operation stage through managing the factory's legal and regulatory requirements and following up licenses and renewals, taxes, labor and social security, the affairs of local and foreign employees, commercial contracts, and approvals connected to production, marketing, and expanding the activity.`,
      imageAlt: "An industrial facility and production line representing factories and industrial projects",
    },
  },
];

export const DEFAULT_SERVICE_ID = SERVICES[0].id;

export function getServiceById(id: string | null | undefined): ServiceDefinition | undefined {
  if (!id) return undefined;
  return SERVICES.find((service) => service.id === id);
}

export function getServiceContent(
  service: ServiceDefinition,
  language: "en" | "ar",
): ServiceLocaleContent {
  return language === "ar" ? service.ar : service.en;
}
