let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
        messageIds: [1],
    },
    2: {
        id: '2',
        username: 'Dave Davids',
        messageIds: [2],
    },
};

const me = users[1];

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};

const resolvers = {
    Query: {
        users: () => {
            return Object.values(users);
        },
        user: (parent, { id }) => {
            return users[id];
        },
        me: (parent, args, { me }) => {
            return me;
        },
        messages: () => {
            return Object.values(messages);
        },
        message: (parent, { id }) => {
            return messages[id];
        },
    },

    User: {
        messages: user => {
            return Object.values(messages).filter(
                message => message.userId === user.id,
            );
        },
    },

    Message: {
        user: message => {
            return users[message.userId];
        },
    },
};