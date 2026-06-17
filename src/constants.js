// Constants for your portfolio
export const PERSONAL_INFO = {
    name: 'Dennis Sharon Cheruvathoor',
    title: 'Designer & Developer',
    location: 'Boston, MA',
    email: 'cheruvathoorshaj.d@northeastern.edu',
    github: 'https://github.com/cheruvathoorshajd',
    linkedin: 'https://www.linkedin.com/in/csdsharon',
    resume: 'https://drive.google.com/file/d/1SHyL1IOVSYLC_IwNTqRpUccGjPF27kC0/view?usp=sharing',
    avocations: 'https://cheruvathoor.my.canva.site/photography-portfolio'
};

export const ABOUT = {
    paragraphs: [
        "Twelve years ago, I first discovered HTML in 7th grade, which left me in awe yet disappointed by its limitations. Fast-forward to 2026, and I'm pursuing my Master in Information Systems at Northeastern University, Boston, MA.",
        "With a passion for technology and design, I'm honing my skills as an aspiring Full-Stack Developer and UI/UX Designer, continuously on the path of learning."
    ],
    image: '/Boston.png',
    imageAlt: 'Boston'
};

export const TECHNICAL_SKILLS = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS (Sass)',
    'Python',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Express.js',
    'Redux',
    'Mongoose',
    'Gulp',
    'Vue',
    'RESTful APIs',
    'Git'
];

export const DESIGN_SKILLS = [
    'UI/UX Design',
    'Usability Testing',
    'Agile',
    'Scrum',
    'Balsamiq',
    'Figma',
    'Sketch',
    'Adobe XD',
    'Moqups',
    'WordPress',
    'Photoshop',
    'Canva',
    'UI/UX Testing'
];

export const PROJECTS = [
    {
        id: 1,
        title: 'Nexus911',
        category: 'Design & Development',
        image: '/Nexus911.png',
        description: 'Autonomous multi-agent 911 dispatch system'
    },
    {
        id: 2,
        title: 'FinTrack',
        category: 'Design & Development',
        image: '/Fintrack.png',
        description: 'AI-powered financial tracker'
    },
    {
        id: 3,
        title: 'VOND.2',
        category: 'Design & Development',
        image: '/VOND.2.png',
        description: 'Prescription drug monitoring system'
    },
    {
        id: 4,
        title: 'BizzNex',
        category: 'Design & Development',
        image: '/BizzNex.png',
        description: 'A comprehensive business networking platform'
    },
    {
        id: 5,
        title: 'AviaOhr',
        category: 'Design & Development (On-Going)',
        image: '/AviaOhr.png',
        description: 'Digital wellness platform'
    },
    {
        id: 6,
        title: 'MedStar',
        category: 'Design & Development',
        image: '/Medstar.png',
        description: 'Emergency response system'
    }
];

export const GREETINGS = [
    ". Olá",      // Portuguese
    ". שלום",      // Hebrew
    ". Γεια σας",  // Greek
    ". Ciao",     // Italian
    ". 你好",      // Chinese
    ". こんにちは",  // Japanese
    ". Bonjour"   // French
];

/* ──────────────── Design portfolio constants ──────────────── */

export const HERO_META = [
    { label: 'Based in', value: 'Boston, MA' },
    { label: 'Available', value: 'August 2026' },
    { label: 'Focus', value: 'UX · Interaction · Systems' }
];

export const ABOUT_PILLARS = [
    { label: 'Experience', value: '4+ Years Design' },
    { label: 'Education', value: 'M.S. Information Systems' },
    { label: 'Tools', value: 'Figma · Adobe CC · Sketch' },
    { label: 'Method', value: 'Research-Led Design' }
];

