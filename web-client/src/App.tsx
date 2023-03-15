import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Wallet from './components/Wallet/Wallet';
import { mockWalletProps } from './components/Wallet/Wallet.mocks';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <div className="relative w-[430px] h-[932px] overflow-hidden bg-slate-200">
                    <Wallet {...mockWalletProps.base} />
                </div>
            </ApolloProvider>
        </>
    );
}

export default App;
