#include <bits/stdc++.h>
using namespace std;
const long long N = 2e5, M = 1e6 + 5, MOD = 1e9 + 7, SQRT = 500, lg = 20;
#define endl '\n'
#define int long long
#define double long double
#define all(x) begin(x), end(x)
#define rall(x) rbegin(x), rend(x)

int n, q;
int SQ = sqrt(N) + 5;
vector<int> a(N);
vector<vector<int>> b(SQ);
vector<int> blk(SQ);

void process()
{
    for (int i = 0; i < n; i++)
    {
        b[i / SQ].push_back(a[i]);
        blk[i / SQ] += a[i];
    }
}
void update(int idx, int val)
{
    int blk_idx = idx / SQ, idx_in_blk = idx % SQ;
    blk[blk_idx] -= a[idx];
    blk[blk_idx] += val;
    a[idx] = val;
    b[blk_idx][idx_in_blk] = val;
}

int query(int l, int r)
{
    int ans = 0;
    while (l <= r)
    {
        if (l % SQ == 0 && l + SQ <= r)
        {
            ans += blk[l / SQ];
            l += SQ;
        }
        else
        {
            ans += a[l];
            l++;
        }
    }
    return ans;
}

void solve()
{
    cin >> n >> q;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    process();
    while (q--)
    {
        int t;
        cin >> t;
        if (t == 2)
        {
            int l, r;
            cin >> l >> r;
            cout << query(--l, --r) << endl;
        }
        else
        {
            int idx, val;
            cin >> idx >> val;
            update(--idx, val);
        }
    }
}

int32_t main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0), cout.tie(0);

    int t = 1;
    // cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}
