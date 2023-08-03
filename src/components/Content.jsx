import Post from "./Post";
import Tweet from "./Tweet";

function Content({ posts }) {
    const feed = posts.map((post) => {
        return (
            <div className="content-post">
                <Post
                    profile_image_src={post.profile_image_src} 
                    handle={post.handle} 
                    message={post.message} 
                    uploading_image={post.uploading_image} 
                    image_src={post.image_src} />
            </div>
        );
    });

    return (
        <div className="content">
            <Tweet profile_image_src={"./src/assets/images/default_profilepic.png"} />
            <br />
            {feed}
        </div>       
    );
}

export default Content;
