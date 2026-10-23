# Organizer guide

This guide assumes Arnav Katyal is the organizer for the GDG Bennett On Campus event at Bennett University. Campus Buddy is restricted to current Bennett University students. Menu names can change in Supabase, Google Cloud, Vercel, and GitHub. Look for the same purpose if a label has moved.

## 1. Create Supabase project

1. Open supabase.com and create a new project.
2. Save the database password in your password manager.
3. Open SQL Editor, create a query, paste `supabase/schema.sql`, and run it.
4. Create another query, paste `supabase/seed.sql`, and run it.
5. In Project Settings, copy the project URL and anon key for Vercel later.

## 2. Create Google sign-in

1. Open Google Cloud Console and create or select a project.
2. Open APIs and Services, then OAuth consent screen.
3. Choose External, add the app name, organizer email, and required contact details.
4. Add the production domain as an authorized domain.
5. Create OAuth Client ID, choose Web application.
6. Copy the redirect URI shown in Supabase Authentication Provider settings into Google Authorized redirect URIs.
7. Copy the client ID and secret into Supabase Auth, Google provider settings. Do not put them in this repository.

## 3. Configure Supabase URLs

1. In Supabase Authentication URL Configuration, set Site URL to the production Vercel URL.
2. Add the production callback URL if the screen asks for redirect URLs.
3. Save.

## 4. Deploy with Vercel

1. Open vercel.com, click Add New Project, and import the GitHub repository.
2. Keep the detected Next.js settings.
3. Add environment variables for Production only: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAILS`, and `ALLOWED_EMAIL_DOMAIN=bennett.edu.in`.
4. Do not add production secrets to Preview. Preview deployments should remain in demo mode.
5. Deploy, copy the production URL into Supabase and Google settings, then redeploy if needed.

## 5. Configure GitHub

Run `bash scripts/setup-github.sh` from a Git Bash terminal after creating the repo and authenticating with `gh auth login`. It adds the topic, labels, and starter issues.

## 6. Verify branch protection

In GitHub: Settings, Branches, Add branch ruleset or branch protection rule, target `main`, require a pull request, require one approval, require the CI status check, block force pushes and deletion, and leave “Include administrators” off.

## 7. Hacktoberfest checklist

Confirm the repository topic. Verify this year's official rules on the Hacktoberfest site yourself before the event. Make it clear that the GDG Bennett On Campus event is for Bennett University students only. Label accepted PRs `hacktoberfest-accepted`, review promptly, merge promptly when ready, and mark spam submissions from people outside the campus eligibility rule.

## 8. Reviewer roster

Assign one primary reviewer and one backup for UI, docs, and backend changes. Aim to acknowledge a PR within 24 hours and review within 48 hours.

## 9. Pre-event test

Fresh clone: install and run in demo mode. Test demo login, production Google login, post creation, upload limits, chat polling, report submission, and an admin delete. Verify the privacy page and placeholder contacts are clear.

## 10. Reset and key rotation

Run `npm run db:reset` and type `RESET-CAMPUS-BUDDY` only during an approved reset. For a leaked key, revoke or rotate it in the provider dashboard, update Vercel Production variables, redeploy, and review Git history. Never paste the leaked key into an issue.

## 11. Event-day timeline

Before opening: check the production login, database, chat, and moderation account. At opening: explain the issue assignment rule and demo mode. During the event: triage beginner questions, review PRs in batches, and keep the response-time promise. At close: label accepted PRs, thank contributors, and record follow-up issues.

## Assumptions

- Fictional seed data is acceptable until an organizer replaces it.
- Preview environments must not use the production database.
- The organizer will replace the CODEOWNERS placeholder and contact placeholders.
- Official Hacktoberfest rules are checked by the organizer for the event year.
