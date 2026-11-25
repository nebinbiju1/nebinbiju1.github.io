# Repository instructions

Read [CLAUDE.md](CLAUDE.md) for project architecture and editing conventions.
Read [STYLE_GUIDE.md](STYLE_GUIDE.md) before changing layout or styling.
Use [README.md](README.md) for portable setup, validation, and deployment.

Keep changes focused. This is a static HTML/CSS/JS site: do not introduce a build
system or package dependencies for ordinary content edits. Update listing and
detail content together, preserve project route mappings, and verify affected
pages locally. Do not commit credentials or machine-specific file paths.

Do not push to `main` unless the user requests publication; it deploys directly
to the public site.
