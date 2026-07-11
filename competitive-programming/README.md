# 🚀 Competitive Programming Notebook

<div align="center">

[![CP Notebook](https://img.shields.io/badge/Competitive%20Programming-Notebook-blue?style=for-the-badge&logo=cplusplus)](https://github.com/Obada111/competitive-programming)
[![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational?style=for-the-badge&logo=cplusplus)](https://isocpp.org/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/Obada111/competitive-programming)
[![Codeforces](https://img.shields.io/badge/Codeforces-Obadajo-blue?style=for-the-badge&logo=codeforces)](https://codeforces.com/profile/Obadajo)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**A battle-tested collection of algorithms, data structures, templates, and CP solutions.**  
*My personal journey from beginner to competitive programmer — solved problems, real mistakes, and honest notes.*

[📖 Topics](#-topic-index) • [🗂 Structure](#-repository-structure) • [🎯 Solutions](#-solutions) • [🛠 Templates](#-templates) • [📚 Resources](#-resources)

</div>

---

## 👤 About Me

| | |
|---|---|
| **Name** | Obada Joba |
| **University** | Palestine Polytechnic University (PPU) |
| **Club** | CodeAcademy PPU / IEEE |
| **Codeforces** | [Obadajo](https://codeforces.com/profile/Obadajo) |
| **LinkedIn** | [obada-joba](https://www.linkedin.com/in/obada-joba) |
| **Language** | C++17 |
| **Focus** | Codeforces (Div 2–3, Rating 800–2000) |

---

## 🗂 Repository Structure

```
competitive-programming/
│
├── templates/
│   ├── template1.cpp          # Primary contest template (fast I/O, macros, ordered_set)
│   ├── template2.cpp          # Clean minimal template (for beginners / simple problems)
│   ├── template3.cpp          # Template with debug macros (#ifdef LOCAL)
│   └── template4.cpp          # Heavy template (all includes, policy-based DS)
│
├── topics/
│   ├── Array Techniques/
│   │   ├── Prefix Sum.cpp
│   │   ├── 2D Prefix Sum.cpp
│   │   └── frequency_array.cpp
│   ├── Search & Optimization/
│   │   ├── Binary Search (Classic).cpp
│   │   └── two_pointers.cpp
│   ├── Number Theory/
│   │   ├── Binary Exponentiation.cpp
│   │   ├── Sieve of Eratosthenes.cpp
│   │   ├── Is Prime Fast.cpp
│   │   └── Modular Inverse.cpp           ← NEW
│   ├── Combinatorics/
│   │   ├── bitmask_subsets.cpp
│   │   └── recursion_subsets.cpp
│   ├── Graphs/
│   │   ├── BFS.cpp
│   │   ├── DFS.cpp
│   │   ├── dijkstra.cpp
│   │   ├── DSU.cpp
│   │   ├── Kruskal_MST.cpp
│   │   ├── Topological_Sort.cpp          ← NEW
│   │   └── Bellman_Ford.cpp              ← NEW
│   ├── Dynamic Programming/
│   │   ├── DP_LIS.cpp
│   │   ├── DP_CIS.cpp
│   │   ├── DP_Knapsack.cpp               ← NEW
│   │   └── DP_Coin_Change.cpp            ← NEW
│   ├── Data Structures/
│   │   ├── Square Root Decomposition.cpp
│   │   ├── Segment Tree Max.cpp
│   │   ├── Segment Tree Sum.cpp          ← NEW
│   │   ├── Fenwick Tree (BIT).cpp        ← NEW
│   │   └── Sparse Table (RMQ).cpp        ← NEW
│   └── Strings/                          ← NEW CATEGORY
│       ├── String Hashing.cpp
│       └── KMP.cpp
│
├── solutions/                            ← NEW FOLDER
│   ├── codeforces/
│   │   ├── 800/
│   │   ├── 900/
│   │   ├── 1000/
│   │   ├── 1100/
│   │   └── ...
│   └── cses/
│       ├── intro/
│       ├── sorting/
│       └── graphs/
│
└── README.md
```

---

## 📊 My Progress Tracker

> Updated manually after solving sessions.

| Platform | Solved | Rating / Level |
|----------|--------|----------------|
| Codeforces | ![cf](https://img.shields.io/badge/dynamic/json?url=https://codeforces.com/api/user.info?handles=Obadajo&query=$.result[0].rating&label=Rating&color=blue) | Check profile |
| CSES | — | In Progress |
| AtCoder | — | In Progress |

---

## 🎯 Solutions

Organized by platform and difficulty. Each file is named:
`ProblemID_ProblemName.cpp`

```
solutions/codeforces/800/
    1234A_Title.cpp
    ...
solutions/codeforces/900/
    ...
solutions/cses/intro/
    ...
```

> 💡 Every solution includes: problem link, time complexity, and a short comment explaining the approach.

---

## 🛠 Templates

I use multiple templates depending on the contest type. Here's when to use each:

| Template | Use Case |
|----------|----------|
| `template1.cpp` | Default contest template — fast I/O, common macros, `ordered_set` |
| `template2.cpp` | Clean minimal template — for simple problems or beginners |
| `template3.cpp` | Debug-ready template — includes `#ifdef LOCAL` debug macros |
| `template4.cpp` | Heavy template — all includes, policy-based DS, extra utilities |

### My Core Template (template1) — Highlights

```cpp
#pragma GCC optimize("O2")
#include <bits/stdc++.h>
using namespace std;

#define int          long long
#define pb           push_back
#define all(x)       (x).begin(), (x).end()
#define sz(x)        (int)(x).size()
#define inf          (int)1e18
#define MOD          1000000007LL

// Policy-based ordered set
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
typedef tree<int,null_type,less<int>,rb_tree_tag,tree_order_statistics_node_update> ordered_set;

void solve() {
    // your solution here
}

signed main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t = 1;
    // cin >> t;
    while (t--) solve();
}
```

---

## 📖 Topic Index

### Array Techniques
- [Prefix Sums (1D & 2D)](#prefix-sums)
- [Frequency Arrays](#frequency-arrays)

### Search & Optimization
- [Binary Search](#binary-search)
- [Two Pointers / Sliding Window](#two-pointers)

### Number Theory
- [Binary Exponentiation](#binary-exponentiation)
- [Sieve of Eratosthenes](#sieve-of-eratosthenes)
- [Fast Prime Checking](#fast-prime-checking)
- [Modular Inverse](#modular-inverse)

### Combinatorics
- [Bitmask Techniques](#bitmask)
- [Recursive Subset Generation](#subsets)

### Graph Algorithms
- [BFS & DFS](#bfs--dfs)
- [Dijkstra](#dijkstra)
- [Bellman-Ford](#bellman-ford)
- [DSU (Union-Find)](#dsu)
- [Kruskal's MST](#kruskals-mst)
- [Topological Sort](#topological-sort)

### Dynamic Programming
- [LIS (Longest Increasing Subsequence)](#lis)
- [Knapsack](#knapsack)
- [Coin Change](#coin-change)

### Data Structures
- [Segment Tree](#segment-tree)
- [Fenwick Tree (BIT)](#fenwick-tree)
- [Square Root Decomposition](#sqrt-decomp)
- [Sparse Table (RMQ)](#sparse-table)

### Strings
- [String Hashing](#string-hashing)
- [KMP](#kmp)

---

## 📚 Detailed Implementations

---

### Prefix Sums

**1D Prefix Sum** — Range sum in O(1) after O(n) build.

```cpp
vector<long long> pref(n + 1, 0);
for (int i = 1; i <= n; i++)
    pref[i] = pref[i-1] + a[i];

// sum of [l, r]
auto range_sum = [&](int l, int r) {
    return pref[r] - pref[l-1];
};
```

**2D Prefix Sum** — Rectangle sum query.

```cpp
// Build
for (int i = 1; i <= n; i++)
    for (int j = 1; j <= m; j++)
        pref[i][j] = a[i][j] + pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1];

// Query sum of rectangle (x1,y1) to (x2,y2)
auto rect_sum = [&](int x1, int y1, int x2, int y2) {
    return pref[x2][y2] - pref[x1-1][y2] - pref[x2][y1-1] + pref[x1-1][y1-1];
};
```

**Common Mistakes:**
- ❌ Using `int` when sum overflows → always use `long long`
- ❌ Forgetting `pref[0] = 0` initialization
- ❌ Off-by-one with 0-based vs 1-based indexing

---

### Frequency Arrays

```cpp
const int MAXV = 1e6 + 5;
vector<int> freq(MAXV, 0);
for (int x : arr) freq[x]++;

// Check existence
if (freq[target] > 0) { ... }
```

**Use over `map` when:** value range ≤ 10⁶, need O(1) access.

---

### Binary Search

**The Golden Rule:** If `good(x)` is monotonic — use binary search!

```cpp
long long lo = L, hi = R, ans = -1;
while (lo <= hi) {
    long long mid = lo + (hi - lo) / 2;
    if (good(mid)) {
        ans = mid;
        lo = mid + 1; // or hi = mid - 1 depending on problem
    } else {
        hi = mid - 1;
    }
}
```

**Complexity Guide:**

| n | Max Complexity |
|---|---|
| ≤ 10 | O(n!) |
| ≤ 20 | O(2^n) |
| ≤ 1,000 | O(n²) |
| ≤ 100,000 | O(n log n) |
| ≤ 1,000,000 | O(n) |

---

### Two Pointers

```cpp
int left = 0;
long long cur = 0, best = 0;
for (int right = 0; right < n; right++) {
    cur += arr[right];
    while (cur > limit) cur -= arr[left++];
    best = max(best, right - left + 1);
}
```

---

### Binary Exponentiation

```cpp
long long binpow(long long a, long long b, long long mod) {
    long long res = 1 % mod;
    a %= mod;
    while (b > 0) {
        if (b & 1) res = res * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return res;
}
```

---

### Modular Inverse

**Using Fermat's Little Theorem** (mod must be prime):

```cpp
long long modinv(long long a, long long mod) {
    return binpow(a, mod - 2, mod);
}
```

---

### Sieve of Eratosthenes

```cpp
const int MAXN = 1e7;
vector<bool> is_prime(MAXN + 1, true);
vector<int> primes;

void sieve() {
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i <= MAXN; i++) {
        if (is_prime[i]) {
            primes.push_back(i);
            for (long long j = (long long)i*i; j <= MAXN; j += i)
                is_prime[j] = false;
        }
    }
}
```

---

### Fast Prime Checking

```cpp
bool is_prime(long long n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (long long i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i+2) == 0) return false;
    return true;
}
```

---

### Bitmask

```cpp
// Enumerate all 2^n subsets
for (int mask = 0; mask < (1 << n); mask++) {
    for (int i = 0; i < n; i++) {
        if (mask & (1 << i)) {
            // element i is in this subset
        }
    }
}

// Useful operations
int cnt  = __builtin_popcount(mask);  // number of set bits
int low  = mask & (-mask);            // lowest set bit
mask    |= (1 << i);                  // set bit i
mask    &= ~(1 << i);                 // clear bit i
mask    ^= (1 << i);                  // toggle bit i

// Iterate all submasks of mask
for (int sub = mask; sub > 0; sub = (sub-1) & mask) { ... }
```

⚠️ Only feasible for n ≤ 20–23.

---

### BFS & DFS

**BFS — Shortest path (unweighted):**

```cpp
vector<int> dist(n, -1);
queue<int> q;
dist[src] = 0;
q.push(src);
while (!q.empty()) {
    int v = q.front(); q.pop();
    for (int u : adj[v])
        if (dist[u] == -1) { dist[u] = dist[v]+1; q.push(u); }
}
```

**DFS — Cycle detection, tree traversal:**

```cpp
vector<bool> vis(n, false);
void dfs(int v) {
    vis[v] = true;
    for (int u : adj[v])
        if (!vis[u]) dfs(u);
}
```

| | BFS | DFS |
|---|---|---|
| Shortest path | ✅ | ❌ |
| Cycle detection | ✅ | ✅ |
| Topological sort | Kahn's | ✅ Natural |
| Memory | O(width) | O(depth) |

---

### Dijkstra

```cpp
using pli = pair<long long, int>;
const long long INF = 1e18;

vector<long long> dijkstra(int src, vector<vector<pair<int,long long>>>& g) {
    int n = g.size();
    vector<long long> dist(n, INF);
    priority_queue<pli, vector<pli>, greater<pli>> pq;
    dist[src] = 0;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, v] = pq.top(); pq.pop();
        if (d != dist[v]) continue;
        for (auto [u, w] : g[v])
            if (dist[v] + w < dist[u]) {
                dist[u] = dist[v] + w;
                pq.push({dist[u], u});
            }
    }
    return dist;
}
```

⚠️ All weights must be ≥ 0. Use Bellman-Ford for negative weights.

---

### Bellman-Ford

```cpp
// Works with negative weights, detects negative cycles
vector<long long> dist(n, INF);
dist[src] = 0;
for (int iter = 0; iter < n-1; iter++)
    for (auto [u, v, w] : edges)
        if (dist[u] != INF && dist[u] + w < dist[v])
            dist[v] = dist[u] + w;

// Check for negative cycle
for (auto [u, v, w] : edges)
    if (dist[u] != INF && dist[u] + w < dist[v])
        cout << "Negative cycle exists!\n";
```

**Time:** O(V × E) — slower than Dijkstra, use only when needed.

---

### DSU (Union-Find)

```cpp
struct DSU {
    vector<int> par, sz;
    DSU(int n) : par(n), sz(n, 1) { iota(par.begin(), par.end(), 0); }
    int find(int x) { return par[x] == x ? x : par[x] = find(par[x]); }
    bool unite(int x, int y) {
        x = find(x); y = find(y);
        if (x == y) return false;
        if (sz[x] < sz[y]) swap(x, y);
        par[y] = x; sz[x] += sz[y];
        return true;
    }
    bool same(int x, int y) { return find(x) == find(y); }
    int size(int x) { return sz[find(x)]; }
};
```

**Time:** O(α(n)) ≈ O(1) per operation.

---

### Kruskal's MST

```cpp
struct Edge { int u, v; long long w; };
sort(edges.begin(), edges.end(), [](auto& a, auto& b){ return a.w < b.w; });

DSU dsu(n);
long long mst = 0;
for (auto& [u, v, w] : edges)
    if (dsu.unite(u, v)) mst += w;
```

---

### Topological Sort

```cpp
// Kahn's Algorithm (BFS-based)
vector<int> indegree(n, 0);
for (int v = 0; v < n; v++)
    for (int u : adj[v]) indegree[u]++;

queue<int> q;
for (int i = 0; i < n; i++)
    if (indegree[i] == 0) q.push(i);

vector<int> order;
while (!q.empty()) {
    int v = q.front(); q.pop();
    order.push_back(v);
    for (int u : adj[v])
        if (--indegree[u] == 0) q.push(u);
}
// If order.size() != n → graph has a cycle
```

---

### LIS

**O(n log n) — for contests:**

```cpp
int lis(vector<int>& a) {
    vector<int> tails;
    for (int x : a) {
        auto it = lower_bound(all(tails), x);
        if (it == tails.end()) tails.push_back(x);
        else *it = x;
    }
    return tails.size();
}
```

---

### Knapsack

```cpp
// 0/1 Knapsack: max value with capacity W
vector<long long> dp(W+1, 0);
for (auto [w, v] : items)
    for (int c = W; c >= w; c--)
        dp[c] = max(dp[c], dp[c-w] + v);
```

---

### Coin Change

```cpp
// Minimum coins to make amount
vector<int> dp(amount+1, INT_MAX);
dp[0] = 0;
for (int coin : coins)
    for (int i = coin; i <= amount; i++)
        if (dp[i-coin] != INT_MAX)
            dp[i] = min(dp[i], dp[i-coin] + 1);
```

---

### Segment Tree

```cpp
struct SegTree {
    int n;
    vector<long long> t;
    SegTree(int n) : n(n), t(4*n, 0) {}

    void update(int node, int l, int r, int pos, long long val) {
        if (l == r) { t[node] = val; return; }
        int mid = (l+r)/2;
        if (pos <= mid) update(2*node, l, mid, pos, val);
        else update(2*node+1, mid+1, r, pos, val);
        t[node] = max(t[2*node], t[2*node+1]);
    }

    long long query(int node, int l, int r, int ql, int qr) {
        if (qr < l || r < ql) return LLONG_MIN;
        if (ql <= l && r <= qr) return t[node];
        int mid = (l+r)/2;
        return max(query(2*node, l, mid, ql, qr),
                   query(2*node+1, mid+1, r, ql, qr));
    }

    void update(int pos, long long val) { update(1, 0, n-1, pos, val); }
    long long query(int l, int r) { return query(1, 0, n-1, l, r); }
};
```

---

### Fenwick Tree (BIT)

```cpp
struct BIT {
    int n;
    vector<long long> t;
    BIT(int n) : n(n), t(n+1, 0) {}

    void update(int i, long long delta) {
        for (i++; i <= n; i += i & (-i))
            t[i] += delta;
    }

    long long query(int i) { // prefix sum [0..i]
        long long s = 0;
        for (i++; i > 0; i -= i & (-i))
            s += t[i];
        return s;
    }

    long long query(int l, int r) { // range sum [l..r]
        return query(r) - (l > 0 ? query(l-1) : 0);
    }
};
```

**Simpler and faster than Segment Tree for sum queries with point updates.**

---

### Sparse Table (RMQ)

```cpp
// Static Range Minimum Query — O(n log n) build, O(1) query
const int LOG = 20;
int sparse[LOG][MAXN];
int lg[MAXN];

void build(vector<int>& a, int n) {
    for (int i = 0; i < n; i++) sparse[0][i] = a[i];
    for (int j = 1; j < LOG; j++)
        for (int i = 0; i + (1<<j) <= n; i++)
            sparse[j][i] = min(sparse[j-1][i], sparse[j-1][i+(1<<(j-1))]);
    lg[1] = 0;
    for (int i = 2; i <= n; i++) lg[i] = lg[i/2] + 1;
}

int query(int l, int r) {
    int k = lg[r-l+1];
    return min(sparse[k][l], sparse[k][r-(1<<k)+1]);
}
```

---

### Square Root Decomposition

```cpp
int block;
vector<long long> arr, blk;

void init(vector<long long>& a) {
    int n = a.size();
    block = sqrt(n) + 1;
    arr = a; blk.assign(block, 0);
    for (int i = 0; i < n; i++) blk[i/block] += arr[i];
}

void update(int i, long long v) {
    blk[i/block] += v - arr[i];
    arr[i] = v;
}

long long query(int l, int r) {
    long long s = 0;
    while (l <= r && l % block != 0) s += arr[l++];
    while (l + block - 1 <= r) { s += blk[l/block]; l += block; }
    while (l <= r) s += arr[l++];
    return s;
}
```

---

### String Hashing

```cpp
const long long BASE = 131, MOD = 1e9 + 7;
vector<long long> h, pw;

void build(const string& s) {
    int n = s.size();
    h.resize(n+1, 0); pw.resize(n+1, 1);
    for (int i = 0; i < n; i++) {
        h[i+1] = (h[i] * BASE + s[i]) % MOD;
        pw[i+1] = pw[i] * BASE % MOD;
    }
}

long long get(int l, int r) { // hash of s[l..r]
    return (h[r+1] - h[l] * pw[r-l+1] % MOD + MOD * 2) % MOD;
}
```

---

### KMP (Pattern Matching)

```cpp
vector<int> buildLPS(const string& p) {
    int m = p.size();
    vector<int> lps(m, 0);
    for (int i = 1, len = 0; i < m; ) {
        if (p[i] == p[len]) lps[i++] = ++len;
        else if (len) len = lps[len-1];
        else lps[i++] = 0;
    }
    return lps;
}

vector<int> kmp(const string& text, const string& pat) {
    auto lps = buildLPS(pat);
    vector<int> matches;
    for (int i = 0, j = 0; i < (int)text.size(); ) {
        if (text[i] == pat[j]) { i++; j++; }
        if (j == (int)pat.size()) { matches.push_back(i-j); j = lps[j-1]; }
        else if (i < (int)text.size() && text[i] != pat[j])
            j ? j = lps[j-1] : i++;
    }
    return matches;
}
```

---

## 🎓 Training Philosophy

### Think Before You Code

```
❌ Read → Code immediately
✅ Read → Understand → Plan → Code → Test
```

### Respect Constraints

| n | Target Complexity |
|---|---|
| ≤ 15 | O(2^n) |
| ≤ 1,000 | O(n²) |
| ≤ 100,000 | O(n log n) |
| ≤ 1,000,000 | O(n) |

### Consistency Beats Intensity

```
❌ 6 hours once a week
✅ 1 focused hour every day
```

### After Every Contest

1. Upsolve 1–3 problems you couldn't solve
2. Write down **why** you got stuck (logic / implementation / misread)
3. Read editorial even for problems you solved

---

## 🌍 Resources

### Global

| Resource | Link | Best For |
|---|---|---|
| CP-Algorithms | [cp-algorithms.com](https://cp-algorithms.com) | Deep algorithm explanations |
| USACO Guide | [usaco.guide](https://usaco.guide) | Structured learning path |
| CP Handbook | [PDF](https://usaco.guide/CPH.pdf) | Offline reference |
| CSES | [cses.fi](https://cses.fi/problemset) | Topic-based practice |
| Codeforces | [codeforces.com](https://codeforces.com) | Contests + problem archive |
| AtCoder | [atcoder.jp](https://atcoder.jp) | High-quality problems |
| VisuAlgo | [visualgo.net](https://visualgo.net) | Algorithm visualization |

### Arabic / Palestinian Community

| Resource | Link |
|---|---|
| CodeAcademy PPU (YouTube) | [youtube.com/@CodeAcademy-ppu](https://www.youtube.com/@CodeAcademy-ppu/videos) |
| Mahmoud Ayman Tutorials | [YouTube Playlist](https://www.youtube.com/playlist?list=PLIOhtFzqhbbGroes7my01e8x6GtP71Ah4) |
| Rokba Sheets (Coach Hazem) | [vjudge.net/group/rokba](https://vjudge.net/group/rokba) |
| PCPC Training | [vjudge.net/group/pcpc_training](https://vjudge.net/group/pcpc_training) |
| Mahmoud Ayman CF Group | [CF Group](https://codeforces.com/group/9QrbarK7qH/contests) |
| PPU Graph Sheets | [vjudge.net/group/ppu-lvl3](https://vjudge.net/group/ppu-lvl3) |
| GSG Level 3 | [CF Group](https://codeforces.com/group/0Bl9bdDUwH/contests) |
| ACPC Contests | [CF Group](https://codeforces.com/group/Rilx5irOux/contests) |
| CP Training Tracker | [cp-training-tracker.vercel.app](https://cp-training-tracker.vercel.app/training) |
| Full CP Roadmap | [Notion Roadmap](https://www.notion.so/Roadmap-29cf4abdd6528065a1f4fb69db1ce9ac) |

---

## 💼 For Recruiters

This repository demonstrates:

- **C++17 proficiency** — STL, templates, modern syntax
- **Algorithm knowledge** — graphs, DP, data structures, number theory, strings
- **Complexity analysis** — every implementation is O-analyzed
- **Real problem solving** — solutions are tested on actual judge problems
- **Clean documentation** — readable code with pitfall notes

Contact: [jobaobada8@gmail.com](mailto:jobaobada8@gmail.com) | [LinkedIn](https://www.linkedin.com/in/obada-joba)

---

## 🙏 Acknowledgments

Thanks to everyone who made this journey possible:

- **Coach Hazem** — Rokba topic sheets
- **Coach Mohamed Shareef** — Level 2 training group
- **Coach Abdelaziz** — PCPC training
- **Coach Basel Ja'bari** — Advanced graph sheets at PPU
- **Mahmoud Ayman** — Arabic video tutorials
- **PPU CodeAcademy Club** — Platform and community
- **Gaza Sky Geeks** — Level 3 training

---

## 📜 License

[MIT License](LICENSE) — Free to use, learn from, and adapt.  
Please understand before you copy. Don't submit others' work as your own.

---

<div align="center">

**Made with ❤️ and countless WA verdicts**

*Don't forget us in your prayers 🤲🌿*

[![Star this repo](https://img.shields.io/github/stars/Obada111/competitive-programming?style=social)](https://github.com/Obada111/competitive-programming)

</div>
