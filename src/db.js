const neo4j = require("neo4j-driver");

async function getSession() {
  try {
    const driver = neo4j.driver(
      "bolt://localhost:7687/neo4j",
      neo4j.auth.basic("neo4j", "1234")
    );
    return {
      session: driver.session(),
      driver
    };
  } catch (e) {
    throw e;
  }
}

export async function runCypherQuery(command) {
  const { session } = await getSession();
  try {
    const result = await session.run(command);
    console.log(result);
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    return node;
  } finally {
    await session.close();
  }
}

export const createClusterCommand = name => `
  CREATE (a:Cluster {name: "${name}"}) RETURN a
`;

export const createPersonWithExistingCluster = async (
  clusterName,
  { name, age, status, location, notes }
) => {
  const command = `
    MATCH(c:Cluster) WHERE c.name="${clusterName}" CREATE (newPerson:Person{name:"${name}", age:"${age}", status:"${status}", location:"${location}", Notes:"${notes}"}) <-[:BELONGS_TO]- (c) RETURN newPerson
  `;
  return runCypherQuery(command);
};

export const createPersonRelatedToAnotherPerson = async (
  existingPerson,
  { name, age, status, location, notes }
) => {
  const command = `
    MATCH(p:Person) WHERE p.name="${existingPerson.name}" CREATE (newPerson:Person{name:"${name}", age:"${age}", status:"${status}", location:"${location}", Notes:"${notes}"}) <-[:IS_RELATED_TO]- (p) RETURN newPerson
  `;
  return runCypherQuery(command);
};
