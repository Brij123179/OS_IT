/**
 * ==============================================================================
 * COURSE DATA - CEUC301: Fundamentals of Operating System Design (FOS)
 * Department of Information Technology - CHARUSAT
 * Subject Coordinator: Prof. Nishat Shaikh
 * Faculty: Prof. Madhav Ajwalia, Prof. Binal Kaka
 * ==============================================================================
 */

export const courseTemplateData = {
  // 1. Course & Department Identification
  meta: {
    code: "CEUC301",
    shortCode: "CEUC301 - FOS",
    name: "Fundamentals of Operating System Design",
    shortName: "Operating System Design",
    department: "Information Technology",
    university: "CHARUSAT",
    institute: "CSPIT",
    semester: "Semester V",
    credits: "4.0 Credits (3L + 2P)",
    prerequisites: [
      "Fundamental of Data Structures and Algorithm Analysis",
      "Digital Electronics",
      "Computer Organization and Architecture"
    ],
    academicYear: "2026 - 2027",
    syllabusPdfUrl: "https://drive.google.com/file/d/1Wgw2CYmUPDxSaszhCtw3GBfrWJwiEJST/view?usp=drive_link",
    labManualPdfUrl: "https://drive.google.com/file/d/1AC0w-Q1LGFGLsR-MNM94mFIo6IZTv7Ft/view?usp=drive_link",
    practicalExercisesUrl: "https://drive.google.com/drive/folders/1_AIOi6YM9tVYmGNHdl6CaeF8RBEQG-nL?usp=drive_link",
    presentationsDriveUrl: "https://drive.google.com/drive/folders/1eBVuU2kQct4ENSHSpnYUS31Awx1XGOIR?usp=sharing",
    referenceMaterialDriveUrl: "https://drive.google.com/drive/folders/1METq1nd2QZsWjaTS8uGl_hXfxRXJ8NfU",
    universityPapersUrl: "https://drive.google.com/drive/folders/1Xf6UtOgUukJ-jlsQnytWRowncMfkLlHR?usp=sharing",
    presentationTopicsUrl: "https://drive.google.com/file/d/1nfr5iy8WTxBF6Id-dTJrIOKRFkafYXwZ/view?usp=drive_link",
    nptelCourseUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs123",
    instructionalToolsUrl: "https://drive.google.com/drive/folders/15iGzzOxu6NIdt03TgINZRteYsY9UdFpj?usp=sharing",
    pedagogicalPlanningUrl: "https://drive.google.com/drive/folders/1vRHixVCcNtzafO1n3BaO3PdWhiodE1EQ",
    contentEnrichmentUrl: "https://drive.google.com/drive/folders/1KtbMiTAJ2GZOtohRNWXL2K5Agv8Nzn3V",
    coordinator: "Prof. Nishat Shaikh",
    contactEmail: "os.it@charusat.ac.in"
  },

  // 2. Subject Coordinator & Division Teaching Team
  facultyData: {
    coordinator: "Prof. Nishat Shaikh",
    divisionAllocations: [
      {
        division: "IT-1",
        lectures: ["Prof. Madhav Ajwalia", "Prof. Binal Kaka"],
        labs: ["Prof. Madhav Ajwalia"]
      },
      {
        division: "IT-2",
        lectures: ["Prof. Nishat Shaikh", "Prof. Binal Kaka"],
        labs: ["Prof. Nishat Shaikh", "Prof. Madhav Ajwalia"]
      }
    ],
    facultyList: [
      {
        name: "Prof. Nishat Shaikh",
        role: "Subject Coordinator & Assistant Professor",
        department: "Department of Information Technology",
        allocations: "IT-2 Lectures & IT-2 Laboratory",
        initials: "NS"
      },
      {
        name: "Prof. Madhav Ajwalia",
        role: "Assistant Professor",
        department: "Department of Information Technology",
        allocations: "IT-1 Lectures, IT-1 Lab & IT-2 Lab",
        initials: "MA"
      },
      {
        name: "Prof. Binal Kaka",
        role: "Assistant Professor",
        department: "Department of Information Technology",
        allocations: "IT-1 Lectures & IT-2 Lectures",
        initials: "BK"
      }
    ]
  },

  // Resource Persons alias pointing to faculty list
  resourcePersons: [
    {
      name: "Prof. Nishat Shaikh",
      role: "Subject Coordinator & Assistant Professor",
      department: "Department of Information Technology",
      allocations: "IT-2 Lectures & IT-2 Laboratory",
      initials: "NS"
    },
    {
      name: "Prof. Madhav Ajwalia",
      role: "Assistant Professor",
      department: "Department of Information Technology",
      allocations: "IT-1 Lectures, IT-1 Lab & IT-2 Lab",
      initials: "MA"
    },
    {
      name: "Prof. Binal Kaka",
      role: "Assistant Professor",
      department: "Department of Information Technology",
      allocations: "IT-1 Lectures & IT-2 Lectures",
      initials: "BK"
    }
  ],

  // 3. Course Outcomes (CO1 to CO7) - Exact from CHARUSAT Syllabus
  courseOutcomes: [
    {
      code: "CO1",
      title: "OS Design Goals & Architectural Choices",
      description: "Analyse and evaluate operating system design goals (performance, scalability, reliability, security, portability) and justify architectural choices (monolithic, microkernel, hybrid)."
    },
    {
      code: "CO2",
      title: "Process, Thread & Scheduling Algorithms",
      description: "Analyse and compare process, thread, and scheduling algorithms using quantitative performance metrics (throughput, turnaround time, waiting time, response time, fairness), and assess their suitability under diverse workload characteristics."
    },
    {
      code: "CO3",
      title: "Synchronization & Concurrency Control",
      description: "Design and evaluate synchronization and concurrency control mechanisms using semaphores, monitors, and lock-free techniques."
    },
    {
      code: "CO4",
      title: "Deadlock Analysis, Prevention & Avoidance",
      description: "Analyse and evaluate deadlock scenarios using formal models, and design appropriate prevention, avoidance, detection, and recovery strategies considering system performance, resource utilization, starvation, and live-lock constraints."
    },
    {
      code: "CO5",
      title: "Memory Management & Virtual Memory Designs",
      description: "Assess and compare memory management and virtual memory designs (paging, segmentation, hybrid schemes, kernel allocators) by analyzing fragmentation, access latency, security, and scalability trade-offs."
    },
    {
      code: "CO6",
      title: "File Systems & I/O Subsystem Optimization",
      description: "Evaluate and optimize file system and I/O subsystem designs by comparing disk scheduling, buffering, journaling, and log-structured approaches, and justify design decisions based on performance, reliability, and workload."
    },
    {
      code: "CO7",
      title: "Specialized Domains (Real-Time, Embedded & Mobile OS)",
      description: "Synthesize and critique operating system design principles across specialized domains (Real-time, Embedded, and mobile OS) and propose system-level design improvements."
    }
  ],

  // 4. Teaching and Examination Scheme
  teachingScheme: {
    lectures: "3 Hours / Week",
    practicals: "2 Hours / Week",
    credits: "4.0",
    theoryMarks: {
      continuous: 50,
      endSem: 50,
      total: 100
    },
    practicalMarks: {
      continuous: 25,
      endSem: 25,
      total: 50
    },
    grandTotal: 150
  },

  // 5. Theory Continuous Assessment Structure (50 Marks)
  theoryAssessment: {
    totalMarks: 50,
    components: [
      {
        id: "cce",
        name: "Continuous and Comprehensive Evaluation (CCE)",
        marks: 20,
        type: "Internal Assessment",
        description: "Classroom tutorials, surprise tests, and regular problem sets."
      },
      {
        id: "sessional",
        name: "Sessional Examination [Tablet Based]",
        marks: 20,
        type: "Objective & Descriptive",
        description: "Official institutional mid-term tablet examination conducted in digital mode."
      },
      {
        id: "nptel",
        name: "NPTEL Course Certification",
        marks: 10,
        type: "Online Mooc",
        courseName: "Introduction To Operating Systems",
        instructor: "Prof. Chester Rebeiro | IIT Madras",
        url: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs123",
        description: "12-week NPTEL course completion certificate and assignment submissions."
      }
    ],
    universityPapers: {
      name: "Previous Year University Question Papers",
      url: "https://drive.google.com/drive/folders/1Xf6UtOgUukJ-jlsQnytWRowncMfkLlHR?usp=sharing"
    }
  },

  // 6. Practical Assessment Structure [50 Marks]
  practicalAssessment: {
    totalMarks: 50,
    universityExam: {
      total: 25,
      practicalPerformance: 20,
      vivaVoce: 5,
      description: "University Examination [Practical (20 Marks) + Viva (5 Marks)]"
    },
    continuousAssessment: {
      total: 25,
      practicalPerformance: 15,
      internalExam: 10,
      description: "Practical Continuous Assessment (25 Marks): Performance (15M) + Internal Exam (10M)"
    },
    links: {
      labManual: "https://drive.google.com/file/d/1AC0w-Q1LGFGLsR-MNM94mFIo6IZTv7Ft/view?usp=drive_link",
      practicalExercises: "https://drive.google.com/drive/folders/1_AIOi6YM9tVYmGNHdl6CaeF8RBEQG-nL?usp=drive_link"
    },
    experimentsList: [
      {
        id: 1,
        number: "Practical 01",
        title: "Exploring OS Kernel Interfaces via System Calls",
        objective: "Use getpid(), getppid(), uname(), sysinfo(). Correlate outputs with /proc entries."
      },
      {
        id: 2,
        number: "Practical 02",
        title: "Process Creation and Lifecycle Analysis",
        objective: "Use fork(), exec(), wait(). Trace process states using /proc/[pid]/status."
      },
      {
        id: 3,
        number: "Practical 03",
        title: "Thread Creation and Context Switch Cost",
        objective: "Create threads using POSIX threads. Measure thread vs process context switch time."
      },
      {
        id: 4,
        number: "Practical 04",
        title: "Scheduler Behavior Using System Calls",
        objective: "Use sched_setscheduler(), nice(). Measure turnaround, response time."
      },
      {
        id: 5,
        number: "Practical 05",
        title: "Kernel Module to Inspect Process Control Blocks",
        objective: "Traverse task_struct list. Extract scheduling and memory attributes."
      },
      {
        id: 6,
        number: "Practical 06",
        title: "Real-Time Scheduling Experiment",
        objective: "Implement periodic tasks using SCHED_FIFO. Observe deadline misses."
      },
      {
        id: 7,
        number: "Practical 07",
        title: "System Call Based Synchronization",
        objective: "Use POSIX semaphores and mutexes. Demonstrate race conditions and fixes."
      },
      {
        id: 8,
        number: "Practical 08",
        title: "Kernel-Level Synchronization",
        objective: "Implement spinlocks and mutexes in kernel module. Compare blocking vs busy waiting."
      },
      {
        id: 9,
        number: "Practical 09",
        title: "Deadlock Demonstration and Detection",
        objective: "Create circular wait using semaphores. Analyse deadlock conditions."
      },
      {
        id: 10,
        number: "Practical 10",
        title: "Kernel Memory Allocation Analysis",
        objective: "Use kmalloc(), vmalloc(). Observe slab and buddy allocator behaviour."
      },
      {
        id: 11,
        number: "Practical 11",
        title: "Virtual Memory & Page Fault Measurement",
        objective: "Allocate large memory using mmap(). Observe page faults via /proc/vmstat."
      },
      {
        id: 12,
        number: "Practical 12",
        title: "File System Behaviour via System Calls",
        objective: "Analyse open(), read(), write(), fsync(). Compare buffered vs direct I/O."
      },
      {
        id: 13,
        number: "Practical 13",
        title: "Kernel Module for I/O Monitoring",
        objective: "Monitor block I/O requests. Study request merging and scheduling."
      },
      {
        id: 14,
        number: "Practical 14",
        title: "System-call driven Kernel monitor",
        objective: "Develop a dashboard application to monitor the CPU and memory usage by processes."
      }
    ]
  },

  // 7. Course Materials & References
  materialsData: {
    facultyPresentationsUrl: "https://drive.google.com/drive/folders/1eBVuU2kQct4ENSHSpnYUS31Awx1XGOIR?usp=sharing",
    referenceMaterialUrl: "https://drive.google.com/drive/folders/1METq1nd2QZsWjaTS8uGl_hXfxRXJ8NfU",
    
    youtubePlaylists: [
      {
        id: "yt-1",
        title: "Operating Systems Lecture Series (Process, Memory & I/O)",
        topics: "Process management, Memory management, virtual memory, and paging, Interrupt structures, interrupt processing, and I/O processing.",
        url: "https://www.youtube.com/watch?v=9ci5g49nfdE",
        badge: "Core Lecture Series"
      },
      {
        id: "yt-2",
        title: "Operating System Playlist for GATE Questions",
        topics: "Comprehensive competitive exam and GATE preparation video series with conceptual numericals and algorithm analysis.",
        url: "https://www.youtube.com/watch?v=2i2N_Qo_FyM&list=PLEbnTDJUr_If_BnzJkkN_J0Tl3iXTL8vq",
        badge: "GATE Preparation"
      },
      {
        id: "yt-3",
        title: "Introduction to Operating System - Prof. Chester Rebeiro (IIT Madras)",
        topics: "Official IIT Madras NPTEL video course covering OS architectural layers, hardware isolation, scheduling, and system programming.",
        url: "https://www.youtube.com/channel/UChsuwkz_OWhz6pUTGK2vXZw",
        badge: "NPTEL / IIT Madras"
      }
    ],

    // Prescribed Reference Books (Exact from user requirement)
    referenceBooks: [
      {
        id: "rb-1",
        title: "Operating Systems: Three Easy Pieces",
        authors: "Remzi Arpaci-Dusseau and Andrea Arpaci-Dusseau",
        edition: "Available online for free",
        publisher: "Arpaci-Dusseau Books",
        url: "http://pages.cs.wisc.edu/~remzi/OSTEP/",
        type: "Reference Book",
        isOpenAccess: true
      },
      {
        id: "rb-2",
        title: "Modern Operating Systems",
        authors: "Andrew S. Tanenbaum",
        edition: "Third Edition",
        publisher: "PHI",
        type: "Reference Book"
      },
      {
        id: "rb-3",
        title: "Operating Systems",
        authors: "D.M. Dhamdhare",
        edition: "TMH",
        publisher: "Tata McGraw-Hill",
        type: "Reference Book"
      },
      {
        id: "rb-4",
        title: "Unix System Concepts & Applications",
        authors: "Sumitabha Das",
        edition: "TMH",
        publisher: "Tata McGraw-Hill",
        type: "Reference Book"
      },
      {
        id: "rb-5",
        title: "Unix Shell Programming",
        authors: "Yashwant Kanitkar",
        edition: "BPB Publications",
        publisher: "BPB Publications",
        type: "Reference Book"
      }
    ],

    // Online Text book / Reference Book / Materials Repository Links
    onlineCourseMaterials: [
      {
        id: "mat-1",
        title: "Operating System Concepts (OS9) Slide Directory",
        description: "Official slide directory and lecture slides for Avi Silberschatz 9th Edition.",
        url: "https://www.os-book.com/OS9/slide-dir/index.html",
        badge: "Official Slides"
      },
      {
        id: "mat-2",
        title: "Operating System Concepts (OS10) Global Edition Yale Codex",
        description: "Official Yale University online resources, appendices, and lecture slide materials.",
        url: "https://codex.cs.yale.edu/avi/os-book/OS10-global/",
        badge: "Yale Codex"
      },
      {
        id: "mat-3",
        title: "William Stallings OS Online Resources & Material",
        description: "Student and instructor companion website and reference material by William Stallings.",
        url: "http://williamstallings.com/OS/OS6e-inst.html",
        badge: "Stallings Portal"
      },
      {
        id: "mat-4",
        title: "CEUC301 Shared Course Materials Repository",
        description: "Cloud repository of course notes, textbook slides, and reference materials for CEUC301.",
        url: "https://app.box.com/s/p3fa1bukgs",
        badge: "Box Repository"
      }
    ]
  },

  // 8. Lesson Planning Units / Lecture Plan (Exact 9 Units & Bridge Topics from Syllabus)
  lessonPlanning: {
    title: "Lesson Planning",
    sheets: {
      it1Url: "https://docs.google.com/spreadsheets/d/1ciKWxeze8ELJQHIgIDZBvCPxyO2lb71Y/edit?gid=1102866220#gid=1102866220",
      it2Url: "https://docs.google.com/spreadsheets/d/1LUrKNOOZSM-s_PdZyMMSYJABAlDi4OH8/edit?gid=287454461#gid=287454461"
    },
    bridgeTopics: [
      {
        id: "b-1",
        topic: "Instruction Cycle and Execution, Timer Interrupts, and Context Switching at Hardware level",
        reference: "William Stallings, Computer Organization and Architecture, 10th Ed. (pp. 168–210)"
      },
      {
        id: "b-2",
        topic: "Operating system functionalities and objectives, and its type",
        reference: "Foundational Operating Systems Concepts"
      },
      {
        id: "b-3",
        topic: "Memory hierarchy and address translation",
        reference: "William Stallings, Computer Organization and Architecture (pp. 290–320)"
      },
      {
        id: "b-4",
        topic: "Memory Layout (i.e. Text, Data, Heap, and Stack) preferably using C language",
        reference: "Kernighan & Ritchie, The C Programming Language, 2nd Ed. (pp. 116–143)"
      },
      {
        id: "b-5",
        topic: "Locking (DBMS)",
        reference: "Silberschatz, Korth & Sudarshan, Database System Concepts, 7th Ed"
      },
      {
        id: "b-6",
        topic: "Cache vs virtual memory",
        reference: "William Stallings, Computer Organization and Architecture (pp. 320–350)"
      },
      {
        id: "b-7",
        topic: "Hardware synchronization primitives",
        reference: "William Stallings, Computer Organization and Architecture (pp. 338–370)"
      },
      {
        id: "b-8",
        topic: "File system and its Indexing structure",
        reference: "Silberschatz, Korth & Sudarshan, Database System Concepts (pp. 660–690)"
      }
    ],
    units: [
      {
        unit: 1,
        title: "Operating System Design, Processes and Threads",
        coMapped: "CO1",
        hours: 4,
        topics: [
          "Design goals: Performance, Scalability, Reliability, Security, Portability and Interoperability",
          "Kernel architectures: Monolithic, Microkernel, Hybrid (design trade-offs)",
          "Process Control Block (PCB) and Thread Control Block (TCB) internals",
          "Process and Thread switching its overhead and its performance evaluation",
          "Kernel vs. user-level threads: design and performance implications"
        ]
      },
      {
        unit: 2,
        title: "CPU Scheduling and Performance Evaluation",
        coMapped: "CO2",
        hours: 4,
        topics: [
          "Scheduling metrics and workload characterization",
          "Overview of CPU scheduling algorithms: FCFS, SJF, RR, Priority",
          "Multilevel and real-time scheduling (EDF, RMS)",
          "Multi-level queue and feedback scheduling"
        ]
      },
      {
        unit: 3,
        title: "Synchronization and Concurrency Control Design",
        coMapped: "CO3",
        hours: 7,
        topics: [
          "Race Conditions, Critical section problem",
          "Semaphores, mutexes, monitors, condition variables",
          "Memory consistency and visibility models",
          "Lock-based vs. lock-free designs"
        ]
      },
      {
        unit: 4,
        title: "Deadlock Modeling and System-level Handling",
        coMapped: "CO4",
        hours: 4,
        topics: [
          "Deadlock modelling. Deadlock Prevention and Avoidance strategies",
          "Detection and Recovery trade-offs",
          "Deadlock Vs Starvation – Resources trade-off",
          "Starvation and livelock"
        ]
      },
      {
        unit: 5,
        title: "Memory Management System Design",
        coMapped: "CO5",
        hours: 5,
        topics: [
          "Overview of Memory fragmentation.",
          "Paging, Segmentation, Paging with Segmentation.",
          "Kernel memory allocators (buddy, slab)",
          "Paging vs. Segmentation – Performance Evaluation",
          "Security under paging and segmentation"
        ]
      },
      {
        unit: 6,
        title: "Virtual Memory and Page Replacement Design",
        coMapped: "CO5",
        hours: 4,
        topics: [
          "TLB design and performance",
          "Overview of Page replacement algorithms (FIFO, LRU, Optimal)",
          "Thrashing and working set model"
        ]
      },
      {
        unit: 7,
        title: "File System Design and Performance",
        coMapped: "CO6",
        hours: 5,
        topics: [
          "File system abstractions and implementation",
          "Journaling vs. log-structured file systems",
          "Free space management",
          "Performance evaluation of file system designs.",
          "Security aspect of the file system."
        ]
      },
      {
        unit: 8,
        title: "I/O Subsystem and Storage System Design",
        coMapped: "CO6",
        hours: 4,
        topics: [
          "Overview of Interrupt handling and DMA design",
          "Buffer cache and I/O scheduling",
          "Overview of Disk Scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK)",
          "Disk scheduling under mixed workloads",
          "Storage/Retrieval performance trade-offs"
        ]
      },
      {
        unit: 9,
        title: "Specialized Operating Systems: Design and Performance Overview",
        coMapped: "CO7",
        hours: 4,
        topics: [
          "RTOS: Kernel design, scheduling, priority inversion, performance metrics",
          "Embedded OS: Introduction, kernel architecture, task management and scheduling, memory allocation, inter-task communication, performance metrics",
          "Mobile OS: Constraints and design goals, power aware scheduling, memory management, security and sandboxing models, performance metrics"
        ]
      }
    ]
  }
};
