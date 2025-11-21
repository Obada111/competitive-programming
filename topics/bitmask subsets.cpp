#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    long long target;
    cin >> n >> target;

    vector<long long> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    long long ans = 0;
    int total = 1 << n;

    for (int mask = 0; mask < total; mask++)
    {
        long long sum = 0;
        for (int i = 0; i < n; i++)
        {
            if (mask & (1 << i))
                sum += a[i];
        }
        if (sum == target)
            ans++;
    }

    cout << ans << endl;
    return 0;
}
