#include <bits/stdc++.h>
using namespace std;
#define int long long

int n, m;
vector<int> head, sz;

int find(int Node)
{
    if (head[Node] == -1)
        return Node;
    return head[Node] = find(head[Node]);
}

void Union(int s1, int s2)
{
    if (sz[s1] > sz[s2])
        swap(s1, s2);
    sz[s2] += sz[s1];
    sz[s1] = 0;
    head[s1] = s2;
}

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n >> m;

    head.assign(n + 1, -1);
    sz.assign(n + 1, 1);

    while (m--)
    {
        int t;
        cin >> t;

        if (t == 1)
        {
            int u, v;
            cin >> u >> v;
            int s1 = find(u);
            int s2 = find(v);
            if (s1 != s2)
                Union(s1, s2);
        }
        else
        {
            int u, v;
            cin >> u >> v;
            if (find(u) == find(v))
                cout << "YES" << endl;
            else
                cout << "NO" << endl;
        }
    }

    return 0;
}
