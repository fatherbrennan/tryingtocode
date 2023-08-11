# sortAscending()

`Array.prototype.sort()` mutates and returns the reference to the original array, therefore you may want to create a copy of the array.

```typescript
/**
 * Sorts an array in place by ascending order.
 * - 1-9
 * - A-Z
 * - a-z
 * @param items Array to sort.
 * @param key Key to sort by.
 * @returns Reference to the sorted passed array.
 */
function sortAscending<T = any>(items: Array<T>) {
  return items.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
}
```

## Syntax

```typescript
sortAscending(items);
```

## Examples

### Mutate and sort the original array

```typescript
const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];
const numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];

// Sort the original arrays

sortAscending(stringArray);
// -> ['0', '5000', '9', 'A', 'B', 'C', 'a', 'b', 'c']

sortAscending(numberArray);
// -> [0, 1, 2, 3, 4, 5, 9, 12, 5000]
```

### Create a new array based on a shallow copy

```typescript
const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];
const numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];

// Create a new sorted arrays

const sortedStringArray = sortAscending([...stringArray]);
// -> ['0', '5000', '9', 'A', 'B', 'C', 'a', 'b', 'c']

const sortedNumberArray = sortAscending([...numberArray]);
// -> [0, 1, 2, 3, 4, 5, 9, 12, 5000]
```
