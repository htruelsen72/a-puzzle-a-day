variable "project_id" {
  description = "GCP project id"
  type        = string
}

variable "region" {
  description = "GCP region (e.g. europe-west1)"
  type        = string
  default     = "europe-west1"
}

variable "zone" {
  description = "GCP zone (e.g. europe-west1-b)"
  type        = string
  default     = "europe-west1-b"
}

variable "cluster_name" {
  description = "GKE cluster name"
  type        = string
  default     = "daypuzzle-gke"
}
