import pencilPhoto from '@images/pencil_drawing_wr.png';
import pencilPhotoVertical from '@images/pencil_drawing_wr_vertical.png';

export const firstName = 'James';
export const lastName = 'Loder';
export const fullName = `${firstName} ${lastName}`;

export const about = `I lead at the intersection of brand strategy, art direction, and corporate identity—unifying visual systems to protect enterprise equity and drive long-term commercial value.`;

export const designation = 'Art Director | Brand Manager';

export const email = 'android.gobind@gmail.com';

export interface HeaderNavLink {
  text: string;
  href?: string;
  targetClassName?: string;
}

export interface HeaderNavData {
  middleText?: string;
  links: HeaderNavLink[];
  bottomPrimaryLink?: {
    text: string;
    url: string;
  };
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export const headerAndNavData: HeaderNavData = {
  middleText: designation,
  links: [
    {
      text: 'Home',
      targetClassName: 'hero',
    },
    {
      text: 'About',
      targetClassName: 'about',
    },
    {
      text: 'Contact',
      targetClassName: 'contact',
    },
  ],
  bottomPrimaryLink: {
    text: 'Email address',
    url: `mailto:${email}`,
  },
  bottomLinks: [
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thegobindsingh/',
    },
    {
      text: 'GitHub',
      url: 'https://www.github.com/theGobindSingh',
    },
    {
      text: 'Twitter',
      url: 'https://www.twitter.com/theGobindSingh',
    },
  ],
};

export const workHeaderNavData: HeaderNavData = {
  middleText: designation,
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Work',
      href: '/work',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};

export const homeHeroData = {
  title: `${fullName}.`,
  text: about,
  img: pencilPhoto,
  imgMobile: pencilPhotoVertical,
  dateText: 'Building exceptional digital experiences since',
  date: '2015',
  buttonText: 'Contact ↗',
  buttonTargetClassName: 'contact',
};

export const blackSectionData = {
  description:
    'I build creative systems that stay coherent under pressure. The work blends strategic direction, identity governance, and operational design so teams can move faster without diluting brand quality.',
};

export const expertiseData = {
  title: 'Capabilities across strategy, creative direction, and operations',
  items: [
    'Brand architecture and identity governance',
    'Creative operations and workflow design',
    'Art direction for high-stakes launches',
    'Cross-functional leadership and coaching',
    'Strategic messaging and narrative systems',
  ],
};

export interface HomePreviewItem {
  title: string;
  description: string;
  note: string;
}

export const featuredWorkData: {
  title: string;
  subtitle: string;
  items: HomePreviewItem[];
  ctaText: string;
  ctaTargetClassName: string;
} = {
  title: 'Featured Work.',
  subtitle:
    'Selected programs where strategy, creative output, and execution discipline had to align.',
  items: [
    {
      title: 'Case Study 01',
      description:
        'Rebuilt the operating model for a creative team managing high-volume campaign delivery.',
      note: 'Throughput improved while quality control became measurable.',
    },
    {
      title: 'Case Study 02',
      description:
        'Unified nostalgia-led positioning with modern commerce storytelling across touchpoints.',
      note: 'Brand clarity increased and conversion friction dropped.',
    },
    {
      title: 'Case Study 03',
      description:
        'Developed launch guardrails, governance standards, and a durable GTM creative system.',
      note: 'The team scaled output without sacrificing narrative cohesion.',
    },
    {
      title: 'Case Study 04',
      description:
        'Built a high-character brand system that balanced conceptual edge with practical execution guidelines.',
      note: 'The system demonstrated expressive range without losing discipline.',
    },
    {
      title: 'Case Study 05',
      description:
        'Designed a cross-functional operating rhythm and decision architecture for a high-output creative team.',
      note: 'The team moved from reactive output to predictable delivery with measurable quality standards.',
    },
    {
      title: 'Case Study 06',
      description:
        'Developed a brand identity and narrative framework that unified storytelling across channels.',
      note: 'Brand expression became more coherent while key customer journeys became easier to understand and complete.',
    },
  ],
  ctaText: 'Request full case studies ↗',
  ctaTargetClassName: 'contact',
};

export const essaysPreviewData: {
  title: string;
  subtitle: string;
  items: HomePreviewItem[];
} = {
  title: 'Essays and Field Notes',
  subtitle:
    'A running set of short essays on brand systems, team design, and creative leadership.',
  items: [
    {
      title: 'Why Operations Is A Creative Discipline',
      description:
        'Operational design is often treated as overhead, but it is what protects the quality of creative thinking at scale.',
      note: 'Essay publishing soon.',
    },
    {
      title: 'The Cost Of Brand Drift In Growing Teams',
      description:
        'Without governance, speed creates inconsistency. Inconsistency creates hidden revenue drag.',
      note: 'Essay publishing soon.',
    },
    {
      title: 'Creative Direction As Decision Architecture',
      description:
        'Great direction is not a mood board. It is a decision system teams can execute repeatedly.',
      note: 'Essay publishing soon.',
    },
  ],
};

export const homeAboutData = {
  title: 'About',
  intro:
    'I lead multidisciplinary creative teams through moments where brand, velocity, and business pressure collide.',
  detail:
    'My approach is systems-first: diagnose constraints, define operating principles, then shape the visual and narrative language that helps teams execute with confidence.',
  principles: [
    'Lead with diagnosis before design',
    'Build repeatable creative operating systems',
    'Protect quality while increasing delivery speed',
  ],
  resumeUrl: '/assets/pdfs/resume.pdf',
  resumeText: 'View Resume ↗',
};

