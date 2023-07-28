import Post from "./Post";

function Content({ posts }) {
    const feed = posts.map((post) => {
        return (
            <Post
                profile_image_src={post.profile_image_src} 
                handle={post.handle} 
                message={post.message} 
                uploading_image={post.uploading_image} 
                image_src={post.image_src} />
        );
    });

    return (
        <div>
            {feed}
        </div>       
    );
}

export default Content;