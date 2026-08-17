#!/usr/bin/env bash

# This image contains the complete, immutable TeX Live 2025 distribution for
# linux/amd64. The digest deliberately pins the image rather than a mutable tag.
readonly TEXLIVE_IMAGE='ghcr.io/xu-cheng/texlive-historic-debian@sha256:b466f39161dc6d37772e773284f094e11205fcdfe33b91ea43ad4a3b7da2bc57'
readonly MAX_ATTEMPTS=3

set -euo pipefail

retry() {
  local description="$1"
  shift

  for attempt in $(seq 1 "$MAX_ATTEMPTS"); do
    if "$@"; then
      return 0
    fi

    if [ "$attempt" -eq "$MAX_ATTEMPTS" ]; then
      echo "$description failed after $MAX_ATTEMPTS attempts" >&2
      return 1
    fi

    local delay=$((attempt * 5))
    echo "$description failed (attempt $attempt/$MAX_ATTEMPTS); retrying in ${delay}s" >&2
    sleep "$delay"
  done
}

retry 'pulling the pinned TeX Live image' docker pull "$TEXLIVE_IMAGE"

for document in christoffer-nilsson-en.tex christoffer-nilsson-sv.tex; do
  retry "compiling $document" docker run --rm --pull never --network none \
    --volume "$PWD:/work" --workdir /work "$TEXLIVE_IMAGE" \
    xelatex -interaction=nonstopmode -halt-on-error -output-directory=dist "$document"
done
