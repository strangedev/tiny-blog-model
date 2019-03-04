# tiny-blog-model

Data model for tiny-blog.

[![codecov](https://codecov.io/gh/strangedev/tiny-blog-model/branch/master/graph/badge.svg)](https://codecov.io/gh/strangedev/tiny-blog-model)

Models follow the tiny-blog-api spec: https://github.com/strangedev/tiny-blog-api/tree/master/spec

### Related repos

 - tiny-blog: https://github.com/strangedev/tiny-blog 
 - tiny-blog-api: https://github.com/strangedev/tiny-blog-api
 - tiny-blog-backend: https://github.com/strangedev/tiny-blog-backend
 - tiny-blog-ui: https://github.com/strangedev/tiny-blog-ui
 - tiny-blog-db: https://github.com/strangedev/tiny-blog-db

## Usage

```javascript
import {BlogEntry} from "tiny-blog-model";
let blogEntry = BlogEntry.unMarshal(JSON.parse(...));
```

## Development

```bash
yarn install

# transpile JS to build/
yarn run build
```