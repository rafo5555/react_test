import React from 'react';
import {connect} from 'react-redux';
class Post extends React.Component{
    handleClick(){
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        const post = this.props.post ? (
            <div className="post"> 
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick.bind(this)}>Delete Post</button>
                </div>
            </div>
        )
         : (<div className="center">Loading Post...</div>)
        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.postId;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatcToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({type: 'DELETE_POST', id: id});
        }
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(Post);