#include <bits/stdc++.h>
using namespace std;

const int inf = 1000000;
int main()
{
    int n, q;
    cin >> n >> q;

    vector<int> freq(inf + 1, 0);

    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        if (0 <= x && x <= inf)
            freq[x]++;
    }

    while (q--)
    {
        int x;
        cin >> x;
        if (0 <= x && x <= inf)
            cout << freq[x] << endl;
        else
            cout << 0 << endl;
    }

    return 0;
}
