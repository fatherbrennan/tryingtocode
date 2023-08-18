# sortDescendingByKey()

`Array.prototype.sort()` mutates and returns the reference to the original array, therefore you may want to create a copy of the array.

```typescript
/**
 * Sorts an array of objects in place by descending order.
 * - z-a
 * - Z-A
 * - 9-1
 * @param items Array to sort.
 * @param key Key to sort by.
 * @returns Reference to the sorted passed array.
 */
function sortDescendingByKey<T = any>(items: Array<T>, key: keyof T) {
  return items.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));
}
```

## Syntax

```typescript
sortDescendingByKey(items, 'key');
```

## Examples

### Mutate and sort the original array

```typescript
interface MyObject {
  id: number;
  name: string;
}

const objectArray: MyObject[] = [
  { id: 4, name: 'c' },
  { id: 12, name: 'a' },
  { id: 2, name: '5000' },
  { id: 1, name: 'A' },
  { id: 0, name: 'B' },
  { id: 5000, name: '0' },
  { id: 9, name: '9' },
  { id: 5, name: 'b' },
  { id: 3, name: 'C' },
];

// Sort the original array by key
sortDescendingByKey(objectArray, 'id');
// -> [
//      { id: 5000, name: '0' },
//      { id: 12, name: 'a' },
//      { id: 9, name: '9' },
//      { id: 5, name: 'b' },
//      { id: 4, name: 'c' },
//      { id: 3, name: 'C' },
//      { id: 2, name: '5000' },
//      { id: 1, name: 'A' },
//      { id: 0, name: 'B' }
//    ]
```

### Create a new array based on a shallow copy

```typescript
interface MyObject {
  id: number;
  name: string;
}

const objectArray: MyObject[] = [
  { id: 4, name: 'c' },
  { id: 12, name: 'a' },
  { id: 2, name: '5000' },
  { id: 1, name: 'A' },
  { id: 0, name: 'B' },
  { id: 5000, name: '0' },
  { id: 9, name: '9' },
  { id: 5, name: 'b' },
  { id: 3, name: 'C' },
];

// Sort the original array by key
const sortedObjectArray = sortDescendingByKey([...objectArray], 'key');
// -> [
//      { id: 5000, name: '0' },
//      { id: 12, name: 'a' },
//      { id: 9, name: '9' },
//      { id: 5, name: 'b' },
//      { id: 4, name: 'c' },
//      { id: 3, name: 'C' },
//      { id: 2, name: '5000' },
//      { id: 1, name: 'A' },
//      { id: 0, name: 'B' }
//    ]
```

## Resources

- [MDN: `Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- [MDN: Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

- [MDN: Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
