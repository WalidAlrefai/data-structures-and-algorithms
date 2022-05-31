
// Write a function called business trip Arguments: graph, array of city names Return: cost or null

function businessTrip(graph, cities) {
  let cost = 0;
  for (let i = 0; i < cities.length; i++) {
    let neighbors = graph.getNeighbors(cities[i]);
    for (let j = 0; j < neighbors.length; j++) {
      if (neighbors[j].vertex === cities[i + 1]) {
        cost += neighbors[j].weight;
      }
    }
  }
  if (cost === 0) {
    return null;
  }
  return cost;
}
module.exports = businessTrip;

