const cities = {
  kyiv: {
    rivne: 267,
    vinnytsia: 141,
    khmelnytskyi: 223,
  },
  vinnytsia: {
    khmelnytskyi: 120,
  },
  khmelnytskyi: {
    rivne: 199,
    ternopil: 112,
  },
  rivne: {
    ternopil: 159,
    lviv: 211,
  },
  ternopil: {
    lviv: 128,
  },
};

function findPath(graph, dest) {
  let costs = {};
  let parents = {};

  Object.keys(graph).forEach((nodeName) => {
    const node = graph[nodeName];
    const childrenNames = Object.keys(node);
    childrenNames.forEach((childrenName) => {
      const children = node[childrenName];
      if (!costs[childrenName]) {
        costs[childrenName] = Infinity;
        parents[childrenName] = nodeName;
      }

      const nodeCost = costs[nodeName] || 0;
      const cost = children + nodeCost;

      if (costs[childrenName] > cost) {
        costs[childrenName] = cost;
        parents[childrenName] = nodeName;
      }
    });
  });


  let parent = parents[dest];
  const path = [dest];
  while (parent) {
    path.push(parent);
    parent = parents[parent];
  }
  const pathText = path
    .map((item) => item.toUpperCase())
    .reverse()
    .join(' => ');

  console.log(pathText);
  console.log(costs[dest]);
}

findPath(cities, 'ternopil');
