import { connect } from 'react-redux'
import React, { Component } from "react"
import { bindActionCreators } from "redux"

import * as postActions from "../Store/Posts/actions"
import * as postSelectors from "../Store/Posts/selectors"

import PostItem from "../Components/PostItem"

class PostsPage extends Component {

    componentDidMount(){
        this.props.postActions.fetchPosts()
    }

    showPost(post){
        alert(post.body)
    }

    render(){
        return(
            <div>
                {
                    this.props.postsIsFetched ?(
                        <div>
                            {this.props.posts.map((post, i) => (
                                <PostItem key={i} 
                                    post={post}
                                    clickAction={this.showPost}/>
                            ))}
                        </div>
                    ):(
                        <h3>loading</h3>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        postsIsFetched: postSelectors.getPostStatus(state),
        posts: postSelectors.getPosts(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)