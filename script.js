const loadData = async() => {
    const url = `./Resource_List_Data.json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};
loadData();