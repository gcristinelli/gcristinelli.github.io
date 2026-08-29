# Giacomo Cristinelli

Personal academic website built with Jekyll and deployed through GitHub Pages.

## Run locally

Install Ruby, Bundler, and the project gems once:

```bash
bundle install
```

Then start the development server:

```bash
bundle exec jekyll serve --livereload --host localhost
```

Open <http://localhost:4000>. Jekyll rebuilds the site when content changes. Restart the server after changing `_config.yml`.

## Docker alternative

With Docker Desktop running:

```bash
docker compose up --build
```

Open <http://localhost:4000> and stop the server with `Ctrl-C`.

## Site content

- `_pages/`: standalone pages
- `_publications/`, `_talks/`, and `_teaching/`: academic activities
- `_portfolio/`: notes
- `files/` and `images/`: downloadable documents and images
