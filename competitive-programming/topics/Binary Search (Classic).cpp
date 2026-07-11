#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, x;
    cin >> n >> x;

    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    sort(a.begin(), a.end());

    int l = 0, r = n - 1;
    bool found = false;

    while (l <= r)
    {
        int mid = (l + r) / 2;

        if (a[mid] == x)
        {
            found = true;
            break;
        }
        else if (a[mid] < x)
            l = mid + 1;
        else
            r = mid - 1;
    }

    if (found)
        cout << "FOUND\n";
    else
        cout << "NOT FOUND\n";

    return 0;
}
