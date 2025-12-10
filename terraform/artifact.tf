resource "google_artifact_registry_repository" "docker_repo" {
  provider      = google
  location      = var.region
  repository_id = "daypuzzle-app"
  description   = "Docker repository for daypuzzle images"
  format        = "DOCKER"
}
