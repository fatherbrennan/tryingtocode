# DummyJSON

[DummyJSON](https://dummyjson.com/) is a free online REST API that you can use whenever you need some placeholder data for your front-end website or single-page application without running any server-side code. It's awesome for teaching purposes, sample codes, testing, prototyping.

## Base URL

```shell
https://dummyjson.com/
```

## Example

```typescript
fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
