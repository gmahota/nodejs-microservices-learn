# Cluster IP - Services

Dentro do kubernet's não sabemos quais são os ip's que serão entregues aos pod's

![kcluster.PNG](Cluster%20IP%20-%20Services%20ca3a50eeb0a741e8ae8b734f2a51737b/kcluster.png)

Create a cluster service

```yaml
...
---
apiVersion: v1
kind: Service
metadata:
  name: posts-srv
spec:
  selector:
    app: posts
  ports:
    - name: posts
      protocol: TCP
      port: 4005
      targetPort: 4005
```