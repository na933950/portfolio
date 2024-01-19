export interface CourseworkObject {
  code: string;
  name: string;
  description: string;
  skills: string[];
}

export const coursework: CourseworkObject[] = [
  {
    code: "CS 170",
    name: "Efficient Algorithms and Intractable Problems",
    description:
      "A proof-based course which inspires thought about efficient time and space complexity for common algorithms.",
    skills: [
      "ALgorithms",
      "Data Structures",
      "Proofs",
      "Discrete Math",
      "Probability Theory",
    ],
  },
  {
    code: "CS 61C",
    name: "Great Ideas in Computer Architecture (Machine Structures)",
    description: "A standard machine structures class taught in C",
    skills: [
      "Parallelism",
      "Multithreading",
      "Concurrency",
      "Bitwise Operations",
      "C",
    ],
  },
  {
    code: "CS 61B",
    name: "Data Structures",
    description:
      "Data structures and algorithms fundamentals - required for all computer science undergraduates. Taught in Java.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Unit Testing",
      "Java",
      "OOP",
      "Complexity Analysis",
    ],
  },
  {
    code: "DATA C100",
    name: "Principles and Techniques of Data Science",
    description:
      "A course which touches on all advanced data science fundamentals through work in Jupyter notebook with various data manipulation languages and libraries.",
    skills: [
      "Python",
      "SQL",
      "pandas",
      "Scipy",
      "Linear Programming",
      "Numpy",
      "Mathematical Optimization",
      "Visualization",
    ],
  },
  {
    code: "CS 70",
    name: "Discrete Mathematics and Probability Theory",
    description:
      "A tough but useful class with proofs in discrete math, combinatorics, probability theory, and more!",
    skills: ["Discrete Mathematics", "Probability Theory", "Proofs"],
  },
  {
    code: "CS 1800",
    name: "Intro to Artificial Intelligence",
    description:
      "An introduction to common artificial intelligence algorithms.",
    skills: ["AI", "ML", "Algorithms", "Python"],
  },
  {
    code: "CS 61A",
    name: "Structure and Interpretation of Computer Programs",
    description:
      "Pretty standard intro to coding class! We got to make a Scheme interpreter which was interesting!",
    skills: ["Python", "OOP", "Recursion", "SQL"],
  },
  {
    code: "MATH 54",
    name: "Linear Algebra and Differential Equations",
    description: "This one is pretty self explanatory",
    skills: ["Linear Algebra", "Differential Equations"],
  },
  {
    code: "MATH 53",
    name: "Multivariable Calculus",
    description: "See MATH 54 description",
    skills: ["Multivariable Calculus", "Linear Algebra"],
  },
];
