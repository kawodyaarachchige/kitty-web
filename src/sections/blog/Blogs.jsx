import '@fortawesome/fontawesome-free/css/all.min.css';
import blogImg2 from '../../assets/blog3.jpeg';
import blogImg from '../../assets/blog.jpeg';
import blogImg1 from '../../assets/blog2.jpeg';

const Blog = () => {
    const posts = [
        {
            title: "Understanding React Hooks",
            date: "11/1/19",
            category: "Technology",
            link: "#",
            image: blogImg,
        },
        {
            title: "CSS Grid vs Flexbox",
            date: "11/2/19",
            category: "Computer Science",
            link: "#",
            image: blogImg1,
        },
        {
            title: "Modern JavaScript Features",
            date: "11/3/19",
            category: "Design",
            link: "#",
            image: blogImg2,
        }
    ];

    return (
        <section className="container my-12 mx-auto px-4 md:px-12">
            <h1 className="text-pink-600 text-4xl md:text-5xl text-center mb-12 font-bold tracking-wider">
                Latest Posts
            </h1>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {posts.map((post, index) => (
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn">
                            <a href={post.link}>
                                <img alt={post.title} className="block h-auto w-full transition-transform duration-300 ease-in-out hover:scale-110" src={post.image} />
                            </a>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href={post.link}>
                                        {post.title}
                                    </a>
                                </h1>
                                <p className="text-gray-600 text-sm">
                                    {post.date}
                                </p>
                            </header>
                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-black" href="#">
                                    <img
                                        alt={post.category}
                                        className="block rounded-full w-16 h-16 object-cover"
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/434f30b8-8dd3-48e9-bcc8-83948f106b69/dgt3wzv-d5695f9d-f78e-4e31-aa92-cc662d3d2260.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzNGYzMGI4LThkZDMtNDhlOS1iY2M4LTgzOTQ4ZjEwNmI2OVwvZGd0M3d6di1kNTY5NWY5ZC1mNzhlLTRlMzEtYWE5Mi1jYzY2MmQzZDIyNjAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UooXuiNbJarSS9snUnljaWmt9rqjvikOUSv9s3kdZ3I"
                                    />
                                    <p className="ml-2 text-sm">
                                        {post.category}
                                    </p>
                                </a>
                                <a className="no-underline text-black hover:text-red-600" href="#">
                                    <span className="hidden">Like</span>
                                    <i className="fas fa-heart"></i>
                                </a>
                            </footer>
                        </article>
                    </div>
                ))}
                <div className="w-full flex justify-center mt-8">
                    <button
                        className="border border-pink-600 text-pink-400 px-6 py-3 rounded-full hover:bg-pink-300 hover:text-white transition-colors duration-300">
                        Show More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
