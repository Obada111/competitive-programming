# 🚀 Competitive Programming Notebook – Topics & Templates

Welcome to my **Competitive Programming Notebook**.  
This repository collects clean C++ implementations of the most important algorithms and patterns used in:

- ICPC / ACPC / PCPC  
- Codeforces  
- AtCoder  
- CSES, USACO, and other online judges  

The goal is simple:

> 📌 **One place to store the most important topics and revisit them quickly before contests.**

---

## 🧠 Core CP Advice for Beginners

Competitive Programming is not magic — it’s **clear thinking + consistent practice**.  
Here are core principles that I personally follow:

### 1️⃣ Think Before You Code
- Don’t rush to write code.
- Read the statement carefully, underline constraints, and **predict the time complexity** you need.

### 2️⃣ Play With Small Examples
- Start with tiny inputs (`n = 1, 2, 3`).
- Try to simulate your idea by hand — if it fails on small values, it will fail on big ones.

### 3️⃣ Respect Time Complexity
- Always check if your solution fits in the limits.
- Learn the “map”:
  - `O(n)`, `O(n log n)` for `n ≈ 2e5`
  - `O(n^2)` for `n ≈ 2e3`
  - Anything slower will usually TLE.

### 4️⃣ Learn Ideas, Not Code
- Don’t copy-paste solutions.
- Ask: **why does this work?**  
  Understand the invariant, the transition, or the proof.

### 5️⃣ Upsolve After Contests
- After every contest:
  - Solve problems you skipped or failed.
  - Read editorials only after spending real time thinking.

### 6️⃣ Use a Structured Routine
Before coding:
1. Read the problem once fully.  
2. Check constraints.  
3. Try small cases.  
4. Decide the main technique.  
5. Only then start implementing.

### 7️⃣ Keep Your Own Notebook
- Save good solutions and patterns (like this repo).
- Write your own comments and notes — future you will thank you.

### 8️⃣ Be Consistent, Not Random
- 1–2 problems every day is much better than 0 for a week and 20 in one day.
- Improvement in CP is **slow but guaranteed** if you don’t quit.

---

## 🗺️ Main CP Roadmap I Use

### 📌 Complete CP Roadmap (All Levels)  
👉 **https://www.notion.so/Roadmap-29cf4abdd6528065a1f4fb69db1ce9ac**

This roadmap is my main “master plan”:

- **Level 1** – Basics, implementation, math, simple problems.  
- **Level 2** – Core topics: prefix sum, binary search, two pointers, basic graphs.  
- **Level 3+** – Advanced DP, graphs, number theory, segment trees, etc.

> 🔑 If you are new: **follow the roadmap first**, then use this repo as a reference for implementations.

---

## 📂 Topics in This Folder

Each file in `topics/` is a **standalone implementation** of a core idea.  
Below is a quick description of each topic, when it is used, and what you should master.

---

### 1️⃣ Prefix Sums & Frequency Arrays

#### `Prefix Sum.cpp`
- **What:** Classic 1D prefix sum `pref[i] = a[0] + … + a[i]`.
- **Use for:** Fast range-sum queries `O(1)` after `O(n)` preprocessing.
- **Skills:**
  - converting “sum on subarray many times” to prefix.
  - handling 1-based vs 0-based indices carefully.
- **Good references:**
  - CP-Algorithms – Prefix Sums  
    👉 https://cp-algorithms.com

#### `2D Prefix Sum.cpp`
- **What:** 2D extension of prefix sums for matrices.
- **Use for:** Answering submatrix sum queries in `O(1)` after `O(n*m)` preprocessing.
- **Typical problems:** Sum of rectangles, counting ones in a grid, etc.
- **Visual support:**  
  👉 https://visualgo.net/en/array

#### `frequency_array.cpp`
- **What:** Frequency counting array for values in a limited range.
- **Use for:** Counting occurrences, checking “is this multiset equal?”, modes, histogram problems.
- **Key idea:** Replace map with array when coordinates are small → much faster.

---

### 2️⃣ Searching, Math & Binary Tricks

#### `Binary Search (Clasic).cpp`
- **What:** Standard binary search pattern on a sorted array or on the “answer space”.
- **Use for:**
  - lower_bound / upper_bound style queries
  - binary search on answer (check function monotonic).
