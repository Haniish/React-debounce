import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const fetchItems = query => {
    fetch(`/api/search?q=${query}`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  };

  const debouncedFetchItems = useCallback(
    debounce(fetchItems, 300),
    []
  );

  useEffect(() => {
    debouncedFetchItems(query);
  }, [query, debouncedFetchItems]);

  return (
    <div className="App">
      <header className="App-header">
        Item Search
      </header>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
