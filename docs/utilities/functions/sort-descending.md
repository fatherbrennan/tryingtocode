# sortDescending()

`Array.prototype.sort()` mutates and returns the reference to the original array, therefore you may want to create a copy of the array.

```typescript
/**
 * Sorts an array in place by descending order.
 * - z-a
 * - Z-A
 * - 9-1
 * @param items Array to sort.
 * @param key Key to sort by.
 * @returns Reference to the sorted passed array.
 */
function sortDescending<T = any>(items: Array<T>) {
  return items.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
}
```

## Syntax

```typescript
sortDescending(items);
```

## Examples

### Mutate and sort the original array

```typescript
const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];
const numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];

// Sort the original arrays

sortDescending(stringArray);
// -> ['c', 'b', 'a', 'C', 'B', 'A', '9', '5000', '0']

sortDescending(numberArray);
// -> [5000, 12, 9, 5, 4, 3, 2, 1, 0]
```

### Create a new array based on a shallow copy

```typescript
const stringArray: string[] = ['c', 'a', '5000', 'A', 'B', '0', '9', 'b', 'C'];
const numberArray: number[] = [4, 12, 2, 1, 0, 5000, 9, 5, 3];

// Create a new sorted arrays
const sortedStringArray = sortDescending([...stringArray]);
// -> ['c', 'b', 'a', 'C', 'B', 'A', '9', '5000', '0']

const sortedNumberArray = sortDescending([...numberArray]);
// -> [5000, 12, 9, 5, 4, 3, 2, 1, 0]
```
