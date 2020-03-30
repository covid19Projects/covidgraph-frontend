export function mapResultToGraph({ records }) {
  const nodes = new Set();
  const edges = new Set();

  if (records && records.length) {
    records.forEach(({ _fields }) => {
      _fields.forEach(({ segments }) => {
        segments.forEach(({ start: startNode, end: endNode }) => {
          const fromNode = {
            id: startNode.properties.name,
            type: startNode.labels[0],
            label: startNode.properties.name,
            group: startNode.properties.status,
            ...startNode.properties
          };

          const toNode = {
            id: endNode.properties.name,
            type: endNode.labels[0],
            label: endNode.properties.name,
            group: endNode.properties.status,
            ...endNode.properties
          };

          nodes.add(JSON.stringify(fromNode));
          nodes.add(JSON.stringify(toNode));
          edges.add(
            JSON.stringify({
              from: fromNode.id,
              to: toNode.id
            })
          );
        });
      });
    });
  }

  return {
    cases: Array.from(nodes).map(JSON.parse),
    relations: Array.from(edges).map(JSON.parse)
  };
}
