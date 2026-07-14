async function getData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            const data = await res.json();
            console.log("Inside:", data);
            return data;
}


let x = getData();
console.log("Outside:", x);