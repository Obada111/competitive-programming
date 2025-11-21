#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    vector<int> a(n), b(m);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int j = 0; j < m; j++)
        cin >> b[j];

    vector<int> dp(m, 0);
    int ans = 0;

    for (int i = 0; i < n; i++)
    {
        int best = 0;
        for (int j = 0; j < m; j++)
        {
            if (a[i] == b[j])
            {
                dp[j] = best + 1;
                ans = max(ans, dp[j]);
            }
            else if (b[j] < a[i])
            {
                best = max(best, dp[j]);
            }
        }
    }

    cout << ans << endl;

    return 0;
}
