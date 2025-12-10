# Terraform starter kit for DayPuzzle on GCP

This Terraform project provisions:
- GKE cluster
- Artifact Registry (Docker repo)
- Service accounts and IAM bindings for Cloud Build/Cloud Deploy
- Cloud Deploy Delivery Pipeline + Target (basic)
- API Gateway (API, config, gateway)

HOWTO:
1. Fill in terraform.tfvars with your project_id and region.
2. Run:
   terraform init
   terraform plan
   terraform apply

Note: This is a starter kit. Replace placeholders and review IAM permissions before applying in production.