#include <stdio.h>
#include <arpa/inet.h>

int main() {
    int numeri[5] = {1000,12890,54163,34012,62984};
    for (int i = 0; i < 5; i++)
    {
        printf("host: %d, net: %x\n", numeri[i], htons(numeri[i]));
    }
    return 0;
}