- **Must know:**  
  - Avoid infinite loops.  
  - Use `mid = l + (r - l) / 2`.
- **Reference:**  
  👉 https://cp-algorithms.com

#### `Binary Exponentiation.cpp`
- **What:** Fast exponentiation in `O(log n)` using repeated squaring.
- **Use for:** Modular exponentiation, big powers, matrix exponentiation.
- **Core idea:**  
  - `a^b = (a^(b/2))^2` and if `b` is odd multiply by `a` once more.
- **Reference:**  
  👉 https://cp-algorithms.com/algebra/binary-exp.html

#### `Is Prime Fast.cpp` + `Sieve of Eratosthenes.cpp`
- **What:** 
  - Fast primality checks.  
  - Sieve to generate all primes up to `N` in `O(N log log N)` or better.
- **Use for:** All number theory problems with primes, factors, counting primes.
- **References:**
  - CP-Algorithms – Prime Sieve (and Linear Sieve)  
    👉 https://cp-algorithms.com/algebra/prime-sieve-linear.html
  - USACO Guide – Number Theory  
    👉 https://usaco.guide

---

### 3️⃣ Graph Traversal & Shortest Paths

#### `BFS.cpp`
- **What:** Breadth-first search in `O(n + m)`.
- **Use for:**
  - Shortest path in **unweighted** graphs.
  - Multi-source BFS.
  - Levels / distances / bipartite checking.
- **Visualization:**  
  👉 https://visualgo.net/en/dfsbfs

#### `DFS.cpp`
- **What:** Depth-first search in `O(n + m)`.
- **Use for:**  
  - Connected components  
  - Topological ordering  
  - Tree traversals  
  - Detecting cycles
- **Visualization:**  
  👉 https://visualgo.net/en/dfsbfs

#### `dijkstra.cpp`
- **What:** Dijkstra’s algorithm with priority queue (`O(m log n)`).
- **Use for:** Shortest paths on graphs with non-negative weights.
- **Reference:**  
  👉 https://cp-algorithms.com/graph/dijkstra.html

#### `Kruskal MST.cpp`
- **What:** Kruskal’s algorithm using DSU to build Minimum Spanning Tree.
- **Use for:**  
  - Connecting all nodes with minimal total weight.  
  - Problems about “minimum cost to connect”.
- **Reference:**  
  👉 https://cp-algorithms.com/graph/mst_kruskal.html

---

### 4️⃣ Disjoint Set Union (DSU)

#### `DSU.cpp`
- **What:** Disjoint Set Union / Union-Find with path compression & union by size/rank.
- **Use for:**  
  - Checking if nodes are in the same component.  
  - Building MST (Kruskal).  
  - Dynamic connectivity.
- **Key idea:**  
  - `find(x)` returns component representative.  
  - `union(a, b)` merges components efficiently.
- **Reference (excellent):**  
  👉 https://usaco.guide/gold/dsu

---

### 5️⃣ Dynamic Programming (DP)

#### `DP CIS.cpp`
- **What:** DP for **Common Increasing Subsequence** (variant of LCS + LIS).
- **Focus:** Mixing sequence DP with increasing constraints.

#### `DP LIS.cpp`
- **What:** Longest Increasing Subsequence.
- **Variants:**  
  - `O(n^2)` DP.  
  - `O(n log n)` using patience sorting / tails array.
- **Use for:** Many sequence optimization problems.
- **Reference:**  
  👉 https://cp-algorithms.com/sequences/longest_increasing_subsequence.html  
  👉 https://usaco.guide/gold/lis

---

### 6️⃣ Range Queries & Decomposition

#### `segment tree max.cpp`
- **What:** Segment tree supporting:
  - **Range maximum query**
  - **Point update**
- **Complexity:**  
  - Build: `O(n)`  
  - Query / update: `O(log n)`
- **Use for:** Any range query where you need `max` (or sum/min) with updates.
- **Reference:**  
  👉 https://cp-algorithms.com/data_structures/segment_tree.html

#### `Square Root Decomposition.cpp`
- **What:** Splits the array into blocks of size `~sqrt(n)` to answer queries faster.
- **Use for:** Range sum / min / frequency queries when segment tree is overkill.
- **Idea:**  
  - Precompute answer per block.  
  - Each query touches only a few blocks → `O(sqrt(n))`.

