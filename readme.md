# Get URL query string parameters

Returns all the query string params in a object or gets a single param by name

### Usage

```
e.g http://my-awsome.website/welcome?name=luke&job=dev

import { allQueryStrings, queryString } from 'get-query-strings'
```

```
const params = allQueryStrings()

const params2 = allQueryStrings('?a=1&b=2')

const name = queryString('name'),

const name2 = queryString('name', '?name=luke'),

```

```
Output : 

console.log(params)

{
  name: luke, 
  job: dev
}

console.log(params2)

{
  a: 1,
  b: 2
}

console.log(name)

luke

console.log(name2)

luke
```

Please note : decodeURIComponent is used on both the KEY and the VALUE
Also will add a ? to the string if missing and passed in manually


## Authors

*   **Luke Robertson** - [DesignAlchemy](https://github.com/designalchemy/)

## License

Public
