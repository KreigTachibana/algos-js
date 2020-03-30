const cities = {
  kyiv: ['rivne', 'vinnytsia', 'khmelnytskyi'],
  vinnytsia: ['khmelnytskyi'],
  khmelnytskyi: ['rivne', 'ternopil'],
  rivne: ['ternopil', 'lviv'],
  ternopil: ['lviv'],
};

function bfs (graph, search) {
  const queue = Object.keys(graph);
  const checked = {};
  
  while (queue.length) {
    const item = queue.shift();
    if (!checked[item]) {
      checked[item] = true;
      const childrens = graph[item] || [];
      childrens.forEach((children) => queue.push(children));
      if (item === search) {
        console.log('Found', search);
        return;
      }
    }
  }
  console.log('Not found');
}

bfs(cities, 'lviv')
