# Get URL query string parameters

Returns all the query string params in a object or gets a single param by name

### Usage

```
e.g http://my-awsome.website/welcome?name=luke&job=dev

import { allQueryStrings, queryString } from 'get-query-strings'
```

```
const params = allQueryStrings()

const name = queryString('name')
```

```
Output : 

console.log(params)

{
  name: luke, 
  job: dev
}

console.log(name)

luke
```

Please note : decodeURIComponent is used on both the KEY and the VALUE


## Authors

*   **Luke Robertson** - [DesignAlchemy](https://github.com/designalchemy/)

## License

Public
