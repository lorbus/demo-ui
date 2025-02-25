# Demo FE/UI App for Posts

## Initialize Repo

- `git init`

- `git add .`

- `git remote add github https://github.com/lorbus/demo-ui.git`
- `git remote add gitlab https://gitlab.com/lorbush/demo-ui.git`

- `git commit -m "initial commit"`

- `git push -u github main`
- `git push -u gitlab main`

- Push from Terminal:
  - `git push github --force` or `git push github -f`
  - `git push gitlab --force` or `git push gitlab -f`

-----------------------------------------------------
## TODO

- Add Pipelines
  - GitLab (Doing)
  - GitHub (https://stackoverflow.com/questions/63860001/angular-test-fails-to-run-with-chromeheadlessci-in-github-action/67804270)

- Deploy:
  - GitHub / GitLab Pages ?
  - Cloudflare (https://www.abanda.me/blog/articles/deploy-angular-for-free)
  - Netlify: https://www.netlify.com- https://docs.netlify.com/frameworks/angular

- Read secrets / passwords in a secure way (Vault, GitHub / GitLab Secrets ?)

- Add Health Checks

- FIX UI dependencies - deprecated (Doing)
- Add Tests

- Add different languages

- Add Cache ?

- Add Pagination

- Not saving Post changes (edit)

- Migrate from TSLint to ESLint and fix code (Doing)

------------------------------------------------------

## 1. Installation pre-requisites

- Angular version >= 18.x.x
- Node.js version >= 23 - long-term support (LTS) version
- NPM version >= 5

## 2. Installing

`npm install` OR `npm install --force` OR `npm install --legacy-peer-deps`

## 3. Run the App (using the Angular CLI)

Run FE with the following command:
`npm start`

[Go to App](http://localhost:4200)

### Docker

- `docker build --platform linux/amd64 -t demo-frontend .`

- Access UI App: http://localhost:4200

#### Push Docker Images in DockerHub

    docker login -u lorbush
    docker tag demo-frontend lorbush/demo-frontend
    docker push lorbush/demo-frontend
