export const fetchData = async () => {
    const response = await fetch('https://api.noroff.no/data');
    const data = await response.json();
    return data;
  };