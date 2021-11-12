# 2. Kubernets

Create Pod 

Criação do projecto Infranstrutra infra

k8s\posts.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: posts
spec: 
  containers:
    - name: posts
      image: gmahota/posts:0.0.0.1
```

Instalação

```bash
kubectl apply -f posts.yaml
```

Lista de Pod's

```bash
kubectl get pods
```

**Comands K8s Word**

```bash
kubectl get pods
```

[Commands](2%20Kubernets%208cdc66bf56ff4c549ad4aa42fe4804b3/Commands%20637ecdaf624e4e5dbe4d6d72cbc167c1.md)

[Deployment](2%20Kubernets%208cdc66bf56ff4c549ad4aa42fe4804b3/Deployment%20a4f354c5d0034a72a4b4220b2cff4619.md)

[Services](2%20Kubernets%208cdc66bf56ff4c549ad4aa42fe4804b3/Services%206b504dff3f964466a57602421f605a07.md)

[Cluster IP - Services](2%20Kubernets%208cdc66bf56ff4c549ad4aa42fe4804b3/Cluster%20IP%20-%20Services%20ca3a50eeb0a741e8ae8b734f2a51737b.md)