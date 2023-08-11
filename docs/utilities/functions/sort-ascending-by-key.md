# sortAscendingByKey()

`Array.prototype.sort()` mutates and returns the reference to the original array, therefore you may want to create a copy of the array.

```typescript
/**
 * Sorts an array of objects in place by ascending order.
 * - 1-9
 * - A-Z
 * - a-z
 * @param items Array to sort.
 * @param key Key to sort by.
 * @returns Reference to the sorted passed array.
 */
function sortAscendingByKey<T = any>(items: Array<T>, key: keyof T) {
  return items.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}
```

## Syntax

```typescript
sortAscendingByKey(items, 'key');
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
sortAscendingByKey(objectArray, 'id');
// -> [
//      { id: 0, name: 'B' },
//      { id: 1, name: 'A' },
//      { id: 2, name: '5000' },
//      { id: 3, name: 'C' },
//      { id: 4, name: 'c' },
//      { id: 5, name: 'b' },
//      { id: 9, name: '9' },
//      { id: 12, name: 'a' },
//      { id: 5000, name: '0' }
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
const sortedObjectArray = sortAscendingByKey([...objectArray], 'id');
// -> [
//      { id: 0, name: 'B' },
//      { id: 1, name: 'A' },
//      { id: 2, name: '5000' },
//      { id: 3, name: 'C' },
//      { id: 4, name: 'c' },
//      { id: 5, name: 'b' },
//      { id: 9, name: '9' },
//      { id: 12, name: 'a' },
//      { id: 5000, name: '0' }
//    ]
```
