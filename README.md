# 🚀 Competitive Programming Notebook & Topic Library

> Personal toolbox for algorithms, data structures, and contest workflow.  
> Built in C++17, tested on Codeforces, AtCoder, contests.

---

## 📚 Quick Navigation

Use this as a **map of the repo**. Click to jump:

- [1. Repository Overview](#-repository-overview)
- [2. Topic Map (What’s Implemented)](#-topic-map--whats-implemented)
- [3. How I Think About Competitive Programming](#-how-i-think-about-competitive-programming)
- [4. Topic Notes & Patterns](#-topic-notes--patterns)
  - [4.1 Prefix Sums (1D & 2D)](#41-prefix-sums-1d--2d)
  - [4.2 Frequency Arrays](#42-frequency-arrays)
  - [4.3 Binary Exponentiation](#43-binary-exponentiation)
  - [4.4 Classic Binary Search](#44-classic-binary-search)
  - [4.5 Two Pointers](#45-two-pointers)
  - [4.6 Bitmask & Recursive Subsets](#46-bitmask--recursive-subsets)
  - [4.7 Sieve of Eratosthenes & Fast `isPrime`](#47-sieve-of-eratosthenes--fast-isprime)
  - [4.8 Graph Traversal (BFS / DFS)](#48-graph-traversal-bfs--dfs)
  - [4.9 Dijkstra’s Algorithm](#49-dijkstras-algorithm)
  - [4.10 Disjoint Set Union (DSU)](#410-disjoint-set-union-dsu)
  - [4.11 Kruskal’s Minimum Spanning Tree](#411-kruskals-minimum-spanning-tree)
  - [4.12 Dynamic Programming: LIS & CIS](#412-dynamic-programming-lis--cis)
  - [4.13 Square Root Decomposition](#413-square-root-decomposition)
  - [4.14 Segment Tree (Range Max + Point Update)](#414-segment-tree-range-max--point-update)
- [5. Roadmap & Learning Plan (Beginners → Advanced)](#-roadmap--learning-plan-beginners--advanced)
- [6. Deep Advice for Beginners (Honest, Long-Term)](#-deep-advice-for-beginners-honest-long-term)
- [7. Environment Setup – Sublime Text for CP](#-environment-setup--sublime-text-for-cp)
- [8. External Resources I Actively Use](#-external-resources-i-actively-use)
- [9. Contributing / Customizing This Notebook](#-contributing--customizing-this-notebook)

---

## 🗂 Repository Overview

```text
.
├─ template1.cpp / template2.cpp   # Main C++17 contest templates
├─ topics/                         # Topic-wise implementations
│  ├─ 2D Prefix Sum.cpp
│  ├─ Prefix Sum.cpp
│  ├─ Binary Exponentiation.cpp
│  ├─ Binary Search (Classic).cpp
│  ├─ two pointers.cpp
│  ├─ frequency_array.cpp
│  ├─ Sieve of Eratosthenes.cpp
│  ├─ Is Prime Fast.cpp
│  ├─ bitmask subsets.cpp
│  ├─ recursion subsets.cpp
│  ├─ BFS.cpp
│  ├─ DFS.cpp
│  ├─ dijkstra.cpp
│  ├─ DSU.cpp
│  ├─ Kruskal MST.cpp
│  ├─ DP LIS.cpp
│  ├─ DP CIS.cpp
│  ├─ Square Root Decomposition.cpp
│  └─ segment tree max.cpp
└─ README.md                       # You are here
```

Each file is written as **contest-ready code**: iterative where possible, `O(n)` / `O(log n)` where needed, and focused on readability + performance.

---

## 🗺 Topic Map – What’s Implemented

```mermaid
graph TD
  A[Competitive Programming Notebook] --> B[Arrays & Prefix Structures]
  A --> C[Searching & Patterns]
  A --> D[Number Theory]
  A --> E[Graphs]
  A --> F[Data Structures]
  A --> G[Dynamic Programming]

  B --> B1[Prefix Sum 1D]
  B --> B2[Prefix Sum 2D]
  B --> B3[Frequency Array]

  C --> C1[Binary Search]
  C --> C2[Two Pointers]
  C --> C3[Bitmask Subsets]
  C --> C4[Recursive Subsets]

  D --> D1[Sieve of Eratosthenes]
  D --> D2[Fast isPrime]

  E --> E1[BFS]
  E --> E2[DFS]
  E --> E3[Dijkstra]
  E --> E4[DSU + Kruskal MST]

  F --> F1[Square Root Decomposition]
  F --> F2[Segment Tree (Range Max)]

  G --> G1[DP LIS]
  G --> G2[DP CIS]
```

---

## 🧠 How I Think About Competitive Programming

Competitive Programming for me is:

1. **Algorithm toolbox** – knowing *which* tool solves *which* problem class.
2. **Pattern recognition** – mapping new problems to known patterns.
3. **Execution speed** – implementing reliably under time pressure.

I was heavily influenced by these references on how to practice effectively:  
- Um_nik – *How to practice Competitive Programming* (separating “SOLVE” and “FAST” practice). citeturn2search31  
- Radewoosh – *My opinion on how to practice competitive programming*. citeturn2search27  
- USACO Guide – introductory CP advice & structured learning. citeturn2search18turn2search22  

This notebook is my **implementation layer** on top of those ideas.

---

## 🔍 Topic Notes & Patterns

Below are practical notes **from actually using** these topics in problems.

---

### 4.1 Prefix Sums (1D & 2D)

#### What They Solve

- Constant-time range sums after linear preprocessing.  
- Very common in CSES / Codeforces / AtCoder early & mid problems. citeturn2search30  

#### 1D Prefix Sum

```cpp
// a[1..n], pref[0] = 0
for (int i = 1; i <= n; ++i)
    pref[i] = pref[i - 1] + a[i];

auto range_sum = [&](int l, int r) {
    return pref[r] - pref[l - 1]; // inclusive range
};
```

✅ **Common use-cases**

- Sum over `[l, r]`
- Checking if a sequence of differences balances back to zero
- Counting prefix counts (e.g., number of 1s up to index `i`)

⚠ **Bugs I hit**

- Mixing 0-based + 1-based indices.
- Using `int` when `n` and values are large → overflow. I now default to `long long` for sums.

#### 2D Prefix Sum

```cpp
// pref[i][j] = sum of rectangle (1,1) .. (i,j)
long long query(int x1, int y1, int x2, int y2) {
    return pref[x2][y2]
         - pref[x1-1][y2]
         - pref[x2][y1-1]
         + pref[x1-1][y1-1];
}
```

Useful for:

- Counting cells in sub-rectangles
- Offline queries on grids (no updates)

---

### 4.2 Frequency Arrays

Used when values are in a **small range** (letters, small ints, compressed indices).

- Cheaper than `map`/`unordered_map` in many problems.
- Perfect for “count something, then check conditions”.

```cpp
const int MAXV = 1e6;
vector<int> freq(MAXV + 1);

for (int x : a) freq[x]++;

if (freq[val] > 0) { /* ... */ }
```

⚠ **Traps**

- Forgetting to reset between test cases (I now reset only used entries when necessary).
- Mis-calculating max value → array too small → runtime error.

---

### 4.3 Binary Exponentiation

Fast `O(log e)` exponentiation; essential for modular arithmetic, combinatorics, etc. citeturn2search21turn2search17  

```cpp
long long modpow(long long a, long long e, long long mod) {
    long long res = 1 % mod;
    a %= mod;
    while (e > 0) {
        if (e & 1) res = (res * a) % mod;
        a = (a * a) % mod;
        e >>= 1;
    }
    return res;
}
```

Used in:

- Modular inverses when `mod` is prime (`a^(mod-2) % mod`)
- Fast powering for matrix / linear recurrences

---

### 4.4 Classic Binary Search

**Idea:** When answer is monotonic (true → false / false → true), binary search on answer.

```cpp
long long lo = L, hi = R, ans = L;
while (lo <= hi) {
    long long mid = lo + (hi - lo) / 2;
    if (good(mid)) {
        ans = mid;
        lo = mid + 1;     // or hi = mid - 1 depending on problem
    } else {
        hi = mid - 1;
    }
}
```

🧪 **My checklist before using BS**

1. Is `good(x)` monotonic in `x`?
2. Do I know at least one `x` which is definitely good / bad?
3. Are my bounds wide enough to include the true answer?

Typical mistakes: wrong bounds, `mid` overflow (fix with `lo + (hi-lo)/2`), or non-monotonic `good`.

---

### 4.5 Two Pointers

Sliding window style; best friends with prefix sums and frequency arrays.

```cpp
int n = a.size();
int l = 0;
long long sum = 0;
for (int r = 0; r < n; ++r) {
    sum += a[r];
    while (sum > X) {      // maintain invariant
        sum -= a[l++];
    }
    best = max(best, r - l + 1);
}
```

**Patterns I’ve used**

- Longest subarray with sum ≤ `X`
- Longest substring with ≤ `K` distinct letters
- Merge two sorted arrays / pointers on two arrays

Key idea: *window state* must be updated carefully when moving `l` / `r`.

---

### 4.6 Bitmask & Recursive Subsets

#### Bitmask Enumeration

For `n ≤ ~20`:

```cpp
for (int mask = 0; mask < (1 << n); ++mask) {
    // process subset represented by `mask`
}
```

Good for:

- Checking all subsets / subset DP
- Partitioning, TSP-like brute forces (small input)

#### Recursive Subsets

Clean for problems where you track extra state.

```cpp
void gen(int i) {
    if (i == n) { /* process */ return; }
    // don't take i
    gen(i + 1);
    // take i
    // mark taken
    gen(i + 1);
}
```

I always check `n` first: if `n` is big → this is not the right hammer.

---

### 4.7 Sieve of Eratosthenes & Fast `isPrime`

Following CP-Algorithms style implementation. citeturn2search21turn2search17turn2search34  

```cpp
const int N = 1e7;
vector<bool> is_prime(N+1, true);
vector<int> primes;

void sieve() {
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i * i <= N; ++i)
        if (is_prime[i])
            for (int j = i*i; j <= N; j += i)
                is_prime[j] = false;
    for (int i = 2; i <= N; ++i)
        if (is_prime[i]) primes.push_back(i);
}
```

`Is Prime Fast.cpp` contains trial division for single checks up to around `1e9`.

---

### 4.8 Graph Traversal (BFS / DFS)

![BFS Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Breadth-first_tree.svg/350px-Breadth-first_tree.svg.png)

> Breadth-first search explores level by level and runs in `O(|V| + |E|)` time. citeturn3search6  

#### BFS – Shortest Path in Unweighted Graphs

```cpp
vector<vector<int>> g(n);
vector<int> dist(n, -1);
queue<int> q;

dist[src] = 0;
q.push(src);

while (!q.empty()) {
    int v = q.front(); q.pop();
    for (int to : g[v]) {
        if (dist[to] == -1) {
            dist[to] = dist[v] + 1;
            q.push(to);
        }
    }
}
```

#### DFS – Depth-First Search

```cpp
void dfs(int v) {
    vis[v] = true;
    for (int to : g[v])
        if (!vis[to])
            dfs(to);
}
```

I use DFS for:

- Connected components
- Topological sort
- Bridges, articulation points (with extra arrays)

---

### 4.9 Dijkstra’s Algorithm

For shortest paths with **non-negative** edge weights. citeturn2search21  

```cpp
using P = pair<long long,int>;
vector<long long> dist(n, INF);
priority_queue<P, vector<P>, greater<P>> pq;

dist[src] = 0;
pq.push({0, src});

while (!pq.empty()) {
    auto [d, v] = pq.top(); pq.pop();
    if (d != dist[v]) continue;
    for (auto [to, w] : g[v]) {
        if (dist[to] > dist[v] + w) {
            dist[to] = dist[v] + w;
            pq.push({dist[to], to});
        }
    }
}
```

Bugs I met early:

- Using `int` for distances, then overflow.
- Forgetting to skip stale states in the priority queue.

---

### 4.10 Disjoint Set Union (DSU)

Implementation follows the classic **Union–Find with path compression and union by size/rank**, as described in CP-Algorithms. citeturn2search34  

```cpp
struct DSU {
    vector<int> p, sz;
    DSU(int n) : p(n), sz(n, 1) {
        iota(p.begin(), p.end(), 0);
    }
    int find(int v) {
        if (v == p[v]) return v;
        return p[v] = find(p[v]);
    }
    bool unite(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;
        if (sz[a] < sz[b]) swap(a, b);
        p[b] = a;
        sz[a] += sz[b];
        return true;
    }
};
```

I use DSU for:

- Connectivity queries,
- Offline queries,
- Kruskal’s MST.

---

### 4.11 Kruskal’s Minimum Spanning Tree

Sort edges by weight, then add them if they connect different components.

```cpp
struct Edge { int u, v; long long w; };

long long kruskal(int n, vector<Edge>& edges) {
    sort(edges.begin(), edges.end(),
        [](const Edge& a, const Edge& b) {
            return a.w < b.w;
        });
    DSU dsu(n);
    long long cost = 0;
    for (auto &e : edges) {
        if (dsu.unite(e.u, e.v))
            cost += e.w;
    }
    return cost;
}
```

---

### 4.12 Dynamic Programming: LIS & CIS

#### LIS (Longest Increasing Subsequence)

I keep both:

- `O(n^2)` DP – good for starting and educational problems.
- `O(n log n)` patience sorting method – used in real contests.

```cpp
vector<int> a(n), tails;
for (int x : a) {
    auto it = lower_bound(tails.begin(), tails.end(), x);
    if (it == tails.end()) tails.push_back(x);
    else *it = x;
}
int lis = (int)tails.size();
```

#### CIS (Common Increasing Subsequence)

A more advanced variant combining LCS + LIS ideas. Problems in this area are very good training for **state design** and transition reasoning.

---

### 4.13 Square Root Decomposition

Blocks of size `~sqrt(n)` for range queries + point updates.

```cpp
int n;
vector<long long> a;
vector<long long> block;
int B; // block size

void build(int n_) {
    n = n_;
    B = (int)sqrt(n) + 1;
    block.assign(B, 0);
    for (int i = 0; i < n; ++i)
        block[i / B] += a[i];
}
```

Used when:

- Segment tree is overkill,
- Constraints are light enough,
- Simplicity is more important than absolute speed.

---

### 4.14 Segment Tree (Range Max + Point Update)

Inspired by standard tutorial implementations from CP-Algorithms. citeturn2search21turn2search17  

```cpp
struct SegTree {
    int n;
    vector<long long> st;
    SegTree(int n) : n(n), st(4*n, 0) {}

    void build(int p, int l, int r, const vector<long long>& a) {
        if (l == r) {
            st[p] = a[l];
            return;
        }
        int m = (l + r) / 2;
        build(p*2, l, m, a);
        build(p*2+1, m+1, r, a);
        st[p] = max(st[p*2], st[p*2+1]);
    }

    void update(int p, int l, int r, int idx, long long val) {
        if (l == r) {
            st[p] = val;
            return;
        }
        int m = (l + r) / 2;
        if (idx <= m) update(p*2, l, m, idx, val);
        else update(p*2+1, m+1, r, idx, val);
        st[p] = max(st[p*2], st[p*2+1]);
    }

    long long query(int p, int l, int r, int ql, int qr) {
        if (qr < l || r < ql) return LLONG_MIN; // neutral for max
        if (ql <= l && r <= qr) return st[p];
        int m = (l + r) / 2;
        return max(query(p*2, l, m, ql, qr),
                   query(p*2+1, m+1, r, ql, qr));
    }
};
```

Segment trees are one of the main “walls” between intermediate and advanced CP – they appear in many Codeforces / AtCoder problems and in serious ICPC regionals.

---

## 🧭 Roadmap & Learning Plan (Beginners → Advanced)

### 🌟 The Most Important Resource

**📌 Complete CP Roadmap (for all levels)**  
👉 https://www.notion.so/Roadmap-29cf4abdd6528065a1f4fb69db1ce9ac  

This roadmap is the **central plan** I follow:

- Level 1 – Programming basics, simple implementation.
- Level 2 – Core CP patterns (prefix sums, two pointers, binary search, simple graphs).
- Level 3–5 – Advanced topics: DP on trees, flows, segment trees, number theory, etc.

I use the roadmap to decide:

- *What to learn next.*
- *Which topics to skip (for now).*
- *How to balance new topics vs. practice.*

---

## 💡 Deep Advice for Beginners (Honest, Long-Term)

This part is intentionally long. It’s based on my own experience,
plus ideas from high-rated coders and guides. citeturn2search31turn2search27turn2search23turn2search18turn2search22  

### 1. Focus on **thinking skills**, not language tricks

- Your C++ can be simple. No need for templates and crazy macros at the start.
- Spend time understanding **why** a solution is correct.
- When reading editorials, rewrite them in your own words.

### 2. Don’t drown in resources

Good coders often recommend a *small* set of sites:

- **Problems & contests:** Codeforces, AtCoder, CSES, USACO. citeturn2search21turn2search18turn2search30  
- **Theory & algorithms:** CP-Algorithms, USACO Guide. citeturn2search21turn2search18turn2search17  

Pick a few, stick to them, and avoid hopping between 10 different lists.

### 3. Have a weekly structure

Example weekly schedule (for someone with classes / work):

| Day  | Focus                                           |
|------|-------------------------------------------------|
| Mon  | 2 easier problems + review old mistakes         |
| Tue  | 1 medium problem (new topic)                    |
| Wed  | 1 virtual contest (CF/AtCoder)                  |
| Thu  | Upsolve 2–3 unsolved contest problems           |
| Fri  | Topic study (read CP-Algorithms + implement)    |
| Sat  | Mix: 1–2 problems + some theory                 |
| Sun  | Light day: only review + thinking               |

Adjust to your life, but keep:

- **Contests**
- **Upsolving**
- **Theory + implementation**

All three matter.

### 4. How to practice a single problem

Before reading editorial:

1. Read the statement carefully.  
2. Write down small examples with your own hands.  
3. Ask:
   - Can I brute force?  
   - What limits kill brute force?  
   - What *pattern* does this look like (two pointers? graph? DP?)  
4. If stuck after ~30–45 minutes:
   - Read a **hint** or partial editorial.
   - Implement the solution with comments.
   - After solving, close the editorial and re-implement from scratch.

This matches advice from multiple strong coders on Codeforces: the real learning happens when you **struggle a bit**, but not forever. citeturn2search31turn2search27turn2search35  

### 5. Upsolving – where rating actually grows

After each contest:

- Mark every problem you couldn’t solve or solved with guesswork.
- Try them again calmly (even the easiest one you missed).
- Add interesting patterns to this repo as new topic files or comments.

Most red coders report that systematic upsolving was more important than doing thousands of random tasks. citeturn2search31turn2search19turn2search23  

### 6. Notes from my own mistakes

Things I personally did wrong at the beginning:

- Jumped into very hard problems too early and got demotivated.
- Solved many **implementation-only** problems but avoided graphs and DP.
- Ignored time complexity and then got TLE in contest.
- Didn’t review wrong submissions carefully.

What I changed:

- Solved problems roughly around my rating, plus a few slightly harder ones (following typical practice guides). citeturn2search35turn2search23  
- Forced myself to implement each new topic at least **twice** in different problems.
- Built this notebook to avoid re-deriving the same implementation every week.

### 7. Practical beginner checklist

If you’re new, here is a **concrete list**:

1. Make sure you’re comfortable with:
   - loops, functions, arrays, vectors
   - `sort`, `pair`, `struct`
   - basic math, `long long`, modulo operations
2. Solve ~50 implementation problems (800–1200 rating) on Codeforces / other sites.
3. Learn:
   - prefix sums, two pointers, binary search
   - simple graphs (BFS/DFS)
   - simple greedy problems
4. After that:
   - Start using this repo’s topics as reference.
   - Join real contests (Codeforces Div. 3/4, AtCoder Beginner).

---

## 🛠 Environment Setup – Sublime Text for CP

I mainly use **Sublime Text 4** with the **FastOlympicCoding** plugin and custom build systems. citeturn3search3turn3search9turn6view0turn2search24turn2search25turn2search36turn2search32  

### 1. Install Sublime Text

- Download from the official website:  
  👉 https://www.sublimetext.com/download
- Install like a normal application (Windows / Linux / macOS).

### 2. Install a C++ compiler

On Windows, I recommend:

- **MSYS2 + MinGW-w64** or standalone **MinGW-w64**.  
  Make sure `g++` is in your `PATH`.

On Linux / macOS:

- Use your package manager (`g++`, `clang++`, etc.).

### 3. Basic Build System (for quick testing)

Create a build system:

1. `Tools → Build System → New Build System…`
2. Paste (Windows example, C++17):

```json
{
    "shell_cmd": "g++ -std=c++17 -O2 -Wall \"${file}\" -o \"${file_path}/${file_base_name}.exe\" && \"${file_path}/${file_base_name}.exe\" < \"${file_path}/input.txt\" > \"${file_path}/output.txt\"",
    "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
    "working_dir": "${file_path}",
    "selector":  "source.c++"
}
```

3. Save as `CP-C++17.sublime-build`.
4. Create `input.txt` beside your `.cpp` and write your tests there.
5. Press <kbd>Ctrl</kbd> + <kbd>B</kbd> to compile & run.

(Adjust the `.exe` part on Linux/macOS: just use `./${file_base_name}`.)

### 4. Install Package Control

To install third-party plugins easily:

- Official guide from Sublime / blogs shows how to open the console and paste the installer snippet. citeturn3search11turn3search14  

Once installed, use:

- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> → “Package Control: Install Package”.

### 5. FastOlympicCoding plugin

This plugin turns Sublime into a **full CP environment**. citeturn6view0turn2search24turn2search28turn2search36turn2search37  

- Install via **Package Control**: search for `FastOlympicCoding`.
- Features:
  - Test manager with multiple testcases.
  - Stress testing (wrong vs. correct solution).
  - Class completion / snippets.
  - Real-time linting.

Example screenshot (from the official repo):

![FastOlympicCoding Test Manager](https://github.com/Jatana/FastOlympicCoding/raw/master/ScreenShots/TestManager.gif)

Key keybindings (default):

- `Ctrl+Alt+B` – compile & run.
- `Ctrl+Enter` – new test.
- `Ctrl+D` – delete test.
- `Ctrl+Shift+Up/Down` – reorder tests.

### 6. CompetitiveProgrammingParser + Competitive Companion (optional)

To parse Codeforces problems directly into Sublime. citeturn2search36turn2search20  

- Install browser extension **Competitive Companion**.
- Install Sublime package **CompetitiveProgrammingParser**.
- When you open a CF problem, press the green “+” icon – a `.cpp` + tests are generated in your folder automatically.

### 7. My personal workflow in Sublime

1. Use **template1.cpp** / **template2.cpp** from this repo as the starting file.
2. Press a hotkey to compile & run against local tests (FastOlympicCoding or simple build).
3. Once stable, copy to Codeforces / AtCoder and submit.
4. For tricky problems:
   - Use stress testing (FastOlympicCoding) against a brute-force solution.

This combination of **Sublime + FastOlympicCoding + this notebook** is enough for serious ICPC preparation.

---

## 🌍 External Resources I Actively Use

These are the sites I rely on most, with high-quality content and community recommendations. citeturn2search21turn2search17turn2search18turn2search22turn2search30turn2search23turn2search35  

### Algorithm References

- **CP-Algorithms** – algorithms & data structures explained with code.  
  👉 https://cp-algorithms.com/
- **USACO Guide** – structured modern guide for CP.  
  👉 https://usaco.guide/
- **CSES Problemset** – clean, high-quality problem set.  
  👉 https://cses.fi/problemset/

### Platforms

- **Codeforces** – main contest platform.  
  👉 https://codeforces.com/
- **AtCoder** – excellent task quality & editorials.  
  👉 https://atcoder.jp/

### Books (optional)

Recommended by USACO & others: citeturn2search22  

- *Competitive Programming* – Steven & Felix Halim  
- *Programming Challenges* – Skiena & Revilla  
- *Looking for a Challenge?* – Polish Olympiad authors

---

## 🤝 Contributing / Customizing This Notebook

This repository is intentionally **personal**:

- Every file is something I have studied and used.
- Comments often include small notes about tricky edge cases or optimizations.

If you’re using this repo:

- Feel free to **fork** it and customize:
  - add your own topics,
  - change templates,
  - rewrite comments in your own style.
- If you spot a bug or have a cleaner implementation, you can open a PR or just improve your fork.

> The goal is not to have a “perfect library”, but a **living notebook** that grows with experience.  
> Good luck in your contests – and if this repo helped you, don’t forget us in your prayers 🌿

