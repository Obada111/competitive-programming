#include <bits/stdc++.h>
using namespace std;
#define int long long

vector<bool> is_prime;

void sieve(int n)
{
    is_prime.assign(n + 1, true);
    if (n >= 0)
        is_prime[0] = false;
    if (n >= 1)
        is_prime[1] = false;

    for (int i = 2; i * i <= n; i++)
    {
        if (is_prime[i])
        {
            for (int j = i * i; j <= n; j += i)
                is_prime[j] = false;
        }
    }
}

void solve()
{
    int n;
    cin >> n;
    sieve(n);
    for (int i = 2; i <= n; i++)
    {
        if (is_prime[i])
            cout << i << " ";
    }
    cout << endl;
}

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    solve();
    return 0;
}
