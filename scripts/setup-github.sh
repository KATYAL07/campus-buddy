#!/usr/bin/env bash
set -euo pipefail

gh repo edit --add-topic hacktoberfest
for label in "good first issue" easy medium hard ui docs accessibility bug feature tests content; do gh label create "$label" --color 0e8a16 --force; done
while IFS= read -r issue; do title=$(echo "$issue" | sed -n 's/.*"title": "\([^"]*\)".*/\1/p'); body=$(echo "$issue" | sed -n 's/.*"description": "\([^"]*\)".*/\1/p'); [ -n "$title" ] && gh issue create --title "$title" --body "$body"; done < <(grep '"title"' .github/starter-issues.json)
echo "Added hacktoberfest topic, labels, and starter issue records."