export const CASE_STUDIES = [
    {
        id: 'paypal',
        number: '01',
        tag: 'Fintech UX',
        title: 'PayPal',
        tagline: 'Rebuilding trust into every step of the payment flow.',
        summary: 'A spec redesign of PayPal\'s core payment and account experience focused on transparency, security signaling, and reducing cognitive load. Studied trust-building patterns in fintech and how visual clarity translates directly into user confidence at the moment of purchase — the most fragile step of any digital transaction.',
        role: 'Independent UX Study',
        duration: '2024',
        context: 'Spec Work · Fintech & Trust UX',
        tools: ['Figma', 'Adobe XD', 'Trust UX', 'Payment Flows'],
        image: '/paypal.png',
        link: 'https://cheruvathoor.my.canva.site/paypal'
    },
    {
        id: 'lyft',
        number: '02',
        tag: 'Mobility UX',
        title: 'Lyft',
        tagline: 'Designing a ride experience that earns trust in the first three taps.',
        summary: 'A redesign of the Lyft rider app focused on the moments that matter most — booking confidence, real-time tracking, and post-ride feedback. Explored two-sided marketplace dynamics, real-time state management, and the visual language of safety in mobility products.',
        role: 'Independent UX Study',
        duration: '2024',
        context: 'Spec Work · Mobility & Marketplaces',
        tools: ['Figma', 'Real-time UI', 'Marketplace UX', 'Motion'],
        image: '/lyft.png',
        link: 'https://cheruvathoor.my.canva.site/lyft'
    },
    {
        id: 'hm',
        number: '03',
        tag: 'E-Commerce UX',
        title: 'H&M',
        tagline: 'Reimagining product discovery and checkout for a global fashion retailer.',
        summary: 'An end-to-end UX exploration of H&M\'s mobile shopping experience. Focused on simplifying product discovery, reducing checkout friction, and elevating the brand\'s editorial voice through cleaner typography and visual hierarchy that lets the product photography breathe.',
        role: 'Independent UX Study',
        duration: '2024',
        context: 'Spec Work · Retail & E-Commerce',
        tools: ['Figma', 'Adobe XD', 'Editorial Layout', 'Iconography'],
        image: '/HM.png',
        link: 'https://cheruvathoor.my.canva.site/hm'
    },
    {
        id: 'mkbhd',
        number: '04',
        tag: 'Brand & Creator UX',
        title: 'MKBHD',
        tagline: 'Translating one of tech\'s most recognizable creator brands into a digital experience.',
        summary: 'A brand-system-driven web concept for Marques Brownlee\'s content universe. Studied how identity, motion, and content density interact when a personal brand scales into a media operation — designed around grids, typography systems, and editorial pacing.',
        role: 'Independent UX Study',
        duration: '2024',
        context: 'Spec Work · Creator Media',
        tools: ['Figma', 'Brand Systems', 'Editorial Layout', 'Motion'],
        image: '/mkbhd.webp',
        link: 'https://cheruvathoor.my.canva.site/mkbhd'
    },
    {
        id: 'warnerbros',
        number: '05',
        tag: 'Media & Entertainment UX',
        title: 'Warner Bros',
        tagline: 'Designing the next generation of content discovery for a legacy entertainment brand.',
        summary: 'A UX concept exploring content discovery, navigation, and brand expression for Warner Bros\' digital touchpoints. Studied how legacy media brands translate decades of catalogue depth into modern interface patterns — surfacing what matters without losing the cinematic identity. Delivered as an interactive prototype.',
        role: 'Designer · Prototyper',
        duration: '2024',
        context: 'Spec Work · Media & Entertainment',
        tools: ['Moqups', 'Figma', 'Interactive Prototyping', 'Brand Systems'],
        image: '/design-mockup.png',
        link: 'https://app.moqups.com/9vnhbRNFKwHCXetphj5z9tSCzgCK7iGQ/view/page/abad36d6d'
    }
];

export const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Discover',
        desc: 'Stakeholder interviews, contextual inquiry, competitive teardowns. Understand the actual problem before naming a solution.'
    },
    {
        number: '02',
        title: 'Define',
        desc: 'Synthesize research into personas, journey maps, and a sharp problem statement. Constraints become design fuel.'
    },
    {
        number: '03',
        title: 'Design',
        desc: 'Low-fi wireframes → mid-fi flows → high-fidelity systems. Iterate against the brief, not personal preference.'
    },
    {
        number: '04',
        title: 'Test',
        desc: 'Moderated usability, heuristic reviews, A/B validation. Measure what changes, ship what works.'
    },
    {
        number: '05',
        title: 'Deliver',
        desc: 'Design tokens, component specs, accessibility annotations, and dev handoff that engineers actually want to build.'
    }
];

export const THEME = {
    colors: {
        background: '#0f0f0f',
        text: '#ffffff',
        accent: '#ff3c00',
        secondary: '#333333',
        lightGray: '#f5f5f5',
        blue: '#5352ed'
    },
    fonts: {
        heading: "'Della Respira', serif",
        body: "'Hatton', sans-serif"
    },
    transitions: {
        default: '0.5s cubic-bezier(0.33, 1, 0.68, 1)'
    }
};
