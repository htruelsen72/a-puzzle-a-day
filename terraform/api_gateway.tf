resource "google_api_gateway_api" "daypuzzle_api" {
  provider = google-beta
  api_id   = "daypuzzle-api"
  display_name = "DayPuzzle API"
}

resource "google_api_gateway_api_config" "api_config" {
  provider = google-beta
  api      = google_api_gateway_api.daypuzzle_api.api_id
  api_config_id = "v1"

  openapi_documents {
    path = "${path.module}/api-gateway/openapi.yaml"
  }
}

resource "google_api_gateway_gateway" "api_gateway" {
  provider = google-beta
  name     = "daypuzzle-gateway"
  api      = google_api_gateway_api.daypuzzle_api.api_id
  location = var.region

  api_config = google_api_gateway_api_config.api_config.id
}
