import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rgggjg12kb01z6e2ei6ci1/master',
    cache: new InMemoryCache()
})