const questionBank = {
  DSA: {
    Arrays: {
      Easy: [
        "What is an array?",
        "How do you access an element in an array?",
        "What is the difference between an array and a linked list?",
        "How do you find the length of an array?",
        "What is the index of the first element in an array?"
      ],

      Medium: [
        "How do you find duplicate elements in an array?",
        "How do you find the second largest element in an array?",
        "What is the time complexity of searching in an unsorted array?",
        "How do you reverse an array?",
        "How can you remove duplicates from a sorted array?"
      ],

      Hard: [
        "How do you find the maximum subarray sum?",
        "How do you find the longest consecutive sequence in an array?",
        "How would you find the majority element in an array?",
        "How can you find two numbers whose sum equals a target?",
        "How would you rotate an array by K positions?"
      ]
    },

    "Linked List": {
      Easy: [
        "What is a linked list?",
        "What is a node in a linked list?",
        "What is the difference between singly and doubly linked lists?",
        "How do you traverse a linked list?",
        "What are the advantages of a linked list?"
      ],

      Medium: [
        "How do you reverse a linked list?",
        "How do you find the middle element of a linked list?",
        "How do you detect a cycle in a linked list?",
        "How do you delete a node from a linked list?",
        "How do you find the length of a linked list?"
      ],

      Hard: [
        "How can you find the intersection point of two linked lists?",
        "How would you merge two sorted linked lists?",
        "How can you reverse a linked list in groups of K?",
        "How would you detect and remove a cycle from a linked list?",
        "How would you clone a linked list with random pointers?"
      ]
    },

    Stack: {
      Easy: [
        "What is a stack?",
        "What is LIFO?",
        "What are the basic operations of a stack?",
        "Where is a stack used?",
        "What is stack overflow?"
      ],

      Medium: [
        "How can a stack be implemented using an array?",
        "How can a stack be implemented using a linked list?",
        "How can you check for balanced parentheses using a stack?",
        "How do you reverse a string using a stack?",
        "What is the difference between stack and queue?"
      ],

      Hard: [
        "How would you implement a minimum stack?",
        "How can you evaluate a postfix expression using a stack?",
        "How would you implement two stacks using one array?",
        "How can you find the next greater element using a stack?",
        "How would you design a stack that supports getMin() in O(1)?"
      ]
    },

    Queue: {
      Easy: [
        "What is a queue?",
        "What is FIFO?",
        "What are the basic operations of a queue?",
        "Where are queues used?",
        "What is a circular queue?"
      ],

      Medium: [
        "What is the difference between a queue and a deque?",
        "How can a queue be implemented using an array?",
        "How can a queue be implemented using two stacks?",
        "What is a priority queue?",
        "What is the difference between a normal queue and a circular queue?"
      ],

      Hard: [
        "How would you implement a queue using two stacks efficiently?",
        "How can you find the first non-repeating character using a queue?",
        "How would you design a priority queue?",
        "How can you implement a circular queue efficiently?",
        "How would you solve the sliding window maximum problem?"
      ]
    },

    Trees: {
      Easy: [
        "What is a tree data structure?",
        "What is a binary tree?",
        "What is the root of a tree?",
        "What is a leaf node?",
        "What is tree traversal?"
      ],

      Medium: [
        "What is the difference between a binary tree and a binary search tree?",
        "What are inorder, preorder and postorder traversals?",
        "How do you calculate the height of a binary tree?",
        "How do you search for an element in a binary search tree?",
        "What is a balanced binary tree?"
      ],

      Hard: [
        "How do you find the lowest common ancestor of two nodes?",
        "How would you check whether a binary tree is balanced?",
        "How do you serialize and deserialize a binary tree?",
        "How do you find the diameter of a binary tree?",
        "How would you construct a binary tree from preorder and inorder traversal?"
      ]
    },

    Graphs: {
      Easy: [
        "What is a graph?",
        "What is the difference between directed and undirected graphs?",
        "What is a vertex?",
        "What is an edge?",
        "What is graph traversal?"
      ],

      Medium: [
        "What is the difference between BFS and DFS?",
        "How do you represent a graph using an adjacency matrix?",
        "How do you represent a graph using an adjacency list?",
        "What is a connected graph?",
        "How can you detect a cycle in a graph?"
      ],

      Hard: [
        "How does Dijkstra's algorithm work?",
        "What is the difference between Dijkstra's and Bellman-Ford algorithms?",
        "How does topological sorting work?",
        "How can you find the minimum spanning tree?",
        "How would you detect a cycle in a directed graph?"
      ]
    },

    Searching: {
      Easy: [
        "What is linear search?",
        "What is binary search?",
        "What is the time complexity of linear search?",
        "When can binary search be used?",
        "What is the difference between linear search and binary search?"
      ],

      Medium: [
        "What is the time complexity of binary search?",
        "How does binary search work on a sorted array?",
        "How would you find the first occurrence of an element?",
        "How would you find the last occurrence of an element?",
        "How can you find the square root of a number using binary search?"
      ],

      Hard: [
        "How would you search in a rotated sorted array?",
        "How can binary search be applied to an answer space?",
        "How would you find the peak element in an array?",
        "How would you find the minimum element in a rotated sorted array?",
        "How can you find the median of two sorted arrays?"
      ]
    },

    Sorting: {
      Easy: [
        "What is sorting?",
        "What is bubble sort?",
        "What is selection sort?",
        "What is insertion sort?",
        "Why is sorting useful?"
      ],

      Medium: [
        "What is the time complexity of merge sort?",
        "How does quicksort work?",
        "What is the difference between merge sort and quicksort?",
        "Which sorting algorithm is stable?",
        "What is the space complexity of merge sort?"
      ],

      Hard: [
        "How would you implement merge sort?",
        "How would you choose a pivot in quicksort?",
        "How can quicksort be optimized?",
        "How would you sort an array containing only 0s, 1s and 2s?",
        "How can you sort a nearly sorted array efficiently?"
      ]
    }
  },

  Java: {
    "OOP Concepts": {
      Easy: [
        "What is Object-Oriented Programming?",
        "What is a class in Java?",
        "What is an object?",
        "What is encapsulation?",
        "What is inheritance?"
      ],

      Medium: [
        "What is polymorphism in Java?",
        "What is abstraction?",
        "What is method overloading?",
        "What is method overriding?",
        "What is the difference between an abstract class and an interface?"
      ],

      Hard: [
        "Explain runtime polymorphism with an example.",
        "How does Java achieve multiple inheritance?",
        "What are the SOLID principles?",
        "What is composition and how is it different from inheritance?",
        "Explain the difference between abstraction and encapsulation."
      ]
    },

    Collections: {
      Easy: [
        "What is the Java Collections Framework?",
        "What is an ArrayList?",
        "What is a HashMap?",
        "What is a HashSet?",
        "What is the difference between List and Set?"
      ],

      Medium: [
        "What is the difference between ArrayList and LinkedList?",
        "How does HashMap work?",
        "What is the difference between HashMap and Hashtable?",
        "What is TreeMap?",
        "What is the difference between HashSet and TreeSet?"
      ],

      Hard: [
        "Explain the internal working of HashMap.",
        "How are collisions handled in HashMap?",
        "What is ConcurrentHashMap?",
        "How does TreeMap maintain sorted order?",
        "Compare HashMap, LinkedHashMap and TreeMap."
      ]
    },

    "Exception Handling": {
      Easy: [
        "What is an exception?",
        "What is try-catch?",
        "What is finally?",
        "What is throw?",
        "What is throws?"
      ],

      Medium: [
        "What is the difference between checked and unchecked exceptions?",
        "What is the difference between throw and throws?",
        "Can we have multiple catch blocks?",
        "Can finally block be skipped?",
        "How do you create a custom exception?"
      ],

      Hard: [
        "Explain Java exception hierarchy.",
        "What happens when an exception is not handled?",
        "How does try-with-resources work?",
        "What are best practices for exception handling?",
        "Can a constructor throw an exception?"
      ]
    }
  },

  DBMS: {
    SQL: {
      Easy: [
        "What is SQL?",
        "What is a database?",
        "What is a table?",
        "What is a SELECT statement?",
        "What is a WHERE clause?"
      ],

      Medium: [
        "What is the difference between WHERE and HAVING?",
        "What is GROUP BY?",
        "What are aggregate functions?",
        "What is a subquery?",
        "What is the difference between DELETE and TRUNCATE?"
      ],

      Hard: [
        "How would you optimize a slow SQL query?",
        "What are window functions?",
        "What is a correlated subquery?",
        "How would you find the second highest salary?",
        "Explain query execution order in SQL."
      ]
    },

    Joins: {
      Easy: [
        "What is a join?",
        "What is an inner join?",
        "What is a left join?",
        "What is a right join?",
        "Why are joins used?"
      ],

      Medium: [
        "What is the difference between INNER JOIN and LEFT JOIN?",
        "What is a FULL OUTER JOIN?",
        "What is a self join?",
        "What is a cross join?",
        "When would you use a self join?"
      ],

      Hard: [
        "How would you join three or more tables?",
        "How can joins affect query performance?",
        "What is the difference between joins and subqueries?",
        "How would you find records that exist in one table but not another?",
        "How can indexes improve join performance?"
      ]
    },

    Normalization: {
      Easy: [
        "What is normalization?",
        "Why is normalization used?",
        "What is a functional dependency?",
        "What is 1NF?",
        "What is 2NF?"
      ],

      Medium: [
        "What is 3NF?",
        "What is BCNF?",
        "What is denormalization?",
        "What problems does normalization solve?",
        "What is the difference between 2NF and 3NF?"
      ],

      Hard: [
        "Explain BCNF with an example.",
        "When should a database be denormalized?",
        "What are insertion, update and deletion anomalies?",
        "How does normalization affect database performance?",
        "How would you normalize a given database schema?"
      ]
    }
  },

  OS: {
    Processes: {
      Easy: [
        "What is a process?",
        "What is a program?",
        "What is a process state?",
        "What is a process control block?",
        "What is context switching?"
      ],

      Medium: [
        "What is the difference between a process and a thread?",
        "What is process scheduling?",
        "What is inter-process communication?",
        "What is a zombie process?",
        "What is a daemon process?"
      ],

      Hard: [
        "Explain process scheduling algorithms.",
        "How does context switching work?",
        "Compare process-based and thread-based concurrency.",
        "Explain different IPC mechanisms.",
        "How does an operating system create a new process?"
      ]
    },

    Deadlocks: {
      Easy: [
        "What is deadlock?",
        "What is a resource?",
        "What is mutual exclusion?",
        "What is starvation?",
        "What is deadlock prevention?"
      ],

      Medium: [
        "What are the four necessary conditions for deadlock?",
        "What is deadlock avoidance?",
        "What is the Banker’s Algorithm?",
        "What is deadlock detection?",
        "What is the difference between deadlock and starvation?"
      ],

      Hard: [
        "Explain the Banker’s Algorithm.",
        "How can deadlocks be prevented?",
        "How can an operating system recover from deadlock?",
        "Compare deadlock prevention and avoidance.",
        "How would you detect deadlock in a resource allocation graph?"
      ]
    },

    "Memory Management": {
      Easy: [
        "What is memory management?",
        "What is RAM?",
        "What is virtual memory?",
        "What is paging?",
        "What is a page?"
      ],

      Medium: [
        "What is segmentation?",
        "What is page replacement?",
        "What is a page fault?",
        "What is thrashing?",
        "What is the difference between paging and segmentation?"
      ],

      Hard: [
        "Explain LRU page replacement.",
        "Compare FIFO, LRU and Optimal page replacement.",
        "How does virtual memory work?",
        "What causes thrashing?",
        "How can page faults be reduced?"
      ]
    }
  },

  HR: {
    "General HR": {
      Easy: [
        "Tell me about yourself.",
        "What are your strengths?",
        "What are your weaknesses?",
        "Why should we hire you?",
        "Why do you want this job?"
      ],

      Medium: [
        "Where do you see yourself in five years?",
        "Tell me about a challenge you faced.",
        "How do you handle pressure?",
        "How do you handle teamwork?",
        "Tell me about a project you are proud of."
      ],

      Hard: [
        "Tell me about a failure and what you learned from it.",
        "Describe a situation where you disagreed with a teammate.",
        "How would you handle conflict with your manager?",
        "Why should we choose you over another candidate?",
        "Describe a difficult decision you made."
      ]
    }
  },

  Aptitude: {
    Percentages: {
      Easy: [
        "What is 10% of 200?",
        "What is the percentage increase from 50 to 75?",
        "What is 25% of 400?",
        "What is 50% of 80?",
        "If 20 out of 100 students pass, what is the pass percentage?"
      ],

      Medium: [
        "A number increases from 200 to 250. What is the percentage increase?",
        "A price is reduced by 20%. What is the new price of ₹500?",
        "If a number is increased by 25% and becomes 250, find the original number.",
        "A student scores 360 out of 500. What is the percentage?",
        "A value decreases from 800 to 680. Find the percentage decrease."
      ],

      Hard: [
        "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
        "A product is marked up by 40% and discounted by 20%. Find the overall gain percentage.",
        "Population increases by 10% and then by 20%. Find the total percentage increase.",
        "A salary is increased by 15% and then reduced by 10%. Find the net change.",
        "If A is 25% more than B, by what percentage is B less than A?"
      ]
    },

    "Time and Work": {
      Easy: [
        "What is meant by work rate?",
        "If a person completes a job in 10 days, what fraction of the job is completed per day?",
        "What is the basic formula for time and work?",
        "If A completes a job in 5 days, how much work does A do in one day?",
        "What is efficiency in work problems?"
      ],

      Medium: [
        "A can complete a job in 10 days and B in 15 days. How long together?",
        "If A and B together complete a job in 12 days, what is their combined daily work rate?",
        "How are efficiency and time related?",
        "If A is twice as efficient as B, compare their working times.",
        "How do you solve work problems involving three people?"
      ],

      Hard: [
        "A completes a job in 12 days and B in 18 days. They work together for 4 days. What fraction remains?",
        "A, B and C can complete a job in different times. How do you calculate their combined time?",
        "How would you solve a work problem where workers join and leave at different times?",
        "How do efficiency ratios help solve complex work problems?",
        "How would you solve work problems involving wages and efficiency?"
      ]
    }
  }
};

export default questionBank;