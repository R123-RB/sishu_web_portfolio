import json

data = {
  "hero": {
    "headline": "Building the Future Empowering the Next Generation of Data Scientists",
    "subheading": "Assistant Professor | Digital University Kerala | Top 2% Scientist (Stanford University / Elsevier)",
    "stats": {
      "publications": 66,
      "citations": 1032,
      "hIndex": 19,
      "studentsGuided": 10,
      "fundedProjects": 2,
      "collaborators": 9
    }
  },
  "about": {
    "introduction": "I am Dr. Sishu Shankar Muni, an Assistant Professor at the School of Digital Sciences, Digital University Kerala. My area of research includes Dynamical systems, Nonlinear dynamics, network of oscillators, data science, High Performance Computing, and Machine Learning.",
    "education": [
      { "id": 1, "degree": "Ph.D. Mathematics", "institution": "Massey University, New Zealand", "details": "Thesis: Globally resonant homoclinic tangencies. Supervisors: Dr. David Simpson, Dist. Prof. Robert McLachlan." },
      { "id": 2, "degree": "M.Sc. Mathematics", "institution": "National Institute of Technology Rourkela, India", "details": "CGPA: 8.85. Supervisor: Prof. K.C. Pati." },
      { "id": 3, "degree": "B.Sc. Mathematics", "institution": "National Institute of Technology Rourkela, India", "details": "CGPA: 8.92" }
    ],
    "experience": [
      { "id": 1, "year": "2023-present", "role": "Assistant Professor", "institution": "School of Digital Sciences, Digital University Kerala" },
      { "id": 2, "year": "2022-2023", "role": "Post-Doc", "institution": "IISER-Kolkata" }
    ],
    "skills": ["JAVA", "C", "C++", "Python", "R", "Haskell", "SQL", "MATLAB", "NetLogo", "PPlane"],
    "achievements": [
      { "id": 1, "title": "Top 2% Scientist list 2025", "year": "2025", "issuer": "Stanford University list, Elsevier" },
      { "id": 2, "title": "State-level panel winner (SADAS)", "year": "2026", "issuer": "Young Innovators Programme supported by K-DISC" },
      { "id": 3, "title": "Funding award from International Society of Discrete dynamics", "year": "2022 & 2023", "issuer": "International Society of Discrete dynamics" },
      { "id": 4, "title": "Post doctoral Fellowship", "year": "2022", "issuer": "IISER Kolkata" },
      { "id": 5, "title": "School of Fundamental Sciences doctoral bursary scholarship", "year": "2021", "issuer": "Massey University" },
      { "id": 6, "title": "Massey University doctoral scholarship", "year": "2018-2021", "issuer": "Massey University" },
      { "id": 7, "title": "SMB registration fellowship", "year": "2021", "issuer": "Society of Mathematical Biology" },
      { "id": 8, "title": "SIAM travel award", "year": "2021", "issuer": "SIAM" },
      { "id": 9, "title": "NZMS travel award", "year": "2020", "issuer": "ANZIAM" },
      { "id": 10, "title": "ANZIAM travel award", "year": "2019", "issuer": "ANZIAM" },
      { "id": 11, "title": "Kalman Summer scholarship", "year": "2019", "issuer": "NZMRI" },
      { "id": 12, "title": "Gold medal for academic excellence", "year": "2018", "issuer": "NIT Rourkela" },
      { "id": 13, "title": "Santa Fe Institute MOOC scholarship", "year": "2018", "issuer": "Santa Fe Institute" },
      { "id": 14, "title": "S.N Bhatt memorial excellence fellow", "year": "2017", "issuer": "International Centre for Theoretical Sciences" }
    ]
  },
  "publicationsAndMetrics": {
    "journals": 64,
    "conferences": 2,
    "citations": 1032,
    "hIndex": 19,
    "i10Index": 34,
    "studentLinkedPublications": "13 papers with M.Sc. students (including 8 in Q1 journals)",
    "editorialRoles": [
      "Associate Editor: Franklin Open (Journal of Franklin Institute), Elsevier"
    ],
    "reviewerRoles": [
      "Royal Society of Philosophical Transactions",
      "Chaos, Solitons and Fractals",
      "Nature: Scientific Reports",
      "Nonlinear Dynamics, Springer",
      "AIP:Chaos",
      "International Journal of Bifurcation and Chaos",
      "Journal of Computational Science, Elsevier",
      "International Journal of Modern Physics B.",
      "International Journal of Dynamics and Control",
      "Journal of Control, Automation and Electrical Systems",
      "Qualitative Theory of Dynamical Systems",
      "Physica Scripta"
    ]
  },
  "publications": [
    "S.S. Muni, Conjoined Lorenz twin attractors in 3D sinusoidal map, Chaos, Solitons and Fractals, (2026).",
    "S.S. Muni, Robust chaos in generalised ceil map, Chaos, Solitons and Fractals, (2026).",
    "S.S. Muni, Ergodic and resonant torus doubling bifurcation in a three-dimensional quadratic map, Nonlinear Dynamics, 2024.",
    "S.S. Muni, Complexity of coexistence regions in the GRHT map, International Journal of Bifurcation and Chaos, (2025).",
    "S.S. Muni, Discrete Lorenz attractors in 3D sinusoidal maps, International Journal of Bifurcation and Chaos, (2025).",
    "S.S. Muni, Pathways to hyperchaos in a three-dimensional quadratic map. Eur. Phys. J. Plus 139, 636 (2024).",
    "S.S. Muni, Torus and Hyperchaos in three-dimensional Lotka-Volterra map. International Journal of Bifurcation and Chaos, 35, 03 (2025).",
    "Vismaya V S, S. S. Muni, A. Provata, Cyclic periodic synchronization in a ring-star network of piecewise-linear discontinuous maps, Chaos, 36, 043131 (2026).",
    "Swetha P., ... S. S. Muni, ... Critical fractal boundary between chaos and periodicity: Exploring the Devil's staircase, Chaos, Solitons & Fractals, 209, 2026.",
    "Harisankar R., M. Samshad, S. S. Muni, A. Kaushik, Novel 3D chaotic quadrotor trajectories for infrastructure monitoring, Intelligent Service Robotics, 19, 26 (2026).",
    "I. Ghosh, H.O. Fatoyinbo, S.S. Muni, Time series analysis of coupled slow-fast neuron models, Chaos, 35, (2025).",
    "VS Vismaya, S.S. Muni, A.K. Panda, B Mondal, Degn-Harrison map: Dynamical and network behaviours with applications in image encryption, Chaos, Solitons & Fractals, 192, 115987, 2025.",
    "J.S. Ram, S.S. Muni, I.A. Shepelev, Spatiotemporal patterns in a 2D lattice of Hindmarsh-Rose neurons induced by high-amplitude pulses, Chaos Solitons & Fractals, 189(1), 2024.",
    "A. S. Nair, I. Ghosh, H. O. Fatoyinbo, S. S. Muni, On the higher-order smallest ring star network of Chialvo neurons under diffusive couplings, Chaos, 2024.",
    "B Mondal, P Majumdar, A Sarkar, SS Muni, Chaos to stability: the role of memory in tri-trophic food chain dynamics, Journal of Applied Mathematics and Computing, 72 (1), 38, 2025.",
    "Harisankar R., Abhishek Kaushik, Sishu Shankar Muni, Path planning for multi-quadrotor 3D boundary surveillance using non-autonomous discrete memristor hyperchaotic system, Franklin Open,100239, 2025.",
    "Vismaya VS, B.V. Nair, S.S. Muni, Deep learning for prediction and classifying the dynamical behaviour of piecewise-smooth maps, Franklin Open, 100180 , 2024.",
    "S.S. Muni, Unstable periodic orbits and hyperchaos in 2D quadratic memristor map. Franklin Open, 100193 (2024).",
    "D. Mukherjee, S.S. Muni, H.O. Fatoyinbo, A dynamical system framework for a mathematical model of atherosclerosis, Franklin Open, 100116, 2024.",
    "S.S. Muni, S. Banerjee. Bifurcations of mode-locked periodic orbits in three-dimensional maps, International Journal of Bifurcation and Chaos,33(10):2330025, 2023.",
    "S.S. Muni. Mode-locked orbits, doubling of invariant curves in discrete Hindmarsh-Rose neuron model, Physica Scripta, 98: 085205, 2023.",
    "S.S. Muni, R.I. McLachlan, D.J.W. Simpson. Unfolding globally resonant homoclinic tangencies, Discrete Continuous Dynamical Systems Series A, 42(8): 4013-4030, 2022.",
    "S.S. Muni, H. O. Fatoyinbo, I. Ghosh. Dynamical effects of electromagnetic flux on Chialvo neuron map: nodal and network behaviors, International Journal of Bifurcation and Chaos, 32(9): 2230020, 2022.",
    "S.S. Muni, R.I. McLachlan, and D.J.W. Simpson. Homoclinic tangencies with infinitely many asymptotically stable single-round periodic solutions, Discrete Continuous Dynamical Systems Series A, 41(8), 3629-3650, 2021.",
    "S.S. Muni and A. Provata. Chimera states in ring-star network of Chua circuits. Nonlinear Dynamics, 101 (4), 2509-2521, 2020.",
    "(Note: Selected 25 out of 64 prominent publications for display)"
  ],
  "fundedProjects": [
    {
      "id": 1,
      "title": "Beyond Arnold Tongues: The Role of Extreme Curves, Superstable Curves, and Invariant Manifolds in the Bifurcation Structure of Chaotic Mapping",
      "funder": "NBHM (DAE, Govt. of India)",
      "period": "2025-2028"
    },
    {
      "id": 2,
      "title": "AICTE Postdoctoral Fellowship Grant 2026",
      "funder": "AICTE",
      "period": "2026-2028"
    }
  ],
  "coursesTaught": [
    "Semantic Web and Social Network",
    "Numerical methods",
    "Numerical methods for deep learning",
    "Introduction to Computational Science",
    "Data Analytics",
    "Computational Nonlinear Dynamics",
    "Computational Neuroscience",
    "Scientific Writing and Communication activity",
    "Linear algebra (Massey University, NZ)",
    "Financial mathematics, optimization problems (Massey University, NZ)",
    "Latex Workshop (Massey University)"
  ],
  "collaborators": [
    "University College Dublin, Ireland",
    "University of Gdańsk, Poland",
    "Saratov State University / LETI, Russia",
    "IMT Lucca, Italy",
    "University of Dschang, Cameroon",
    "Auckland University of Technology, New Zealand",
    "Université Oum El Bouaghi, Algeria",
    "Lancaster University, UK",
    "University of São Paulo, Brazil",
    "IISER Kolkata and other national/international collaborators"
  ],
  "responsibilities": [
    "Numeracy support to bachelor and master's students",
    "Latex workshop co-organiser at Massey University",
    "Convenor of the mathematics department at Massey University",
    "Head of the mathematics group in science club NITRKL-CORE"
  ],
  "outreach": [
    "Delivered invited talks at the Recent Developments in Applied & Computational Mathematics (RDACM 2026) conference at IIST on 15-16 January 2026",
    "Mentor in Hackathon - AI for Social Good",
    "Committee member in panel discussions on AI and innovation",
    "Student mentoring for innovation and competition platforms including YIP / IGNITE",
    "Invited speaker at international conferences, including the International Conference on Discrete Equations and Applications (France & Thailand, 2023)"
  ],
  "conferences": [
    { "year": "2026", "title": "International Conference on Difference Equations (ICDEA), Italy", "desc": "Cyclic Periodic Synchronization in the Ring-Star network of Nordmark Maps" },
    { "year": "2025", "title": "Faculty Induction Programme, UGC", "desc": "" },
    { "year": "2024", "title": "International Conference on Discrete Equations and Applications, FR", "desc": "Pathways to hyperchaos in a 3D quadratic map" },
    { "year": "2023", "title": "National conference on contemporary progress in Mathematics, IN", "desc": "From Homoclinic tangencies to stable periodic solutions" },
    { "year": "2023", "title": "International Conference on Nonlinear Science and Applications, IN", "desc": "Resonant torus doubling bifurcations" },
    { "year": "2023", "title": "International Conference on Discrete Equations and Applications, Thailand", "desc": "Doubling bifurcation of mode-locked orbits in 3D maps" },
    { "year": "2022", "title": "Conference on Nonlinear System Dynamics, IN (IISER Pune)", "desc": "" },
    { "year": "2022", "title": "NCM workshop on control theory and differential equations, IN (IISER Kolkata)", "desc": "" },
    { "year": "2021", "title": "SIAM Dynamical Systems conference 2021", "desc": "" },
    { "year": "2021", "title": "Dynamical systems in NZ", "desc": "Unfolding globally resonant homoclinic tangencies" },
    { "year": "2021", "title": "Society of Mathematical Biology", "desc": "Dynamics of discretised Izhikevich neuron model" },
    { "year": "2020", "title": "Wellington Manawatu Applied Mathematics conference", "desc": "From homoclinic tangencies to stable periodic solutions" },
    { "year": "2019", "title": "NZMS colloquium", "desc": "A new geometric mechanism of multistability in smooth dynamical systems" },
    { "year": "2018", "title": "SCEECS IEEE international student conference", "desc": "A study on the synchronization aspect of star connected identical Chua circuits" }
  ],
  "students": [
    {
      "id": 1,
      "name": "Vismaya V.S.",
      "position": "Ph.D. Student",
      "project": "Cyclic Periodic Synchronization in PLD mappings (2025)"
    },
    {
      "id": 2,
      "name": "Durga Jaishankar",
      "position": "M.Sc. Student",
      "project": "Performance of sentinel nodes in complex networks (2026)"
    },
    {
      "id": 3,
      "name": "Snehakrishnan K",
      "position": "M.Sc. Student",
      "project": "Autoencoder-Decoder and transformer framework for high dimensional nonlinear systems (2026)"
    },
    {
      "id": 4,
      "name": "Aman Sharma",
      "position": "M.Sc. Student",
      "project": "Reinforcement Learning based negative information spread in online social networks (2026)"
    },
    {
      "id": 5,
      "name": "Padamata Puja",
      "position": "M.Sc. Student",
      "project": "Detection of triadic higher order interactions in real world complex networks (2026)"
    },
    {
      "id": 6,
      "name": "Sreehari M S",
      "position": "M.Sc. Student",
      "project": "XARD: Adversarial attack framework for deep neural networks (2026)"
    },
    {
      "id": 7,
      "name": "Anjana S. Nair",
      "position": "M.Sc. Student",
      "project": "Neurodynamics in higher order networks (2024)"
    },
    {
      "id": 8,
      "name": "Bharath Nair",
      "position": "M.Sc. Student",
      "project": "Deep learning and Chaos: A combined approach to image encryption and decryption (2024)"
    },
    {
      "id": 9,
      "name": "Jaidev Ram",
      "position": "M.Sc. Student",
      "project": "Spatiotemporal patterns in a lattice network of Hindmarsh-Rose neurons under strong Gaussian impulse (2025)"
    },
    {
      "id": 10,
      "name": "Anandik Anand",
      "position": "M.Sc. Student",
      "project": "General multimedia encryption via hyperchaotic signals and fractals (2025)"
    }
  ],
  "references": [
    { "name": "Dr. David J.W. Simpson", "affiliation": "Massey University, NZ", "email": "d.j.w.simpson@massey.ac.nz" },
    { "name": "Dist. Prof. Robert I. McLachlan", "affiliation": "Massey University, NZ", "email": "R.McLachlan@massey.ac.nz" },
    { "name": "Prof. Soumitro Banerjee", "affiliation": "Indian Institute of Science Education and Research Kolkata, IN", "email": "soumitro@iiserkol.ac.in" },
    { "name": "Prof. Astero Provata", "affiliation": "National Center for Scientific Research 'Demokritos', Greece", "email": "a.provata@inn.demokritos.gr" },
    { "name": "Prof. Kishor Chandra Pati", "affiliation": "National Institute of Technology, IN", "email": "kcpati@nitrkl.ac.in" }
  ]
}

with open("c:/Users/Vivobook pro 15/Desktop/Sisu sir web/sisu-portfolio/src/data/portfolioData.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
