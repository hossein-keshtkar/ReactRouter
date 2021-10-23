const PostItem = (props) => {
  console.log(props.match.params);
  return <>{props.match.params.id}</>;
};
export default PostItem;
