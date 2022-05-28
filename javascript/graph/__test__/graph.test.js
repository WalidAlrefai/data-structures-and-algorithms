'use strict';
const { it } = require('eslint/lib/rule-tester/rule-tester');
const Graph = require('../graph');
// testing addVertex function
describe('Graph', () => {
  it('addVertex', () => {
    const graph = new Graph();
    graph.addVertex('A');
    expect(graph.adjacencyList.head.value.value).toBe('A');
  });
  // testing addEdge function
  it('addEdge', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    console.log(graph.adjacencyList.head.value.edges[0].vertex);
    expect(graph.adjacencyList.head.value.edges[0].vertex).toBe('B');
  });
  // testing getVertexes function
  it('getVertexes', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.getVertexes()).toEqual(['A', 'B', 'C']);
  });
  // testing getNeighbors function
  it('getNeighbors', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.getNeighbors('A')).toEqual([
      { vertex: 'B', weight: 0 },
      { vertex: 'C', weight: 0 },
    ]);
  });
  // testing size function
  it('size', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.size()).toBe(3);
  });
  //  graph with only one node and edge can be properly returned
  it('graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addEdge('A', 'B');
    expect(graph.getVertices()).toEqual(['A']);
    expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 0 }]);
  });

  // An empty graph properly returns null
  it('empty graph', () => {
    const graph = new Graph();
    expect(graph.getNeighbors('A')).toBe(null);
  });
});
