"use client"

import client from "@/services/apollo-client"
import { ApolloProvider } from "@apollo/client"

const ApolloCustomProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
export default ApolloCustomProvider