const parent=React.createElement("div", {id:"parent"},
[React.createElement("div", {id:"child1"}, 
[React.createElement("h1", {}, "this is the nested loop "),
React.createElement("h2", {}, "this is the heading loop ")]),
React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "this is the nested loop "),
React.createElement("h2", {}, "this is the heading loop ")]) ]);






const heading=React.createElement("h1", {id:"heading"}, "hello react ppl");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);