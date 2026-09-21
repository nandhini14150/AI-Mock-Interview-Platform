const questionBank = {
  DSA: {
    Arrays: [
      "What is an array?",
      "What is the difference between an array and a linked list?",
      "How do you find the largest element in an array?",
      "How do you remove duplicates from an array?",
      "What is the time complexity of accessing an array element?",
    ],

    Strings: [
      "How do you reverse a string?",
      "How do you check whether a string is a palindrome?",
      "How do you count the frequency of characters in a string?",
      "What is the difference between String and StringBuilder?",
      "How do you find duplicate characters in a string?",
    ],

    "Linked List": [
      "What is a linked list?",
      "What is the difference between singly and doubly linked lists?",
      "How do you reverse a linked list?",
      "How do you detect a cycle in a linked list?",
      "What are the advantages of a linked list over an array?",
    ],

    "Stack & Queue": [
      "What is a stack?",
      "What is a queue?",
      "What is the difference between stack and queue?",
      "What are the applications of a stack?",
      "What is a circular queue?",
    ],

    Searching: [
      "What is linear search?",
      "What is binary search?",
      "What is the time complexity of binary search?",
      "What condition must be satisfied before applying binary search?",
      "What is the difference between linear search and binary search?",
    ],

    Sorting: [
      "What is bubble sort?",
      "What is selection sort?",
      "What is insertion sort?",
      "What is the time complexity of merge sort?",
      "What is the difference between merge sort and quick sort?",
    ],

    Trees: [
      "What is a binary tree?",
      "What is a binary search tree?",
      "What is tree traversal?",
      "What is the difference between BFS and DFS?",
      "What are inorder, preorder and postorder traversals?",
    ],

    Graphs: [
      "What is a graph in data structures?",
      "What is the difference between directed and undirected graphs?",
      "What is BFS?",
      "What is DFS?",
      "What is the difference between BFS and DFS?",
    ],
  },

  Java: {
    Basics: [
      "What is Java?",
      "What are the main features of Java?",
      "What is the difference between JDK, JRE and JVM?",
      "Why is Java platform independent?",
      "What is bytecode in Java?",
    ],

    OOP: [
      "What is Object-Oriented Programming?",
      "What are the four pillars of OOP?",
      "What is encapsulation?",
      "What is abstraction?",
      "What is polymorphism?",
    ],

    Inheritance: [
      "What is inheritance in Java?",
      "What are the types of inheritance?",
      "What is method overriding?",
      "What is the difference between method overloading and overriding?",
      "Can Java support multiple inheritance using classes?",
    ],

    Collections: [
      "What is the Java Collection Framework?",
      "What is the difference between ArrayList and LinkedList?",
      "What is the difference between List, Set and Map?",
      "What is HashMap?",
      "What is the difference between HashSet and HashMap?",
    ],

    Exceptions: [
      "What is an exception in Java?",
      "What is the difference between checked and unchecked exceptions?",
      "What is try-catch?",
      "What is the purpose of finally?",
      "What is the difference between throw and throws?",
    ],
  },

  DBMS: {
    SQL: [
      "What is SQL?",
      "What is the difference between DELETE, DROP and TRUNCATE?",
      "What is a JOIN?",
      "What is a subquery?",
      "What is GROUP BY?",
    ],

    Keys: [
      "What is a primary key?",
      "What is a foreign key?",
      "What is a candidate key?",
      "What is a composite key?",
      "What is the difference between primary key and unique key?",
    ],

    Normalization: [
      "What is normalization?",
      "What is the purpose of normalization?",
      "What is 1NF?",
      "What is 2NF?",
      "What is 3NF?",
    ],

    Transactions: [
      "What is a database transaction?",
      "What are ACID properties?",
      "What is COMMIT?",
      "What is ROLLBACK?",
      "What is concurrency control?",
    ],
  },

  OS: {
    Processes: [
      "What is a process?",
      "What is a Process Control Block?",
      "What is process scheduling?",
      "What is context switching?",
      "What is the difference between a process and a program?",
    ],

    Threads: [
      "What is a thread?",
      "What is the difference between a process and a thread?",
      "What are the advantages of multithreading?",
      "What is a multithreaded process?",
      "What is thread synchronization?",
    ],

    Scheduling: [
      "What is CPU scheduling?",
      "What is FCFS scheduling?",
      "What is Round Robin scheduling?",
      "What is Priority scheduling?",
      "What is the difference between preemptive and non-preemptive scheduling?",
    ],

    Deadlocks: [
      "What is a deadlock?",
      "What are the four necessary conditions for deadlock?",
      "What is deadlock prevention?",
      "What is deadlock avoidance?",
      "What is the difference between deadlock prevention and avoidance?",
    ],

    Memory: [
      "What is virtual memory?",
      "What is paging?",
      "What is segmentation?",
      "What is a page fault?",
      "What is memory fragmentation?",
    ],
  },

  HR: {
    Introduction: [
      "Tell me about yourself.",
      "Walk me through your resume.",
      "What are your career goals?",
      "Why did you choose Computer Science?",
      "What are your biggest strengths?",
    ],

    Behavioral: [
      "Tell me about a challenging project you worked on.",
      "Describe a time when you worked in a team.",
      "How do you handle pressure?",
      "How do you handle failure?",
      "Tell me about a problem you solved.",
    ],

    Career: [
      "Why should we hire you?",
      "Why do you want to join our company?",
      "Where do you see yourself in five years?",
      "What are your weaknesses?",
      "Why should we select you over other candidates?",
    ],
  },

  Aptitude: {
    Percentages: [
      "What is the percentage increase from 50 to 75?",
      "A number increases from 100 to 120. What is the percentage increase?",
      "What is 20% of 250?",
      "A price is reduced by 10%. What is the new price of ₹500?",
      "If 40% of a number is 80, what is the number?",
    ],

    Averages: [
      "What is the average of 10, 20 and 30?",
      "What is the average of the first five natural numbers?",
      "The average of 5 numbers is 20. What is their total?",
      "The average of 10 and 20 is what?",
      "If the average of three numbers is 15, what is their sum?",
    ],

    Speed: [
      "If a train travels 60 km in 2 hours, what is its speed?",
      "What is the formula for speed?",
      "A car travels 120 km in 3 hours. What is its speed?",
      "What is the relationship between speed, distance and time?",
      "How much time is required to travel 100 km at 50 km/h?",
    ],

    Reasoning: [
      "What comes next: 2, 4, 8, 16, ?",
      "What comes next: 5, 10, 15, 20, ?",
      "If A is taller than B and B is taller than C, who is the shortest?",
      "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "If today is Monday, what day will it be after 10 days?",
    ],
  },
};

export default questionBank;