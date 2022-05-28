'use strict';

//The graph should be represented as an adjacency list,
const LinkedList = require('../linked-list/index.js');
const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph{
  constructor(){
    this.adjacencyList = new LinkedList();
  }

  addVertex(vertex){
    vertex = new Vertex(vertex);
    this.adjacencyList.append(vertex);
  }
  addEdge(vertex1,vertex2,weight = 0){
    let node = this.adjacencyList.head;

    while(node){
      // console.log(node.value.value,"1111111111111111");
      // console.log(vertex1,"2222222222222222");
      if(node.value.value === vertex1){
        // console.log(node.value,"1111111111111112222221");
        node.value.edges.push(new Edge(vertex2,weight));
      }
      node = node.next;
    }
  }
  getVertices(){
    let node = this.adjacencyList.head;
    let vertexes = [];
    while(node){
      vertexes.push(node.value.value);
      node = node.next;
    }
    return vertexes;
  }
  getNeighbors(vertex){
    if(!this.adjacencyList.head) return null;
    let node = this.adjacencyList.head;
    while(node){
      if(node.value.value === vertex){
        return node.value.edges;
      }
      node = node.next;
    }
  }
  size(){
    let node = this.adjacencyList.head;
    let size = 0;
    while(node){
      size++;
      node = node.next;
    }
    return size;
  }
}
module.exports = Graph;
