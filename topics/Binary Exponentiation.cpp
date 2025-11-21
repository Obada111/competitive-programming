#include <bits/stdc++.h>
using namespace std;
#define int long long

const int MOD = 1000000007;

int powmod(int x, int y)
{
    int res = 1;
    x %= MOD;
    while (y > 0)
    {
        if (y & 1)
            res = (res * x) % MOD;
        x = (x * x) % MOD;
        y >>= 1;
    }
    return res;
}

int power(int a, int b)
{
    int result = 1;
    while (b > 0)
    {
        if (b & 1)
            result *= a;
        a *= a;
        b >>= 1;
    }
    return result;
}

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b;
    cin >> a >> b;

    cout << powmod(a, b) << endl;
    cout << power(a, b) << endl;

    return 0;
}
