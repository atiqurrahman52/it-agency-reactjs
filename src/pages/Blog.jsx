import BlogBanner from "../components/blog/BlogBanner";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import LatestPost from "../components/blog/LatestPost";
import Subscribe from "../components/share/Subscribe";
// import Tab from "../components/blog/Tab";

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <FeaturedBlog />
            {/* <Tab /> */}
            <LatestPost />
            <Subscribe />
        </div>
    );
};

export default Blog;