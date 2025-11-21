<snippet>
	<content><![CDATA[
/*═════════════════════════════════════════════════════════════
 *               obadaj - Optimized Code by Obada            *
 *═════════════════════════════════════════════════════════════*/
#include <bits/stdc++.h>
#include <ranges>
using namespace std;
#define int long long 
#define double long double
#define MOD 1000000007
#define endl '\n'
#define readv(v) for(auto &x : v) cin >> x;
#define vi(name, size) vector<int> name(size);
#define yes cout<<"YES"<<endl;
#define no cout<<"NO"<<endl;
#define Yes cout << "Yes\n"
#define No cout << "No\n"
#pragma GCC target ("avx2")
#pragma GCC optimization ("O3")
#pragma GCC optimization ("unroll-loops")
#define PI 3.14159265359
#define all(v) v.begin(), v.end()
#define rall(n) n.rbegin(), n.rend()
#define pii pair<int, int>
#define F first
#define S second
#define ll int64_t 

vector<int> factorial;
void precalcFact(int n) {
    factorial.assign(n + 1, 1ll);
    for (int i = 2; i <= n; ++i)
        factorial[i] = factorial[i - 1] * i % MOD; 
}

int gcdd(int a, int b) {
    return b ? gcdd(b, a % b) : a;
}
int lcmm(int a, int b) { 
    return a / gcdd(a, b) * b; 
}
int count_ones(int x) {
    return __builtin_popcount(x); 
}

int count_zeros(int x) {
    return 32 - __builtin_popcount(x); 
}


ll powmod(ll x, ll y) {
    ll res = 1;
    x = x % MOD;
    while (y > 0) {
        if (y & 1)
            res = res * x % MOD;
        x = x * x % MOD;
        y >>= 1;
    }
    return res;
}
int power(int a, int b) 
{ 
    int result = 1;
    while (b > 0) { 
    if (b % 2 == 1) result *= a; 
    a *= a; 
    b /= 2;
 }
    return result;
 } 

int modPower(int a, int b) {
    int result = 1;
    a %= MOD;
    while (b > 0) { 
    if (b % 2 == 1) result = (result * a) % MOD;
    a = (a * a) % MOD;
    b /= 2;
 }
    return result;
 } 

ll mod_add(ll a, ll b) { return ((a % MOD) + (b % MOD)) % MOD; }
ll mod_sub(ll a, ll b) { return ((((a % MOD) - (b % MOD)) % MOD) + MOD) % MOD; }
ll mod_mul(ll a, ll b) { return ((a % MOD) * (b % MOD)) % MOD; }
ll mod_div(ll a, ll b) {
    int g = gcdd(a, b);
    return a / g * powmod(b / g, MOD - 2) % MOD;
}

int getIthBit(int n ,int i){
    int mask = 1<<i ;
    return (n&mask) > 0 ? 1 : 0 ;
}
void setIthBit(int &n , int i){
    int mask = 1 << i ;
    n =  (n|mask) ;
}
void clearIthbit(int &n , int i){
    int mask = ~(1 << i) ;
    n = n&mask ; 
}
void updateIthbit(int &n , int i , int v){
    clearIthbit(n , i) ;
    int mask = v<< i ;
    n = n|mask ; 
}
void clearlastIbit(int &n , int i){
    int mask = (-1<<i);  
    n = n&mask ;
}
void clearBitsRang(int &n , int i , int j ){
    int a = (~0) << (j+1) ;
    int b =( 1 << i ) - 1;
    int mask = a|b ;
    n = n&mask ;
}
vector<bool> isPrime;
vector<int> primes;
void seive(int n) {
    isPrime.assign(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i <= n; ++i) {
        if (isPrime[i]) {
            primes.push_back(i);
            for (int j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }
}

void primeFactorization(int n, vector<pair<int, int>>& f) {
    f.clear();
    for (int p : primes) {
        if (p * 1LL * p > n)
            break;
        if (n % p == 0) {
            int cnt = 0;
            while (n % p == 0)
                cnt++, n /= p;
            f.push_back({p, cnt});
        }
    }
    if (n > 1)
        f.push_back({n, 1});
}

int countDivisors(int n) {
    vector<pair<int, int>> factors;
    primeFactorization(n, factors);
    int res = 1;
    for (auto& p : factors)
        res *= (p.second + 1);
    return res;
}

typedef vector<vector<int>> matrix;
matrix operator*(const matrix& a, const matrix& b) {
    int n = a.size(), m = b[0].size(), p = b.size();
    matrix res(n, vector<int>(m, 0));
    for (int i = 0; i < n; ++i)
        for (int k = 0; k < p; ++k)
            if (a[i][k])
                for (int j = 0; j < m; ++j)
                    res[i][j] = (res[i][j] + (a[i][k] * 1LL * b[k][j]) % MOD) % MOD;
    return res;
}

matrix matpow(matrix base, int n) {
    matrix ans = {{1, 0}, {0, 1}};
    while (n) {
        if (n & 1)
            ans = ans * base;
        base = base * base;
        n >>= 1;
    }
    return ans;
}

vector<vector<int>> prefix_2d(const vector<vector<int>>& matrix) {
    int m = matrix.size(), n = matrix[0].size();
    vector<vector<int>> pre(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i)
        for (int j = 1; j <= n; ++j)
            pre[i][j] = matrix[i - 1][j - 1] + pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1];
    return pre;
}

int range_sum_2d(const vector<vector<int>>& pre, int x1, int y1, int x2, int y2) {
    return pre[x2 + 1][y2 + 1] - pre[x1][y2 + 1] - pre[x2 + 1][y1] + pre[x1][y1];
}

vector<int> suffix_sum(const vector<int>& arr) {
    int n = arr.size();
    vector<int> suf(n + 1, 0);
    for (int i = n - 1; i >= 0; --i) suf[i] = suf[i + 1] + arr[i];
    return suf;
}

vector<int> prefix_sum(const vector<int>& arr) {
    int n = arr.size();
    vector<int> pre(n + 1, 0);
    for (int i = 1; i <= n; ++i) pre[i] = pre[i - 1] + arr[i - 1];
    return pre;
}

int fib(int n) {
    if (n <= 1) return n;
    matrix base = {{1, 1}, {1, 0}};
    return matpow(base, n - 1)[0][0];
}
int convertbinary(int n ){
    int ans = 0 ;
    int p = 1 ;
    while(n>0){
        int last = (n&1) ;
        ans+=p*last ;
        p = p*10 ;
        n = n >> 1 ;
    }
    return ans ;
}

int sumOfAllFactors(int n) {
    vector<pair<int, int>> factors;
    primeFactorization(n, factors);
    int res = 1;
    for (auto& p : factors) {
        int a = p.second, val = p.first;
        ll sum = 0;
        for (int i = 0; i <= a; ++i)
           sum += (int)pow(val, i);
        res *= sum;
    }
    return res;
}

int bs(const vector<int>& a, int x) {
    int l = 0, r = a.size() - 1;
    while (l <= r) {
        int m = (l + r) >> 1;
        if (a[m] == x) return m;
        if (a[m] > x) r = m - 1;
        else l = m + 1;
    }
    return -1;
}

bool is_palindrome(const string &s) {
    auto s1 = s;
    reverse(all(s1));
    return s1 == s;
}
const char dir[] = {'D', 'R', 'U', 'L'};
const int dx[] = {+1, 0, -1, 0, +1, -1, -1, +1};
const int dy[] = {0, +1, 0, -1, +1, +1, -1, -1};
const int Ndx[] = {+2, +1, -1, -2, -2, -1, +1, +2};
const int Ndy[] = {+1, +2, +2, +1, -1, -2, -2, -1};

void solve() {



}

int32_t main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    //freopen("input.txt", "r", stdin);
   //freopen("output.txt", "w", stdout);

    seive(2e5); 
    // int n;
    // cin >> n;
    // cout << (isPrime[n] ? "prime" : "not") << endl;
    int tests = 1;
    //cin >> tests ; 
    while (tests--) solve();
    cerr << "Execution completed: T_Think \n" << endl;
    return 0;
}
]]></content>
	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	<tabTrigger>contets</tabTrigger>
	<!-- Optional: Set a scope to limit where the snippet will trigger -->
	<!-- <scope>source.python</scope> -->
</snippet>
