class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return (
                <p>
                    You like React.
                </p>
            );
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('like-button-container'),
);
