import { User, Message } from "../generated/graphql"

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
let messages: Message[] = [
    {
        id: '1',
        text: 'Hello World',
    },
    {
        id: '2',
        text: 'By World',
    }
]
const me = users[1];
export const resolvers = {
    Query: {
        users: (): User[] => users,
        // @ts-ignore
        user: (parent: any, { id }: { id: String }): User => users[id],
        me: (): User => me,
        messages: (): Message[] => messages,
        // @ts-ignore
        message: (parent: any, { id }: { id: String }): Message => messages[id]
    },
};