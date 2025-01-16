import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// GraphQL Queries
const HELLO_QUERY = gql`
  query {
    hello
  }
`;

const GREET_QUERY = gql`
  query ($name: String!) {
    greet(name: $name)
  }
`;

const RANDOM_NUMBER_QUERY = gql`
  query {
    randomNumber
  }
`;

const USER_QUERY = gql`
  query ($id: Int!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const ROLL_DICE_QUERY = gql`
  query ($numDice: Int!, $numSides: Int) {
    rollDice(numDice: $numDice, numSides: $numSides)
  }
`;

// Components for each query
const Hello = () => {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Hello Message: {data.hello}</p>;
};

const Greet = () => {
  const { loading, error, data } = useQuery(GREET_QUERY, {
    variables: { name: "Alice" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Greeting: {data.greet}</p>;
};

const RandomNumber = () => {
  const { loading, error, data } = useQuery(RANDOM_NUMBER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Random Number: {data.randomNumber}</p>;
};

const User = () => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { id: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>User Info</h3>
      <p>ID: {data.user.id}</p>
      <p>Name: {data.user.name}</p>
      <p>Email: {data.user.email}</p>
    </div>
  );
};

const RollDice = () => {
  const { loading, error, data } = useQuery(ROLL_DICE_QUERY, {
    variables: { numDice: 2, numSides: 6 },
  });

  if (loading) return <p>Rolling Dice...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Dice Roll</h3>
      <p>Result: {data.rollDice.join(", ")}</p>
    </div>
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <h1>GraphQL Queries</h1>
        <Hello />
        <Greet />
        <RandomNumber />
        <User />
        <RollDice />
      </div>
    </ApolloProvider>
  );
}

export default App;
