#pragma GCC optimize("Ofast,unroll-loops,inline,no-stack-protector,fast-math")
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt")
#pragma comment(linker, "/STACK:1000000000")
#include <bits/stdc++.h>
using namespace std;

template<class T> void out(T a) { cout << a << "\n"; }
template<class T> void out(vector<T> &ar) { for(auto &i : ar) cout << i << " "; cout << "\n"; }
#define input(a) for(auto &it : a) cin >> it;

using ll = long long;
using ull = unsigned long long;
using pll = pair<ll, ll>;
using vi = vector<ll>;
using i128 = __int128;

template <typename T> constexpr T INF = 0;
template <> constexpr int INF<int> = 1e9;
template <> constexpr ll INF<ll> = 2e18;
template <> constexpr double INF<double> = 1e18;

#define int long long
#define double long double
#define FOR(i, a, b) for (ll i = a; i < ll(b); ++i)
#define RFOR(i, a, b) for (ll i = a - 1; i >= ll(b); --i)
#define all(x) x.begin(), x.end()
#define sz(x) ll(x.size())
#define mp make_pair
#define fi first
#define se second
#define pb push_back
#define eb emplace_back

int popcount(ll x) { return __builtin_popcountll(x); }
int topbit(ll x) { return x ? 63 - __builtin_clzll(x) : -1; }
int lowbit(ll x) { return x ? __builtin_ctzll(x) : -1; }

template <typename T, typename U>
bool chmax(T &a, const U &b) { return a < b ? (a = b, true) : false; }
template <typename T, typename U>
bool chmin(T &a, const U &b) { return a > b ? (a = b, true) : false; }

template <typename T> vector<int> argsort(const vector<T> &A) {
    vector<int> ids(sz(A));
    iota(all(ids), 0);
    sort(all(ids), [&](int i, int j) { return A[i] < A[j]; });
    return ids;
}

template <typename T> T sum(const vector<T> &A) {
    T res = 0;
    for (auto x : A) res += x;
    return res;
}

template <typename T> vector<T> cumsum(vector<T> &A) {
    int n = sz(A);
    vector<T> B(n + 1, 0);
    FOR(i, 0, n) B[i + 1] = B[i] + A[i];
    return B;
}

template <typename T> T floor_div(T a, T b) {
    return a / b - (a % b && (a ^ b) < 0);
}

template <typename T> T ceil_div(T a, T b) {
    return floor_div(a + b - 1, b);
}

pair<ll, ll> divmod(ll x, ll y) {
    ll q = floor_div(x, y);
    return {q, x - q * y};
}

template <typename T> vector<T> rearrange(const vector<T> &A, const vector<int> &I) {
    vector<T> B(sz(I));
    FOR(i, 0, sz(I)) B[i] = A[I[i]];
    return B;
}

#define MIN(v) *min_element(all(v))
#define MAX(v) *max_element(all(v))
#define LB(c, x) (ll)distance((c).begin(), lower_bound(all(c), (x)))
#define UB(c, x) (ll)distance((c).begin(), upper_bound(all(c), (x)))

void unique_vec(vector<int> &v) {
    sort(all(v));
    v.erase(unique(all(v)), v.end());
}

template <typename F> ll binary_search(F check, ll ok, ll ng) {
    while (abs(ok - ng) > 1) {
        ll x = (ng + ok) / 2;
        (check(x) ? ok : ng) = x;
    }
    return ok;
}

ll gcdll(ll a, ll b) { return std::gcd(a, b); }
ll lcmll(ll a, ll b) { return std::lcm(a, b); }

ll mod_add(ll a, ll b, ll mod) { a %= mod; b %= mod; a += b; if (a >= mod) a -= mod; return a; }
ll mod_sub(ll a, ll b, ll mod) { a %= mod; b %= mod; a -= b; if (a < 0) a += mod; return a; }
ll mod_mul(ll a, ll b, ll mod) { return (ll)((i128)(a % mod) * (b % mod) % mod); }
ll mod_pow(ll a, ll e, ll mod) {
    ll r = 1 % mod; a %= mod;
    while (e) {
        if (e & 1) r = mod_mul(r, a, mod);
        a = mod_mul(a, a, mod);
        e >>= 1;
    }
    return r;
}

void solve() {
    
}

int32_t main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    int T = 1;
    cin >> T;
    while (T--) solve();
    return 0;
}