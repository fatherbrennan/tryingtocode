# Fetch Abort (Client)

The `AbortController` is a JavaScript tool that pairs with the Fetch API to let you stop ongoing network requests. It's useful when users change their minds or when quick updates lead to unnecessary requests. By cancelling a request using the `AbortController`, you save client processing and time.

Aborting fetch requests are for client-side benefit and continues to be managed on the server side. However, will not be handled and processed on the client side, and will throw `AbortError`.

## Code

### Overview

A React component with a single input element which sends a fetch request on every input event. All requests that are in progress will be aborted in favour of the latest request.

> **_App.tsx_**

```typescript
import { useState } from 'react';

import type { FormEvent } from 'react';

/**
 * Track request info.
 */
interface RequestInfoState {
  /**
   * Number of requests sent.
   */
  count: number;

  /**
   * Number of requests aborted.
   */
  countAborted: number;

  /**
   * Number of requests handled.
   */
  countResponses: number;

  /**
   * Current abort controller connected to latest fetch request.
   */
  current: null | AbortController;

  /**
   * Latest response data from handled request.
   */
  response: any;
}

function App() {
  const [requestInfo, setRequestInfo] = useState<RequestInfoState>({
    count: 0,
    countAborted: 0,
    countResponses: 0,
    current: null,
    response: null,
  });

  /**
   * Send a fetch request on each user input.
   * @param event Input event from user.
   */
  const onInput = (event: FormEvent<HTMLInputElement>): void => {
    // Abort any previous existing requests
    if (requestInfo.current) {
      requestInfo.current.abort();
    }

    // Create new abort controller
    const controller = new AbortController();

    setRequestInfo((prevState) => ({
      ...prevState,
      // Update the latest request
      current: controller,
      // Increment count by 1
      count: prevState.count + 1,
    }));

    // Send latest request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      signal: controller.signal,
      body: JSON.stringify({ body: event.currentTarget.value }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // Update response info
        setRequestInfo((prevState) => ({
          ...prevState,
          response,
          countResponses: prevState.countResponses + 1,
        }));
      })
      .catch((error) => {
        // Expected error from aborting
        if (error.name === 'AbortError') {
          setRequestInfo((prevState) => ({
            ...prevState,
            countAborted: prevState.countAborted + 1,
          }));
          return;
        }

        // Log any unexpected fetch errors
        console.log(error);
      });
  };

  return (
    <>
      <pre>{JSON.stringify(requestInfo, null, 2)}</pre>
      <div className='input-div'>
        <label htmlFor='text'>Input Text</label>
        <input type='text' name='text' id='text' onInput={onInput} />
      </div>
    </>
  );
}

export default App;
```
