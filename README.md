# Portfolio

Static portfolio published at [nebinbiju.com](https://nebinbiju.com).
No framework, package manager, dependencies, or build step is required.

## Set up on another machine

Install Git and Python 3, then:

```sh
git clone https://github.com/nebinbiju1/nebinbiju1.github.io.git
cd nebinbiju1.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000/>. On Windows, use
`py -3 -m http.server 8000 --bind 127.0.0.1` if `python3` is unavailable.
If port 8000 is in use, choose another port in both the command and URL.
Stop the server with Ctrl+C. Changes appear after refreshing the browser.

## Editing workflow

Start from an up-to-date checkout and create a branch:

```sh
git switch main
git pull --ff-only origin main
git switch -c update-portfolio
```

- Read [CLAUDE.md](CLAUDE.md) for the architecture, routes, content editing rules,
  and asset conventions.
- Read [STYLE_GUIDE.md](STYLE_GUIDE.md) before changing layout or styling.
- Projects and blogs have separate listing and detail content; update both.
- Preserve existing project route mappings. Inserting a project card also
  requires keeping the positional cover rules in [styles.css](styles.css) aligned.
- Preview the affected pages at desktop and mobile widths. Check navigation,
  image loading, and password/NDA modals when relevant.
- Run `git diff --check` before committing. There is no automated test suite.

Commit and push your branch, then open a pull request targeting `main`:

```sh
git add <changed-files>
git commit -m "Describe the update"
git push -u origin update-portfolio
```

Pushing requires a GitHub account with write access and working Git
authentication. GitHub CLI users can run `gh auth login` and `gh auth setup-git`.
Cloning this public repository does not require write access.

## Deployment

`main` is production. GitHub Pages builds and deploys it automatically using
GitHub's managed `pages-build-deployment` workflow. There is no local build or
staging environment, and no custom deployment workflow is needed in this repo.

After merging, check [Actions](https://github.com/nebinbiju1/nebinbiju1.github.io/actions)
for a successful deployment, then verify the affected page at
[nebinbiju.com](https://nebinbiju.com). [CNAME](CNAME) preserves the custom domain.
The Pages configuration and domain DNS are hosted settings, not local setup
files; a new development machine does not need to recreate them.

## Assets and source recordings

The published iPhone Duo images, SVGs, and looping GIFs are committed under
[images/](images/); a fresh clone contains everything needed to display that
case study. Other large case-study slides and recordings use the existing
[GitHub Releases](https://github.com/nebinbiju1/nebinbiju1.github.io/releases)
assets and require an internet connection.

Original editing files and source recordings from the author's machine are not
backed up here. They are not required to preview or deploy the site. To regenerate
a GIF, obtain its original recording separately and install FFmpeg; Git and
Python alone are sufficient for normal site editing. Do not add machine-specific
absolute paths to site content.

Password gates are client-side only, not access control. Passwords and project
content remain discoverable in the public source.

## Shared assistant instructions

[AGENTS.md](AGENTS.md) and
[.github/copilot-instructions.md](.github/copilot-instructions.md) direct coding
assistants to the version-controlled project guidance. No machine-specific
plugins, session history, credentials, or editor setup are needed.