---

### 7️⃣ Subsets, Bitmasks & Recursion

#### `bitmask subsets.cpp`
- **What:** Iterate over all subsets using bitmasks.
- **Use for:**  
  - `2^n` DP / brute force (usually `n ≤ 20`).  
  - Masks for sets, states, etc.

#### `recursion subsets.cpp`
- **What:** Recursive generation of all subsets / combinations.
- **Use for:** Understanding recursion & backtracking.

---

### 8️⃣ Two Pointers & Patterns

#### `two pointers.cpp`
- **What:** Classic two-pointers technique.
- **Use for:**  
  - Sliding window / subarrays with some constraint.  
  - Counting pairs with sum ≤ X on sorted arrays.  
  - Many `O(n)` solutions instead of `O(n^2)` brute force.

---

### 9️⃣ Miscellaneous / Foundations

These implementations form the backbone for many problems:

- `frequency_array.cpp` – basic counting technique.  
- `Prefix Sum.cpp` & `2D Prefix Sum.cpp` – foundation for range queries.  
- `Binary Exponentiation.cpp` – core math tool.  
- `Is Prime Fast.cpp` & `Sieve of Eratosthenes.cpp` – number theory basics.  
- `BFS.cpp`, `DFS.cpp`, `dijkstra.cpp`, `Kruskal MST.cpp`, `DSU.cpp` – standard graph toolbox.  

Use them as a **reference** and copy only what you fully understand.

---

## 🌍 Recommended Global CP Resources

These are widely respected, long-term resources in the CP community:

- **CP-Algorithms** – encyclopaedia of algorithms & proofs  
  👉 https://cp-algorithms.com  
- **USACO Guide** – structured roadmap & topic explanations  
  👉 https://usaco.guide  
- **CSES Problem Set** – 400+ topic-wise high-quality problems  
  👉 https://cses.fi/problemset/  
- **Competitive Programmer’s Handbook (PDF)** – by Antti Laaksonen  
  👉 https://cses.fi/book.pdf  
- **VisuAlgo** – algorithm animations (graphs, DSU, trees, etc.)  
  👉 https://visualgo.net/en  

---

## 🇵🇸 Arabic / Local CP Resources I Use

### Teaching & Explanations

- **CodeAcademy PPU (YouTube)** – PPU’s official CP club  
  👉 https://www.youtube.com/@CodeAcademy-ppu/videos  
- **Mahmoud Ayman – Topic Explanations**  
  👉 https://www.youtube.com/playlist?list=PLIOhtFzqhbbGroes7my01e8x6GtP71Ah4  

### Sheets & Training Groups

- **Rokba Topic Sheets – Coach Hazem**  
  👉 https://vjudge.net/group/rokba  
- **Level 2 Training Group – Coach Mohamed Shareef**  
  👉 https://codeforces.com/group/2y52k0YLhL  
- **PCPC Training – Coach Abdelaziz**  
  👉 https://vjudge.net/group/pcpc_training  
- **Mahmoud Ayman Topic Contests**  
  👉 https://codeforces.com/group/9QrbarK7qH/contests  
- **Topic-Based Codeforces Group**  
  👉 https://codeforces.com/group/isP4JMZTix/contests  
- **PPU Graph Sheets – Coach Basel Ja'bari**  
  👉 https://vjudge.net/group/ppu-lvl3  
- **GSG Level 3 – Gaza Sky Geeks**  
  👉 https://codeforces.com/group/0Bl9bdDUwH/contests  
- **ACPC / Arab Regional Contests Group**  
  👉 https://codeforces.com/group/Rilx5irOux/contests  

### Smart Training Tools

- **CP Training Tracker – Virtual CF Contests by Level**  
  👉 https://cp-training-tracker.vercel.app/training  

---

## 🏁 Final Message

Competitive Programming is built on:

- clear logic  
- patience  
- structured practice  
- learning from every mistake  

Use this repository as your **toolbox**:  
read the code, change it, break it, fix it, and apply it to real problems.

> If this notebook helped you, consider leaving a ⭐ on the repo —  
> and **don’t forget us in your prayers** 🌿  
> Happy coding and good luck in your next contest! 💪🔥
