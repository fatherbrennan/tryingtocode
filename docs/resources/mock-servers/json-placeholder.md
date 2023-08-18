# JSONPlaceholder

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) is a simple fake REST API for testing and prototyping.

## Base URL

```shell
https://jsonplaceholder.typicode.com/
```

## Example

```typescript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
