setInterval(() => {
    const time = (
        <p>
            It's {new Date().toLocaleTimeString()}
        </p>
    );

    ReactDOM.render(
        time,
        document.getElementById('time-container'),
    )
}, 1000);
