
#include <bits/stdc++.h>
using namespace std;
const long long N = 1e5 + 5, MOD = 1e9 + 7, inf = LLONG_MAX;
#define endl '\n'
#define int long long
#define double long double
#define all(x) begin(x), end(x)
#define rall(x) rbegin(x), rend(x)

void solve()
{
    int n, m;
    cin >> n >> m;
    vector<array<int, 3>> a(m);
    for (int i = 0; i < m; i++)
    {
        int w, u, v;
        cin >> w >> u >> v;
        a[i] = {w, u, v};
    }
    vector<int> head(n + 1, -1), sz(n + 1, 1);
    function<int(int)> find = [&](int node)
    {
        if (head[node] == -1)
            return node;
        return head[node] = find(head[node]);
    };
    function<void(int, int)> Union = [&](int s1, int s2)
    {
        if (sz[s1] > sz[s2])
            swap(s1, s2);
        sz[s2] += sz[s1];
        sz[s1] = 0;
        head[s1] = s2;
    };
    sort(all(a));
    int ans = 0;
    for (int i = 0; i < m; i++)
    {
        auto [w, u, v] = a[i];
        int one = find(u);
        int tow = find(v);
        if (one != tow)
        {
            ans += w;
            Union(one, tow);
        }
    }
    cout << ans << endl;
}

int32_t main()
{

    ios_base::sync_with_stdio(0);
    cin.tie(0), cout.tie(0);
    int t = 1; // cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}