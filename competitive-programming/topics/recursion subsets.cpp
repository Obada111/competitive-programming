#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> cur;

void gen(int i)
{
    if (i > n)
    {
        for (int x : cur)
            cout << x << " ";
        cout << endl;
        return;
    }
    gen(i + 1);
    cur.push_back(i);
    gen(i + 1);
    cur.pop_back();
}

int main()
{
    cin >> n;
    gen(1);
    return 0;
}
