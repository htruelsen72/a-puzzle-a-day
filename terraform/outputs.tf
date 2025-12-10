output "gke_cluster_name" {
  value = google_container_cluster.primary.name
}

output "artifact_repo" {
  value = google_artifact_registry_repository.docker_repo.id
}

output "api_gateway_name" {
  value = google_api_gateway_gateway.api_gateway.name
}
