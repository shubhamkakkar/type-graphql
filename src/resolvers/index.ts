import { User } from "../generated/graphql"

let users: User[] = [
    {
        id: '1',
        username: 'Robin Wieruch',
    },
    {
        id: '2',
        username: 'Dave Davids',
    },
];
const me = users[1];
export const resolvers = {
    Query: {
        users: (): User[] => users,
        // @ts-ignore
        user: (parent: any, { id }: { id: String }): User => users[id],
        me: (): User => me
    },
};