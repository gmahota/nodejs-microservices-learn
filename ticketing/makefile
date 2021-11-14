deploy:
	skaffold dev
envroiments:
	kubectl create secret generic jwt-secret --from-literal=JWT_KEY=my_secret_key
	kubectl get secrets
	kubectl delete secret jwt-secret