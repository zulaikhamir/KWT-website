# KWT — Daily Developer Workflow

For anyone working on the KWT technical repo (website: React + TypeScript + Tailwind + Vite + shadcn/ui). Follow this at the start of every work session.

---

## 0. One-time setup (first day only)

```bash
git clone <repo-url>
cd kwt-website
npm install
cp .env.example .env   # fill in any required values, ask a Technical team member if unsure
npm run dev
```

Confirm the site loads locally before writing any code.

---

## 1. Start of session — sync your branch

```bash
git branch                                   # confirm you're on the right feature branch
git status                                   # confirm clean working tree
git fetch origin                             # get latest remote refs
git log HEAD..origin/develop --oneline       # anything new in develop?
```

- **No output** → you're up to date, skip to step 2.
- **Commits listed** → `develop` has moved:

```bash
git merge origin/develop
```

If you have uncommitted work you're not ready to commit, `git stash` before merging and `git stash pop` after.

**Conflicts:** resolve in the file, `git add <file>`, `git commit`. If it's more than you want to untangle right now, `git merge --abort` to back out cleanly and flag it to the Technical team instead of leaving a half-resolved merge.

**Direction rule:** changes flow `develop → your feature branch`, never the reverse. Don't merge an unfinished feature branch into `develop`.

---

## 2. During the session

- One feature branch per task, named `feature/<short-description>` (or `fix/<short-description>` for bug fixes).
- Commit in small, working chunks — not one giant commit at the end. Each commit should leave the app in a runnable state.
- Commit message format: `<type>: <what changed>` — e.g. `fix: correct hero animation on mobile`, `feat: add events RSVP form`.
- Run `npm run lint` before committing if the repo has linting configured.

---

## 3. Before opening a PR

- [ ] `npm run dev` — app runs locally with no console errors.
- [ ] Your feature works as intended.
- [ ] Anything merged in from `develop` still works.
- [ ] Affected pages spot-checked (not just the one you touched).
- [ ] `npm run build` succeeds (catches type errors Vite's dev server can silently tolerate).

A clean merge is not proof the app works — always test after merging, not just after your own changes.

## 4. Push and open the PR

```bash
git push origin <branch-name>
```

Open the PR against `develop`. Note in the description what you changed and how you tested it. Tag a Technical team member for review.

---

## 5. Communication norms (KWT-specific)

- Core team capacity is **weekends only** — don't expect same-day responses to blockers raised on a weekday.
- If something is urgent on a weekday, go through the rotating team POC rather than pinging everyone.
- Non-urgent questions/updates: post in the team channel, don't DM individuals — keeps context visible to the whole Technical team (currently: you, Uzma, Hadiya).

---

## Quick reference

```text
git branch → git status → git fetch origin → git log HEAD..origin/develop --oneline
   → nothing new: work
   → new commits: git merge origin/develop (resolve conflicts or --abort)
Build feature in small commits
Lint
Test locally (dev + build)
Push
Open PR against develop
```