import React, {useState} from "react";

function Binary() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const valueToSearch = parseInt(searchValue, 10);

    // Binary Search Algorithm
    let low = 0;
    let high = data.length - 1;
    let found = false;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = data[mid];

      if (midValue === valueToSearch) {
        setResult(`${valueToSearch} found at index ${mid}`);
        found = true;
        break;
      } else if (midValue < valueToSearch) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (!found) {
      setResult(`${valueToSearch} not found in the array`);
    }
  };

  return (
    <div>
      <h2>Binary Search Example</h2>
      <input
        type="number"
        placeholder="Enter a number to search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>{result}</p>
    </div>
  );
};


export default Binary
