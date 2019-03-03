# tiny-blog-model

Data model for tiny-blog.

Models follow the tiny-blog-api spec: https://github.com/strangedev/tiny-blog-api/tree/master/spec

### Related repos

 - tiny-blog: https://github.com/strangedev/tiny-blog 
 - tiny-blog-api: https://github.com/strangedev/tiny-blog-api
 - tiny-blog-backend: https://github.com/strangedev/tiny-blog-backend
 - tiny-blog-ui: https://github.com/strangedev/tiny-blog-ui
 - tiny-blog-db: https://github.com/strangedev/tiny-blog-db

## Usage

```javascript
import {v1alpha} from "tiny-blog-model";
let blogEntry = v1alpha.BlogEntry.unMarshal(JSON.parse(...));
```

## Development

```bash
yarn install

# transpile JS to build/
yarn run build
```