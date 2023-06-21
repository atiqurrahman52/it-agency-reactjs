import { useParams } from "react-router-dom";
import BlogDetailsBanner from "../components/blogDetails/BlogDetailsBanner";
import { latestPostData } from "../data/blog/latestPostData";
import BlogDescription from "../components/blogDetails/BlogDescription";
import Subscribe from "../components/share/Subscribe";
import RelatedPost from "../components/blogDetails/RelatedPost";

const BlogDetails = () => {
  const { id } = useParams();

  const singleLatestPost = latestPostData?.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <div>
      <BlogDetailsBanner data={singleLatestPost} />
      <BlogDescription />
      <RelatedPost />
      <Subscribe />
    </div>
  );
};

export default BlogDetails;
