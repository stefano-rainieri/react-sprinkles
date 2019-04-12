function formatUser(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'Joe',
    lastName: 'Fish',
    avatar: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_256/react.png',
};

const getGreetings = (user) => {
    if (user) {
        return (
            <h2 tabIndex="0">
                Hello, {formatUser(user)}!
                <br/><br/>
                <img
                    src={user.avatar}
                    alt="REACT"
                    title="React"
                />
            </h2>
        );
    }

    return (
        <h2>
            Hello, Stranger!
        </h2>
    );
};

ReactDOM.render(
    getGreetings(user),
    document.getElementById('greetings-container'),
);
