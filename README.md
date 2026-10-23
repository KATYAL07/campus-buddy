# Campus Buddy

Campus Buddy is a student-built hub for study resources, campus events, questions, useful contacts, and one shared text chat. It is designed for GDG On Campus at Bennett University and runs in demo mode without secrets.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

The app loads fictional seed data when Supabase variables are missing. Use `/login` to choose a demo student. Never add a real secret to this repository.

## Project map

- `app/`: pages and API route handlers
- `components/`: reusable interface pieces
- `lib/`: data access and validation helpers
- `data/`: editable JSON contacts and demo seed data
- `supabase/`: schema and seed SQL
- `docs/`: organizer and workshop guidance
- `.github/`: CI, templates, and starter issue data

## Beginner glossary

- **Repo**: the project folder stored on GitHub.
- **Fork**: your personal copy of a repo.
- **Branch**: a separate line of work.
- **PR**: a pull request asking to merge your branch.
- **API**: a route that lets the browser talk to the app.
- **Env var**: a configuration value kept outside the source code.

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.
