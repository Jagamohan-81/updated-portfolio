import * as Icons from "../components/Icons";

export const navMenu = [
  {
    id: "Home",
    href: "/",
  },
  {
    id: "Services",
    href: "/services",
  },
  {
    id: "About",
    href: "/about",
  },
  {
    id: "Resume",
    href: "/resume",
  },
];

export const projects = [
  {
    title: "Run Promo - A Shopify App (DotProducts)",
    image: [
      {
        src: "/assets/images/projects/run-promo-1.png",
        altText: "Screenshot of Alkem Marketplace home page",
      },
      {
        src: "/assets/images/projects/run-promo-2.png",
        altText: "Screenshot of Alkem Marketplace home page",
      },
    ],
    ariaLabel:
      "Opens modal window with more information about the Alkem Marketplace web project",
    details: {
      description:
        "The Shopify Promotion Management App is a Software as a Service (SaaS) application tailored for Shopify sellers to manage promotions effectively. It enables users to create and customize promotions, enhancing marketing capabilities and driving business growth for Shopify stores. The app features scheduling functionality to set and automate promotion timings, optimizing marketing strategies and increasing sales potential. The user interface is designed using the Polaris design system for a seamless and visually captivating experience. The app ensures efficient data exchange and operation through seamless communication with the Shopify platform via REST API and GraphQL.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },

        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },
        {
          title: "ExpressJS",
          Icon: Icons.ExpressJSIcon,
        },
        {
          title: "NodeJs",
          Icon: Icons.NodeJSIcon,
        },
        {
          title: "Shopoify",
          Icon: Icons.Shopoify,
        },
        {
          title: "Database",
          Icon: Icons.PostgreSqlIcon,
        },

        {
          title: "API",
          Icon: Icons.APIIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "https://apps.shopify.com/promolane",
      githubUrl: null,
    },
  },
  {
    title: "Ticket Mnagement App",
    image: [
      {
        src: "/assets/images/projects/ticket-management-1.png",
        altText: "Screenshot of Alkem Marketplace home page",
      },
      {
        src: "/assets/images/projects/ticket-management-2.png",
        altText: "Screenshot of Alkem Marketplace home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the Alkem Marketplace web project",
    details: {
      description:
        "The Ticket Management App is a Jira-like application designed for efficient task management. It includes features such as ticket registration, assignee management, and permission control. The app supports a three-step workflow (To-Do, In Progress, Done) and uses a linked-list data structure for prioritized sorting of tickets. Users can enjoy drag-and-drop functionality within and between columns, and there are user permissions to control modifications and deletions.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },

        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },
        {
          title: "ExpressJS",
          Icon: Icons.ExpressJSIcon,
        },
        {
          title: "NodeJs",
          Icon: Icons.NodeJSIcon,
        },
        {
          title: "Database",
          Icon: Icons.PostgreSqlIcon,
        },

        {
          title: "API",
          Icon: Icons.APIIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: null,
      githubUrl: "https://github.com/Jagamohan-81/ticket-management",
    },
  },
  {
    title: "Alkem Marketplace (INT)",
    image: [
      {
        src: "/assets/images/projects/alkem.png",
        altText: "Screenshot of Alkem Marketplace home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the Alkem Marketplace web project",
    details: {
      description:
        "Alkem Marketplace is the medicine ordering portal of Alkem labs, a renowned pharma company.Orchestrated User Management and Authentication: Integrated authentication with the backend for secure user registration and login. Devised the database schema and formulated REST APIs for managing user data and authentication",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },

        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },
        {
          title: "ExpressJS",
          Icon: Icons.ExpressJSIcon,
        },
        {
          title: "NodeJs",
          Icon: Icons.NodeJSIcon,
        },
        {
          title: "Database",
          Icon: Icons.PostgreSqlIcon,
        },

        {
          title: "API",
          Icon: Icons.APIIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "https://alkemmarketplace.in/",
      githubUrl: null,
    },
  },
  {
    title: "INT-3.0 (INT)",
    image: [
      {
        src: "/assets/images/projects/int3-0.png",
        altText: "Screenshot of  INT-3.0 page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the ThreeSeeds web project",
    details: {
      description:
        "INT-3.0 marks a significant milestone in the evolution of Indus Net Technologies. As the architects behind version 3 of indusnet.co.in, we set out to redefine the digital landscape for this esteemed technology solutions provider.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },

        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },
        {
          title: "Next Js",
          Icon: Icons.NextJSIcon,
        },
        {
          title: "Strapi",
          Icon: Icons.StrapiIcon,
        },
        {
          title: "API",
          Icon: Icons.APIIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "http://65.0.228.59:8090/",
      githubUrl: null,
    },
  },
  {
    title: "School Management System",
    image: [
      {
        src: "/assets/images/projects/sms.png",
        altText: "Screenshot of School Management System home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the School Management System web project",
    details: {
      description:
        "Designed and developed a comprehensive Full Stack Student Management System, encompassing features such as onboarding, e-library, discussion boards, attendance tracking, and real-time result monitoring, utilizing Next.js, Node.js, Express, Tailwind CSS, and TypeScript for enhanced accessibility and seamless educational management.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },
        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },
        {
          title: "Next Js",
          Icon: Icons.NextJSIcon,
        },
        {
          title: "ExpressJS",
          Icon: Icons.ExpressJSIcon,
        },
        {
          title: "NodeJs",
          Icon: Icons.NodeJSIcon,
        },
        {
          title: "Database",
          Icon: Icons.PostgreSqlIcon,
        },

        {
          title: "API",
          Icon: Icons.APIIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
        {
          title: "TypeScript",
          Icon: Icons.TypescripIcon,
        },
      ],
      url: null,
      githubUrl: "https://github.com/Jagamohan-81/library-managment",
    },
  },
  {
    title: "Dynamic Scorecard Generator",
    image: [
      {
        src: "/assets/images/projects/scorecard.png",
        altText: "Screenshot of Dynamic Scorecard  home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the Dynamic Scorecard project",
    details: {
      description:
        "Our Dynamic Scorecard Generator stands as a testament to innovation in the realm of academic assessments. This personal project was conceived with the goal of simplifying the scorecard creation process for universities.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },
        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },

        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "https://int-assignment-2xb9.vercel.app/",
      githubUrl: "https://github.com/Jagamohan-81/INTassignment",
    },
  },
  {
    title: "Online Consult With Doctor",
    image: [
      {
        src: "/assets/images/projects/online-doctor.png",
        altText: "Screenshot of Dynamic Scorecard  home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the Dynamic Scorecard project",
    details: {
      description:
        "This was an Assesment project ,where i was given some api end-points to create a React-app where patients can consult with doctor.Completed withen 5hrs.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },
        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },

        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "https://krishworks-assesment.vercel.app/",
      githubUrl: "https://github.com/Jagamohan-81/KrishAssignment",
    },
  },
  {
    title: "Classic Tic Tac Toe",
    image: [
      {
        src: "/assets/images/projects/tic-tac-toe.png",
        altText: "Screenshot of tic Tac Toe  home page",
      },
    ],

    ariaLabel:
      "Opens modal window with more information about the tic Tac Toe project",
    details: {
      description:
        "Mini project of A classic TicTacToe game built using ReactJS. Features : Button for Resetting The Game, History of all the moves played (undo a move), etc.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },
        {
          title: "React Js",
          Icon: Icons.ReactIcon,
        },

        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
      ],
      url: "https://tictactoe-bicky.netlify.app/",
      githubUrl: null,
    },
  },
];

export const testimonials = [
  // {
  //   quote:
  //     "I am incredibly grateful for Edward's remarkable efforts of completely revamping our nonprofit's website. His dedication and expertise in enhancing the site's security measures while also ensuring a seamless user experience has been nothing short of exceptional. The new website not only boasts a robust security infrastructure that safeguards sensitive data, but it also welcomes visitors with an intuitive and user-friendly interface. Edward took our organization's mission to heart and translated it into an online platform that not only represents our values but also engages our audience effectively. His selfless commitment to improving our online presence has undoubtedly elevated our nonprofit's reach and impact. We owe him a debt of gratitude for his invaluable contribution in making our website a secure and inviting space for all.",
  //   name: "Alicia P.",
  //   title: "Executive Director of Three Seeds Organization",
  //   src: "/assets/images/testimonials/alicia.webp",
  //   altText: "Profile of Alicia P.",
  // },
];

export const socialMedias = [
  {
    href: "tel:+917205816681",
    ariaLabel: "Lets have a call ?",
    title: "Phone number",
    Icon: Icons.PhoneIcon,
  },
  {
    href: "mailto:pandajagamohan12@gmail.com",
    ariaLabel: "Compose an email to Jagamohan Panda",
    title: "Write an Email to Jagamohan Panda",
    Icon: Icons.EmailIcon,
  },
  {
    href: "https://www.linkedin.com/in/jagamohan-panda/",
    ariaLabel: "Goes to Jagamohan Panda&apos;s LinkedIn profile",
    title: "LinkedIn Profile",
    Icon: Icons.LinkedInIcon,
  },
  {
    href: "https://github.com/Jagamohan-81",
    ariaLabel: "Goes to Jagamohan Panda&apos;s GitHub profile",
    title: "GitHub Profile",
    Icon: Icons.GitHubIcon,
  },
  // {
  //   href: "https://twitter.com/lipunlive",
  //   ariaLabel: "Goes to Jagamohan Panda&apos;s Twitter profile",
  //   title: "Twitter Profile",
  //   Icon: Icons.TwitterIcon,
  // },
];

export const techSkills = [
  {
    category: "Front-End Development",
    skills: [
      {
        title: "HTML 5",
        Icon: Icons.HtmlIcon,
      },
      {
        title: "CSS 3",
        Icon: Icons.CSSIcon,
      },

      {
        title: "Next Js",
        Icon: Icons.NextJSIcon,
      },
      {
        title: "React Js",
        Icon: Icons.ReactIcon,
      },
      {
        title: "Angular Js",
        Icon: Icons.AngularIcon,
      },

      {
        title: "Tailwind CSS",
        Icon: Icons.TailwindCSSIcon,
      },
      {
        title: "Bootstrap",
        Icon: Icons.BootstrapIcon,
      },
    ],
  },
  {
    category: "Back-End Development",
    skills: [
      {
        title: "Node Js",
        Icon: Icons.NodeJSIcon,
      },
      {
        title: "Express Js",
        Icon: Icons.ExpressJSIcon,
      },
      {
        title: "SQL Server",
        Icon: Icons.SqlServerIcon,
      },
      {
        title: "PostgreSQL",
        Icon: Icons.PostgreSqlIcon,
      },
      {
        title: "MongoDB",
        Icon: Icons.MongoDBIcon,
      },
      {
        title: "SSRS",
        Icon: Icons.SsrsIcon,
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        title: "JavaScript",
        Icon: Icons.JavascriptIcon,
      },
      {
        title: "Typescript",
        Icon: Icons.TypescripIcon,
      },
      {
        title: "Python",
        Icon: Icons.PythonIcon,
      },
    ],
  },
  {
    category: "Content Management Systems",
    skills: [
      {
        title: "Shopoify",
        Icon: Icons.Shopoify,
      },
      {
        title: "WordPress",
        Icon: Icons.WordPressIcon,
      },
      {
        title: "Strapi",
        Icon: Icons.StrapiIcon,
      },
      
      // {
      //   title: "Wix",
      //   Icon: Icons.WixIcon,
      // },
    ],
  },
  {
    category: "Build Tools, Frameworks, and Versioning",
    skills: [
      {
        title: "Vite",
        Icon: Icons.ViteIcon,
      },
      {
        title: "Git",
        Icon: Icons.GitIcon,
      },
      {
        title: "GitHub",
        Icon: Icons.GitHubIcon,
      },
    ],
  },
  {
    category: "Design and Prototyping",
    skills: [
      {
        title: "Responsive Design",
        Icon: Icons.ResponsiveDesignIcon,
      },
      // {
      //   title: "Pen and Paper",
      //   Icon: Icons.SketchingIcon,
      // },
      {
        title: "Figma",
        Icon: Icons.FigmaIcon,
      },
    ],
  },
  // {
  //   category: "Microsoft Products",
  //   skills: [
  //     {
  //       title: "Sharepoint",
  //       Icon: Icons.SharepointIcon,
  //     },
  //     {
  //       title: "Excel",
  //       Icon: Icons.ExcelIcon,
  //     },
  //     {
  //       title: "Access",
  //       Icon: Icons.AccessIcon,
  //     },
  //   ],
  // },
  {
    category: "Others",
    skills: [
      {
        title: "APIs",
        Icon: Icons.APIIcon,
      },
      {
        title: "REST APIs",
        Icon: Icons.RestAPIIcon,
      },
      // {
      //   title: "LocalWP",
      //   Icon: Icons.LocalWP,
      // },
    ],
  },
];

export const softSkills = [
  {
    title: "Creativity",
    Icon: Icons.BrightIdeaIcon,
  },
  {
    title: "Teamwork",
    Icon: Icons.TeamworkIcon,
  },
  {
    title: "Public Speaking",
    Icon: Icons.PublicSpeakingIcon,
  },
  {
    title: "Time Management",
    Icon: Icons.ScheduleIcon,
  },
];

export const workExp = [
  {
    company: "Dot Product Solutions LLP",
    location: "Remote",
    positions: [
      {
        title: "Software Development Engineer - I",
        startDate: new Date(2022, 8),
        endDate: "present",
      },
    ],
    tasks: [
      "Contributed to the growth of an AI-based social media engagement app, increasing audience engagement and interaction by 20%.",
      "Spearheaded the development of a Shopify promotion management app, enhancing marketing efficiency for Shopify store owners by 15%.",
      "Implemented a Jira-like interface and workflow organization in a ticket creation app, boosting task management efficiency by 25% with drag-and-drop functionality and prioritized sorting.",
      "Actively participated in team-based development projects, showcasing strong collaborative and problem-solving skills.",
      "Played a pivotal role in constructing full-stack web applications.",
    ],
  },
  {
    company: "Indus Net Technologies Pvt Ltd",
    location: "Kolkata",
    positions: [
      {
        title: "Associate Software Engineer",
        startDate: new Date(2022, 8),
        endDate: "present",
      },
    ],
    tasks: [
      "Restructured, modularized, and modernized outdated code bases, resulting in significant cost reduction and a 15% improvement in functionality.",
      "Collaborated with project managers to manage all stages of the systems development lifecycle, achieving 96% adherence to project milestones and deadlines.",
      "Remedied bugs and introduced enhancements for code releases and patches, optimizing system performance and user experience.",
      "Designed reusable code components employed over 50 times by multiple teams across projects.",
    ],
  },
  {
    company: "Masai School",
    location: "Remote",
    positions: [
      {
        title: "Student Coordinator ( Full-Stack Trainee)",
        startDate: new Date(2022, 5),
        endDate: new Date(2022, 8),
      },
    ],

    tasks: [
      "Served as a dedicated Student Coordinator at Masai School, providing invaluable support to fellow students by assisting with assignments, coding doubts, and goal attainment.",
      "Effectively communicated complex coding concepts and provided hands-on guidance, resulting in improved learning outcomes for peers.",
      "Facilitated collaborative efforts among students, fostering a productive learning environment and enabling successful teamwork on group assignments and projects.",
      "Demonstrated expertise in designing semantically structured and responsive websites, ensuring optimal user experience on both mobile and desktop devices.",
      "Played a pivotal role in constructing full-stack web applications by actively participating in team-based development projects, showcasing strong collaborative and problem-solving skills.",
    ],
  },
];

export const extracurriculars = [
  {
    company: "Toastmasters International Organization",
    location: "Pittsford, NY",
    positions: [
      {
        title: "Vice President of Public Relations",
        startDate: new Date(2023, 6),
        endDate: "present",
      },
      {
        title: "Sergeant at Arms",
        startDate: new Date(2022, 4),
        endDate: new Date(2023, 6),
      },
    ],
    tasks: [
      "Develop strategies to promote the club to the community, potential members, and guests",
      "Manage the club's social media accounts and website to share club events, achievements, and information",
      "Create content that showcases the club's activities and benefits",
    ],
  },
  {
    company: "Literacy Rochester",
    location: "East Rochester, NY",
    positions: [
      {
        title: "Digital Volunteer",
        startDate: new Date(2022, 3),
        endDate: "present",
      },
    ],
    tasks: [
      "Diagnose and troubleshoot technical problems",
      "Demonstrate strong communication skills by explaining technical concepts in a clear and understandable manner",
      "Recognized for outstanding problem-solving capabilities",
    ],
  },
];

export const educations = [
  {
    degree: "Full Stack Web Development",
    school: "Masai School, Bengaluru",
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 5),
    location: "Puri, OD",
  },
  {
    degree: "B.Sc",
    school: "Utkal University, Bhubaneswar",
    startDate: new Date(2018, 7),
    endDate: new Date(2022, 4),
    location: "Bhubaneswar, OD",
  },
  {
    degree: "Intermediate",
    school: "S.C.S College, Puri",
    startDate: new Date(2016, 7),
    endDate: new Date(2018, 5),
    location: "Puri, OD",
  },
];

export const dessertImages = [
  {
    src: "/assets/images/desserts/oreo-cupcakes.webp",
    altText:
      "Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper",
    value: "oreo-cupcakes",
    label: "Oreo cupcakes",
  },
  {
    src: "/assets/images/desserts/bagel-cake.webp",
    altText: "Large cake decorated to look like an everything bagel",
    value: "bagel-cake",
    label: "Everything bagel cake",
  },
  {
    src: "/assets/images/desserts/souffle.webp",
    altText: "Cheese souffle in a ramekin",
    value: "souffle",
    label: "Cheese souffle",
  },
  {
    src: "/assets/images/desserts/cookies.webp",
    altText: "Plate of chocolate chip cookies",
    value: "cookies",
    label: "Chocolate chip cookies",
  },
  {
    src: "/assets/images/desserts/macaron-cupcake.webp",
    altText:
      "Red velvet cupcake with cream cheese frosting with a strawberry macaron on top",
    value: "macaron-cupcakes",
    label: "Red velvet cupcake",
  },
  {
    src: "/assets/images/desserts/cannoli-cupcakes.webp",
    altText: "Cannoli cupcakes with chocolate chips on top",
    value: "cannoli-cupcakes",
    label: "Cannoli cupcakes",
  },
];

export const generalServices = [
  // {
  //   title: "Consulting and Strategy",
  //   description:
  //     "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
  //   Icon: Icons.HandshakeIcon,
  // },
  // {
  //   title: "Branding",
  //   description:
  //     "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
  //   Icon: Icons.BrightIdeaIcon,
  // },
  // {
  //   title: "Competitor Analysis",
  //   description:
  //     "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
  //   Icon: Icons.TargetIcon,
  // },
  {
    title: "Front-End Development",
    description:
      "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
    Icon: Icons.WebDesignIcon,
  },
  {
    title: "Back-End Development",
    description:
      "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
    Icon: Icons.ServerIcon,
  },
  {
    title: "Responsive Design",
    description:
      "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
    Icon: Icons.DesktopMobileIcon,
  },
];

export const specialties = [
  {
    title: "Web Hosting and Deployment",
    Icon: Icons.DatabaseIcon,
  },
  {
    title: "API Development and Integration",
    Icon: Icons.APIIcon,
  },
  {
    title: "Custom Web Applications",
    Icon: Icons.ProgrammingIcon,
  },
  {
    title: "Portfolio Websites",
    Icon: Icons.PortfolioIcon,
  },
  {
    title: "CMS Development and Customization",
    Icon: Icons.WebContentIcon,
  },
  {
    title: "Web Performance Optimization",
    Icon: Icons.RocketIcon,
  },
  {
    title: "Website Maintenance",
    Icon: Icons.ToolsIcon,
  },
  {
    title: "Website Migration",
    Icon: Icons.LeftRightArrowsIcon,
  },
];
