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
    var node = null;
    if (singleRecord)
    {
      node = singleRecord.get(0);
    }

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
  person
) => {
  const command = `
    MATCH(c:Cluster) WHERE c.name="${clusterName}" CREATE (newPerson:Person{name:"${person.name}",age:"${person.age}",status:"${person.status}",location:"${person.location}", Notes:"${person.notes}"}) <-[:BELONGS_TO]- (c) RETURN newPerson
  `;
  return runCypherQuery(command);
};

export const createPersonRelatedToAnotherPerson = async (
  existingPerson,
  person
) => {
  const command = `
    MATCH(p:Person) WHERE p.name="${existingPerson.name}" CREATE (newPerson:Person{name:"${person.name}",age:"${person.age}",status:"${person.status}",location:"${person.location}", Notes:"${person.notes}"}) <-[:IS_RELATED_TO]- (p) RETURN newPerson
  `;
  return runCypherQuery(command);
};

export const createPersonAlongWithNewCluster = async (
  person,
  cluster) => {
    const command = `
      CREATE p = (newPerson:Person{name:"${person.name}",age:"${person.age}",status:"${person.status}",location:"${person.location}", Notes:"${person.notes}"}) <-[:HAS_A]- (c:Cluster{name:"${cluster.name}"}) RETURN p
      `;
    return runCypherQuery(command);
}

export const editAPerson = async (
  person
  ) => {
    const command = `
      MATCH(p:Person{name:"${person.name}"}) SET p.age="${person.age}", p.status="${person.status}", p.location="${person.location}" p.Notes="${person.notes}" RETURN p
      `;
    return runCypherQuery(command);
}

export const deleteAPerson = async (
  person
  ) => {
    const command = `
      MATCH(p:Person{name:"${person.name}"}) DETACH DELETE p
      `;
    return runCypherQuery(command);
}

export const getClusterData = async (
  clusterName
  ) => {
    const command = `
      MATCH p = (a {name:"${clusterName}"})-[*]->(b) RETURN p
      `;
    return runCypherQuery(command);
}