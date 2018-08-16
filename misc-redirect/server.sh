#!/bin/bash
set -euo pipefail

if [ -z "${REDIRECT_URL-}" ]; then
  set_response_code "500"
  echo "The \$REDIRECT_URL environment variable must be set!"
  exit 2
fi

set_response_code "${STATUS-301}"
set_response_header "Location" "${REDIRECT_URL%%/}$REQUEST_URI"
