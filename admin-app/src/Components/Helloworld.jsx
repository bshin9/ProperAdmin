var HelloWorldComponent = React.createClass({
    getInitialState : function(){
        return {
            serverMessage : ''
        };
    },
    componentDidMount : function(){
        //Fetch data from server
        $.get('/home/getmessage', function(result){
            if(this.isMounted){
                this.setState({
                    serverMessage : result
                });
            }
        }.bind(this));
    },
    render : function(){
        return (<h1>{this.state.serverMessage}</h1>);
    }
    ReactDOM.render(<HelloWorldComponent/>,document.getElementById("helloworldcontainer"));
});