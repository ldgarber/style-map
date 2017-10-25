class CollectionGrid extends React.Component {
  render() {
    var collection = this.props.collection; 
    var collectionList = collection.map(function(item){
      return <div>{item}</div>;  
    })
    return(
      <div>{collectionList}</div> 
        );  
  }
}
