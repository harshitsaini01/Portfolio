import React from "react";
import ProjectCard from "../components/uicomponents/ProjectCard";
import HireME from "../components/uicomponents/HireMe";
import aboutImg from "../assets/about.png";

import signupImg from "../assets/incentum/signup.jpg";
import homeImg from "../assets/incentum/home.jpg";
import loanImg from "../assets/incentum/loan.jpg";
import formImg from "../assets/incentum/form.jpg";

import ig1 from "../assets/tamanna/ig1.png";
import ig2 from "../assets/tamanna/ig2.png";
import ig3 from "../assets/tamanna/ig3.png";
import ig4 from "../assets/tamanna/ig4.png";
import ig5 from "../assets/tamanna/ig5.png";
import ig6 from "../assets/tamanna/ig6.png";

import ty1 from "../assets/typing/ig1.png";
import ty2 from "../assets/typing/ig2.png";
import ty3 from "../assets/typing/ig3.png";
import ty4 from "../assets/typing/ig4.png";
import ty5 from "../assets/typing/ig5.png";
import ty6 from "../assets/typing/ig6.png";

import { motion } from "framer-motion";

export default function ProjectPage() {
  const projects = [
    {
      images: [
        signupImg,
        homeImg,
        loanImg,
        formImg,
      ],
      title: "Incentum.loans",
      description:
        "Incentum is a live, responsive loan application platform built with the MERN stack. The website allows users to easily apply for loans, upload required documents, and receive quick loan approvals through an intuitive and smooth interface. Whether you're applying for a personal or business loan, Incentum provides a seamless and efficient experience, ensuring users can access financial services anytime, anywhere. this platform is both secure and scalable, offering a reliable solution for modern loan application needs.",
      github: "https://github.com/codewithprince01/mainIncentumm",
      demo: "https://incentum.ai/",
      readMore: "https://incentum.ai/about",
      details: `Incentum.loans - Loan Application Platform\n\nProject Overview\nA comprehensive loan application platform that streamlines the loan approval process for financial institutions and borrowers. This full-stack web application provides an intuitive interface for loan applications, document management, and approval workflows.\n\nKey Features\n💰 Loan Application Management\nMulti-step loan application form with real-time validation\nDocument upload system for required paperwork\nLoan calculator with interest rate calculations\nApplication status tracking and notifications\n📋 Document Management\nSecure file upload for identity documents\nDocument verification and validation\nDigital signature integration\nDocument storage and retrieval system\n🔐 User Authentication & Security\nJWT-based authentication system\nRole-based access control (Borrower, Lender, Admin)\nSecure password management\nTwo-factor authentication support\n📊 Dashboard & Analytics\nLender dashboard with application overview\nBorrower dashboard with loan status\nReal-time analytics and reporting\nPayment tracking and history\n💳 Payment Integration\nMultiple payment gateway integration\nEMI calculation and scheduling\nPayment reminder system\nTransaction history and receipts\n\nTechnology Stack\nFrontend\nReact.js - Modern UI library for building interactive interfaces\nTailwind CSS - Utility-first CSS framework for responsive design\nJavaScript (ES6+) - Modern JavaScript features\nReact Router - Client-side routing\nAxios - HTTP client for API communication\n\nBackend\nNode.js - JavaScript runtime for server-side development\nExpress.js - Fast, unopinionated web framework\nMongoDB - NoSQL database for flexible data storage\nMongoose - MongoDB object modeling\nJWT - JSON Web Tokens for authentication\nMulter - File upload middleware\nNodemailer - Email service integration\n\nDevelopment Tools\nGit - Version control system\nESLint - Code linting and quality assurance\nNodemon - Automatic server restart during development\n\nKey Technical Implementations\nForm Validation\nReal-time client-side validation\nServer-side validation for security\nCustom validation rules for financial data\nProgressive form completion with step validation\nFile Upload System\nMulti-file upload support for documents\nFile type validation and size restrictions\nSecure file storage with encryption\nImage optimization and processing\nLoan Calculation Engine\nInterest rate calculations\nEMI computation with different formulas\nLoan term optimization\nPrepayment penalty calculations\n\nSecurity Features\nData Encryption - All sensitive data encrypted at rest and in transit\nInput Validation - XSS and injection attack prevention\nFile Upload Security - Type and size validation\nAuthentication - JWT-based secure authentication\nCORS Configuration - Cross-origin request handling\n\nPerformance Optimizations\nCode Splitting - Lazy loading of components\nImage Optimization - Compressed file uploads\nDatabase Indexing - Optimized queries for large datasets\nCaching - Browser caching for static assets\nBundle Optimization - Tree shaking and minification\n\nUser Experience Features\nResponsive Design - Mobile-first approach\nProgressive Web App - Offline functionality\nReal-time Updates - Live status updates\nAccessibility - WCAG compliance\nMulti-language Support - Internationalization ready\n\nDeployment & Infrastructure\nProduction Environment - Cloud hosting with load balancing\nSSL Certificate - HTTPS encryption\nEnvironment Configuration - Separate dev/prod configs\nError Handling - Comprehensive error logging\nBackup Strategy - Database and file backup systems\n\nFuture Enhancements\nAI-Powered Risk Assessment - Machine learning for loan approval\nBlockchain Integration - Smart contracts for loan agreements\nMobile App - React Native application\nAdvanced Analytics - Detailed reporting and insights\nAPI Documentation - Swagger/OpenAPI integration\n\nProject Impact\nThis loan application platform significantly improves the efficiency of financial institutions by:\nReducing Processing Time - Automated application processing\nImproving Accuracy - Real-time validation and error prevention\nEnhancing User Experience - Intuitive interface and smooth workflows\nStreamlining Approvals - Integrated workflow management\nProviding Insights - Analytics and reporting for decision making\n\nCode Quality & Best Practices\nTypeScript Ready - Type safety throughout the application\nESLint Configuration - Consistent code style and quality\nComponent Reusability - Modular and maintainable code\nError Handling - Comprehensive error management\nDocumentation - Well-documented code and APIs\nResponsive Design - Mobile-first approach\n\nThis project demonstrates proficiency in modern web development technologies, full-stack development, financial application development, API development, and deployment practices. It showcases the ability to build scalable, secure, and user-friendly applications that solve real-world problems in the financial sector.`
    },
    {
      images: [
        ig1,
        ig2,
        ig3,  
        ig4,
        ig5,
        ig6,
      ],
      title: "Tamannaeducations.com",
      description:
        "Admission Management System is a full-stack web application designed for educational institutions to manage student admissions, documents, fee payments, and center operations efficiently. Built with the MERN stack and TypeScript, it features role-based access, real-time form validation, a secure file upload system, and an integrated wallet for fee tracking. The platform streamlines the entire admission workflow while ensuring data accuracy, security, and scalability.",
      github: "https://github.com/harshitsaini01/admission-management",
      demo: "https://tamannaeducations.com/",
      readMore: "https://tamannaeducations.com/about",
      details: `Admission Management System - Portfolio Project\n\nProject Overview\nA comprehensive Admission Management System built for educational institutions to streamline student registration, document management, and administrative workflows. This full-stack web application enables centers to manage student admissions, track academic records, and handle document uploads efficiently.\n\nKey Features\n🎓 Student Management\nMulti-step student registration form with validation\nPersonal information management (name, contact, demographics)\nAcademic record tracking (High School, Intermediate, Graduation)\nDocument upload system (photos, signatures, certificates)\nReal-time form validation and error handling\n🏢 Center Management\nCenter registration and profile management\nCenter-specific student tracking\nRole-based access control (Admin, Super Admin, Center)\nCenter code validation and auto-completion\n💰 Wallet System\nStudent wallet management for fee payments\nOnline and offline payment tracking\nTransaction history and passbook functionality\nPayment status monitoring (Pending, Approved, Rejected)\n📊 Analytics & Reporting\nDashboard with key metrics and statistics\nTransaction analytics and payment tracking\nStudent enrollment statistics\nReal-time data visualization\n🔒 Authentication & Security\nJWT-based authentication system\nRole-based access control\nPassword reset functionality\nSecure file upload handling\n\nTechnology Stack\nFrontend\nReact 18 - Modern UI library for building interactive user interfaces\nTypeScript - Type-safe JavaScript for better code quality and developer experience\nVite - Fast build tool and development server\nTailwind CSS - Utility-first CSS framework for responsive design\nReact Hot Toast - Lightweight toast notifications\nHeroicons - Beautiful SVG icons from the makers of Tailwind CSS\n\nBackend\nNode.js - JavaScript runtime for server-side development\nExpress.js - Fast, unopinionated web framework for Node.js\nTypeScript - Type safety on the server side\nMongoDB - NoSQL database for flexible data storage\nMongoose - MongoDB object modeling for Node.js\nJWT (JSON Web Tokens) - Secure authentication and authorization\nMulter - File upload middleware for handling multipart/form-data\nNodemailer - Email service integration for notifications\nBcrypt - Password hashing for security\n\nDevelopment Tools\nESLint - Code linting and quality assurance\nNodemon - Automatic server restart during development\nTypeScript Compiler - Static type checking\n\nDeployment & Infrastructure\nNginx - Web server and reverse proxy\nUbuntu Server - Linux-based hosting environment\nEnvironment Variables - Secure configuration management\n\nArchitecture & Design Patterns\nFrontend Architecture\nComponent-Based Architecture - Reusable UI components\nContext API - Global state management for authentication\nCustom Hooks - Logic reusability and separation of concerns\nProtected Routes - Role-based navigation and access control\nForm Validation - Client-side validation with custom validation logic\n\nBackend Architecture\nRESTful API Design - Standardized API endpoints\nMVC Pattern - Model-View-Controller architecture\nMiddleware Pattern - Authentication, error handling, and validation\nService Layer - Business logic separation\nRepository Pattern - Data access abstraction\n\nDatabase Design\nMongoDB Collections:\nStudents (personal info, academic records, documents)\nCenters (center details, admin info)\nWallets (transaction history, payment status)\nPassword Resets (temporary tokens)\n\nKey Technical Implementations\nFile Upload System\nMulti-file upload support (photos, documents, certificates)\nFile type validation and size restrictions\nSecure file storage with unique naming\nImage optimization and processing\nForm Validation\nReal-time client-side validation\nServer-side validation for security\nCustom validation rules for Indian mobile numbers, pincodes\nProgressive form validation with step-by-step completion\nAuthentication System\nJWT token-based authentication\nRole-based access control (RBAC)\nSecure password reset flow\nSession management\nPayment Integration\nWallet-based payment system\nTransaction tracking and status management\nOffline payment support\nPayment history and reporting\n\nDevelopment Challenges & Solutions\nChallenge 1: Form State Management\nProblem: Complex multi-step form with validation\nSolution: Implemented custom form state management with validation hooks\nChallenge 2: File Upload Optimization\nProblem: Large file uploads causing server timeouts\nSolution: Configured Nginx client_max_body_size and implemented chunked uploads\nChallenge 3: Mobile Number Validation\nProblem: Indian mobile number format validation\nSolution: Custom regex patterns and real-time formatting\nChallenge 4: Role-Based Access Control\nProblem: Different user types with varying permissions\nSolution: Implemented middleware-based RBAC system\n\nPerformance Optimizations\nCode Splitting - Lazy loading of components\nImage Optimization - Compressed file uploads\nDatabase Indexing - Optimized queries for large datasets\nCaching - Browser caching for static assets\nBundle Optimization - Tree shaking and minification\n\nSecurity Features\nInput Validation - XSS and injection attack prevention\nFile Upload Security - Type and size validation\nAuthentication - JWT-based secure authentication\nPassword Security - Bcrypt hashing\nCORS Configuration - Cross-origin request handling\nEnvironment Variables - Secure configuration management\n\nDeployment & DevOps\nProduction Environment - Ubuntu server with Nginx\nSSL Certificate - HTTPS encryption\nEnvironment Configuration - Separate dev/prod configs\nError Handling - Comprehensive error logging and monitoring\nBackup Strategy - Database and file backup systems\n\nFuture Enhancements\nReal-time Notifications - WebSocket integration\nAdvanced Analytics - Detailed reporting and insights\nMobile App - React Native application\nAPI Documentation - Swagger/OpenAPI integration\nAutomated Testing - Unit and integration tests\nCI/CD Pipeline - Automated deployment\n\nProject Impact\nThis Admission Management System significantly improves the efficiency of educational institutions by:\nReducing Manual Work - Automated form processing and validation\nImproving Data Accuracy - Real-time validation and error prevention\nEnhancing User Experience - Intuitive interface and smooth workflows\nStreamlining Payments - Integrated wallet system for fee management\nProviding Insights - Analytics and reporting for decision making\n\nCode Quality & Best Practices\nTypeScript - Type safety throughout the application\nESLint Configuration - Consistent code style and quality\nComponent Reusability - Modular and maintainable code\nError Handling - Comprehensive error management\nDocumentation - Well-documented code and APIs\nResponsive Design - Mobile-first approach\n\nThis project demonstrates proficiency in modern web development technologies, full-stack development, database design, API development, and deployment practices. It showcases the ability to build scalable, secure, and user-friendly applications that solve real-world problems in the education sector.`
    },
    {
      images: [
        ty1,
        ty2,
        ty3,  
        ty4,
        ty5,
        ty6,
      ],
      title: "Typinghub.in",
      description:
        "TypingHub.in is a free platform offering English and Hindi typing tests for SSC CGL, CHSL, and Railway exam preparation. It features quick tests (1-10 minutes) and exam-specific tests, with a simple, mobile-friendly interface. Built with HTML5, CSS3, JavaScript, and Node.js backend, it supports Unicode for Hindi typing. While effective for exam aspirants, it lacks advanced features like gamification or multi-language support, limiting its scope compared to competitors.",
      github: "https://github.com/harshitsaini01/typing",
      demo: "https://typinghub.in/",
      readMore: "https://typinghub.in/about",
      details: `TypingHub.in - Online Code Editor Platform\n\nProject Overview\nA comprehensive online code editor platform that provides developers with a powerful environment for writing, testing, and sharing code. The platform supports multiple programming languages, real-time collaboration, and instant preview functionality.\n\nKey Features\n💻 Multi-Language Code Editor\nSyntax highlighting for HTML, CSS, JavaScript, Python, Java, C++\nAuto-completion and IntelliSense support\nError detection and linting\nCode formatting and beautification\n📝 Markdown Editor\nLive markdown preview\nRich text formatting options\nCode block support with syntax highlighting\nExport to PDF and HTML\n🔄 Live Preview System\nReal-time HTML/CSS/JavaScript preview\nSplit-screen editor and preview\nResponsive preview for mobile testing\nConsole output display\n👥 Collaboration Features\nReal-time collaborative editing\nUser presence indicators\nComment and annotation system\nVersion control integration\n📁 Project Management\nFile and folder organization\nProject templates and boilerplates\nImport/export functionality\nCloud storage integration\n🎨 Customization Options\nMultiple themes and color schemes\nFont size and family customization\nEditor layout preferences\nKeyboard shortcuts configuration\n\nTechnology Stack\nFrontend\nReact.js - Modern UI library for building interactive interfaces\nMonaco Editor - Professional code editor (same as VS Code)\nTailwind CSS - Utility-first CSS framework\nCodeMirror - Alternative code editor for markdown\nAce Editor - Lightweight code editor option\n\nBackend\nNode.js - JavaScript runtime for server-side development\nExpress.js - Fast, unopinionated web framework\nSocket.io - Real-time bidirectional communication\nMongoDB - NoSQL database for project storage\nRedis - Caching and session management\n\nDevelopment Tools\nWebpack - Module bundler and build tool\nBabel - JavaScript compiler for modern features\nESLint - Code linting and quality assurance\nPrettier - Code formatting\n\nKey Technical Implementations\nCode Editor Integration\nMonaco Editor integration with custom themes\nLanguage server protocol (LSP) support\nCustom syntax highlighting rules\nError detection and validation\nReal-time Collaboration\nWebSocket-based real-time editing\nOperational transformation for conflict resolution\nUser presence and cursor tracking\nChange synchronization across clients\nLive Preview Engine\nSandboxed iframe for code execution\nSecurity measures to prevent malicious code\nReal-time code compilation and execution\nConsole output capture and display\nFile Management System\nVirtual file system for project organization\nFile tree navigation and management\nDrag and drop file operations\nAuto-save functionality\n\nSecurity Features\nCode Sandboxing - Isolated execution environment\nInput Validation - XSS and injection attack prevention\nFile Upload Security - Type and size validation\nAuthentication - Secure user authentication\nCORS Configuration - Cross-origin request handling\n\nPerformance Optimizations\nCode Splitting - Lazy loading of editor components\nWebAssembly - Fast code execution\nCaching - Browser and server-side caching\nBundle Optimization - Tree shaking and minification\nLazy Loading - On-demand feature loading\n\nUser Experience Features\nResponsive Design - Mobile-first approach\nProgressive Web App - Offline functionality\nKeyboard Shortcuts - Power user features\nAccessibility - WCAG compliance\nMulti-language Support - Internationalization\n\nDeployment & Infrastructure\nProduction Environment - Cloud hosting with CDN\nSSL Certificate - HTTPS encryption\nEnvironment Configuration - Separate dev/prod configs\nError Handling - Comprehensive error logging\nBackup Strategy - Database and file backup systems\n\nFuture Enhancements\nAI Code Assistance - GitHub Copilot integration\nAdvanced Debugging - Step-through debugging\nPlugin System - Extensible editor functionality\nMobile App - React Native application\nAdvanced Analytics - Usage statistics and insights\n\nProject Impact\nThis online code editor platform significantly improves developer productivity by:\nReducing Setup Time - Instant access to development environment\nImproving Collaboration - Real-time team editing\nEnhancing Learning - Interactive code examples and tutorials\nStreamlining Testing - Live preview and debugging\nProviding Accessibility - Web-based development tools\n\nCode Quality & Best Practices\nTypeScript - Type safety throughout the application\nESLint Configuration - Consistent code style and quality\nComponent Reusability - Modular and maintainable code\nError Handling - Comprehensive error management\nDocumentation - Well-documented code and APIs\nResponsive Design - Mobile-first approach\n\nThis project demonstrates proficiency in modern web development technologies, code editor development, real-time collaboration, API development, and deployment practices. It showcases the ability to build powerful, scalable, and user-friendly development tools that enhance the coding experience for developers worldwide.`
    },
    {
      images: [
        aboutImg,
        aboutImg,
      ],
      title: "Rubics cube",
      description:
        "A full-stack Rubik's Cube solver featuring an interactive 3D cube visualization built with React and Three.js. The solver algorithm is implemented in Rust and compiled to WebAssembly for optimal performance. Users can manipulate the cube, apply custom color patterns, and receive step-by-step solving instructions. This project demonstrates expertise in modern web technologies and algorithm implementation.",
      github: "https://github.com/harshitsaini01/rubiks-cube-solver",
      demo: "https://rubicscube.com/",
      readMore: "https://rubicscube.com/about",
      details: `Project: Rubik's Cube Solver

Technologies Used:
- Frontend: React, TypeScript, Three.js (for 3D visualization), Vite
- Backend: Rust (compiled to WebAssembly)
- Styling: CSS/Tailwind CSS

Key Features:
- Interactive 3D Rubik's Cube visualization
- Custom color picker for setting up cube patterns
- High-performance solving algorithm written in Rust
- WebAssembly compilation for near-native browser performance
- Step-by-step solution display with animated cube movements
- Responsive design for desktop and mobile devices

Technical Implementation:
- The core solving algorithm is implemented in Rust for optimal performance
- WebAssembly integration allows the complex solving algorithm to run efficiently in the browser
- The 3D cube visualization is built using Three.js within a React component structure
- The project demonstrates effective cross-language integration (TypeScript and Rust)

Learning Outcomes:
- Advanced frontend development with React and 3D visualization
- Rust programming for performance-critical algorithms
- WebAssembly integration for high-performance browser applications
- Full-stack development with modern toolchains

Future Enhancements:
- Multiple solving algorithms with efficiency comparisons
- Support for different cube dimensions (2x2, 4x4, etc.)
- User accounts to save progress and favorite patterns
- Algorithm visualization to demonstrate the solving process
`
},
  ];

  return (
    <div>
      {/* Projects Section */}
      <div className="min-h-screen text-gray-100 py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-500">
            Welcome to <span className="text-purple-400">My Projects</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
              readMore={project.readMore}
              details={project.details}
            />
          ))}
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="mx-6 sm:mx-16 lg:mx-[150px] my-10">
        <HireME />
      </div>
    </div>
  );
}
