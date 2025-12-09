Placeholders & next steps:

- Replace PROJECT/PROJECT_ID placeholders in Docker images, k8s manifests and target-dev.yaml.
- Create Artifact Registry repo: 
  gcloud artifacts repositories create app --repository-format=docker --location=europe-west1
- Grant Cloud Build service account permissions:
  roles/artifactregistry.writer, roles/container.admin, roles/clouddeploy.operator
- Configure Cloud Build trigger to point to this repository and use cloudbuild.yaml
- Upload API Gateway config and create an API & gateway in GCP
- Ensure Nx workspace and Angular/Node apps exist under apps/
