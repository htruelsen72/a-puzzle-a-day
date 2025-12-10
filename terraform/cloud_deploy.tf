resource "google_cloud_deploy_delivery_pipeline" "pipeline" {
  provider = google
  name     = "daypuzzle-pipeline"
  location = var.region
  description = "Delivery pipeline for DayPuzzle"

  serial_pipeline {
    stages {
      target_id = "dev"
    }
  }
}

resource "google_cloud_deploy_target" "dev_target" {
  provider = google
  name     = "dev"
  location = var.region

  gke {
    cluster = "projects/${var.project_id}/locations/${var.region}/clusters/${google_container_cluster.primary.name}"
  }
}
