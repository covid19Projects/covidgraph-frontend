export function mapResultToGraph({ records }) {
  const nodes = new Set();
  const edges = new Set();

  records.forEach(({ _fields }) => {
    _fields.forEach(({ segments }) => {
      segments.forEach(({ start: startNode, end: endNode }) => {
        const fromNode = {
          id: startNode.properties.name,
          type: startNode.labels[0],
          label: startNode.properties.name,
          ...startNode.properties
        };

        const toNode = {
          id: endNode.properties.name,
          type: endNode.labels[0],
          label: endNode.properties.name,
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

  return {
    nodes: Array.from(nodes).map(JSON.parse),
    edges: Array.from(edges).map(JSON.parse)
  };
}
