## This is an example of using Multi-thread vs Single-thread for Nodejs server.

#### Using single thread:
In case of hitting `/blocking` end point, this will be blocking the server from responding to any 
other request till it completes the complex calculating.

#### Using multi thread:
Server will be able to respond to any requests and use up to 4 threads ( which will help to complete the 
calculations faster).

### For SingleThread server run command:
```node SingleThread/index.js```

### For MultiThread server run command:
```node MultiThread/index-fourWorkers.js```

### Comparison:
- Showing the time consumed while using single thread vs 4 threads:

![Screenshot from 2025-01-18 08-56-52](https://github.com/user-attachments/assets/8865bdb3-1409-4631-937a-dcab2312f7bf)

- Showing how many thread are being used (1 vs 4 threads).

![Screenshot from 2025-01-18 08-55-59](https://github.com/user-attachments/assets/ae234030-2db0-4364-9916-c7d9883b3671)
