### 1. Create Docker common network
```
$ docker network create my-network
```

### 2. Build and run invoice service
```
$ cd service
$ docker build -t invoice-service . 
$ docker run -d --name invoice-service --network my-network -e APP_NAME=invoice-service invoice-service
```

### 3. Build and run customer service
```
$ cd service
$ docker build -t customer-service .
$ docker run -d --name customer-service --network my-network -e APP_NAME=customer-service customer-service
```

### 4. Build and run api-gateway
```
$ cd api-gateway
$ docker build -t api-gateway .
$ docker run -it --rm --name api-gateway --network my-network -p 80:80 api-gateway
```

### 5. Be sure your /etc/hosts contains these lines:
```
127.0.0.1 acme.com
127.0.0.1 invoices.acme.com
127.0.0.1 customers.acme.com
```

### Ready. Navigate to services 👌

- http://invoices.acme.com
- http://customers.acme.com
