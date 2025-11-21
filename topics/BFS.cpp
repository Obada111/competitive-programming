#include <bits/stdc++.h>
using namespace std;
#define int long long

vector<vector<int>> g;

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    g.assign(n + 1, {});
    vector<int> dist(n + 1, -1);

    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        g[u].push_back(v);
        g[v].push_back(u);
    }

    for (int i = 1; i <= n; i++)
        sort(g[i].begin(), g[i].end());

    queue<int> q;
    dist[1] = 0;
    q.push(1);

    while (!q.empty())
    {
        int u = q.front();
        q.pop();
        cout << u << " ";
        for (int v : g[u])
        {
            if (dist[v] == -1)
            {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }

    cout << endl;
    return 0;
}
