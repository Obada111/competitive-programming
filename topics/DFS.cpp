#include <bits/stdc++.h>
using namespace std;
#define int long long

vector<vector<int>> g;
vector<int> vis;

void dfs(int u)
{
    vis[u] = 1;
    cout << u << " ";
    for (int v : g[u])
    {
        if (!vis[v])
            dfs(v);
    }
}

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    g.assign(n + 1, {});
    vis.assign(n + 1, 0);

    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        g[u].push_back(v);
        g[v].push_back(u);
    }

    for (int i = 1; i <= n; i++)
        sort(g[i].begin(), g[i].end());

    dfs(1);
    cout << endl;

    return 0;
}