export const homeContactData = {
  title: 'Contact',
  description:
    'Hiring for a leadership role, planning a transformation, or looking for strategic partnership support? I would love to connect.',
  emailCtaText: 'Email James ↗',
};

export const contactPageData: {
  eyebrow: string;
  title: string;
  intro: string;
  responseNote: string;
  primaryCardTitle: string;
  primaryCardDescription: string;
  emailCtaText: string;
  collaborationTitle: string;
  collaborationPoints: string[];
  socialLabel: string;
} = {
  eyebrow: 'Contact',
  title: 'Bring me in when brand, leadership, and execution all need to align.',
  intro:
    'If you are hiring for a senior creative role, navigating a brand transformation, or building a high-output team without sacrificing quality, I would be glad to connect.',
  responseNote:
    'I usually respond within two business days with next-step options tailored to your context.',
  primaryCardTitle: 'Start the conversation',
  primaryCardDescription:
    'Share your current challenge, team structure, and timeline. I can help clarify where strategy and execution are getting blocked.',
  emailCtaText: 'Email James ↗',
  collaborationTitle: 'Best fit engagements',
  collaborationPoints: [
    'Creative leadership and team design',
    'Brand architecture and governance rollout',
    'Cross-functional operating model resets',
    'Launch sequencing for high-stakes initiatives',
  ],
  socialLabel: 'Or connect via social channels',
};

export interface WorkCaseStudyMetric {
  value: string;
  label: string;
}

export interface WorkCaseStudy {
  slug: string;
  title: string;
  category: string;
  timeline: string;
  summary: string;
  strategicFocus: string[];
  outcome: string;
  metrics: WorkCaseStudyMetric[];
}

export const workPageData: {
  eyebrow: string;
  title: string;
  intro: string;
  processTitle: string;
  processPoints: string[];
  caseStudies: WorkCaseStudy[];
  detailStatusNote: string;
  bottomCta: {
    title: string;
    description: string;
    primaryText: string;
    primaryUrl: string;
    secondaryText: string;
    secondaryUrl: string;
  };
} = {
  eyebrow: 'Selected Work',
  title: 'Programs designed for strategic clarity and operational scale.',
  intro:
    'These engagements show how brand thinking, execution systems, and leadership decisions connect. Each project is presented as a strategic operating challenge, not a visual gallery.',
  processTitle: 'How the work is structured',
  processPoints: [
    'Diagnose system constraints before proposing creative direction.',
    'Define decision rules that teams can execute under pressure.',
    'Build governance patterns that keep quality high as throughput grows.',
  ],
  caseStudies: [
    {
      slug: 'workflow-architecture-production-turnaround',
      title: 'Workflow Architecture and Production Turnaround',
      category: 'Creative Operations',
      timeline: '8 month transformation',
      summary:
        'Re-architected a campaign production function that was missing role clarity, quality controls, and realistic delivery sequencing.',
      strategicFocus: [
        'Operating model redesign',
        'Decision ownership mapping',
        'Quality gate governance',
      ],
      outcome:
        'The team moved from reactive output to predictable delivery with measurable quality standards.',
      metrics: [
        { value: '2.4x', label: 'throughput increase' },
        { value: '38%', label: 'revision cycle reduction' },
      ],
    },
    {
      slug: 'all-in-one-collectibles',
      title: 'All In One Collectibles',
      category: 'Brand Strategy',
      timeline: 'Brand reset and launch cycle',
      summary:
        'Balanced nostalgia-driven storytelling with modern commerce performance through a unified identity and narrative framework.',
      strategicFocus: [
        'Positioning architecture',
        'Channel narrative cohesion',
        'Conversion-focused creative standards',
      ],
      outcome:
        'Brand expression became more coherent while key customer journeys became easier to understand and complete.',
      metrics: [
        { value: '31%', label: 'funnel completion lift' },
        { value: '19%', label: 'average order value gain' },
      ],
    },
    {
      slug: 'hobby-box-brooklyn',
      title: 'Hobby Box Brooklyn',
      category: 'Go-To-Market Systems',
      timeline: 'Pre-launch through first growth wave',
      summary:
        'Built launch governance, team rituals, and creative guardrails for a young brand scaling across channels without role confusion.',
      strategicFocus: [
        'Launch sequencing',
        'Cross-functional operating rhythm',
        'Brand control surfaces',
      ],
      outcome:
        'The organization scaled creative volume without compromising strategic consistency.',
      metrics: [
        { value: '4', label: 'core launch phases aligned' },
        { value: '52%', label: 'faster asset readiness' },
      ],
    },
    {
      slug: 'covfefe-haus',
      title: 'Covfefe Haus',
      category: 'Cultural Brand Platform',
      timeline: 'Identity and campaign buildout',
      summary:
        'Developed a high-character brand system that held conceptual edge while maintaining practical guidelines for teams and partners.',
      strategicFocus: [
        'Narrative worldbuilding',
        'Identity system constraints',
        'Campaign modularity',
      ],
      outcome:
        'The project demonstrated expressive range without losing execution discipline.',
      metrics: [
        { value: '3', label: 'market-facing campaigns shipped' },
        { value: '100%', label: 'system adherence across channels' },
      ],
    },
  ],
  detailStatusNote:
    'Detailed write-ups are being finalized. Full project breakdowns are available on request.',
  bottomCta: {
    title: 'Need strategic depth, not surface-level creative output?',
    description:
      'I partner with teams that need brand systems, leadership, and execution clarity at the same time.',
    primaryText: 'Email James ↗',
    primaryUrl: `mailto:${email}`,
    secondaryText: 'Back to Home ↗',
    secondaryUrl: '/',
  },
};
