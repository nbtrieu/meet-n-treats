import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";

import { QUERY_ME } from "../../utils/queries";
import Login from "../../components/Login";

import Auth from '../../utils/auth';

export default function CommentForm(props) {
  const { postId } = props;

  const [formState, setFormState] = useState({
    postId: postId,
    commentAuthor: Auth.getUser().data.name,
    commentText: "",
  });

  const [addComment, { error, data }] = useMutation(ADD_COMMENT, {
    // Get comments from postsData stored in the browser cache
    update(cache, { data: { addComment } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        console.log('>>> logging posts with comments: ', posts);
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addComment, ...posts] },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Authenticate user:
  const { loading, data: meData } = useQuery(QUERY_ME);
  const me = meData?.me || []; 
  // console.log('me: ', me);

  if (me.length === 0) {
    return (
      <Login />
    )
  };

  const handleInputChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: { ...formState }
      });
      console.log(data);
      setFormState({
        postId: postId,
        commentAuthor: Auth.getUser().data.name,
        commentText: "",
      });

    } catch (error) {
      console.error('>>> handleSubmit error: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="display-inline">
        <div className="display-inline">
          <input
            type="text"
            placeholder="Add a comment..."
            name="commentText"
            value={formState.commentText}
            onChange={handleInputChange}
            style={{ border: 'none' }}
            className="negative-left-margin no-border text-lg light-background"
          />
        </div>
        <div className="display-inline">
          <button 
            type="submit" 
            className="btn btn-xsm btn-comment"
          >
            <img 
              src="https://res.cloudinary.com/dnwrm14k9/image/upload/v1675658604/send-4008_kgqwyo.png" 
              width="20px"
            ></img>
          </button>
        </div>
      </form>
    </div>
  )
}
