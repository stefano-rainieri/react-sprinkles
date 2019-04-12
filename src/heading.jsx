class Heading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.weight) {
            case 1:
                return (
                    <h1>
                        {this.props.title}
                    </h1>
                );

            case 2:
                return (
                    <h2>
                        {this.props.title}
                    </h2>
                );
            case 3:
                return (
                    <h3>
                        {this.props.title}
                    </h3>
                );
            case 4:
                return (
                    <h4>
                        {this.props.title}
                    </h4>
                );
            case 5:
                return (
                    <h5>
                        {this.props.title}
                    </h5>
                );
            case 6:
                return (
                    <h6>
                        {this.props.title}
                    </h6>
                );

            default:
                throw new Error('Unsupported weight');
        }
    }
}

ReactDOM.render(
    <Heading weight={1} title={"Sprinkles of React"}/>,
    document.getElementById('heading-container')
);
